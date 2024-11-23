import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import ShoesS from '../Styles/ShoesS'
import S from './S'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../rtk/API'
const Shoes = (props) => {
  const { navigation, route } = props
  const { dataS } = route.params || {}
  const dispatch = useDispatch()
  const [products, setProducts] = useState([])

  useEffect(() => {
    dispatch(getProducts(dataS._id))
      .unwrap()
      .then(data => {
        console.log('Products Data:', data); // Kiểm tra dữ liệu sản phẩm
        setProducts(data);
      })
      .catch(error => { console.log('Error:', error) });
  }, []);
  return (
    <View style={ShoesS.container}>
      <View style={ShoesS.boxall}>
        <View style={ShoesS.box1}>
          <TouchableOpacity onPress={() => { navigation.navigate('Home') }}>
            <Image
              source={require('../../img/left.png')}
            />
          </TouchableOpacity>
          <Text style={[ShoesS.textBlack, ShoesS.font, ShoesS.textH1, { marginLeft: 20 }]}>Products</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
          <Image
            source={require('../../img/cartb.png')}
          />
        </TouchableOpacity>
      </View>
      <View style={{ alignItems: 'center' }}>
        <FlatList
          data={products}
          renderItem={({ item }) => <S dataS={item} />}
          keyExtractor={(item) => item._id}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 80 }}
        />
      </View>

    </View>
  )
}

export default Shoes

const styles = StyleSheet.create({})