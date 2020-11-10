import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { _WIDTH, backgroundColor } from "../../common/theme";

export default ({ name, city, district, image }) => (
  <View style={styles.container}>
    <Text>{name}</Text>
    <Text>{city}</Text>
    <Text>{district}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 350,
    marginBottom: _WIDTH/15,
    borderRadius: 10,
    backgroundColor: backgroundColor,
    shadowColor: "#000",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
  }
});