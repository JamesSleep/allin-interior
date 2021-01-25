import React from "react";
import styled from "styled-components/native";

const Container = styled.View`
  border-color: #eeeeee;
  border-bottom-width: 8px;
`;

const TitleView = styled.View`
  width: 100%;
  height: 50px;
  flex-direction: row;
  align-items: center;
  padding: 0px 20px;
  border-color: #dddddd;
  border-bottom-width: 0.7px;
`;

const TitleText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin-right: 10px;
`;

const InfoView = styled.View`
  padding: 10px 20px;
  justify-content: center;
  align-items: flex-start;
`;

const InfoRow = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 5px 0px;
`

const InfoTitle = styled.Text`
  font-size: 14px;
`;

const InfoContent = styled.Text`
  font-size: 14px;
`;

const PriceView = styled.View`
  padding: 10px 20px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const PriceTitle = styled.Text`
  font-size: 15px;
  font-weight: bold;
`;

const PriceText = styled.Text`
  font-size: 15px;
  font-weight: bold;
  color: black;
`;

export default ({ price, transfer }) => (
  <Container>
    <TitleView>
      <TitleText>결제 정보</TitleText>
    </TitleView>
    <InfoView>
      <InfoRow>
        <InfoTitle>주문 금액</InfoTitle>
        <InfoContent>{numbering(price.toString())}</InfoContent>
      </InfoRow>
      <InfoRow>
        <InfoTitle>배송비</InfoTitle>
        <InfoContent>{numbering(transfer.toString())}</InfoContent>
      </InfoRow>
    </InfoView>
    <PriceView>
      <PriceTitle>총 결제금액</PriceTitle>
      <PriceText>{numbering((price+transfer).toString())}</PriceText>
    </PriceView>
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

  return result + "원";
} 
