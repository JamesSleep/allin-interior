import React from "react";
import { View, StyleSheet } from "react-native";
import { _WIDTH } from "../../common/theme";

export default ({ info }) => (
  <View style={styles.container}>

  </View>
);

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 100,
    marginBottom: _WIDTH / 15,
    borderRadius: 10,
    backgroundColor: "rgba(250, 250, 250, 1)",
    shadowColor: "#000",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 10,
  },
});