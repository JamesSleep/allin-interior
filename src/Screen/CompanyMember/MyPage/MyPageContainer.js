import React, { useEffect, useState } from "react";
import MyPagePresenter from "./MyPagePresenter";
import AsyncStorage from "@react-native-community/async-storage";
import * as KeyChain from "react-native-keychain";
import DeviceInfo from "react-native-device-info";
import { CompanyOneInfoAPI } from "../../../common/api";


export default ({ navigation }) => {
  const [companyInfo, setCompanyInfo] = useState({});

  useEffect(() => {
    getCompanyInfo();
  }, []);

  const getCompanyInfo = async () => {
    const { email } = JSON.parse(await AsyncStorage.getItem("loginData"));
    const data = JSON.stringify({
      "email": email
    });
    const result = await CompanyOneInfoAPI(data);
    console.log(result[1]);
    setCompanyInfo(result[1][0]);
  }

  const logout = async () => {
    await AsyncStorage.clear();
    await KeyChain.resetInternetCredentials(DeviceInfo.getUniqueId());
    navigation.navigate("Login");
  }

  return (
    <MyPagePresenter
      navigation={navigation}
      companyInfo={companyInfo}
      logout={logout}
    />
  )
}