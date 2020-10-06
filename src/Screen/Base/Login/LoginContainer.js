import React, { useState, useEffect } from "react";
import LoginPresenter from "./LoginPresenter";
import { KeyboardAvoidingView, Platform, MaskedViewBase } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import * as KeyChain from "react-native-keychain";
import DeviceInfo from "react-native-device-info";
import { SaltReturnAPI, LoginAPI, UserInfoAPI } from "../../../common/api";
import { cryptoGraphic } from "../../../utils/cryptographic";
import { postMessage } from "../../../utils/postMessage";
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

export default connect(mapStateToProps, mapDispatchToProps)(({ navigation, setUserInfo }) => {
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
    autoLogin: false,
    saveEmail: false
  })
  useEffect(() => {
    setOption();
  },[]);
  const setState = (property, value) => {
    setLoginInfo({
      ...loginInfo,
      [property]: value
    });
  }
  const setOption = async () => {
    const loginData = JSON.parse(await AsyncStorage.getItem("loginData"));
    if(loginData.autoLogin) 
      autoLogin(loginData);
    else if(loginData.saveEmail) 
      setLoginInfo({
        ...loginInfo, 
        saveEmail: true,
        email: loginData.email
      });
  }
  const login = async (email, password) => {
    const postData = JSON.stringify({
      "email": email,
      "password": password,
    });
    const result = await LoginAPI(postData);
    return result;
  }
  const autoLogin = async (loginData) => {
    const { email } = loginData;
    const { 
      username, password 
    } = await KeyChain.getInternetCredentials(DeviceInfo.getUniqueId());
    const password_ = cryptoGraphic(password, username);
    const result = await login(email, password_);
    if(result[0]) {
      const userInfo = await UserInfoAPI(JSON.stringify({
        "email": email
      }));
      setUserInfo(userInfo[1]);
      navigation.navigate("MemberTabRouter");
    }
  }
  const submitControll = async () => {
    if(!loginInfo.email || !loginInfo.password) {
      postMessage("로그인 정보를 입력해주세요!");
      return;
    }
    const postData = JSON.stringify({
      "email": loginInfo.email
    });
    const saltResult = await SaltReturnAPI(postData);

    if(!saltResult[0]) {
      postMessage("로그인정보가 일치하지 않습니다.");
      return;
    }
    const salt = saltResult[1];
    const password = cryptoGraphic(loginInfo.password, salt);
    const result = await login(loginInfo.email, password);
    
    if(!result[0]) {
      postMessage("로그인정보가 일치하지 않습니다.");
      return;
    }
    await AsyncStorage.setItem("loginData", JSON.stringify({
      "email": loginInfo.email,
      "saveEmail": loginInfo.saveEmail,
      "autoLogin": loginInfo.autoLogin
    }));
    await KeyChain.setInternetCredentials(
      DeviceInfo.getUniqueId(),
      salt,
      loginInfo.password,
      { accessible: KeyChain.ACCESSIBLE.WHEN_UNLOCKED }
    );
    if(result[1] === "member") {
      const userInfo = await UserInfoAPI(postData);
      setUserInfo(userInfo[1]);
      navigation.navigate("MemberTabRouter");
    }
    else 
      navigation.navigate("CompanyTabRouter");
  }
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS==="ios" ? "padding" : null}
      style={{ flex: 1 }}
    >
      <LoginPresenter 
        navigation={navigation}
        loginInfo={loginInfo}
        setState={setState}
        submit={submitControll}
      />
    </KeyboardAvoidingView>
  )
});