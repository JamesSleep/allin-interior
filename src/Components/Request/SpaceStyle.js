import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import styled from "styled-components/native";
import { buttonColor, _WIDTH } from "../../common/theme";
import Title from "./Title";

const Container = styled.View``;

const Content = styled.View`
  flex-direction: row;
  margin: 15px 0px;
`;

const SelectView = styled.View`
  border-radius: 15px;
  border-color: ${prop => prop.selected ? buttonColor : "gray"};
  border-width: 1px;
  width: ${_WIDTH * 0.2}px;
  height: ${_WIDTH * 0.07}px;
  justify-content: center;
  align-items: center;
  margin-right: 12px;
`;

const SelectText = styled.Text`
  color: ${prop => prop.selected ? buttonColor : "gray"};
  font-size: ${_WIDTH / 28}px;
`;

export default ({ info, setInfo }) => (
  <Container>
    <Title>공간 유형</Title>
    <Content>
      <TouchableOpacity onPress={() => setInfo({ ...info, spaceStyle: "Residential" })}>
        <SelectView selected={info.spaceStyle === "Residential"}>
          <SelectText selected={info.spaceStyle === "Residential"}>주거공간</SelectText>
        </SelectView>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setInfo({ ...info, spaceStyle: "Commercial" })}>
        <SelectView selected={info.spaceStyle === "Commercial"}>
          <SelectText selected={info.spaceStyle === "Commercial"}>상업공간</SelectText>
        </SelectView>
      </TouchableOpacity>
    </Content>
  </Container>
)