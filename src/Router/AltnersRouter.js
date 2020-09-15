import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Altners from "../Screen/Main/Altners";
import CompanyInfo from "../Screen/Main/CompanyInfo";

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator initialRouteName="Altners" headerMode="none">
    <Stack.Screen name="Altners" component={Altners} />
    <Stack.Screen name="CompanyInfo" component={CompanyInfo} />
  </Stack.Navigator>
)