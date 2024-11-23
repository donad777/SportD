import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import InforS from '../Styles/InforS'
import { logout } from '../rtk/Reducer'
import { useDispatch, useSelector } from 'react-redux'

const Infor = (props) => {
  const { navigation } = props
  const dispatch = useDispatch()
  const user = useSelector(state => state.app.user)
  const out = () => {
    dispatch(logout())
  }
  return (
    <View style={InforS.container}>
      <View style={InforS.h1}>
        <Text style={[InforS.textFont, InforS.textBlack, InforS.texth1]}>Profile</Text>
      </View>
      <View style={InforS.boxA}>
        <Image style={InforS.avata} source={{ uri: 'https://i.pinimg.com/474x/98/51/1e/98511ee98a1930b8938e42caf0904d2d.jpg' }} />
        <View style={InforS.content}>
          <Text style={[InforS.textBlack, InforS.textSizeContent, InforS.textBold]}>{user.name}</Text>
          <Text>{user.phonenumber}</Text>
        </View>
      </View>
      <View style={InforS.infor}>
        <View>
          <Text style={[InforS.textSizeContent]}>General information</Text>
          <View style={InforS.line}></View>
          <TouchableOpacity onPress={() => navigation.navigate('ChangeInfor')}>
            <Text style={[InforS.textSizeContent, InforS.textBlack, InforS.space]}>Edit Information</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={[InforS.textSizeContent, InforS.textBlack, InforS.space]}>Transaction history</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={[InforS.textSizeContent, InforS.textBlack, InforS.space]}>Q & A</Text>
          </TouchableOpacity>
        </View>
        <View style={InforS.rule}>
          <Text style={[InforS.textSizeContent]}>Privacy and terms</Text>
          <View style={InforS.line}></View>
          <TouchableOpacity>
            <Text style={[InforS.textSizeContent, InforS.textBlack, InforS.space]}>Terms and condition</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={[InforS.textSizeContent, InforS.textBlack, InforS.space]}>Policy and privacy</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={out}>
            <Text style={[InforS.textSizeContent, InforS.textRed, InforS.space]}>Log Out</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default Infor

