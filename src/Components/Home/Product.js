import React from "react";
import styled from "styled-components/native";
import { _WIDTH } from "../../common/theme";

const Container = styled.View`
  margin: 0px 5px;
`;

const Image = styled.Image`
  width: ${_WIDTH / 5}px;
  height: ${_WIDTH / 5}px;
  border-radius: 10px;
  margin-bottom: 10px;
`;

const Text = styled.Text`
  margin-bottom: 5px;
  font-size: ${_WIDTH/35}px
`;

export default ({ image }) => (
  <Container>
    <Image source={image} />
    <Text>상품1</Text>
    <Text>10,000원</Text>
  </Container>
)