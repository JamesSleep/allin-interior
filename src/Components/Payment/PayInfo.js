import React from "react";
import styled from "styled-components/native";
import { _WIDTH } from "../../common/theme";

const Container = styled.View`
  padding: 25px 30px;
  border-bottom-width: 10px;
  border-bottom-color: #dff9fb;
`;

const Title = styled.Text`
  color: gray;
  font-size: ${_WIDTH / 31}px;
  margin-bottom: 15px;
`;

const BoldText = styled.Text`
  font-size: ${_WIDTH / 25}px;
  font-weight: bold;
`;

const PayView = styled.View`
  width: 100%;
  margin-top: 10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Text = styled.Text`
  font-size: ${_WIDTH / 27}px;
`;

export default ({ info }) => (
  <Container>
    <Title>
      {requestStyle(info.request_style)}
      ({info.space_style}) / 리모델링
    </Title>
    <BoldText>최종 결제 금액</BoldText>
    <PayView>
      <Text>총 지불 금액</Text>
      <BoldText>
        {numbering(info.payment)}
      </BoldText>
    </PayView>
  </Container>
);

const requestStyle = (number) => {
  switch (number) {
    case "100": return "주거공간";
    case "200": return "상업공간";
    case "300": return "청소";
  }
}

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