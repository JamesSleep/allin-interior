import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { _WIDTH } from "../../../common/theme";

export default ({ navigation, step, setStep }) => (
  <View style={styles.container}>
    <Icon 
      name="angle-left"
      style={{
        position: "absolute",
        left: 15,
      }}
      size={_WIDTH/15}
      onPress={()=>{
        step === 0 ? 
        navigation.goBack():
        setStep(step-1);
      }}
    />
    <Text style={{ fontSize: 18 }}>업체 회원가입</Text>
  </View>
) 

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 70,
    justifyContent: "center",
    alignItems: "center"
  }
});