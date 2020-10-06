import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { backgroundColor } from "../../../common/theme";
import Header from "../../../Components/Story/Write/Header";
import InputContent from "../../../Components/Story/Write/InputContent";
import ImageContainer from "../../../Components/Story/Write/ImageContainer";

export default ({ navigation, state, setState, post }) => (
  <View style={styles.container}>
    <Header 
      navigation={navigation}
      post={post}
    />
    <InputContent />
    <ImageContainer />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: backgroundColor
  }
});