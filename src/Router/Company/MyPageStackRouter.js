import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MyPage from "../../Screen/CompanyMember/MyPage";
import RequestList from "../../Screen/CompanyMember/MyPage/RequestList";
import RequestBuild from "../../Screen/CompanyMember/MyPage/RequestBuild";
import CompletePage from "../../Screen/CompanyMember/MyPage/CompletePage";

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator initialRouteName="MyPage" headerMode="none">
    <Stack.Screen name="MyPage" component={MyPage} />
    <Stack.Screen name="RequestList" component={RequestList} />
    <Stack.Screen name="RequestBuild" component={RequestBuild} />
    <Stack.Screen name="CompletePage" component={CompletePage} />
  </Stack.Navigator>
)