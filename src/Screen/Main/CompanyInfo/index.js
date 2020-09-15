import React from "react";
import { View, Text, StyleSheet, ScrollView, Platform } from "react-native";
import Header from "./Header";
import { backgroundColor, buttonColor, _WIDTH } from "../../../common/theme";
import HorizontalSlide from "./HorizontalSlide";
import Information from "./Information";
import Category from "./Category";
import Description from "./Description";
import Portpolio from "./Portpolio";
import { TouchableOpacity } from "react-native-gesture-handler";

export default ({ navigation, route }) => {
  const {
    joinInfo, area, categories, images, portpolio
  } = route.params.companyInfo;
  return (
    <View style={styles.container}>
      <Header 
        name={joinInfo.co_name}
        navigation={navigation}
      />
      <ScrollView 
        contentContainerStyle={
          Platform.OS === "android" && { paddingBottom: 50 }
        }
      >
        <HorizontalSlide images={images} />
        <Information 
          joinInfo={joinInfo}
          area={area}
        />
        <Category categories={categories} />
        <Description description={joinInfo.co_description} />
      </ScrollView>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={()=>navigation.navigate("RequestRouter", {
            screen: "SelectCategory"
          })}
        >
          <Text style={styles.text}>견적신청하기</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: backgroundColor,
  },
  buttonContainer: {
    width: "100%",
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 30
  },
  button: {
    width: _WIDTH*0.9,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: buttonColor,
    borderRadius: 5,
  },
  text: {
    fontSize: 15,
    color: "white"
  }
})