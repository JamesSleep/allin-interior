import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Header from "../../../../Components/Join/Header";
import TitleContainer from "../../../../Components/Join/AuthWithPhone/TitleContainer";
import { backgroundColor, _WIDTH, buttonColor } from "../../../../common/theme";
import { TouchableOpacity } from "react-native-gesture-handler";

export default ({ navigation, nextStep }) => (
  <View style={styles.container}>
    <Header navigation={navigation} />
    <TitleContainer />
    <View style={{ 
      flex: 2,
      paddingHorizontal: 25 
    }}>
      <TouchableOpacity 
        style={styles.button}
        onPress={()=>nextStep()}
      >
        <Text style={styles.text}>본인인증 하기</Text>
      </TouchableOpacity>
    </View>
  </View>
) 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: backgroundColor
  },
  button: {
    backgroundColor: buttonColor, 
    height: _WIDTH/9, 
    borderRadius: 5, 
    justifyContent: "center"
  },
  text: {
    color: "white", 
    fontSize: _WIDTH/27, 
    textAlign: "center"
  }
});