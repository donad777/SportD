import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import ShoesS from '../Styles/ShoesS'
import { useNavigation } from '@react-navigation/native'
const S = (props) => {
    const navigation = useNavigation()
    const { dataS } = props
    return (
        <View style={[ShoesS.list, ShoesS.ele]}>
            <View>
                <Image
                    style={ShoesS.image}
                    source={{ uri: dataS.image }}
                />
                <View>
                    <Image style = {ShoesS.sale} source={require('../../img/suppersale.jpg')}/>
                </View>
            </View>

            <View style={ShoesS.content}>
                <Text style={ShoesS.title}  numberOfLines={1} ellipsizeMode="tail">{dataS.name}</Text>
                <Text>Price: {dataS.price}</Text>
                <View style={ShoesS.boxQ}>
                    <View style={ShoesS.rate}>
                        <Image style={ShoesS.star} source={require("../../img/star.png")} />
                        <Text>{dataS.rate}</Text>
                    </View>
                    <View>
                        <Text style={ShoesS.quantity}>Quantity: {dataS.quantity}</Text>
                    </View>
                </View>

            </View>
            <View style={ShoesS.boxbtn}>
                <TouchableOpacity style={ShoesS.button} onPress={() => navigation.navigate('Detail', { dataS })}>
                    <Text style={[ShoesS.textWhite, { textAlign: 'center' }]}>
                        Add to cart
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default S
