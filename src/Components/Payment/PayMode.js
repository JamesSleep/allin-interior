import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import styled from "styled-components/native";
import { buttonColor, _WIDTH } from "../../common/theme";

const Container = styled.View`
  padding: 20px 30px;
  border-bottom-width: 10px;
  border-bottom-color: #dff9fb;
`;

const Title = styled.Text`
  font-size: ${_WIDTH / 26}px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const Content = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Button = styled.View`
  width: ${_WIDTH * 0.4}px;
  height: ${_WIDTH * 0.13}px;
  padding: 0px 15px;
  border-width: 0.5px;
  border-color: ${props => props.selected ? "#bdc3c7" : "gray"};
  border-radius: 5px;
  margin-bottom: 20px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background-color: ${props => props.selected ? "#bdc3c7" : "white"};
`;

const Image = styled.Image`
  width: ${_WIDTH / 10}px;
  height: ${_WIDTH / 10}px;
  margin-right: 5px;
`;

const Text = styled.Text`
  font-size: ${_WIDTH / 30}px;
`;

export default ({ payMode, setPayMode }) => (
  <Container>
    <Title>결제수단</Title>
    <Content>
      <TouchableOpacity onPress={() => setPayMode("deposit")}>
        <Button selected={payMode === "deposit"}>
          <Image source={require("../../Image/deposit.png")} />
          <Text>무통장입금</Text>
        </Button>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setPayMode("card")}>
        <Button selected={payMode === "card"}>
          <Image source={require("../../Image/card.png")} />
          <Text>카드결제</Text>
        </Button>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setPayMode("easy_card")}>
        <Button selected={payMode === "easy_card"}>
          <Image source={require("../../Image/easy_card.png")} />
          <Text>카드 간편결제</Text>
        </Button>
      </TouchableOpacity>
    </Content>
  </Container>
)