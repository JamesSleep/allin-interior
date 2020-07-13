import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../Screen/Home/Login";
import SignUp from "../Screen/Home/SignUp";
import SignUp2 from "../Screen/Home/SignUp2";

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator initialRouteName="Login" headerMode="none">
    <Stack.Screen name="Login" component={Login}/>
    <Stack.Screen name="SignUp" component={SignUp}/>
    <Stack.Screen name="SignUp2" component={SignUp2}/>
  </Stack.Navigator>
);