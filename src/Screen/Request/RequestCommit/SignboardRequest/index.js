import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { backgroundColor } from "../../../../common/theme";
import Footer from "./Footer";
import Step1 from "./Step1"; // 주소입력
import Step2 from "./Step2"; // 기존간판 여부
import Step3 from "./Step3"; // 기존간판 철거
import Step4 from "./Step4"; // 간판 종류
import Step5 from "./Step5"; // 간판 상세종류
import Step6 from "./Step6"; // 시공 타입
import Step7 from "./Step7"; // 간판 사이즈
import Step8 from "./Step8"; // 간판 글자
import Step9 from "./Step9";
import { SignboardPostAPI } from "../../../../common/api";

export default ({ navigation, route }) => {
  const { userInfo : {
    userId, userName, phoneNum, zipCode, address1, address2
  }} = route.params.option;
  const [step, setStep] = useState(0);
  const [signboard, setSignboard] = useState({
    userId,
    userName,
    phoneNum,
    zipCode,
    address1,
    address2,
    oldBoard: false,
    demolition: false,
    boardStyle: "",
    detailStyle: "", 
    construction: "", //시공타입
    width: 0,
    height: 0,
    mainTitle: "",
    subTitle: "",
    request: "",
  });
  const postData = async () => {
    const data = JSON.stringify({
      "userId": signboard.userId,
      "userName": signboard.userName,
      "phoneNum": signboard.phoneNum,
      "zipCode": signboard.zipCode,
      "address1": signboard.address1,
      "address2": signboard.address2,
      "oldBoard": signboard.oldBoard ? 1:0,
      "demolition": signboard.demolition ? 1:0,
      "boardStyle": signboard.boardStyle,
      "detailStyle": signboard.detailStyle, 
      "construction": signboard.construction,
      "width": signboard.width,
      "height": signboard.height,
      "mainTitle": signboard.mainTitle,
      "subTitle": signboard.subTitle,
      "request": signboard.request,
    })
    const result = await SignboardPostAPI(data);
    if(result[0]) {
      console.log("Success");
      navigation.navigate("ReceiptRequest", {
        option: "Signboard"
      });
    } else {
      console.log("Failed");
      console.log(result[1]);
    }
  }
  return (
    <View style={styles.container}>
      <View style={{ flex: 10 }}>
        { step === 0 && <Step1 state={signboard} setState={setSignboard} /> }
        { step === 1 && <Step2 state={signboard} setState={setSignboard} /> }
        { step === 2 && <Step3 state={signboard} setState={setSignboard} /> }
        { step === 3 && <Step4 state={signboard} setState={setSignboard} /> }
        { step === 4 && <Step5 state={signboard} setState={setSignboard} /> }
        { step === 5 && <Step6 state={signboard} setState={setSignboard} /> }
        { step === 6 && <Step7 state={signboard} setState={setSignboard} /> }
        { step === 7 && <Step8 state={signboard} setState={setSignboard} /> }
        { step === 8 && <Step9 state={signboard} setState={setSignboard} /> }
      </View>
      <Footer 
        navigation={navigation}
        step={step}
        setStep={setStep}
        oldBoard={signboard.oldBoard}
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