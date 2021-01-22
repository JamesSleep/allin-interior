import React, { useState, useEffect } from "react";
import StoryDetailPresentor from "./StoryDetailPresentor";
import AsyncStorage from "@react-native-community/async-storage";
import { UserInfoAPI, GetCommentAPI, NewCommentAPI, GetHeartAPI, NewHeartAPI, DeleteHeartAPI } from "../../../common/api";

export default ({ navigation, route }) => {
  const { params: { data } } = route;
  const [comment, setComment] = useState("");
  const [list, setList] = useState([]);
  const [userInfo, setUserInfo] = useState({});
  const [heart, setHeart] = useState([]);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    getData();
  }, [refresh]);
  
  const getData = async () => {
    const { email } = JSON.parse(await AsyncStorage.getItem("loginData"));
    const userAPI = await UserInfoAPI(JSON.stringify({ "email": email }));
    const { st_index } = data;
    const commAPI = await GetCommentAPI(JSON.stringify({ "st_index": st_index }));
    const heartAPI = await GetHeartAPI(JSON.stringify({ "st_index": st_index }));
    if (heartAPI[0]) {
      setHeart(heartAPI[1]);
    } else {
      setHeart([]);
    }
    setUserInfo(userAPI[1]);
    if (commAPI[0]) {
      setList(commAPI[1]);
    } else {
      setList([]);
    }
  }

  const postData = async () => {
    if (comment.length < 1) {
      return;
    }
    const date = new Date().getTime();
    const data2 = JSON.stringify({
      "st_index": data.st_index,
      "comment": comment,
      "mb_index": userInfo.mb_index,
      "timestamp": date
    });
    const result = await NewCommentAPI(data2);
    if (!result[0]) {
      console.log("comment fail");
    } else {
      console.log("comment success");
      navigation.replace("Detail", { data: data });
    }
  }

  const addHeart = async () => {
    const postData = JSON.stringify({
      "st_index": data.st_index,
      "mb_index": userInfo.mb_index
    });
    const result = await NewHeartAPI(postData);
    if(result[0]) {
      setRefresh(!refresh);
    }
  }

  const delHeart = async () => {
    const postData = JSON.stringify({
      "st_index": data.st_index,
      "mb_index": userInfo.mb_index
    });
    const result = await DeleteHeartAPI(postData);
    if(result[0]) {
      setRefresh(!refresh);
    }
  }

  return (
    <StoryDetailPresentor 
      navigation={navigation}
      data={data}
      comment={comment}
      setComment={setComment}
      postData={postData}
      list={list}
      heart={heart}
      addHeart={addHeart}
      delHeart={delHeart}
      mb_index={userInfo.mb_index}
    />
  )
}