import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";
import { backgroundColor } from "../../../../common/theme";
import Footer from "../../../../Components/Request/Footer";
import LogoView from "../../../../Components/Request/LogoView";
import RequestText from "../../../../Components/Request/RequestText";
import RequestMenu from "../../../../Components/Request/RequestMenu";
import AsyncStorage from "@react-native-community/async-storage";
import { UserInfoAPI } from "../../../../common/api";

const options = [
  { 
    name: "주거공간", 
    route: "Residential",
    screen: "StructRequest",
    icon: require("../../../../Image/residential.png") 
  },
  { 
    name: "상업공간", 
    route: "Commercial",
    screen: "StructRequest",
    icon: require("../../../../Image/office.png") 
  },
  { 
    name: "청소", 
    route: "Cleaning",
    screen: "CleaningRequest",
    icon: require("../../../../Image/interior_cleaning.png") 
  },
  { 
    name: "간판", 
    route: "Signboard",
    screen: "SignboardRequest",
    icon: require("../../../../Image/regular_cleaning.png") 
  },
];

export default ({ navigation, route }) => {
  const [option, setOption] = useState(0);
  const [userInfo, setUserInfo] = useState({
    userId: "", userName: "", phoneNum: "", 
    zipCode: "", address1: "", address2: ""
  });
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const loginData = JSON.parse(await AsyncStorage.getItem("loginData"));
    const postData = JSON.stringify({
      "userId": loginData.userId
    });
    const result = await UserInfoAPI(postData);
    const { joinInfo : {
      mb_id: userId,
      mb_name: userName,
      mb_phone: phoneNum,
      mb_zipcode: zipCode,
      mb_address1: address1,
      mb_address2: address2,
    }} = result[1];
    setUserInfo({
      userId, userName, phoneNum,
      zipCode, address1, address2
    });
  }
  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}><LogoView /></View>
      <View style={{ flex: 2.5 }}>
        <RequestText 
          text1="시공 타입"
          text2="을 선택해주세요"
        />
      </View>
      <View style={{ flex: 5 }}>
        <RequestMenu 
          options={options}
          setOption={setOption}
          selected={option}
        />
      </View>
      <View style={{ flex: 1.5 }}>
        <Footer 
          navigation={navigation}
          next={options[option].screen}
          pararms={{
            screen: options[option].route,
            userInfo: userInfo
          }}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: backgroundColor
  }
});


//1 1.8 5.5 1.1 