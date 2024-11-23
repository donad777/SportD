import { StyleSheet, Text, View, Image, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'
import HomeS from '../Styles/HomeS'
import { useNavigation } from '@react-navigation/native';

const Catergory = (props) => {
    const navigation = useNavigation();
    const { dataS } = props
    return (
        <View>
            <TouchableOpacity
                onPress={() => navigation.navigate('Shoes', { dataS })}
            >
                <View style={HomeS.boxAll}>
                    <View style={HomeS.box}>
                        <Image
                            style={[HomeS.icon, { borderRadius: 10 }]}
                            source={{ uri: dataS.image }}
                        />
                        <Text style={[HomeS.textColor, HomeS.font, { fontSize: 15 }]}>{dataS.name}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default Catergory

const styles = StyleSheet.create({})