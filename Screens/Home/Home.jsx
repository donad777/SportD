import { FlatList, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getNew } from '../rtk/API'
import HomeS from '../Styles/HomeS'
import New from './New'
import Catergory from './Catergory'
import { getCate, getData } from '../rtk/API'
const Home = (props) => {
  const { navigation } = props
  const dispatch = useDispatch()
  const [news, setNews] = useState([])
  const [cate, setCate] = useState([])


  useEffect(() => {
    dispatch(getNew())
      .unwrap()
      .then(data => { setNews(data) })
      .catch(error => { console.log(error) })
  }, [])


  useEffect(() => {
    dispatch(getCate())
      .unwrap()
      .then(data => { setCate(data) })
      .catch(error => { console.log(error) })
  }, [])

  const headerContent = () => {
    return (
      <View>
        <Image
          style={HomeS.slider}
          source={require('../../img/slider.jpg')}
        />
        <View style={{ alignItems: 'center' }}>
          <FlatList
            data={cate}
            renderItem={({ item }) => <Catergory dataS={item} />}
            keyExtractor={(item) => item._id}
            horizontal={true}
            ItemSeparatorComponent={() => <View style={{ width: 40 }} />}
          />
        </View>
        <View style={HomeS.new}>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <Text style={[HomeS.textColor, HomeS.font, HomeS.textH1, { fontSize: 25 }]}>Buy now </Text><Image source={require('../../img/Vector.png')} />
          </View>
          <Image
            style={HomeS.imgstore}
            source={require('../../img/store.jpg')}
          />
          <Text style={[HomeS.textColor, HomeS.textBold, { fontSize: 15 }]}>Shop đồ thể thao - chất lượng</Text>
          <Text style={[{ fontSize: 13 }]}>Contact: 0981273823</Text>
          <Text style={[HomeS.textColor, HomeS.font, { fontSize: 25, marginTop: 20 }]}>Other offers</Text>
        </View>
      </View>
    )
  }

  return (
    <View>
      <FlatList
        ListHeaderComponent={headerContent}
        showsVerticalScrollIndicator = {false}
        data={news}
        renderItem={({ item }) => <New data={item} />}
        keyExtractor={(item) => item._id}
        numColumns={2} // Số cột bạn muốn hiển thị
        columnWrapperStyle={{ justifyContent: 'space-between'}} // Style cho các hàng
      />
    </View>
  )
}

export default Home
