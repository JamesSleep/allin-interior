import React from "react";
import { View, StyleSheet } from "react-native";
import Header from "../../../Components/Story/Detail/Header";
import { backgroundColor } from "../../../common/theme";
import UserInfo from "../../../Components/Story/Detail/UserInfo";
import ImageLayout from "../../../Components/Story/Detail/ImageLayout";
import Content from "../../../Components/Story/Detail/Content";

export default ({ navigation, data }) => (
  <View style={styles.container}>
    <Header 
      navigation={navigation}
      nickname={data.nick_name}
    />
    <UserInfo 
      profile={data.user_info.profile}
      nickname={data.nick_name}
    />
    <ImageLayout 
      imageList={data.images}
    />
    <Content 
      content={data.content}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: backgroundColor
  }
});