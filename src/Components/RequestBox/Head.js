import React from "react";
import styled from "styled-components/native";
import { _WIDTH } from "../../common/theme";

const Container = styled.View`
  width: 100%;
  height: 60px;
  justify-content: center;
  align-items: center;
`;

const Text = styled.Text`
  font-size: ${_WIDTH / 24}px;
  font-weight: 500;
`;

export default () => (
  <Container>
    <Text>견적요청함</Text>
  </Container>
)