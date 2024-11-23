import { StyleSheet, Text, View, Image, AccessibilityInfo, TouchableOpacity } from 'react-native'
import React, { useRef, useEffect } from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Animated, { useAnimatedStyle, useDerivedValue, useSharedValue, withSpring, withTiming } from 'react-native-reanimated';

const Tab = createBottomTabNavigator();

import Home from '../Home/Home';
import Cart from '../Home/Cart';
import Find from '../Home/Find';
import Infor from '../Home/Infor';
import Shoes from '../Product/Shoes';

const StackProfile = createNativeStackNavigator();



//profile, editprofile, QaA
const ProfileNavigation = () => {
    return (
        <StackProfile.Navigator initialRouteName='Infor'>
            <StackProfile.Screen
                name="Infor"
                component={Infor}
                options={{ headerShown: false }}
            />
        </StackProfile.Navigator>
    )
}
const TabHome = () => {
    return (
        <Tab.Navigator initialRouteName='Home'
            screenOptions={({ route }) => ({
                tabBarLabel: () => null, // Ẩn text
                tabBarStyle: styles.tab,
                tabBarIcon: ({ focused }) => {
                    let iconSource;
                    const translateY = useSharedValue(0);

                    const animatedStyle = useAnimatedStyle(() => {
                        return {
                            transform: [{ translateY: withTiming(translateY.value, { duration: 500 }) }],
                        };
                    });

                    useEffect(() => {
                        translateY.value = withTiming(focused ? -20 : 0, { duration: 500 });
                    }, [focused]);
                    if (route.name === 'Home') {
                        iconSource = focused
                            ? require('../../img/homeb.png')
                            : require('../../img/homeb.png');
                    } else if (route.name === 'Find') {
                        iconSource = focused
                            ? require('../../img/searchb.png')
                            : require('../../img/searchb.png');
                    } else if (route.name === 'Cart') {
                        iconSource = focused
                            ? require('../../img/cartb.png')
                            : require('../../img/cartb.png');
                    } else if (route.name === 'ProfileNavigation') {
                        iconSource = focused
                            ? require('../../img/personb.png')
                            : require('../../img/personb.png');
                    }
                    return (
                        <>
                            <Animated.View
                                style={[animatedStyle, focused ? styles.btn : null]}
                            >
                            <Image
                                source={iconSource} style={{ width: 20, height: 20 }}
                            />
                            </Animated.View>
                        </>
                    )
                },
            })}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{ headerShown: false }}
            />
            <Tab.Screen
                name="Find"
                component={Find}
                options={{ headerShown: false }}
            />
            <Tab.Screen
                name="Cart"
                component={Cart}
                options={{ headerShown: false }}
            />
            <Tab.Screen
                name="ProfileNavigation"
                component={ProfileNavigation}
                options={{ headerShown: false }}
            />
        </Tab.Navigator>
    )
}

const StackHome = createNativeStackNavigator();
import Detail from '../Product/Detail';
import ChangeInformation from '../Home/ChangeInformation';
const ProductNavigation = () => {
    return (
        <StackHome.Navigator initialRouteName='TabHome'>
            <StackHome.Screen
                name="TabHome"
                component={TabHome}
                options={{ headerShown: false }}
            />
            <StackHome.Screen
                name="Detail"
                component={Detail}
                options={{ headerShown: false }}
            />
            <StackHome.Screen
                name="Shoes"
                component={Shoes}
                options={{ headerShown: false }}
            />
            <StackHome.Screen
                name="ChangeInfor"
                component={ChangeInformation}
                options={{ headerShown: false }}
            />
        </StackHome.Navigator>
    )
}
export default ProductNavigation

const styles = StyleSheet.create({
    tab: {
        backgroundColor: 'white',
        height: 50,
        borderColor: 'black',
        borderWidth: 1
    },
    btn: {
        backgroundColor: 'white',
        width: 50,
        height: 50,
        borderRadius: 25,
        borderWidth: 5,
        borderColor: 'black',
        justifyContent: 'center',
        alignItems: 'center'
    }
})