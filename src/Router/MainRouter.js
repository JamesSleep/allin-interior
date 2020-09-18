import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image } from "react-native";
import { _WIDTH, buttonColor, nonActive, backgroundColor } from "../common/theme";
import SimpleIcons from "react-native-vector-icons/SimpleLineIcons";
import MaterialComIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Shopping from "../Screen/Main/Shopping"
import Estimate from "../Screen/Request/Estimate"
import HomeStackRouter from "./HomeStackRouter";
import MyPageRouter from "./MyPageRouter";
import StoryRouter from "./StoryRouter";
import RequestRouter from "./RequestRouter";

const Tab = createBottomTabNavigator();

const MainRouter = () => {
	return (
		<Tab.Navigator 
			initialRouteName="RequestRouter" 
			tabBarOptions={{ 
				activeTintColor: buttonColor, 
				inactiveTintColor: nonActive,
				tabStyle: { backgroundColor: backgroundColor }
			}}
		>
			<Tab.Screen 
				name="HomeStackRouter" 
				component={HomeStackRouter} 
				options={{
					tabBarLabel: "홈",
					tabBarIcon: ({ color, size }) => (
						<SimpleIcons name="home" size={size-3} color={color} />
					)
				}}
			/>
			<Tab.Screen 
				name="Shopping" 
				component={Shopping} 
				options={{
					tabBarLabel: "쇼핑",
					tabBarIcon: ({ color, size }) => (
						<MaterialComIcons name="storefront-outline" size={size} color={color} />
					)
				}}
			/>
			<Tab.Screen 
				name="RequestRouter" 
				component={RequestRouter} 
				options={{
					tabBarLabel: "견적의뢰",
					tabBarIcon: ({ color, size }) => (
						<Image 
							source={require("../Image/request.png")} 
							style={{ width:size+2, height:size+2, tintColor: color }} 
						/>
					)
				}}
			/>
			<Tab.Screen 
				name="StoryRouter" 
				component={StoryRouter} 
				options={{
					tabBarLabel: "스토리",
					tabBarIcon: ({ color, size }) => (
						<SimpleIcons name="book-open" size={size-3} color={color} />
					)
				}}
			/>
			<Tab.Screen 
				name="MyPageRouter" 
				component={MyPageRouter} 
				options={{
					tabBarLabel: "마이페이지",
					tabBarIcon: ({ color, size }) => (
						<Image 
							source={require("../Image/mypage.png")} 
							style={{ width:size+3, height:size+3, tintColor: color }} 
						/>
					)
				}}
			/>
		</Tab.Navigator>
	)
}

export default MainRouter;