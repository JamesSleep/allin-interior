import React from "react";
import styled from "styled-components/native";
import { backgroundColor, _HEIGHT, _WIDTH, buttonColor } from "../../../../common/theme";
import Step1 from "../../../../Components/ShopCompanySignUp/Step1";
import Header from "../../../../Components/ShopCompanySignUp/Header";
import { TouchableWithoutFeedback, TouchableOpacity } from "react-native-gesture-handler";
import { Keyboard } from "react-native";
import Step2 from "../../../../Components/ShopCompanySignUp/Step2";
import Step3 from "../../../../Components/ShopCompanySignUp/Step3";

const Container = styled.View`
  flex: 1;
  background-color: ${backgroundColor};
`;

const ButtonView = styled.View`
  position: absolute;
  bottom: 0px;
  width: 100%;
  height: 90px;
  justify-content: center;
  align-items: center;
`;

const Button = styled.View`
  width: ${_WIDTH * 0.8}px;
  height: 50px;
  background-color: ${buttonColor};
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;

const ButtonText =styled.Text`
  font-size: 15px;
  color: white;
`;

export default ({ step, setStep, navigation, info, setInfo, imagePicker, signUpHandler }) => (
  <Container>
    <TouchableWithoutFeedback 
      containerStyle={{ flex: 1 }}
      onPress={Keyboard.dismiss} 
    >
      <Header 
        navigation={navigation}
        step={step}
        setStep={setStep} 
      />
      { step === 1 && <Step1 info={info} setInfo={setInfo} /> }
      { step === 2 && <Step2 info={info} setInfo={setInfo} /> }
      { step === 3 && <Step3 info={info} setInfo={setInfo} imagePicker={imagePicker} /> }
    </TouchableWithoutFeedback>
    <ButtonView>
      <TouchableOpacity
        onPress={() => {
          step === 3 ?
          signUpHandler() :
          setStep(step + 1)
        }}
      >
        <Button>
          <ButtonText>{step === 3 ? "회원가입완료" : "다음"}</ButtonText>
        </Button>
      </TouchableOpacity>
    </ButtonView>
  </Container>
)