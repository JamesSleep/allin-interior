import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { buttonColor } from "../../common/theme";

export default ({ text1, text2 }) => (
  <View style={styles.container}>
    <Text style={styles.prevText}>
      {text1}
      <Text style={styles.backText}>
        {text2}
      </Text>
    </Text>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 2.5,
    justifyContent: "center",
    alignItems: "center"
  },
  prevText: {
    fontSize: 16,
    color: buttonColor,
  },
  backText: {
    color: "black"
  }
});