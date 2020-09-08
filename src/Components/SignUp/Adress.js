import React from "react";
import styled from "styled-components/native";
import Postcode from 'react-native-daum-postcode';
import { Text, TouchableOpacity, View, Platform } from "react-native";
import { _WIDTH, _HEIGHT, backgroundColor, buttonColor } from "../../common/theme";
import { SafeAreaView } from "react-native-safe-area-context";

const Container = styled.View`
  width: ${_WIDTH}px;
  height: ${_HEIGHT}px;
  background-color: white;
`;

const Adress = ({ window, info, setInfo }) => {
  const getData = (data) => {
    const _data = JSON.parse(data)
    console.log(_data);
    setInfo({
      ...info, 
      zipCode: _data.zonecode,
      address1: _data.address,
    });
    window(false);
  }
  return (
    <SafeAreaView style={{ flex:1 }}>
      <Container>
        <View style={{flex:5}}>
        <Postcode
          style={{ width: "100%" }}
          jsOptions={{ animated: true , theme: {bgColor: backgroundColor}}}
          onSelected={(data) => getData(JSON.stringify(data))}
        />
        </View>
        <View style={{flex:1, justifyContent: "center", alignItems: "center", marginBottom: Platform.OS === "ios" ? 30 : 0, }}>
          <TouchableOpacity 
            onPress={()=>window(false)}
            style={{ width: "85%", height: _WIDTH/10, backgroundColor: buttonColor, borderRadius: 5, justifyContent: "center", alignItems: "center" }}
          >
            <Text style={{fontSize: _WIDTH/28, color: "white"}}>
              닫기
            </Text>
          </TouchableOpacity>
        </View>
      </Container>
    </SafeAreaView>
  )
}

export default Adress;