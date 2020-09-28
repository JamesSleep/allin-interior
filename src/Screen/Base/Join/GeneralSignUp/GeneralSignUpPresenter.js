import React from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import Header from "../../../../Components/Join/Header";
import { backgroundColor, _WIDTH, buttonColor } from "../../../../common/theme";
import InputContainer from "../../../../Components/Join/InputContainer";
import ImageSetUp from "../../../../Components/Join/ImageSetUp";
import { TouchableOpacity } from "react-native-gesture-handler";

export default ({ 
  navigation, 
  signUpList, 
  setValue,
  profile,
  setProfile,
  postData
}) => (
  <View style={styles.container}>
    <Header navigation={navigation} />
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: _WIDTH/20
      }}
    >
      { signUpList.map((signUp, index) => (
        <InputContainer 
          key={index}
          title={signUp.title}
          keyboardType={signUp.keyboardType}
          secure={signUp.secure}
          property={signUp.value}
          setValue={setValue}
        />
      ))}
      <ImageSetUp 
        title={"프로필 사진"}
        value={profile}
        setValue={setProfile}
      />
    </ScrollView>
    <View style={styles.submitContainer}>
      <TouchableOpacity
        style={styles.button}
        onPress={()=>postData()}
      >
        <Text style={{ 
          fontSize: _WIDTH/25, 
          color: "white",
          fontWeight: "500"
        }}>
          회원가입
        </Text>
      </TouchableOpacity>
    </View>
  </View>
) 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: backgroundColor
  },
  submitContainer: {
    width: "100%",
    height: _WIDTH*0.15,
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    width: _WIDTH*0.85,
    height: _WIDTH*0.11,
    backgroundColor: buttonColor,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center"
  }
});