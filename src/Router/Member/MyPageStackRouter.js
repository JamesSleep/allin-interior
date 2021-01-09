import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MyPage from "../../Screen/NormalMember/MyPage";
import RequestBox from "../../Screen/NormalMember/MyPage/RequsetBox";
import RequestBuild from "../../Screen/NormalMember/MyPage/RequestBuild";

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator initialRouteName="MyPage" headerMode="none">
    <Stack.Screen name="MyPage" component={MyPage} />
    <Stack.Screen name="RequestBox" component={RequestBox} />
    <Stack.Screen name="RequestBuild" component={RequestBuild} />
  </Stack.Navigator>
)