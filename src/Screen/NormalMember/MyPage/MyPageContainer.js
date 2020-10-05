import React, { useEffect, useState } from "react";
import MyPagePresenter from "./MyPagePresenter";
import AsyncStorage from "@react-native-community/async-storage";
import * as KeyChain from "react-native-keychain";
import DeviceInfo from "react-native-device-info";

export default ({ navigation }) => {
  const [userInfo, setUserInfo] = useState();
  useEffect(() => {
    getUserInfo();
  }, []);
  const getUserInfo = async () => {
    const asUserInfo = await AsyncStorage.getItem("userInfo");
    setUserInfo(JSON.parse(asUserInfo));
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
      logout={logout}
    />
  )
}