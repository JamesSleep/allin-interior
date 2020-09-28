import React, { useState } from "react";
import AgreementPresenter from "./AgreementPresenter";
import { postMessage } from "../../../../utils/postMessage";

export default ({ navigation, route }) => {
  const { option } = route.params;
  const [check, setCheck] = useState({
    location: false,
    individual: false,
    allin: false
  }); 
  const nextStep = () => {
    if(check.allin && check.individual && check.location) {
      navigation.navigate("AuthWithPhone", { option: option })
    } else {
      postMessage("이용약관에 동의해주세요.");
    }
  }
  return (
    <AgreementPresenter 
      navigation={navigation}
      check={check}
      setState={setCheck}
      nextStep={nextStep}
    />
  )
}