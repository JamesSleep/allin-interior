import React from "react";
import styled from "styled-components/native";
import AreaInput from "../Residential/AreaInput";
import AddressSearch from "../Residential/AddressSearch";
import SelectAreaStyle from "./SelectAreaStyle";
import { KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard } from "react-native";

const Container = styled.View`
  padding: 0px 20px;
`;

export default ({ value, setValue }) => (
  <KeyboardAvoidingView
    enabled
    keyboardVerticalOffset={20}
    behavior={Platform.OS === "ios" ? "padding" : null}
    style={{ flex: 1 }}
  >
    <TouchableWithoutFeedback 
      style={{flex: 1}}
      onPress={Keyboard.dismiss}
    >
      <Container>
        <SelectAreaStyle value={value} setValue={setValue} /> 
        <AddressSearch info={value} setInfo={setValue} />
        <AreaInput value={value} setValue={setValue} />
      </Container>
    </TouchableWithoutFeedback>
  </KeyboardAvoidingView>
);