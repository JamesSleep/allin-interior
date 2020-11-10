import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Header from "../../../../Components/Join/Header";
import { backgroundColor, _WIDTH, buttonColor } from "../../../../common/theme";
import TitleContainer from "../../../../Components/Join/Agreement/TitleContainer";
import CheckBox from "../../../../Components/Join/Agreement/CheckBox";
import { TouchableOpacity } from "react-native-gesture-handler";

export default ({ navigation, check, setState, nextStep }) => (
  <View style={styles.container}>
    <Header navigation={navigation} />
    <TitleContainer />
    <CheckBox
      check={check}
      setState={setState}
    />
    <View style={{ marginBottom: 30, paddingHorizontal: 25 }}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => nextStep()}
      >
        <Text style={styles.text}>시작하기</Text>
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
    height: _WIDTH / 10,
    borderRadius: 5,
    justifyContent: "center"
  },
  text: {
    color: "white",
    fontSize: _WIDTH / 27,
    textAlign: "center"
  }
});