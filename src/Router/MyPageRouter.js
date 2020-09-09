import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MyPageMain from "../Screen/MyPage/MyPageMain";
import EditProfile from "../Screen/MyPage/EditProfile";

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator initialRouteName="MyPageMain" headerMode="none">
    <Stack.Screen name="MyPageMain" component={MyPageMain} />
    <Stack.Screen name="EditProfile" component={EditProfile} />
  </Stack.Navigator>
)