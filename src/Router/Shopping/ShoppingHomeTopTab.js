import React from 'react';
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Home from "../../Screen/NormalMember/Shopping/ShoppingHome";
import Best from "../../Screen/NormalMember/Shopping/ShoppingBest";
import Discount from "../../Screen/NormalMember/Shopping/ShoppingDiscount";
import { buttonColor, _WIDTH } from "../../common/theme";
import { StyleSheet } from 'react-native';

const Tab = createMaterialTopTabNavigator();

export default () => (
  <Tab.Navigator
    initialRouteName="Home"
    tabBarOptions={{
      activeTintColor: buttonColor,
      indicatorStyle: {
        backgroundColor: buttonColor
      },
      tabStyle: styles.tabBar,
      labelStyle: styles.label
    }}
    swipeEnabled={false}
  >
    <Tab.Screen
      name="Home"
      component={Home}
      options={{
        tabBarLabel: "쇼핑 홈",
      }}
    />
    <Tab.Screen
      name="Best"
      component={Best}
      options={{
        tabBarLabel: "베스트",
      }}
    />
    <Tab.Screen
      name="Discount"
      component={Discount}
      options={{
        tabBarLabel: "할인",
      }}
    />
  </Tab.Navigator>
);

const styles = StyleSheet.create({
  tabBar: {
    //height: _WIDTH*0.1,
  },
  label: {
    fontSize: _WIDTH / 30,
  },
})