import React, { useState } from "react";
import CompanySignUpPresenter from "./CompanySignUpPresenter";
import CompanySignUpPresenter2 from "./CompanySignUpPresenter2";
import CompanySignUpPresenter3 from "./CompanySignUpPresenter3";
import { KeyboardAvoidingView, Platform } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import * as KeyChain from "react-native-keychain";
import DeviceInfo from "react-native-device-info";
import { createSalt, cryptoGraphic } from "../../../../utils/cryptographic";
import { CompanySignUpAPI, ImageUploadAPI } from "../../../../common/api";

const SIGN_UP_LIST = [
  { value: "email", title: "이메일", keyboardType: "email-address" },
  { value: "password1", title: "비밀번호", secure: true },
  { value: "password2", title: "비밀번호확인", secure: true },
  { value: "business_name", title: "상호명" },
  { value: "ceo_name", title: "대표자 성함" },
  { value: "business_tel", title: "연락처", keyboardType: "number-pad" },
  { value: "business_number", title: "사업자번호", keyboardType: "number-pad" }
];

export default ({ navigation }) => {
  const [step, setStep] = useState(0);
  const [signUpData, setSignUpData] = useState({
    email: "",
    password1: "",
    password2: "",
    business_name: "",
    ceo_name: "",
    business_tel: "",
    business_number: "",
    year: "",
    description: "",
    city: {
      name: "시/도 선택",
      id: 0
    },
    district: {
      name: "구/군 선택",
      id: 0
    },
  });
  const [profile, setProfile] = useState({
    image_data: null,
    image_path: "",
    image_tag: "CompanyProfile"
  });
  const [landscape, setLandscape] = useState({
    image_data: null,
    image_path: "",
    image_tag: "CompanyLandscape"
  });
  const setState = (property, value) => {
    setSignUpData({...signUpData, [property]: value});
  }
  const submitControll = async () => {
    const salt = createSalt();
    const password = cryptoGraphic(signUpData.password1, salt);
    const postData = JSON.stringify({
      "email": signUpData.email,
      "password": password,
      "salt": salt,
      "business_name": signUpData.business_name,
      "ceo_name": signUpData.ceo_name,
      "business_tel": signUpData.business_tel,
      "business_number": signUpData.business_number,
      "year": signUpData.year,
      "description": signUpData.description,
      "city": signUpData.city.name,
      "district": signUpData.district.name,
    });
    const profile_form = [
      { name: "image", filename: "image.jpg", type: "image/jpg", data: profile.image_data },
      { name: "image_tag", data: profile.image_tag },
      { name: "email", data: signUpData.email }
    ];
    const landscape_form = [
      { name: "image", filename: "image.jpg", type: "image/jpg", data: landscape.image_data },
      { name: "image_tag", data: landscape.image_tag },
      { name: "email", data: signUpData.email }
    ];
    const loginData = JSON.stringify({
      "email": signUpData.email,
      "saveEmail": true,
      "autoLogin": true,
      "type": true
    });

    const result = await CompanySignUpAPI(postData);
    if(!result[0]) {
      console.log(result[1]);
      return;
    }

    const profileImg = await ImageUploadAPI(profile_form);
    const landscapeImg = await ImageUploadAPI(landscape_form);
    if(profileImg[0] && landscapeImg[0]) {
      console.log("성공");
      await AsyncStorage.setItem("loginData", loginData);
      await KeyChain.setInternetCredentials(
        DeviceInfo.getUniqueId(),
        salt,
        signUpData.password1,
        { accessible: KeyChain.ACCESSIBLE.WHEN_UNLOCKED }
      );
    }
  }
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS==="ios" ? "padding" : null}
      style={{ flex: 1 }}
    >
      { step === 0 && (
        <CompanySignUpPresenter 
          navigation={navigation}
          signList={SIGN_UP_LIST}
          step={step}
          value={signUpData}
          setValue={setState}
          setStep={setStep}
        />
      )}
      { step === 1 && (
        <CompanySignUpPresenter2 
          navigation={navigation}
          signList={SIGN_UP_LIST}
          step={step}
          value={signUpData}
          setValue={setState}
          setStep={setStep}
        />
      )}
      { step === 2 && (
        <CompanySignUpPresenter3 
          value={signUpData}
          setValue={setSignUpData}
          step={step}
          setStep={setStep}
          profile={profile}
          setProfile={setProfile}
          landscape={landscape}
          setLandscape={setLandscape}
          submit={submitControll}
        />
      )}
    </KeyboardAvoidingView>
  )
}