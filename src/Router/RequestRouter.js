import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Estimate from "../Screen/Request/Estimate";
import SelectCategory from "../Screen/Request/RequestCommit/SelectCategory";

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator initialRouteName="Estimate" headerMode="none">
    <Stack.Screen name="Estimate" component={Estimate} />
    <Stack.Screen name="SelectCategory" component={SelectCategory} />
  </Stack.Navigator>
)