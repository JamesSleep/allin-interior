import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import RequestHome from "../../Screen/Altners/Request";
import Residential from "../../Screen/Altners/Residential";
import Commercial from "../../Screen/Altners/Commercial";

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen name="견적신청" component={RequestHome} />
    <Stack.Screen name="Residential" component={Residential} />
    <Stack.Screen name="Commercial" component={Commercial} />
  </Stack.Navigator>
)