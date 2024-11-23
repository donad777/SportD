import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const InforS = StyleSheet.create({
  container: {
    marginHorizontal: 50
  },
  avata: {
    width: 90,
    height: 90,
    borderRadius: 90,
  },
  boxA: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  h1: {
    alignItems: 'center',
    marginVertical: 20
  },
  textWhite: {
    color: 'white'
  },
  textFont: {
    fontFamily: 'Jockey One'
  },
  textBlack: {
    color: 'black'
  },
  texth1: {
    fontSize: 30
  },
  infor: {
    marginTop: 50,
  },
  content: {
    marginLeft: 20
  },
  textRed: {
    color: 'red'
  },
  textSizeContent: {
    fontSize: 18
  },
  rule: {
    marginTop: 20
  },
  line: {
    borderBottomColor: 'black', // Màu sắc của đường kẻ ngang
    borderBottomWidth: 1,       // Độ dày của đường kẻ ngang
    marginVertical: 10,
  },
  space: {
    marginTop: 15
  },
  textBold: {
    fontWeight: 'bold'
  },
  boxC: {
    marginTop: 20,
    marginHorizontal: 10
  },
  boxChange: {
    marginTop: "40%",
    alignItems: 'center'

  },
  boxContainer: {
    backgroundColor: 'rgba(0,0,0,0.8)',
    flex: 1,

  },
  input: {
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: 5,
    width: 300,
    padding: 10,
    marginTop: 10,
    color: 'white'
  },
  background: {
    flex: 1
  },
})

export default InforS