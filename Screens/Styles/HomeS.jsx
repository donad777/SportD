import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const HomeS = StyleSheet.create({
    slider: {
        width: 'auto',
        height: 200
    },
    icon: {
        width: 50,
        height: 40,
        marginBottom: 10
    },
    textBold: {
        fontWeight: 'bold'
    },
    font: {
        fontFamily: 'Jockey One'
    },
    textColor: {
        color: 'black'
    },
    textH1: {
        fontSize: 20
    },
    boxAll: {
        flexDirection: 'row',
        marginTop: 40,
        justifyContent: 'space-around'
    },
    box: {
        alignItems: 'center'
    },
    new: {
        marginHorizontal: 20,
        marginTop: 40
    },
    imgstore: {
        width: 'auto',
        height: 135,
        borderRadius: 5,
        marginVertical: 10
    },
    imageN: {
        width: 'auto',
        height: 150,
        borderRadius: 10
    },
    title: {
        fontSize: 16,
        marginTop: 10,
        color: 'white',
        fontWeight: 'bold',
        // textAlign: 'center', // Căn giữa văn bản
        // flexWrap: 'wrap', // Cho phép văn bản xuống hàng
        marginBottom:10
    },
    status: {
        fontSize: 14,
        color: 'red',
        marginTop: 5,
        flexWrap: 'wrap', // Cho phép văn bản xuống hàng
    },
    boxnew: {
        width: 170,
        height: "auto",
        marginHorizontal: 10,
        marginVertical: 10,
        padding: 10,
        borderRadius:10
    },
    title1: {
        fontSize: 16,
        marginTop: 10,
        color: 'black',
        fontWeight: 'bold',
        // textAlign: 'center', // Căn giữa văn bản
        // flexWrap: 'wrap', // Cho phép văn bản xuống hàng
    },


})


export default HomeS