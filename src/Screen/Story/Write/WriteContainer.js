import React, { useState, useEffect } from "react";
import WritePresenter from "./WritePresenter";
import { postMessage } from "../../../utils/postMessage";
import { PostStoryAPI, ImageUploadAPI, UserInfoAPI } from "../../../common/api";
import AsyncStorage from "@react-native-community/async-storage";

export default ({ navigation }) => {
  const [story, setStory] = useState({
    content: "", mb_index: "", email: "", nick_name: "",
  });
  const [storyImgs, setStoryImages] = useState([]);

  useEffect(() => { 
    getUser(); 
  }, []);

  const getUser = async () => {
    const { email } = JSON.parse(await AsyncStorage.getItem("loginData"));
    const data = JSON.stringify({ "email": email });
    const result = await UserInfoAPI(data);
    console.log(result[1]);
    setStory({
      ...story,
      email: result[1].email,
      mb_index: result[1].mb_index,
      nick_name: result[1].nick_name
    });
  }

  const postData = async () => {
    if(!story.content || storyImgs.length < 1) {
      postMessage("문구입력 및 사진등록을 해주세요");
      return;
    }
    const data = JSON.stringify({
      "nick_name": story.nick_name,
      "content": story.content,
      "mb_index": Number(story.mb_index)
    });
    console.log(data);
    const form = storyImgs.map((image, index) => ([
      { name: "image", filename: "image.jpg", type: "image/jpg", data: image.image_data },
      { name: "image_tag", data: image.image_tag },
      { name: "email", data: story.email }
    ]));
    let imageResult;

    const result = await PostStoryAPI(data);
    if(!result[0]) return;
    for(let i=0; i<storyImgs.length; i++) {
      imageResult = await ImageUploadAPI(form[i]);
      if (!imageResult[0]) return;
    }
    navigation.replace("Story");
  }

  return (
    <WritePresenter 
      navigation={navigation}
      state={story}
      setState={setStory}
      image={storyImgs}
      setImage={setStoryImages}
      post={postData}
    />
  )
};