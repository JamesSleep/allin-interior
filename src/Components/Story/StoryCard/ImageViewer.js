import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { imagePathFormat } from "../../../utils/imagePathFormat";

export default ({ image }) => (
  <View style={styles.container}>
    <Image 
      source={{ uri: imagePathFormat(image) }}
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