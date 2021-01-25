import React, { useState, useEffect, useCallback } from "react";
import StoryPresenter from "./StoryPresenter";
import { GetStoryAPI, UserInfoAPI } from "../../common/api";
import AsyncStorage from "@react-native-community/async-storage";

export default ({ navigation }) => {
  const [storyList, setStoryList] = useState([]);
  const [userInfo, setUserInfo] = useState({});
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => { 
    getUser();
    getStoryList(); 
  }, [refreshing]);

  const getUser = async () => {
    const { email } = JSON.parse(await AsyncStorage.getItem("loginData"));
    const data = JSON.stringify({ "email": email });
    const result = await UserInfoAPI(data);
    setUserInfo(result[1]);
  }

  const filterSet = (array = []) => {
    array.sort(function (a, b) {
      if (Number(a.st_index) > Number(b.st_index)) return -1;
      if (Number(a.st_index) === Number(b.st_index)) return 0;
      if (Number(a.st_index) < Number(b.st_index)) return 1;
    });
    return array;
  }

  const getStoryList = async () => {
    const result = await GetStoryAPI();
    let arr = result[1];
    arr = filterSet(arr);
    setStoryList(arr);
  };

  const wait = (timeout) => {
    return new Promise(resolve => {
      setTimeout(resolve, timeout);
    });
  }

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(1000).then(() => setRefreshing(false));
  }, []);

  return (
    <StoryPresenter 
      userInfo={userInfo}
      navigation={navigation}
      storyList={storyList}
      refreshing={refreshing}
      onRefresh={onRefresh}
    />
  )
};