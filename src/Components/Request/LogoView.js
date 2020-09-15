import React from "react";
import { View, Image, StyleSheet } from "react-native";

export default () => (
  <View style={styles.container}>
    <Image 
      source={require("../../Image/logo.png")}
      style={styles.image}
      resizeMode="contain"
    />
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  image: {
    width: "100%",
    height: "100%",
  }
});