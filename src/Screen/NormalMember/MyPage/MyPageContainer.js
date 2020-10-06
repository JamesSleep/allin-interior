import React, { useEffect, useState } from "react";
import MyPagePresenter from "./MyPagePresenter";
import AsyncStorage from "@react-native-community/async-storage";
import * as KeyChain from "react-native-keychain";
import DeviceInfo from "react-native-device-info";
import { connect } from "react-redux";
import ActionCreators from "../../../redux/action";

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
  const logout = async () => {
    await AsyncStorage.clear();
    await KeyChain.resetInternetCredentials(DeviceInfo.getUniqueId());
    navigation.navigate("Login");
  }
  return (
    <MyPagePresenter 
      navigation={navigation}
      userInfo={user_info}
      logout={logout}
    />
  )
});