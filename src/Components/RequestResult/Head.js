import React from "react";
import styled from "styled-components/native";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import { buttonColor, _WIDTH } from "../../common/theme";

const Container = styled.View`
  flex: 4;
  justify-content: center;
  align-items: center;
`;

const Text = styled.Text`
  margin-top: 10px;
  font-size: ${_WIDTH/22}px;
  font-weight: 400;
`;

export default () => (
  <Container>
    <EvilIcons 
      name="check"
      color={buttonColor}
      size={_WIDTH/7}
    />
    <Text>업체검색 신청완료</Text>
  </Container>
)