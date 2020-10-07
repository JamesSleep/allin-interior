import React, { useState } from "react";
import WritePresenter from "./WritePresenter";

import { connect } from "react-redux";
import ActionCreators from "../../../redux/action";
import { postMessage } from "../../../utils/postMessage";
import { PostStoryAPI, ImageUploadAPI } from "../../../common/api";

const mapStateToProps = state => {
  return {
    user_info: state.user_info
  }
};

const mapDispatchToProps = dispatch => {
  return {
    setUserInfo: (user_info) => {
      dispatch(ActionCreators.setUserInfo(user_info))
    }
  }
} 

export default connect(mapStateToProps, mapDispatchToProps)
(({ navigation, user_info }) => {
  const {
    information: {
      mb_index, email, nick_name
    }
  } = user_info;
  const [story, setStory] = useState({
    mb_index,
    nick_name,
    email,
    content: "",
  });
  const [storyImgs, setStoryImages] = useState([]);

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
    navigation.goBack();
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
});