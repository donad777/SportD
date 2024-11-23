import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import DetailS from '../Styles/DetailS'
import { DebugInstructions } from 'react-native/Libraries/NewAppScreen'
import CustomBtnSize from '../Custom/CustomBtnSize'
import { useSelector, useDispatch } from 'react-redux'
import { addItemToCart } from '../rtk/Reducer'
const Detail = (props) => {
  const cart = useSelector(state => state.app.cart)
  const dispatch = useDispatch()
  const { navigation, route } = props
  const { dataS } = route.params || {}

  const sizeS = [
    { size: 41 },
    { size: 42 },
    { size: 43 },
    { size: 44 },
    { size: 45 },
  ]

  const sizeC = [
    { size: "XS" },
    { size: "M" },
    { size: "L" },
    { size: "XL" },
    { size: "XXL" },
  ]
  const sizeOptions = dataS.role === 's' ? sizeS : sizeC
  const addToCart = () => {
    const { _id, name, price, image } = dataS
    dispatch(addItemToCart({ _id, name, price, image, quantity: 1 }))
  }

  console.log(cart)

  return (
    <View style={DetailS.container}>
      <View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 100 }}
        >
          <View>
            <Image
              style={DetailS.image}
              source={{ uri: dataS.image }}
            />
            <View style={DetailS.header}>
              <View>
                <TouchableOpacity onPress={() => navigation.navigate('Shoes')}>
                  <Image
                    source={require('./../../img/left.png')}
                  />
                </TouchableOpacity>
              </View>
              <View style={DetailS.heart}>
                <Image
                  source={require('./../../img/heart.png')}
                />
              </View>
            </View>
            <View style={DetailS.box}>
              <Text style={[DetailS.textW, DetailS.textB]}>đ <Text style={DetailS.price}>{dataS.price}</Text> VNĐ</Text>
            </View>
          </View>

          <View style={DetailS.content}>
            <Text style={[DetailS.textB, DetailS.texth1, DetailS.textblack]}>{dataS.name}</Text>
            <View style={DetailS.rate}>
              <Text style={DetailS.textblack}>Rating: {dataS.rate} <Image source={require('../../img/star.png')} /></Text>
            </View>

            {/* size */}
            <View style={DetailS.boxS}>
              <Text style={[DetailS.textblack, { fontSize: 17 }]}>Size: </Text>
              <View style={DetailS.size}>
                {sizeOptions.map((isize, index) => (
                  <CustomBtnSize
                    key={index}
                    size={isize.size}
                  />
                ))}
              </View>
            </View>
            <View>
              <Text style={[DetailS.textblack, DetailS.textB, { fontSize: 20, marginBottom: 20 }]}>Desription:</Text>
              <Text>
                {dataS.description}
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
      <View style={DetailS.cart}>
        <View style={DetailS.add}>
          <TouchableOpacity style={DetailS.acart} onPress={() => addToCart()}>
            <Text style={DetailS.textW}>Add to cart</Text>
          </TouchableOpacity>
        </View>
        <View style={DetailS.buy}>
          <TouchableOpacity style={DetailS.bnow}>
            <Text style={DetailS.textW}>Buy now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default Detail

const styles = StyleSheet.create({})