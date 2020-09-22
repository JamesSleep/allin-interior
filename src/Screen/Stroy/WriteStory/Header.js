import React from "react";
import { View, StyleSheet, Text } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import { _WIDTH, buttonColor } from "../../../common/theme";
import { TouchableOpacity } from "react-native-gesture-handler";

export default ({ navigation, postData }) => (
  <View style={styles.container}>
    <AntDesign 
      name="left"
      size={_WIDTH/20}
      style={styles.back}
      onPress={()=>navigation.goBack()}
    />
    <Text style={styles.title}>스토리 작성</Text>
    <TouchableOpacity
      style={styles.commit}  
      onPress={()=>postData()}
    >
      <Text style={styles.commitText}>작성완료</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 60,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  back: {
    position: "absolute",
    left: 15
  },
  title: {
    fontSize: 16,
    fontWeight: "500",
  },
  commit: {
    position: "absolute",
    right: 15
  },
  commitText: {
    fontSize: 14,
    color: buttonColor
  }
});
