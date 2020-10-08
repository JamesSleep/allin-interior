import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import { _WIDTH } from "../../../common/theme";
import { imagePathFormat } from "../../../utils/imagePathFormat";

export default ({ profile, nickname }) => (
  <View style={styles.container}>
    <Image 
      source={{ uri: imagePathFormat(profile) }}
      style={styles.image}
    />
    <Text style={styles.name}>{nickname}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: _WIDTH/15,
  },
  image: {
    width: _WIDTH*0.13,
    height: _WIDTH*0.13,
    borderRadius: 50,
    marginRight: _WIDTH/25,
  },
  name: {
    fontSize: _WIDTH/30,
    fontWeight: "500"
  }
});