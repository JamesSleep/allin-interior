import React, { useState } from "react";
import { View, StyleSheet, Text, Image, TextInput } from "react-native";
import LogoView from "../../../../Components/Request/LogoView"
import RequestText from "../../../../Components/Request/RequestText"
import { _WIDTH, nonActive, buttonColor } from "../../../../common/theme";
import { TouchableOpacity } from "react-native-gesture-handler";
import RNPickerSelect from 'react-native-picker-select';
import Icon from "react-native-vector-icons/FontAwesome";

const items = [
  { label: "150x80", value: { width: 150, height: 80 } },
  { label: "200x80", value: { width: 200, height: 80 } },
  { label: "300x80", value: { width: 300, height: 80 } },
  { label: "400x100", value: { width: 400, height: 100 } },
  { label: "500x100", value: { width: 500, height: 100 } },
  //{ label: "직접입력", value: "직접입력" },
];

export default ({ state, setState }) => {
  const [visible, setVisible] = useState(false);
  const boardSizeHandler = (value) => {
    /* if(value === "직접입력") {
      setState({
        ...state,
        width: "직접입력"
      });
      setVisible(true);
      return;
    } */
    const { width, height } = value;
    setVisible(false);
    setState({
      ...state,
      width, height
    });
  }
  return (
    <View style={styles.container}>
      <LogoView />
      <RequestText 
        text1="간판 사이즈"
        text2="(cm단위)를 입력하세요."
      />
      <View style={styles.content}>
        <View style={[styles.preview,
          { width: _WIDTH/600*state.width, height: _WIDTH/500*state.height }
        ]}>
          <Image 
            source={require("../../../../Image/logo.png")}
            style={{ width: "50%", height: "70%", alignItems: "flex-end" }}
            resizeMode="contain"
          />
          <Text style={{ width: "50%", fontSize: state.width/23, textAlign: "left" }}>간판의 품격</Text>
        </View>
        <View style={{ width: "50%", marginTop: 30, }}> 
          <RNPickerSelect 
            placeholder={{
              label: "사이즈 선택",
              value: { width: _WIDTH*0.8, height: _WIDTH*0.3 },
              color: "gray"
            }}
            onValueChange={(value) => boardSizeHandler(value)}
            items={items}
            style={{
              ...pickerSelectStyles,
              iconContainer: {
                right: 10,
                top: 10,
              }
            }}
            value={{ 
              width: state.width, 
              height: state.height 
            }}
            useNativeAndroidPickerStyle={false}
            Icon={()=><Icon name="angle-down" size={20} color={"gray"} />}
          />
          { visible && (
          <>
            <View >
              <Text>가로</Text>
              <TextInput />
            </View>
            <View >
              <Text>세로</Text>
              <TextInput />
            </View>
          </>)}
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 3,
    paddingHorizontal: 20,
    alignItems: "center",
  },
  preview: {
    width: _WIDTH*0.7,
    height: _WIDTH*0.7,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "gray"
  }
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    width: "100%",
    height: 40,
    fontSize: 14,
    paddingHorizontal: 15,
    borderWidth: 0.5,
    borderColor: "gray",
    borderRadius: 5,
    color: "black",
  },
  inputAndroid: {
    width: "100%",
    height: 40,
    fontSize: 14,
    paddingHorizontal: 15,
    borderWidth: 0.5,
    borderColor: "gray",
    borderRadius: 5,
    color: "black",
  }
});