import { StyleSheet, Text, View } from 'react-native'
import React from 'react'


const FindS = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    textbold: {
        fontWeight: 'bold'
    },
    font: {
        fontFamily: 'Jockey One'
    },
    textBlack: {
        color: 'black'
    },
    textWhite: {
        color: 'white'
    },
    textH1: {
        fontSize: 20,
    },
    container: {
        marginHorizontal: 20,
        marginTop: 16
    },
    input: {
        marginTop: 28,
        borderRadius: 5,
        backgroundColor: '#D9D9D9',
        padding: 10
    },
    search: {
        position: 'absolute',
        right: 10,
        top: -33
    }
})

export default FindS
