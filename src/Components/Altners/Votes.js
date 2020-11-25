import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { buttonColor, _WIDTH } from "../../common/theme";

export default () => (
  <View style={styles.container}>
    <Text style={styles.text}>
      4.7
    </Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: _WIDTH / 10,
    height: _WIDTH / 10,
    backgroundColor: buttonColor,
    opacity: 0.8,
    position: "absolute",
    right: 5,
    bottom: 5,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  text: {
    color: "white",
    fontSize: _WIDTH / 25,
    fontWeight: "700"
  }
});