import React from "react";
import styled from "styled-components/native";
import AntDesign from "react-native-vector-icons/AntDesign";
import { TouchableOpacity } from "react-native-gesture-handler";

const Container = styled.View`
  width: 100%;
  height: 80px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Title = styled.Text`
  font-size: 17px;
`;

const BackButton = styled.View`
  position: absolute;
  left: 20px;
`;

export default ({ navigation, step, setStep }) => (
  <Container>
    <Title>회원가입</Title>
    <BackButton>
      <TouchableOpacity
        onPress={() => {
          step === 1 ?
          navigation.goBack() :
          setStep(step - 1)
        }}
      >
        <AntDesign 
          name="arrowleft"
          size={25}
        />
      </TouchableOpacity>
    </BackButton>
  </Container>
)