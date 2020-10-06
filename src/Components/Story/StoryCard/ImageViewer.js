import React from "react";
import { View, StyleSheet, Image } from "react-native";

export default () => (
  <View style={styles.container}>
    <Image 
      source={require("../../../Image/company2.jpeg")}
      style={styles.image}
      resizeMode="cover"
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 6
  },
  image: {
    width: "100%",
    height: "100%",
  }
});