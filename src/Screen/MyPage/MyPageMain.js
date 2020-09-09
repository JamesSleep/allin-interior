import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { backgroundColor, _WIDTH } from "../../common/theme";
import { TouchableOpacity } from "react-native-gesture-handler";
import AsyncStorage from "@react-native-community/async-storage";
import { UserInfoAPI, CompanyInfoAPI } from "../../common/api";
import MemberHeader from "./MemberProfile/MemberHeader";
import MemberProfileInfo from "./MemberProfile/MemberProfileInfo";
import MemberAlarm from "./MemberProfile/MemberAlarm";
import MemberMenu from "./MemberProfile/MemberMenu";
import CompanyHeader from "./CompanyProfile/CompanyHeader";
import CompanyProfileInfo from "./CompanyProfile/CompanyProfileInfo";
import CompanyRecord from "./CompanyProfile/CompanyRecord";
import CompanyMenu from "./CompanyProfile/CompanyMenu";

export default ({ navigation }) => {
  const [userInfo, setUserInfo] = useState({
    loginType: null,
    joinInfo: {},
    memberPrivate: {
      following: 0,
      follower: 0,
      crown: 0,
      notification: 0,
      like: 0,
      bookmark: 0,
      request: 0,
    },
    companyPrivate: {
      image_path: null,
      complete: 0, 
      request: 0,
    }
  });
  useEffect(() => {
    getUserInfo();
  }, []);
  const getUserInfo = async () => {
    const loginData = JSON.parse(
      await AsyncStorage.getItem("loginData")
    );
    let postData, result;
    postData = JSON.stringify({
      "userId": loginData.userId,
      "type": loginData.type || ""
    });
    if(loginData.type) {
      result = await CompanyInfoAPI(postData);
      setUserInfo({
        ...userInfo,
        loginType: loginData.type,
        joinInfo: result[1].joinInfo,
        companyPrivate: {
          ...userInfo.companyPrivate,
          image_path: result[1].image_path
        }
      });
    }
    else {
      setUserInfo({
        ...userInfo,
        loginType: loginData.type,
        joinInfo: result[1].joinInfo
      });
      result = await UserInfoAPI(postData);
    }
    console.log(result);
  }
  const logout = async () => {
    try {
      await AsyncStorage.removeItem("loginData");
      navigation.reset({
        index: 0,
        routes: [{name: "Login"}]
      });
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <View style={{ flex: 1, backgroundColor: backgroundColor }}>
      { userInfo.loginType ? 
        <>
          <CompanyHeader logout={logout}/>
          <CompanyProfileInfo 
            joinInfo={userInfo.joinInfo}
            companyPrivate={userInfo.companyPrivate}
          />
          <CompanyRecord 
            joinInfo={userInfo.joinInfo}
            companyPrivate={userInfo.companyPrivate}
          />
          <CompanyMenu 
            companyPrivate={userInfo.companyPrivate} 
          />
        </> : (
        <>
          <MemberHeader logout={logout}/>
          <MemberProfileInfo 
            joinInfo={userInfo.joinInfo}
            memberPrivate={userInfo.memberPrivate}
          />
          <MemberAlarm 
            memberPrivate={userInfo.memberPrivate}
          />
          <MemberMenu memberPrivate={userInfo.memberPrivate} />
        </>
      )}
      {/* 회원탈퇴 */}
      <View style={{ width:"100%", marginBottom: 20, justifyContent: "center", alignItems: "center" }}>
        <TouchableOpacity 
          style={{ justifyContent: "center", alignItems: "center" }}
        >
          <Text style={{ fontSize: 16, color: "gray" }}>회원탈퇴</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}