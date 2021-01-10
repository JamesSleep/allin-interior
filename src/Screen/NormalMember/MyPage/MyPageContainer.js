import React, { useEffect, useState } from "react";
import MyPagePresenter from "./MyPagePresenter";
import AsyncStorage from "@react-native-community/async-storage";
import * as KeyChain from "react-native-keychain";
import DeviceInfo from "react-native-device-info";
import { connect } from "react-redux";
import ActionCreators from "../../../redux/action";
import { UserInfoAPI, GetFollowAPI, GetStoryAPI } from "../../../common/api";

export default ({ navigation }) => {
  const [userInfo, setUserInfo] = useState({});
  const [follow, setFollow] = useState({});

  useEffect(() => {
    getUserInfo();
  }, []);

  const getUserInfo = async () => {
    const { email } = JSON.parse(await AsyncStorage.getItem("loginData"));
    const data = JSON.stringify({
      "email": email
    });
    const result = await UserInfoAPI(data);
    const result2 = await GetFollowAPI(data);
    const result3 = await GetStoryAPI();
    const count = counting(result3[1], email);

    result2[1].write = count;

    console.log(result[1]);

    setUserInfo(result[1]);
    setFollow(result2[1]);
  }

  const counting = (array = [], email = "") => {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
      if (array[i].user_info.email === email) {
        count++;
      }
    }
    return count;
  }

  const logout = async () => {
    await AsyncStorage.clear();
    await KeyChain.resetInternetCredentials(DeviceInfo.getUniqueId());
    navigation.navigate("Login");
  }

  return (
    <MyPagePresenter
      navigation={navigation}
      userInfo={userInfo}
      follow={follow}
      logout={logout}
    />
  )
}