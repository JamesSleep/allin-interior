import React, { useState } from "react";
import LoginPresenter from "./LoginPresenter";
import { KeyboardAvoidingView, Platform } from "react-native";

export default ({ navigation }) => {
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
    autoLogin: false,
    saveID: false
  })
  const setState = (property, value) => {
    setLoginInfo({
      ...loginInfo,
      [property]: value
    });
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
      />
    </KeyboardAvoidingView>
  )
}