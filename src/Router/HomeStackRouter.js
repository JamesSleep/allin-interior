import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MainScreen from "../Screen/HomeScreen/MainScreen";

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator initialRouteName="MainScreen" headerMode="none">
    <Stack.Screen name="MainScreen" component={MainScreen} />
  </Stack.Navigator>
)