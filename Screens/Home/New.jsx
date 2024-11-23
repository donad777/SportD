import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HomeS from '../Styles/HomeS'
const New = (props) => {
    const { data } = props
    return (
        <View>
            <View style={HomeS.boxnew}>
                <Image
                    style={HomeS.imageN}
                    source={{ uri: data.image }}
                />
                <Text style={HomeS.title1} numberOfLines={1} ellipsizeMode="tail">{data.name}</Text>
            </View>
        </View>
    )
}

export default New
