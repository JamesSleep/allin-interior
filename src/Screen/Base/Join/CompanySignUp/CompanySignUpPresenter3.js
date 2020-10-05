import React from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import { backgroundColor, _WIDTH, buttonColor } from "../../../../common/theme";
import Header from "../../../../Components/Join/SignUp/Header";
import InputContainer from "../../../../Components/Join/InputContainer";
import { TouchableOpacity } from "react-native-gesture-handler";
import CompanyImage from "../../../../Components/Join/CompanyImage";
import ImageSetUp from "../../../../Components/Join/ImageSetUp";
import InputBirthday from "../../../../Components/Join/SignUp/InputBirthday";
import SelectArea from "../../../../Components/Join/SignUp/SelectArea";
import Discription from "../../../../Components/Join/SignUp/Discription";

export default ({ 
  step, 
  setStep,
  profile,
  setProfile,
  landscape,
  setLandscape,
  value,
  setValue,
  submit
}) => (
  <View style={styles.container}>
    <Header 
      step={step}
      setStep={setStep}
    />
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: _WIDTH/20
      }}
    >
      <ImageSetUp 
        title={"프로필사진"}
        value={profile}
        setValue={setProfile}
      />
      <CompanyImage 
        title={"업체사진"}
        value={landscape}
        setValue={setLandscape}
      />
      <InputBirthday 
        title={"업력"}
        value={value.year?.toString()}
        setValue={setValue}
      />
      <SelectArea 
        value={value}
        setValue={setValue}
      />
      <Discription 
        value={value}
        setValue={setValue}
      />
    </ScrollView>
    <View style={styles.submitContainer}>
      <TouchableOpacity
        style={styles.button}
        onPress={()=>submit()}
      >
        <Text style={styles.text}>회원가입</Text>
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
  },
  text: {
    fontSize: _WIDTH/25, 
    color: "white",
    fontWeight: "500"
  }
});