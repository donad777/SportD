import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import LoginS from '../Styles/LoginS'
const CustomInput = (props) => {
    const { placeholder, onChangeText,secureTextEntry } = props
    return (
        <View>
            <TextInput
                style={LoginS.input}
                placeholder={placeholder}
                onChangeText={onChangeText}
                placeholderTextColor="#FFFCFC"
                secureTextEntry = {secureTextEntry}
            />
        </View>
    )
}

export default CustomInput
