import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../Screen/Home/Login";

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator initialRouteName="Login" headerMode="none">
    <Stack.Screen name="Login" component={Login}/>
  </Stack.Navigator>
);