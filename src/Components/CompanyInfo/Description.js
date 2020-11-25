import React from "react";
import styled from "styled-components/native";
import { _WIDTH } from "../../common/theme";

const Container = styled.View`
  padding: 0px 30px;
`;

const Title = styled.Text`
  font-size: ${_WIDTH / 27}px;
  font-weight: bold;
`;

const TextArea = styled.Text`
  margin-top: 20px;
`;

export default ({ description }) => (
  <Container>
    <Title>올트너스 소개</Title>
    <TextArea>{description}</TextArea>
  </Container>
);