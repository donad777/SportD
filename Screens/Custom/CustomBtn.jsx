import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import LoginS from '../Styles/LoginS'
const CustomBtn = (props) => {
    const { text, onPress } = props
    return (
        <View>
            <TouchableOpacity style={LoginS.btn} onPress={onPress}>
                <Text style={[LoginS.textColor, LoginS.font]}>{text}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default CustomBtn
