import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView, FlatList, Alert } from 'react-native'
import React from 'react'
import CartS from '../Styles/CartS'
import { useSelector, useDispatch } from 'react-redux'
import ListCart from './listCart'
import { clearCart } from '../rtk/Reducer'
const Cart = (props) => {
  const { navigation } = props
  const cart = useSelector(state => state.app.cart)
  const dispatch = useDispatch()
  const deleteCart = () => {
    dispatch(clearCart())
  }
  const pay = () => {
    Alert.alert("", "Thanh toán thành công")
    dispatch(clearCart())

  }

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <View style={CartS.container}>
      <View style={CartS.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Image
            source={require('../../img/left.png')}
          />
        </TouchableOpacity>
        <Text style={[CartS.textBlack, CartS.textH1, CartS.font, { marginLeft: 20 }]}>
          Cart
        </Text>
        <View>
          <TouchableOpacity onPress={deleteCart}>
            <Image source={require('../../img/Bin.png')} />
          </TouchableOpacity>
        </View>
      </View>
      <FlatList
        data={cart}
        renderItem={({ item }) => <ListCart data={item} />}
        keyExtractor={(item) => item._id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      />
      <View style={CartS.btnPay}>
        <Text style={[CartS.paying, CartS.font, CartS.textBlack]}>Total Price: {totalPrice}</Text>
        <TouchableOpacity style={CartS.pay} onPress={pay}>
          <Text style={[CartS.textWhite, CartS.font]}>Pay Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Cart

const styles = StyleSheet.create({})