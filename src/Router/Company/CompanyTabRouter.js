import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../../Screen/CompanyMember/Home";

const Tab = createBottomTabNavigator();

export default () => (
  <Tab.Navigator initialRouteName="Home" headerMode="none">
    <Stack.Screen name="Home" component={Home} />
  </Tab.Navigator>
)