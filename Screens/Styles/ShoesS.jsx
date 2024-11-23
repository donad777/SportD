import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ShoesS = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginTop: 15
  },
  boxall: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12
  },
  box1: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  textBold: {
    fontWeight: 'bold'
  },
  textBlack: {
    color: 'black'
  },
  textWhite: {
    color: 'white'
  },
  textH1: {
    fontSize: 20
  },
  title: {
    fontSize: 15,
    color: 'black',
    fontWeight: 'bold',
    // textAlign: 'center', // Căn giữa văn bản
    flexWrap: 'wrap', // Cho phép văn bản xuống hàng
  },
  image: {
    width: 160,
    height: 165,
  },
  list: {
    marginTop: 21,
    margin: 4,
    paddingBottom: 10,
    // paddingHorizontal: 4,
    marginHorizontal: 10,
    borderRadius: 5,
  },
  font: {
    fontFamily: 'Jockey One'
  },
  ele: {
    elevation: 10, // Độ cao của bóng, càng cao thì bóng càng đậm
    backgroundColor: 'white',
  },
  button: {
    backgroundColor: 'black',
    width: 130,
    height: 40,
    marginTop: 10,
    borderRadius: 5,
    justifyContent: 'center'
  },
  boxbtn: {
    alignItems: 'center',
  },
  content: {
    marginHorizontal: 7,
    marginTop: 10
  },
  star: {
    width: 17,
    height: 17,
    marginRight: 5
  },
  rate: {
    marginVertical: 10,
    flexDirection: 'row',
    borderColor: '#ffeb3b',
    borderRadius: 5,
    borderWidth: 2,
    paddingHorizontal: 4,
    paddingVertical: 4,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  boxQ: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  sale: {
    width: 80,
    height: 30,
    position: 'absolute',
    top: -30,
    left: 0,
    borderTopRightRadius: 10
  },
  quantity: {
    fontSize: 13,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 10
  }
})

export default ShoesS