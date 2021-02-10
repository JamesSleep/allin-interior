import React, { useState, useEffect } from "react";
import LoginPresenter from "./LoginPresenter";
import AsyncStorage from "@react-native-community/async-storage";
import * as KeyChain from "react-native-keychain";
import DeviceInfo from "react-native-device-info";
import { SaltReturnAPI, LoginAPI, UserInfoAPI } from "../../../common/api";
import { cryptoGraphic } from "../../../utils/cryptographic";
import { postMessage } from "../../../utils/postMessage";

export default ({ navigation }) => {
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    autoLoginHandler();
  }, []);

  // 로그인정보 텍스트 입력
  const setState = (property, value) => {
    setLoginInfo({
      ...loginInfo,
      [property]: value
    });
  }

  // 로그인 정보 확인 
  const autoLoginHandler = async () => {
    const loginData = JSON.parse(await AsyncStorage.getItem("loginData"));
    if (loginData !== null) autoLogin(loginData);
  }

  // 로그인 시도
  const login = async (email, password) => {
    const postData = JSON.stringify({
      "email": email,
      "password": password,
    });
    const result = await LoginAPI(postData);
    return result;
  }

  // 자동 로그인
  const autoLogin = async (loginData) => {
    const { email } = loginData;
    const {
      username, password
    } = await KeyChain.getInternetCredentials(DeviceInfo.getUniqueId());
    const password_ = cryptoGraphic(password, username);
    const [success, data] = await login(email, password_);
    if (success) {
      pageHandler(data);
    }
  }

  // 일반 로그인
  const submitControll = async () => {
    if (!loginInfo.email || !loginInfo.password) {
      postMessage("로그인 정보를 입력해주세요!");
      return;
    }
    const postData = JSON.stringify({
      "email": loginInfo.email
    });
    const saltResult = await SaltReturnAPI(postData);

    if (!saltResult[0]) {
      postMessage("로그인정보가 일치하지 않습니다.");
      return;
    }
    const salt = saltResult[1];
    const password = cryptoGraphic(loginInfo.password, salt);
    const result = await login(loginInfo.email, password);

    if (!result[0]) {
      postMessage("로그인정보가 일치하지 않습니다.");
      return;
    }
    await AsyncStorage.setItem("loginData", JSON.stringify({
      "email": loginInfo.email,
      "type": result[1]
    }));
    await KeyChain.setInternetCredentials(
      DeviceInfo.getUniqueId(),
      salt,
      loginInfo.password,
      { accessible: KeyChain.ACCESSIBLE.WHEN_UNLOCKED }
    );
    pageHandler(result[1]);
  }

  // 페이지 이동

  const pageHandler = (type) => {
    switch (type) {
      case "member": {
        navigation.reset({
          index: 0,
          routes: [{ name: 'MemberTabRouter' }],
        });
        break;
      }
      case "company": {
        navigation.reset({
          index: 0,
          routes: [{ name: 'CompanyTabRouter' }],
        });
        break;
      }
    }
  }

  return (
    <LoginPresenter
      navigation={navigation}
      loginInfo={loginInfo}
      setState={setState}
      submit={submitControll}
    />
  )
};