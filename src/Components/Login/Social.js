import React from "react";
import { StyleSheet, View, Text, Image, Platform } from "react-native";
import { _WIDTH } from "../../common/theme";

export default () => (
  <View style={styles.socialContainer}>
    <View style={styles.lineContainer}>
      <View style={styles.line}/>
      <Text style={styles.lineText}>간편로그인</Text>
      <View style={styles.line}/>
    </View>
    <View style={styles.iconContainer}>
      <View style={styles.iconView}>
        <Image style={styles.iconImg} source={require("../../Image/kakao.png")} />
        <Text style={{ fontSize: _WIDTH/27, color: "#FBE443" }}>카카오톡</Text>
      </View>
      <View style={styles.iconView}>
        <Image style={styles.iconImg} source={require("../../Image/naver.png")} />
        <Text style={{ fontSize: _WIDTH/27, color: "#2DBE34" }}>네이버</Text>
      </View>
      { Platform.OS === "ios" && (
        <View style={styles.iconView}>
          <Image style={{ width: _WIDTH/10, height: _WIDTH/10 }} source={require("../../Image/apple.png")} />
          <Text style={{ fontSize: _WIDTH/27, color: "black" }}> APPLE</Text>
        </View>
      )}
    </View>
  </View>
);

const styles = StyleSheet.create({
  socialContainer: { 
    flex: 2, 
  },
  lineContainer: {
    width: "100%",
    height: "30%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  line: { 
    width: "35%", 
    height: 1, 
    borderWidth: 0.5, 
    opacity: 0.7, 
    borderColor: "gray" 
  },
  lineText: { 
    fontSize: _WIDTH/30, 
    color: "gray" 
  },
  iconContainer: {
    width: "100%",
    height: "50%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  iconView: {
    width: "30%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
  },
  iconImg: {
    width: _WIDTH/7,
    height: _WIDTH/7,
  },
})