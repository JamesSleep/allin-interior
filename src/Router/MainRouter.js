import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Shopping from "../Screen/Main/Shopping"
import Estimate from "../Screen/Request/Estimate"
import Review from "../Screen/Main/Review"
import { Image } from "react-native";
import { _WIDTH, buttonColor, nonActive } from "../../theme";
import HomeStackRouter from "./HomeStackRouter";
import MyPageRouter from "./MyPageRouter";

const Tab = createBottomTabNavigator();

const MainRouter = () => {
	return (
		<Tab.Navigator 
			initialRouteName="HomeStackRouter" 
			tabBarOptions={{ 
				activeTintColor: buttonColor, 
				inactiveTintColor: "gray" 
			}}
		>
			<Tab.Screen 
				name="HomeStackRouter" 
				component={HomeStackRouter} 
				options={{
					tabBarLabel: "홈",
					tabBarIcon: ({ color, size }) => (
						<Image 
							source={require("../Image/home.png")} 
							style={{ width:_WIDTH/15, height:_WIDTH/15, tintColor: color }} 
						/>
					)
				}}
			/>
			<Tab.Screen 
				name="Shopping" 
				component={Shopping} 
				options={{
					tabBarLabel: "쇼핑",
					tabBarIcon: ({ color, size }) => (
						<Image 
							source={require("../Image/shopping2.png")} 
							style={{ width:_WIDTH/15, height:_WIDTH/15, tintColor: color }} 
						/>
					)
				}}
			/>
			<Tab.Screen 
				name="Estimate" 
				component={Estimate} 
				options={{
					tabBarLabel: "견적의뢰",
					tabBarIcon: ({ color, size }) => (
						<Image 
							source={require("../Image/request.png")} 
							style={{ width:_WIDTH/15, height:_WIDTH/15, tintColor: color }} 
						/>
					)
				}}
			/>
			<Tab.Screen 
				name="Review" 
				component={Review} 
				options={{
					tabBarLabel: "집들이",
					tabBarIcon: ({ color, size }) => (
						<Image 
							source={require("../Image/event.png")} 
							style={{ width:_WIDTH/15, height:_WIDTH/15, tintColor: color }} 
						/>
					)
				}}
			/>
			<Tab.Screen 
				name="MyPage" 
				component={MyPageRouter} 
				options={{
					tabBarLabel: "마이페이지",
					tabBarIcon: ({ color, size }) => (
						<Image 
							source={require("../Image/mypage.png")} 
							style={{ width:_WIDTH/15, height:_WIDTH/15, tintColor: color }} 
						/>
					)
				}}
			/>
		</Tab.Navigator>
	)
}

export default MainRouter;