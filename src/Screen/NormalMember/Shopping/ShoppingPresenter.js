import React from "react";
import { View, StyleSheet, Text } from "react-native";
import IonicIcon from "react-native-vector-icons/Ionicons";
import { _WIDTH } from "../../../common/theme";

export default () => (
  <View style={styles.container}>
    <IonicIcon 
      name="construct"
      size={_WIDTH/5}
    />
    <Text style={styles.text}>준비중입니다</Text>
  </View>
) 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    fontSize: _WIDTH/20,
    fontWeight: "600"
  }
});