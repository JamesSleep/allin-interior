import React from "react";
import { View, Text, Image } from "react-native";
import { _WIDTH, backgroundColor, buttonColor, nonActive } from "../../../theme";
import SearchBar from "../../Components/Main/SearchBar";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Residential from "./Residential";
import Commercial from "./Commercial";
import { TouchableOpacity } from "react-native-gesture-handler";

const Tab = createMaterialTopTabNavigator();

export default function Estimate({ navigation }) {
  return (
    <View style={{ flex: 1, backgroundColor: backgroundColor }}>
      <View style={{ width: "100%", height: 60, flexDirection: "row", justifyContent: "space-around", alignItems: "center" }}>
        <View style={{ width: "70%", justifyContent: "center" }}><SearchBar /></View>
        <TouchableOpacity>
          <Text style={{ color: buttonColor }}>견적신청</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1 }}>
        <Tab.Navigator
          swipeEnabled={false}
          tabBarOptions={{
            labelStyle: { fontSize: 14 },
            tabStyle: { height: 40 },
            indicatorStyle: { backgroundColor: buttonColor },
            activeTintColor: buttonColor,
            inactiveTintColor: nonActive,
          }}
        >
          <Tab.Screen name="Residential" component={Residential} options={{ tabBarLabel: "주거공간" }}/>
          <Tab.Screen name="Commercial" component={Commercial} options={{ tabBarLabel: "상업공간" }}/>
        </Tab.Navigator>
      </View>
    </View>
  )
}