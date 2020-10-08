import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Story from "../Screen/Story";
import Write from "../Screen/Story/Write";
import Detail from "../Screen/Story/StoryDetail";

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator initialRouteName="Story" headerMode="none">
    <Stack.Screen name="Story" component={Story} />
    <Stack.Screen name="Write" component={Write} />
    <Stack.Screen name="Detail" component={Detail} />
  </Stack.Navigator>
)