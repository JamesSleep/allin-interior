import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AltnersMain from "../../Screen/Altners/Main";

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator initialRouteName="AltnersMain" headerMode="none">
    <Stack.Screen name="AltnersMain" component={AltnersMain} />
  </Stack.Navigator>
)