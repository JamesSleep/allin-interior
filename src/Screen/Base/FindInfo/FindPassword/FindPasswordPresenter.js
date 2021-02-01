import React from "react";
import styled from "styled-components/native";
import AntDesign from "react-native-vector-icons/AntDesign";
import { backgroundColor, _WIDTH } from "../../../../common/theme";
import { TouchableOpacity, TouchableWithoutFeedback } from "react-native-gesture-handler";
import { Keyboard, KeyboardAvoidingView, Platform } from "react-native";
import DescriptView from "../../../../Components/FindPassword/DescriptView";
import InputContainer from "../../../../Components/FindPassword/InputContainer";
import ReturnEmail from "../../../../Components/FindPassword/ReturnEmail";

const Container = styled.View`
  width: 100%;
  height: 100%;
  background-color: ${backgroundColor};
  justify-content: center;
  align-items: center;
`;

const BackButton = styled.View`
  position: absolute;
  top: 20px;
  left: 20px;
`;

export default ({ navigation, value, setValue, handler }) => (
  <KeyboardAvoidingView
    behavior={Platform.OS === "ios" ? "padding" : null}
    style={{ flex: 1 }}
  >
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <BackButton>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <AntDesign name="arrowleft" size={25} />
          </TouchableOpacity>
        </BackButton>
        { value.email === "" ? (
          <>
          <DescriptView />
          <InputContainer 
            value={value}
            setValue={setValue}
            handler={handler}
          />
          </>
        ) : (
          <ReturnEmail value={value} />
        )}
      </Container>
    </TouchableWithoutFeedback>
  </KeyboardAvoidingView>
)