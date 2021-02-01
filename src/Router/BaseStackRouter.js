import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../Screen/Base/Login";
import SelectJoinType from "../Screen/Base/Join/SelectJoinType";
import Agreement from "../Screen/Base/Join/Agreement";
import AuthWithPhone from "../Screen/Base/Join/AuthWithPhone";
import GeneralSignUp from "../Screen/Base/Join/GeneralSignUp";
import CompanySignUp from "../Screen/Base/Join/CompanySignUp";
import ShopCompany from "../Screen/Base/Join/ShopCompany";
import MemberTabRouter from "./Member/MemberTabRouter";
import CompanyTabRouter from "./Company/CompanyTabRouter";
import FindEmail from "../Screen/Base/FindInfo/FindEmail";
import FindPassword from "../Screen/Base/FindInfo/FindPassword";

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator initialRouteName="Login" headerMode="none">
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="SelectJoinType" component={SelectJoinType} />
    <Stack.Screen name="Agreement" component={Agreement} />
    <Stack.Screen name="AuthWithPhone" component={AuthWithPhone} />
    <Stack.Screen name="GeneralSignUp" component={GeneralSignUp} />
    <Stack.Screen name="CompanySignUp" component={CompanySignUp} />
    <Stack.Screen name="ShopCompany" component={ShopCompany} />
    <Stack.Screen name="MemberTabRouter" component={MemberTabRouter} />
    <Stack.Screen name="CompanyTabRouter" component={CompanyTabRouter} />
    <Stack.Screen name="FindEmail" component={FindEmail} />
    <Stack.Screen name="FindPassword" component={FindPassword} />
  </Stack.Navigator>
)