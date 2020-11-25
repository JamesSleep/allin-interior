import React from "react";
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../../Screen/NormalMember/Home";
import Request from "../../Screen/NormalMember/Requset";
import AltnersRouter from "./AltnersStackRouter";
import Story from "../StoryStackRouter";
import MyPage from "../../Screen/NormalMember/MyPage";
import { buttonColor, _WIDTH } from "../../common/theme";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialCom from "react-native-vector-icons/MaterialCommunityIcons";

const Tab = createBottomTabNavigator();

export default () => (
  <Tab.Navigator
    initialRouteName="Home"
    headerMode="none"
    tabBarOptions={{
      activeTintColor: buttonColor,
      tabStyle: styles.tabBar,
      labelStyle: styles.label
    }}
  >
    <Tab.Screen
      name="Home"
      component={Home}
      options={{
        tabBarLabel: "홈",
        tabBarIcon: ({ color, size }) => (
          <Ionicons
            name="home-outline"
            color={color}
            size={size * 0.95}
          />
        )
      }}
    />
    <Tab.Screen
      name="Request"
      component={Request}
      options={{
        tabBarLabel: "견적요청함",
        tabBarIcon: ({ color, size }) => (
          <AntDesign
            name="inbox"
            color={color}
            size={size * 0.95}
          />
        )
      }}
    />
    <Tab.Screen
      name="AltnersRouter"
      component={AltnersRouter}
      options={{
        tabBarLabel: "올트너스",
        tabBarIcon: ({ color, size }) => (
          <MaterialCom
            name="account-hard-hat"
            color={color}
            size={size * 0.95}
          />
        )
      }}
    />
    <Tab.Screen
      name="Story"
      component={Story}
      options={{
        tabBarLabel: "스토리",
        tabBarIcon: ({ color, size }) => (
          <Ionicons
            name="book-outline"
            color={color}
            size={size * 0.95}
          />
        )
      }}
    />
    <Tab.Screen
      name="MyPage"
      component={MyPage}
      options={{
        tabBarLabel: "마이페이지",
        tabBarIcon: ({ color, size }) => (
          <AntDesign
            name="user"
            color={color}
            size={size * 0.95}
          />
        )
      }}
    />
  </Tab.Navigator>
)

const styles = StyleSheet.create({
  tabBar: {
    //height: _WIDTH*0.1,
  },
  label: {
    fontSize: _WIDTH / 40,
  },
})