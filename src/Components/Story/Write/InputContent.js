import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { _WIDTH } from "../../../common/theme";

export default ({ setState }) => (
  <View style={styles.container}>
    <TextInput 
      style={styles.input}
      multiline
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: _WIDTH/15,
    paddingVertical: _WIDTH/20,
  },
  input: {
    borderBottomColor: "rgba(0, 0, 0, 0.5)",
    borderBottomWidth: 0.3,
    paddingBottom: 10,
    fontSize: _WIDTH/30,
  }
});