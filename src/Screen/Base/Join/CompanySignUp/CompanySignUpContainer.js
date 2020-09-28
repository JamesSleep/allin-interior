import React, { useState } from "react";
import CompanySignUpPresenter from "./CompanySignUpPresenter";
import CompanySignUpPresenter2 from "./CompanySignUpPresenter2";
import CompanySignUpPresenter3 from "./CompanySignUpPresenter3";
import { KeyboardAvoidingView, Platform } from "react-native";

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
    year: null,
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
    image_tag: "company_profile"
  });
  const [landscape, setLandscape] = useState({
    image_data: null,
    image_path: "",
    image_tag: "company_landscape"
  });
  const setState = (property, value) => {
    setSignUpData({...signUpData, [property]: value});
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
        />
      )}
    </KeyboardAvoidingView>
  )
}