import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CartS = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
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
  font: {
    fontFamily: 'Jockey One'
  },
  container: {
    marginHorizontal: 20,
    marginTop: 16,
    flex: 1
  },
  pay: {
    backgroundColor: '#03a9f4',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  btnPay: {
    bottom: "5%",
  },
  listContainer: {
    flexDirection: 'row',
    marginTop: 40,
    justifyContent: 'center',
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#ffffff',
    elevation: 10
  },
  imageItems: {
    width: 120,
    height: 120,
    marginRight: 40,
    borderRadius: 10
  },
  btn: {
    backgroundColor: "#03a9f4",
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 5,
    alignItems:'center',
    marginBottom:10
  },
  boxpay: {
    flexDirection: 'row',
    marginTop: 60,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  quantity: {
    marginHorizontal: 20,
  },
  paying:{
    backgroundColor: 'white',
    fontSize: 20, 
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    padding: 10
  }
})

export default CartS