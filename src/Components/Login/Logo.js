import React from "react";
import { View, StyleSheet, Image } from "react-native";

export default () => (
  <View style={styles.container}>
    <Image 
      style={{ width: "50%", height: "55%" }}
      source={require("../../Image/logo.png")}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 4,
    justifyContent: "center", 
    alignItems: "center", 
  }
})

