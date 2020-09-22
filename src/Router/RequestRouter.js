import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Estimate from "../Screen/Request/Estimate";
import SelectCategory from "../Screen/Request/RequestCommit/SelectCategory";
import StructRequest from "../Screen/Request/RequestCommit/StructRequest";
import CleaningRequest from "../Screen/Request/RequestCommit/CleaningRequest";
import SignboardRequest from "../Screen/Request/RequestCommit/SignboardRequest";
import ReceiptRequest from "../Screen/Request/RequestCommit/ReceiptRequest";

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator initialRouteName="Estimate" headerMode="none">
    <Stack.Screen name="Estimate" component={Estimate} />
    <Stack.Screen name="SelectCategory" component={SelectCategory} />
    <Stack.Screen name="StructRequest" component={StructRequest} />
    <Stack.Screen name="CleaningRequest" component={CleaningRequest} />
    <Stack.Screen name="SignboardRequest" component={SignboardRequest} />
    <Stack.Screen name="ReceiptRequest" component={ReceiptRequest} />
  </Stack.Navigator>
)