import React from "react";
import { View, StyleSheet, Text } from "react-native";
import AuthPhonePresenter from "./AuthPhonePresenter";

export default ({ navigation, route }) => {
  const { option } = route.params;
  const nextStep = () => {
    switch (option) {
      case "general":
        navigation.navigate("GeneralSignUp")
        break;
      case "company":
        navigation.navigate("CompanySignUp")
        break;
      case "shopCompany":
        navigation.navigate("ShopCompanySignUp")
        break;
      default:
        break;
    }
  }

  return (
    <AuthPhonePresenter 
      navigation={navigation}
      option={option}
      nextStep={nextStep}
    />
  )
}