import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { backgroundColor, _WIDTH, buttonColor } from "../../common/theme";
import { TouchableOpacity } from "react-native-gesture-handler";

export default ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <Icon 
          name="angle-left" 
          size={_WIDTH/13}
          style={{ position: "absolute", left: 12, }}  
          onPress={()=>navigation.goBack()}
        />
        <Text style={{ fontSize: 18 }}>아이디 찾기</Text>
      </View>
      <View style={styles.content}>
        <Text style={{ fontSize: 15 }}>가입하신 아이디의 
          <Text style={{ color: buttonColor }}> 휴대폰번호</Text>
          를 입력해주세요
        </Text>
        <TextInput 
          style={{
            width: "80%",
            height: 50,
            borderColor: buttonColor,
            borderWidth: 1,
            borderRadius: 5,
            marginVertical: 50,
            fontSize: 16,
            paddingLeft: 15,
          }}
        />
        <TouchableOpacity
          style={{
            width: _WIDTH*0.8,
            height: 50,
            backgroundColor: buttonColor,
            borderRadius: 5,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 15, color: "white" }}>
            다음
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: backgroundColor,
  },
  head: {
    width: "100%",
    height: 60,
    justifyContent: "center",
    alignItems: "center"
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})