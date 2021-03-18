import React from "react";
import styled from "styled-components/native";
import { backgroundColor, _WIDTH, buttonColor } from "../../../common/theme";
import Header from "../../../Components/Altners/Requset/Header";
import Price from "../../../Components/Altners/InputPrice/Price";
import { KeyboardAvoidingView, TouchableWithoutFeedback, Platform, Keyboard } from "react-native";
import SelectDate from "../../../Components/Altners/InputPrice/SelectDate";
import { TouchableOpacity } from "react-native-gesture-handler";
import ImageUpload from "../../../Components/Altners/InputPrice/ImageUpload";

const Container = styled.View`
  flex: 1;
  background-color: ${backgroundColor};
`;

const Content = styled.View`
  padding: 10px 30px;
`;

const ButtonView = styled.View`
  width: 100%;
  height: 70px;
  position: absolute;
  bottom: 0px;
  justify-content: center;
  align-items: center;
`;

const Button = styled.View`
  width: ${_WIDTH * 0.8}px;
  height: 40px;
  background-color: ${buttonColor};
  border-radius: 5px;
  justify-content: center;
  align-items: center;
`;

const Text = styled.Text`
  color: white;
  font-size: 15px;
`;

export default ({ navigation, info, value, setValue, update, imagePicker, imageClean, photo }) => (
  <KeyboardAvoidingView
    behavior={Platform.OS === "ios" ? "padding" : null}
    style={{ flex: 1 }}
  >
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <Header 
          navigation={navigation}
          title={"정산하기"}
        />
        <Content>
          <Price 
            value={value}
            setValue={setValue}
          />
          <SelectDate 
            value={value}
            setValue={setValue}
          />
          <ImageUpload 
            imagePicker={imagePicker}
            imageClean={imageClean}
            photo={photo}
          />
        </Content>
        <ButtonView>
          <TouchableOpacity onPress={() => update()}>
            <Button>
              <Text>완료</Text>
            </Button>
          </TouchableOpacity>
        </ButtonView>
      </Container>
    </TouchableWithoutFeedback>
  </KeyboardAvoidingView>
)