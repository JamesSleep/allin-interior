import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Main from "./InteriorStackRouter";
import Company from "./CompanyStackRouter";

const Drawer = createDrawerNavigator();

export default () => (
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
  </Drawer.Navigator>
)