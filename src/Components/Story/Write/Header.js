import React from "react";
import { View, StyleSheet, Text } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import { _WIDTH, backgroundColor, buttonColor } from "../../../common/theme";
import { TouchableOpacity } from "react-native-gesture-handler";

export default ({ navigation, post }) => (
  <View style={styles.container}>
    <Text style={styles.title}>스토리 작성</Text>
    <View style={styles.leftArrow}>
      <TouchableOpacity onPress={()=>navigation.goBack()}>
        <AntDesign 
          name="arrowleft"
          size={_WIDTH/20}
        />
      </TouchableOpacity>
    </View>
    <View style={styles.share}>
      <TouchableOpacity onPress={()=>post()}>
        <Text style={styles.shareText}>공유하기</Text>
      </TouchableOpacity>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: backgroundColor,
    shadowColor: "#000",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  title: {
    fontSize: _WIDTH/24
  },
  leftArrow: {
    position: "absolute",
    left: _WIDTH/20,
  },
  share: {
    position: "absolute",
    right: _WIDTH/20,
  },
  shareText: {
    fontSize: _WIDTH/28,
    color: buttonColor,
    fontWeight: "500"
  }
})