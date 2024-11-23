import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const LoginS = StyleSheet.create({
    containerAll: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.8)'
    },
    container: {
        justifyContent:'center',
        flex: 1,
        marginHorizontal: 15,
        alignItems: 'center',
    },
    background: {
        flex: 1
    },
    linear: {
        flex: 1
    },
    textColor: {
        color: 'white',
    },
    font:{
        fontFamily: 'Jockey One'
    },
    h1: {
        fontSize: 18,
        color: '#bd9b6b',
        fontWeight: 'bold'
    },
    textL: {
        color: '#FFFCFC',
        fontSize: 50,
        textAlign: 'center',
        marginVertical: 15,
        fontFamily: 'Kaushan Script'
    },
    texth2:{
        color:'white',
        fontSize:15,
        textAlign:'center',
        marginBottom:100
    },
    logo: {
        width: 358,
        height: 250,
        marginVertical: 30
    },
    input: {
        height: 50,
        width: 280,
        marginVertical: 5,
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
        borderTopLeftRadius: 2,
        borderBottomLeftRadius: 2,
        padding: 10,
        color: '#FFFCFC',
        backgroundColor: 'rgba(255,255,255,0.3)',
    },
    btn: {
        borderColor: 'white',
        padding: 15,
        borderWidth: 1,
        alignItems: 'center',
        borderRadius: 5,
        marginTop: 26
    },
    line: {
        flexDirection: 'row',
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 5,
    },
    lineblack: {
        backgroundColor: 'white',
        height: 1,
        width: '40%'
    },
    textBlack: {
        color: 'black'
    },
    textBold: {
        fontWeight: 'bold'
    },
    gg: {
        width: 30,
        height: 30,
        margin: 10,
        borderRadius: 50
    },
    boxT: {
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
    }
})

export default LoginS