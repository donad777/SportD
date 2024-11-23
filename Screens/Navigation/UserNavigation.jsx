import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Login from './../LoginScreen/Login'
import Register from './../LoginScreen/Register'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductNavigation from './ProductNavigation';
import Home from '../Home/Home';
const Stack = createNativeStackNavigator();
const UserNavigation = () => {
    return (
        <Stack.Navigator initialRouteName='Login'>
            <Stack.Screen
                name="Login"
                component={Login}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Register"
                component={Register}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="ProductNavigation"
                component={ProductNavigation}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    )
}

export default UserNavigation
