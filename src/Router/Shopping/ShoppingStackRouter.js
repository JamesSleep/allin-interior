import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../../Screen/NormalMember/Shopping";
import Detail from "../../Screen/NormalMember/Shopping/DetailPage";

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator initialRouteName="Home" headerMode="none">
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="Detail" component={Detail} />
  </Stack.Navigator>
)