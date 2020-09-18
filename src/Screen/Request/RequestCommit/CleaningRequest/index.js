import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { backgroundColor } from "../../../../common/theme";
import Step1 from "./Step1";
import Footer from "./Footer";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";
import { CleaningPostAPI } from "../../../../common/api";
 
export default ({ navigation, route }) => {
  const { userInfo : {
    userId, userName, phoneNum, zipCode, address1, address2
  }} = route.params.option;
  const [cleaning, setCleaning] = useState({
    userId,
    userName,
    phoneNum,
    zipCode,
    address1,
    address2,
    area: "",
    category: "",
    oneRoom: false,
    cleaningType: "",
    cleaningDate: "",
    moveDate: "",
    structure: "",
    room: 0,
    bath: 0,
    veranda: 0,
  });
  const [step, setStep] = useState(0);
  const postData = async () => {
    const data = JSON.stringify({
      "userId": cleaning.userId,
      "zipCode": cleaning.zipCode,
      "address1": cleaning.address1,
      "address2": cleaning.address2,
      "area": cleaning.area,
      "category": cleaning.category,
      "oneRoom": cleaning.oneRoom ? "원룸청소" : "일반청소",
      "cleaningType": cleaning.cleaningType,
      "cleaningDate": cleaning.cleaningDate,
      "moveDate": cleaning.moveDate,
      "structure": cleaning.structure,
      "room": cleaning.room,
      "bath": cleaning.bath,
      "veranda": cleaning.veranda,
    });
    const result = await CleaningPostAPI (data);
    if(result[0]) {
      console.log("Success");
      navigation.navigate("ReceiptRequest", {
        option: "Cleaning"
      });
    } else {
      console.log("Failed");
    }
  }
  return (
    <View style={styles.container}>
      <View style={{ flex: 10 }}>
        {step === 0 && (
          <Step1 
            state={cleaning}
            setState={setCleaning}
          />
        )}
        {step === 1 && (
          <Step2 
            state={cleaning}
            setState={setCleaning}
          />
        )}
        {step === 2 && (
          <Step3 
            state={cleaning}
            setState={setCleaning}
          />
        )}
        {step === 3 && (
          <Step4 
            state={cleaning}
            setState={setCleaning}
          />
        )}
        {step === 4 && (
          <Step5
            state={cleaning}
            setState={setCleaning}
          />
        )}
      </View>
      <Footer 
        navigation={navigation}
        step={step}
        setStep={setStep}
        postData={postData}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: backgroundColor
  }
});