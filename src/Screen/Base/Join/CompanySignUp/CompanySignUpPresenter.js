import React from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import { backgroundColor, _WIDTH, buttonColor } from "../../../../common/theme";
import Header from "../../../../Components/Join/SignUp/Header";
import InputContainer from "../../../../Components/Join/InputContainer";
import { TouchableOpacity } from "react-native-gesture-handler";

export default ({ navigation, signList, value, setValue, step, setStep }) => (
  <View style={styles.container}>
    <Header 
      navigation={navigation}
      step={step}
      setStep={setStep}
    />
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: _WIDTH/20
      }}
    >
      { signList.map((sign, index) => ( 
        index < 3 &&
        <InputContainer 
          key={index}
          title={sign.title}
          keyboardType={sign.keyboardType}
          secure={sign.secure}
          property={sign.value}
          value={value[sign.value]}
          setValue={setValue}
        />
      ))}
    </ScrollView>
    <View style={styles.submitContainer}>
      <TouchableOpacity
        style={styles.button}
        onPress={()=>setStep(1)}
      >
        <Text style={styles.text}>다음</Text>
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