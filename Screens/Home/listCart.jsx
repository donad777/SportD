import { Image, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'
import CartS from '../Styles/CartS'
import { changeQuantity, removeItem } from '../rtk/Reducer'
import { useDispatch } from 'react-redux'
const listCart = (props) => {
    const { data } = props
    const dispatch = useDispatch()
    const onChangeItem = (id, change) => {
        dispatch(changeQuantity({
            _id: id,
            quantity: change
        }))
    }

    return (
        <View style={CartS.listContainer}>
            <View>
                <Image
                    style={CartS.imageItems}
                    source={{ uri: data.image }}
                />
            </View>
            <View>
                <Text style={[CartS.font, CartS.textBlack, CartS.textH1]}>{data.name}</Text>
                <Text style={[CartS.textBlack, CartS.font]}>Price:  <Text style={[CartS.font, { color: 'red' }]}> {data.price}</Text></Text>
                <Text style={[CartS.font, CartS.textBlack]}>Quantity:  {data.quantity}</Text>
                <View style={CartS.boxpay}>
                    <TouchableOpacity
                        style={CartS.btn}
                        onPress={() => onChangeItem(data._id, 1)}
                    >
                        <Text style={CartS.textWhite}>+</Text>
                    </TouchableOpacity>
                    <Text style={[CartS.textBlack, CartS.font, CartS.quantity]}>{data.quantity}</Text>
                    <TouchableOpacity
                        style={CartS.btn}
                        onPress={() => onChangeItem(data._id, -1)}
                    >
                        <Text style={CartS.textWhite}>-</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={CartS.btn}
                    onPress={() => dispatch(removeItem(data._id))}
                >
                    <Text style={CartS.textWhite}>Delete</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default listCart

