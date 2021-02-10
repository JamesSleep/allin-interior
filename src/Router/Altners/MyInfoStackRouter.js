import React, { useState, useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AsyncStorage from "@react-native-community/async-storage";
import Inbox from "../../Screen/Altners/Inbox";
import Result from "../../Screen/Altners/RequestResult";

const Stack = createStackNavigator();

export default () => {
  const [type, setType] = useState();
  const [inbox, setInbox] = useState("견적요청함");
  
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const { type } = JSON.parse(await AsyncStorage.getItem("loginData"));
    if (type === "member") setInbox("견적요청함");
    if (type === "company") setInbox("견적수신함");
    setType(type);
  }

  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name={inbox} component={Inbox} />
      <Stack.Screen name="Result" component={Result} />
    </Stack.Navigator>
  )
}