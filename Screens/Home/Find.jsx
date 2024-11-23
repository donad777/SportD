import { Image, StyleSheet, Text, TextInput, View, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import FindS from '../Styles/FindS'
const Find = (props) => {
  const { navigation } = props
  return (
    <View style={FindS.container}>
      <View style={FindS.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Image
            source={require('../../img/left.png')}
          />
        </TouchableOpacity>
        <Text style={[FindS.textBlack, FindS.textH1, FindS.font, { marginLeft: 20 }]}>
          Search
        </Text>
      </View>
      <View>
        <TextInput
          style={FindS.input}
          placeholder='Search'
        />
        <TouchableOpacity>
          <Image
            style={FindS.search}
            source={require('../../img/searchb.png')}
          />
        </TouchableOpacity>
        <ScrollView showsHorizontalScrollIndicator={false}>

        </ScrollView>
      </View>
    </View>
  )
}

export default Find

const styles = StyleSheet.create({})