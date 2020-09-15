import React from "react";
import { View, StyleSheet, Text } from "react-native";

export default ({ description }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>올트너스 소개</Text>
      <Text style={styles.content}>{description}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 150,
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 15,
    fontWeight: "500"
  },
  content: {
    marginTop: 10,
    fontSize: 13,
  }
});