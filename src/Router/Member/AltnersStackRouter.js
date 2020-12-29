import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AltnersMain from "../../Screen/NormalMember/Altners";
import CompanyInfo from "../../Screen/NormalMember/Altners/CompanyInfo";
import Request from "../../Screen/NormalMember/Altners/Request";
import RequestResult from "../../Screen/NormalMember/Altners/RequestResult";

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator initialRouteName="AltnersMain" headerMode="none">
    <Stack.Screen name="AltnersMain" component={AltnersMain} />
    <Stack.Screen name="CompanyInfo" component={CompanyInfo} />
    <Stack.Screen name="Request" component={Request} />
    <Stack.Screen name="RequestResult" component={RequestResult} />
  </Stack.Navigator>
)