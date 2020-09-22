import React from "react";
import { View, Text, ScrollView } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import SearchBar from "../../Components/Main/SearchBar";
import Ionicons from "react-native-vector-icons/Ionicons";
import { _WIDTH, backgroundColor, buttonColor } from "../../common/theme";
import Recommend from "../Main/Recommed";
import Story from "../Main/Story";
import AltnersRouter from "../../Router/AltnersRouter";
import ShoppingMain from "../Shopping/ShoppingMain";

const Tab = createMaterialTopTabNavigator();

export default function MainScreen({ navigation }) {
  return (
    <View style={{ flex: 1, backgroundColor: backgroundColor }}>
      <View 
        style={{ 
          width: "100%", 
          height: 50, 
          paddingVertical: 5, 
          paddingHorizontal: 20,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View style={{ width: "75%" }}><SearchBar /></View>
        <Ionicons 
          name="md-bookmark-outline"
          size={_WIDTH/16} 
        />
        <Ionicons 
          name="md-cart-outline"
          size={_WIDTH/14} 
        />
      </View>
      <View style={{ flex: 1 }}>
        <Tab.Navigator
          swipeEnabled={false}
          initialRouteName="Recommend"
          tabBarOptions={{
            labelStyle: { fontSize: 13 },
            tabStyle: { height: 40 },
            style: { borderBottomColor: buttonColor },
            indicatorStyle: { backgroundColor: buttonColor },
            activeTintColor: buttonColor,
            inactiveTintColor: "black",
          }}
        >
          <Tab.Screen name="Recommend" component={Recommend} options={{ tabBarLabel: "추천" }}/>
          <Tab.Screen name="AltnersRouter" component={AltnersRouter} options={{ tabBarLabel: "올트너스" }}/>
          <Tab.Screen name="Story" component={ShoppingMain} options={{ tabBarLabel: "집들이" }}/>
        </Tab.Navigator>
      </View>
    </View>
  )
}