import React from "react";
import { View, StyleSheet, KeyboardAvoidingView, Platform, ScrollView } from "react-native";
import Header from "../../../Components/Story/Detail/Header";
import { backgroundColor } from "../../../common/theme";
import UserInfo from "../../../Components/Story/Detail/UserInfo";
import ImageLayout from "../../../Components/Story/Detail/ImageLayout";
import Content from "../../../Components/Story/Detail/Content";
import CommentView from "../../../Components/Story/Detail/CommentView";
import TextInputView from "../../../Components/Story/Detail/TextInputView";

export default ({ 
  navigation, data, comment, setComment, postData, list, heart, 
  addHeart, delHeart, mb_index, screen, deleteStory, follow, 
  email, newFollow, deleteFollow 
}) => (
  <View style={styles.container}>
    <Header 
      navigation={navigation}
      nickname={data.nick_name}
      screen={screen}
    />
    <ScrollView>
      <UserInfo 
        profile={data.user_info.profile}
        nickname={data.nick_name}
        data={data}
        mb_index={mb_index}
        deleteStory={deleteStory}
        follow={follow.followingList}
        userInfo={email}
        deleteFollow={deleteFollow}
        newFollow={newFollow}
      />
      <ImageLayout 
        imageList={data.images}
      />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : null}
        style={{ flex: 3 }}
      >
        <Content 
          content={data.content} 
          comments={list.length}
          heart={heart}
          addHeart={addHeart}
          delHeart={delHeart}
          mb_index={mb_index}
        />
        <CommentView 
          comment={comment}
          setComment={setComment}
          postData={postData}
          list={list}
        />
      </KeyboardAvoidingView>
    </ScrollView>
    <TextInputView 
      postData={postData}
      setComment={setComment}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: backgroundColor
  }
});