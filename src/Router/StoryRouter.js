import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import StoryMain from "../Screen/Stroy/StoryMain";
import WriteStory from "../Screen/Stroy/WriteStory";

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator initialRouteName="StoryMain" headerMode="none">
    <Stack.Screen name="StoryMain" component={StoryMain} />
    <Stack.Screen name="WriteStory" component={WriteStory} />
  </Stack.Navigator>
)