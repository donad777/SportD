import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import DetailS from '../Styles/DetailS'
const CustomBtnSize = (props) => {
    const { size } = props
    return (
        <View>
            <TouchableOpacity style={DetailS.button}>
                <Text style={DetailS.textW}>{size}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default CustomBtnSize

const styles = StyleSheet.create({})