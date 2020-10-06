import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { backgroundColor, _WIDTH } from "../../common/theme";

export default () => (
  <View style={styles.container}>
    <Text style={styles.title}>스토리</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: backgroundColor,
    shadowColor: "#000",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 8,
  },
  title: {
    fontSize: _WIDTH/24,
  }
});