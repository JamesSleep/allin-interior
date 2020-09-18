import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { _HEIGHT, buttonColor, _WIDTH } from "../../../../common/theme";
import SimpleIcon from "react-native-vector-icons/SimpleLineIcons";

export default () => (
  <View style={styles.container}>
    <SimpleIcon 
      name="check"
      color={buttonColor}
      size={40}
    />
    <Text style={styles.text}>업체검색 신청완료</Text>
  </View>
)

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: _HEIGHT/5,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    fontSize: _WIDTH/22,
    fontWeight: "500",
    marginTop: 15,
  }
})