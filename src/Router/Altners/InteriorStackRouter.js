import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import InteriorHome from "../../Screen/Altners/Main";

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen name="인테리어" component={InteriorHome} />
  </Stack.Navigator>
)