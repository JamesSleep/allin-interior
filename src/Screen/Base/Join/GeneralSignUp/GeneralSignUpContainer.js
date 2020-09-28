import React, { useState } from "react";
import GeneralSignUpPresenter from "./GeneralSignUpPresenter";
import { SignUpAPI, MemberImage } from "../../../../common/api";
import { createSalt, cryptoGraphic } from "../../../../utils/cryptographic";
import AsyncStorage from "@react-native-community/async-storage";
import * as KeyChain from "react-native-keychain";
import DeviceInfo from "react-native-device-info";
import { KeyboardAvoidingView, Platform } from "react-native";

const SIGN_UP_LIST = [
  { value: "email", title: "이메일", keyboardType: "email-address" },
  { value: "password1", title: "비밀번호", secure: true },
  { value: "password2", title: "비밀번호확인", secure: true },
  { value: "user_name", title: "이름" },
  { value: "nickname", title: "닉네임" },
  { value: "phone_number", title: "휴대폰번호", keyboardType: "number-pad" }
];

export default ({ navigation }) => {
  const [signUpData, setSignUpData] = useState({
    email: "",
    password1: "",
    password2: "",
    user_name: "",
    nickname: "",
    phone_number: ""
  });
  const [profile, setProfile] = useState({
    image_path: "",
    image_data: null,
    image_tag: "profile"
  })
  const setState = (property, value) => {
    setSignUpData({
      ...signUpData,
      [property]: value
    });
  }
  const submitControll = async () => {
    const salt = createSalt();
    const passwrod = cryptoGraphic(signUpData.password1, salt);
    const postData = JSON.stringify({
      "email": signUpData.email,
      "password": passwrod,
      "salt": salt,
      "user_name": signUpData.user_name,
      "nick_name": signUpData.nickname,
      "phone_number": signUpData.phone_number
    });
    const form = [
      { name: "image", filename: "image.jpg", type: "image/jpg", data: profile.image_data },
      { name: "image_tag", data: profile.image_tag },
      { name: "email", data: signUpData.email }
    ];
    const loginData = JSON.stringify({
      "email": signUpData.email,
      "saveEmail": true,
      "autoLogin": true,
      "type": false
    });
    
    const result = await SignUpAPI(postData);
    if(!result[0]) return;
    const imageResult = await MemberImage(form);
    if(imageResult[0]) {
      console.log("성공");
      await AsyncStorage.setItem("loginData", loginData);
      await KeyChain.setInternetCredentials(
        DeviceInfo.getUniqueId(),
        salt,
        passwrod,
        { accessible: KeyChain.ACCESSIBLE.WHEN_UNLOCKED }
      )
    }
  }
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS==="ios" ? "padding" : null}
      style={{ flex: 1 }}
    >
      <GeneralSignUpPresenter
        navigation={navigation}
        signUpList={SIGN_UP_LIST}
        setValue={setState}
        profile={profile}
        setProfile={setProfile}
        postData={submitControll}
      />
    </KeyboardAvoidingView>
  ) 
}