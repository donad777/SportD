import { Alert, Button, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import LoginS from '../Styles/LoginS'
import CustomInput from '../Custom/CustomInput'
import CustomBtn from '../Custom/CustomBtn'
import { useDispatch } from 'react-redux'
import { login } from '../rtk/API'
const Login = (props) => {
    const { navigation } = props
    const dispatch = useDispatch()
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [sPassword, setSPassword] = useState(true)

    const checkLogin = () => {
        if (userName == '' || password == '') {
            Alert.alert("Thông báo", "Vui lòng điền đủ thông tin")
        } else {
            dispatch(login({
                name: userName,
                password: password
            }))
        }
    }
    return (
        <ImageBackground
            style={LoginS.background}
            source={require('../../img/background.jpg')}
        >
            <View style={LoginS.containerAll}>
                <View style={LoginS.container}>
                    <View>
                        <Text style={LoginS.textL}>Login</Text>
                        <Text style={LoginS.texth2}>Wellcome to my shop</Text>
                        <View style={LoginS.boxT}>
                            <View style={LoginS.boxI}>
                                <Image style={{ width: 20, height: 20 }} source={require('../../img/person.png')} />
                            </View>
                            <View>
                                <CustomInput
                                    placeholder='Username'
                                    onChangeText={(text) => setUserName(text)}
                                />
                            </View>
                        </View>
                        <View style={LoginS.boxT}>
                            <View style={LoginS.boxI}>
                                <Image style={{ width: 15, height: 20 }} source={require('../../img/Lock.png')} />
                            </View>
                            <View>
                                <CustomInput
                                    placeholder='Password'
                                    onChangeText={(text) => setPassword(text)}
                                    secureTextEntry={sPassword}
                                />
                            </View>
                        </View>
                        <CustomBtn
                            onPress={checkLogin}
                            text="LOGIN"
                        />
                        <Text style={{ color: 'white', marginTop: 5 }}>Forgot password? </Text>
                        <View style={LoginS.line}>
                            <Image style={LoginS.gg}
                                source={require('./../../img/gg.png')}
                            />
                            <Image style={LoginS.gg}
                                source={require('./../../img/fb.jpg')}
                            />
                        </View>
                        <View style={LoginS.line}>
                            <View style={LoginS.lineblack}></View>
                            <Text style={[{ color: 'white' }, LoginS.textBold]}> Or </Text>
                            <View style={LoginS.lineblack}></View>
                        </View>
                        <CustomBtn
                            onPress={() => navigation.navigate('Register')}
                            text="CREATE AN ACCOUNT"
                        />
                    </View>
                </View>
            </View>
        </ImageBackground>
    )
}
export default Login
