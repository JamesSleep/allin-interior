import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../../Screen/NormalMember/Shopping";
import Detail from "../../Screen/NormalMember/Shopping/DetailPage";
import Cart from "../../Screen/NormalMember/Shopping/CartPage";
import Payment from "../../Screen/NormalMember/Shopping/ShopPayment";

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator initialRouteName="Home" headerMode="none">
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="Detail" component={Detail} />
    <Stack.Screen name="Cart" component={Cart} />
    <Stack.Screen name="Payment" component={Payment} />
  </Stack.Navigator>
)