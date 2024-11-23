import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const RegisterS = StyleSheet.create({
    containerAll: {
        backgroundColor: 'rgba(0,0,0,0.8)',
        flex: 1,
    },
    container: {
        flex: 1,
        marginHorizontal: 15,
        alignItems: 'center',
        marginTop: '30%'
    },
    background: {
        flex: 1
    },
    linear: {
        flex: 1
    },
    textColor: {
        color: 'white'
    },
    textBlack: {
        color: 'black'
    },
    textBold: {
        fontWeight: 'bold'
    },
    h1: {
        fontSize: 18,
        fontFamily: 'Roboto',
        color: '#bd9b6b',
        fontWeight: 'bold'
    },
    logo: {
        width: 179,
        height: 125,
        marginTop: 30
    },
    boxT: {
        marginTop: 40
    },
    textL: {
        color: 'white',
        fontSize: 30,
        textAlign: 'center',
        marginBottom: 40,
        fontFamily: 'Kaushan Script'
    },
    line: {
        flexDirection: 'row',
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 5
    },
    boxT1: {
        flexDirection: 'row',
        marginTop: 10,
        alignItems: 'center'
    },
    boxI: {
        backgroundColor: 'rgba(255,255,255,0.3)',
        justifyContent: 'center',
        alignItems: 'center',
        width: 50,
        height: 50,
        borderTopRightRadius: 2,
        borderBottomRightRadius: 2,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
        marginRight: 2
    },
    line1: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 5,
        marginVertical: 30
    },
    gg: {
        width: 30,
        height: 30,
        margin: 10,
        borderRadius: 50
    },
})

export default RegisterS