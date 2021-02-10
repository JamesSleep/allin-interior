import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import RequestHome from "../../Screen/Altners/Request";
import Residential from "../../Screen/Altners/Residential";
import Commercial from "../../Screen/Altners/Commercial";
import Cleaning from "../../Screen/Altners/Cleaning";
import Result from "../../Screen/Altners/RequestResult";

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen name="견적신청" component={RequestHome} />
    <Stack.Screen name="Residential" component={Residential} />
    <Stack.Screen name="Commercial" component={Commercial} />
    <Stack.Screen name="Cleaning" component={Cleaning} />
    <Stack.Screen name="Result" component={Result} />
  </Stack.Navigator>
)