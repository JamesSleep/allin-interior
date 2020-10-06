import React from "react";
import { View, StyleSheet } from "react-native";
import Header from "./Header";
import { backgroundColor } from "../../../common/theme";
import ImageViewer from "./ImageViewer";
import Content from "./Content";

export default ({ navigation, userInfo }) => (
  <View style={styles.container}>
    <Header 
      profile={userInfo.profile}
    />
    <ImageViewer />
    <Content />
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 350,
    borderRadius: 10,
    backgroundColor: backgroundColor,
    shadowColor: "#000",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  }
})