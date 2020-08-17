import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MainScreen from "../Screen/Main/MainScreen";
import Shopping from "../Screen/Main/Shopping"
import Estimate from "../Screen/Main/Estimate"
import MyPage from "../Screen/Main/MyPage"
import Review from "../Screen/Main/Review"

const Tab = createBottomTabNavigator();

const MainRouter = () => {
	return (
		<Tab.Navigator initialRouteName="MainScreen">
			<Tab.Screen name="MainScreen" component={MainScreen} />
			<Tab.Screen name="Shopping" component={Shopping} />
			<Tab.Screen name="Estimate" component={Estimate} />
			<Tab.Screen name="MyPage" component={MyPage} />
			<Tab.Screen name="Review" component={Review} />
		</Tab.Navigator>
	)
}

export default MainRouter;