import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../Screen/Home/Login";
import SignUp from "../Screen/Home/SignUp";
import SignUp2 from "../Screen/Home/SignUp2";
import AuthPhoneNum from "../Screen/Home/AuthPhoneNum";
import MainRouter from "./MainRouter";
import CompanySignUp from "../Screen/Home/CompanySignUp";
import FindMemberId from "../Screen/Home/FindMemberId";
import FindMemberPW from "../Screen/Home/FindMemberPW";

const Stack = createStackNavigator();

export default () => (
  //업체회원페이지 추가 
  <Stack.Navigator initialRouteName="Login" headerMode="none">
    <Stack.Screen name="Login" component={Login}/>
    <Stack.Screen name="SignUp" component={SignUp}/>
    <Stack.Screen name="SignUp2" component={SignUp2}/>
    <Stack.Screen name="CompanySignUp" component={CompanySignUp}/>
    <Stack.Screen name="AuthPhoneNum" component={AuthPhoneNum}/>
    <Stack.Screen name="MainRouter" component={MainRouter}/>
    <Stack.Screen name="FindMemberId" component={FindMemberId}/>
    <Stack.Screen name="FindMemberPW" component={FindMemberPW}/>
  </Stack.Navigator>
);