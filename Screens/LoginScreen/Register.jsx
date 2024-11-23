import { View, StyleSheet, Text, ImageBackground, Image, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import RegisterS from '../Styles/RegisterS'
import CustomInput from '../Custom/CustomInput'
import CustomBtn from '../Custom/CustomBtn'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { register } from '../rtk/API'
const Register = (props) => {
    const { navigation } = props
    const dispatch = useDispatch()
    const [userName, setUserName] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [password, setPassword] = useState('')
    const [rePass, setRePass] = useState('')

    // () => navigation.navigate('Login')
    const check = () => {
        if (userName == '' || phoneNumber == '' || password == '' || rePass == '') {
            Alert.alert("Thông báo", "Vui lòng điền đủ thông tin")
        } else if (rePass != password) {
            Alert.alert("Thông báo", "Vui lòng nhập RePass trùng khớp password")
        } else {
            dispatch(register({
                name: userName,
                password: password,
                address: '',
                phonenumber: phoneNumber
            }))
            Alert.alert("Thông báo", "Đăng kí thành công")
            navigation.navigate('Login')
        }
    }
    return (
        <ImageBackground
            style={RegisterS.background}
            source={require('../../img/background.jpg')}
        >
            <View style={RegisterS.containerAll}>
                <View style={RegisterS.container}>
                    <View style={RegisterS.boxT}>
                        <Text style={RegisterS.textL}>Register</Text>
                        <View style={RegisterS.boxT1}>
                            <View style={RegisterS.boxI}>
                                <Image style={{ width: 20, height: 20 }} source={require('../../img/person.png')} />
                            </View>
                            <View>
                                <CustomInput
                                    placeholder="Username"
                                    onChangeText={(text) => setUserName(text)}
                                />
                            </View>
                        </View>
                        <View style={RegisterS.boxT1}>
                            <View style={RegisterS.boxI}>
                                <Image style={{ width: 20, height: 20 }} source={require('../../img/Phone.png')} />
                            </View>
                            <View>
                                <CustomInput
                                    placeholder="Phone Number"
                                    onChangeText={(text) => setPhoneNumber(text)}
                                />
                            </View>
                        </View>
                        <View style={RegisterS.boxT1}>
                            <View style={RegisterS.boxI}>
                                <Image style={{ width: 15, height: 20 }} source={require('../../img/Lock.png')} />
                            </View>
                            <View>
                                <CustomInput
                                    placeholder="Password"
                                    secureTextEntry={true}
                                    onChangeText={(text) => setPassword(text)}
                                />
                            </View>
                        </View>
                        <View style={RegisterS.boxT1}>
                            <View style={RegisterS.boxI}>
                                <Image style={{ width: 15, height: 20 }} source={require('../../img/Lock.png')} />
                            </View>
                            <View>
                                <CustomInput
                                    placeholder="Re-Pass"
                                    secureTextEntry={true}
                                    onChangeText={(text) => setRePass(text)}
                                />
                            </View>
                        </View>
                        <CustomBtn
                            text="REGISTER"
                            onPress={check}
                        />
                        <View style={RegisterS.line1}>
                            <Image style={RegisterS.gg}
                                source={require('./../../img/gg.png')}
                            />
                            <Image style={RegisterS.gg}
                                source={require('./../../img/fb.jpg')}
                            />
                        </View>
                        <View style={RegisterS.line}>
                            <Text style={RegisterS.textColor}>You have an account? </Text>
                            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                                <Text style={[RegisterS.textColor, RegisterS.textBold]}>Login</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </ImageBackground>
    )
}
export default Register
