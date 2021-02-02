import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import CompanyList from "../../Screen/Altners/CompanyList";
import CompanyInfo from "../../Screen/Altners/CompanyInfo";

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen name="업체목록" component={CompanyList} />
    <Stack.Screen name="상세정보" component={CompanyInfo} />
  </Stack.Navigator>
)