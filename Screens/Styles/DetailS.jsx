import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const DetailS = StyleSheet.create({
    container: {
        flex: 1
    },
    box: {
        marginHorizontal: 20,
        position: 'absolute',
        left: -20,
        bottom: 0,
        backgroundColor: 'rgba(19,19,19,0.5)',
        padding: 20,
        borderTopRightRadius: 10
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'absolute',
        top: 10,
        marginHorizontal: 20,
        marginTop: 10
    },
    price: {
        fontSize: 19
    },
    image: {
        width: 'auto',
        height: 370
    },
    content: {
        marginHorizontal: 20,
        marginTop: 20
    },
    textB: {
        fontWeight: 'bold'
    },
    texth1: {
        fontSize: 25
    },
    textblack: {
        color: 'black'
    },
    textW: {
        color: 'white'
    },
    boxS: {
        marginVertical: 20
    },
    size: {
        flexDirection: 'row',
        justifyContent: "space-around",
        alignItems: 'center',
        marginTop: 20
    },
    button: {
        paddingVertical: 7,
        backgroundColor: '#03a9f4',
        paddingHorizontal: 20,
        borderRadius: 5
    },
    cart: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 20,
    },
    add: {
        flex: 2.5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buy: {
        flex: 4,
        justifyContent: 'center',
        alignItems: 'center'
    },
    acart: {
        backgroundColor: '#03a9f4',
        paddingVertical: 20,
        paddingHorizontal: 20,
        borderRadius: 10
    },
    bnow: {
        backgroundColor: 'black',
        paddingVertical: 20,
        paddingHorizontal: 80,
        borderRadius: 10
    },
    rate: {
        justifyContent: 'center',
        marginTop: 5
    },
    heart: {
        marginLeft: 320
    }

})

export default DetailS
