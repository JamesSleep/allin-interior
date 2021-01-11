import React from "react";
import styled from "styled-components/native";
import { _WIDTH } from "../../common/theme";

const Container = styled.View`
  flex-direction: row;
  padding: 10px 15px;
  border-bottom-width: 1px;
  border-bottom-color: #ecf0f1;
`;

const Image = styled.Image`
  width: ${_WIDTH * 0.3}px;
  height: ${_WIDTH * 0.3}px;
  border-radius: 10px;
  margin-right: 15px;
`;

const TextView = styled.View`
  justify-content: space-around;
`;

const Title = styled.Text`
  font-size: ${_WIDTH / 30}px;
  font-weight: bold;
`;

const Name = styled.Text`
  font-size: ${_WIDTH / 32}px;
`;

const Price = styled.Text`
  font-size: ${_WIDTH / 30}px;
  font-weight: bold;
`;

export default ({ info }) => (
  <Container>
    <Image source={info.imageUrl} />
    <TextView>
      <Title>[ 최고 조회수 / 구매상품 ]</Title>
      <Name>{info.name}</Name>
      <Price>{numbering(info.payment)}</Price>
    </TextView>
  </Container>
);

const numbering = (pay = "") => {
  const len = pay.length;
  let dot = 0;
  let result = "";
  const textArray = pay.split('');

  for (let i = len - 1; i >= 0; i--) {
    if (dot === 3) {
      result = ',' + result;
      dot = 0;
    }
    result = textArray[i] + result;
    dot++;
  }

  return result + " 원";
} 