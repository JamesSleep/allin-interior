import React from "react";
import styled from "styled-components/native";
import { _WIDTH } from "../../common/theme";

const Container = styled.View`
  padding: 10px 20px;
`;

const Row = styled.View`
  flex-direction: row;
  margin: 6px 0px;
`;

const Title = styled.Text`
  width: ${_WIDTH * 0.25}px;
  font-size: ${_WIDTH / 30}px;
`;

const Value = styled.Text`
  font-size: ${_WIDTH / 30}px;
  font-weight: ${props => props.bold ? "bold" : "500"};
`;

export default ({ info }) => (
  <Container>
    <Row>
      <Title>제조사</Title>
      <Value>{info.brand}</Value>
    </Row>
    <Row>
      <Title>원산지</Title>
      <Value>{info.from}</Value>
    </Row>
    <Row>
      <Title>브랜드</Title>
      <Value>{info.brand}</Value>
    </Row>
    <Row>
      <Title>시중가격</Title>
      <Value>{numbering(info.original_price)}</Value>
    </Row>
    <Row>
      <Title>판매가격</Title>
      <Value bold>{numbering(info.sale_price)}</Value>
    </Row>
    <Row>
      <Title>포인트</Title>
      <Value>{info.point}점</Value>
    </Row>
    <Row>
      <Title>배송비</Title>
      <Value>
        {info.transfer_fee === "0" ?
          "무료배송" :
          numbering(info.transfer_fee)
        }
      </Value>
    </Row>
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