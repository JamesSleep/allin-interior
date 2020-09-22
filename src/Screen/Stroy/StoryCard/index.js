import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import Header from "./Header";
import StoryImage from "./StoryImage";
import Content from "./Content";

export default ({ storyInfo, userInfo }) => {
  return (
    <View style={styles.container}>
      <Header 
        profileImg={storyInfo.mb_image_path}
        nickname={storyInfo.mb_nickname}
        storyID={storyInfo.st_user_id}
        userID={userInfo.userId}
      />
      <StoryImage 
        images={storyInfo.images}
      />
      <Content 
        content={storyInfo.st_content}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 400,
    marginVertical: 25,
  }
});