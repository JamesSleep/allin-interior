import React, { useState, useEffect } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import AsyncStorage from "@react-native-community/async-storage";
import Main from "./InteriorStackRouter";
import Company from "./CompanyStackRouter";
import Request from "./RequestStackRouter";
import MyInfo from "./MyInfoStackRouter";

const Drawer = createDrawerNavigator();

export default () => {
  const [type, setType] = useState();
  const [inbox, setInbox] = useState();
  
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
    <Drawer.Navigator
      drawerStyle={{ width: 200 }}
      screenOptions={{ swipeEnabled: false }}
    >
      <Drawer.Screen 
        name="Main" 
        component={Main} 
        options={{ drawerLabel: "인테리어" }}
      />
      <Drawer.Screen 
        name="Company" 
        component={Company} 
        options={{ drawerLabel: "업체목록" }}
      />
      <Drawer.Screen 
        name="MyInfo" 
        component={MyInfo} 
        options={{ drawerLabel: inbox }}
      />
      {type === "member" && (
        <Drawer.Screen 
          name="Request" 
          component={Request} 
          options={{ drawerLabel: "견적신청" }}
        />
      )}
    </Drawer.Navigator>
  )
}