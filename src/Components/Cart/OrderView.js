import React from "react";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { buttonColor, _WIDTH } from "../../common/theme";

const Container = styled.View`
  width: 100%;
  height: 80px;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.7);
  position: absolute;
  bottom: 0px;
`;

const PriceView = styled.View`
  padding-left: 10px;
  justify-content: center;
  align-items: flex-start;
`;

const CountText = styled.Text`
  font-size: 15px;
  color: white;
`;

const PriceText = styled.Text`
  font-size: 20px;
  font-weight: 700;
  color: white;
`;

const OrderButton = styled.View`
  width: ${_WIDTH * 0.52}px;
  height: 50px;
  margin-left: 15px;
  background-color: ${buttonColor};
  justify-content: center;
  align-items: center;
  border-radius: 5px;
`;

const OrderText = styled.Text`
  font-size: 16px;
  color: white;
`;

export default ({ price, count, goToPayment }) => (
  <Container>
    <PriceView>
      <CountText>{`총 ${count}개`}</CountText>
      <PriceText>{numbering(price.toString())}</PriceText>
    </PriceView>
    <TouchableOpacity
      activeOpacity={1}
      onPress={() => goToPayment()}
    >
      <OrderButton>
        <OrderText>주문하기</OrderText>
      </OrderButton>
    </TouchableOpacity>
  </Container>
)

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