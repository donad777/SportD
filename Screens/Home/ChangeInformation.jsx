import React, { useState } from 'react';
import { Image, ImageBackground, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import InforS from '../Styles/InforS';
import CustomBtn from '../Custom/CustomBtn';
import { updateUser } from '../rtk/API';

const ChangeInformation = (props) => {
  const { navigation } = props;
  const user = useSelector(state => state.app.user);
  const dispatch = useDispatch();

  const [name, setName] = useState(user.name);
  const [password, setPassword] = useState(user.password);
  const [address, setAddress] = useState(user.address);
  const [phoneNumber, setPhoneNumber] = useState(user.phonenumber);

  const handleChange = () => {
    const data = {
      id: user._id,
      name,
      password,
      address,
      phonenumber: phoneNumber,
    };

    dispatch(updateUser(data)).then((result) => {
      if (updateUser.fulfilled.match(result)) {
        navigation.navigate('Home');
      } else {
        console.error(result.payload); // Handle error
      }
    });
  };

  return (
    <ImageBackground style={InforS.background} source={require('../../img/background.jpg')}>
      <View style={InforS.boxContainer}>
        <View style={[InforS.boxA, InforS.boxC]}>
          <TouchableOpacity
            style={{ backgroundColor: 'white', paddingHorizontal: 7, paddingVertical: 4, borderRadius: 100 }}
            onPress={() => navigation.navigate('Home')}
          >
            <Image source={require("../../img/left.png")} />
          </TouchableOpacity>
          <Text style={[InforS.textFont, InforS.textWhite, { fontSize: 20, marginLeft: '20%' }]}>
            Chỉnh sửa thông tin cá nhân
          </Text>
        </View>
        <View style={InforS.boxChange}>
          <TextInput
            style={InforS.input}
            placeholder="Name"
            placeholderTextColor="#FFFCFC"
            value={name}
            onChangeText={setName}
          />
          <TextInput
            style={InforS.input}
            placeholder="Password"
            placeholderTextColor="#FFFCFC"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
          <TextInput
            style={InforS.input}
            placeholder="Address"
            placeholderTextColor="#FFFCFC"
            value={address}
            onChangeText={setAddress}
          />
          <TextInput
            style={InforS.input}
            placeholder="Phone Number"
            placeholderTextColor="#FFFCFC"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
          />
          <CustomBtn onPress={handleChange} text="Change" />
        </View>
      </View>
    </ImageBackground>
  );
};

export default ChangeInformation;
