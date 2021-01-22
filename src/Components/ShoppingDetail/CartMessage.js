import React from "react";
import styled from "styled-components/native";
import Material from "react-native-vector-icons/MaterialCommunityIcons";
import { buttonColor } from "../../common/theme";
import { TouchableOpacity } from "react-native-gesture-handler";

const Container = styled.View`
  position: absolute;
  width: 80%;
  height: 100px;
  background-color: rgba(0, 0, 0, 0.7)px;
  justify-content: center;
  align-items: center;
`;

const MessageView = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const MessageText = styled.Text`
  color: white;
  font-size: 15px;
  font-weight: bold;
  margin-left: 5px;
`;

const ButtonView = styled.View`
  padding: 5px 20px;
  margin-top: 10px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${buttonColor};
  border-radius: 5px;
`;

const ButtonText = styled.Text`
  color: white;
  font-size: 14px;
`;

export default ({ navigation }) => (
  <Container>
    <MessageView>
      <Material 
        name="cart-arrow-down"
        color="white"
        size={20}
      />
      <MessageText>
        장바구니에 상품이 담겼습니다.
      </MessageText>
    </MessageView>
    <TouchableOpacity
      onPress={() => navigation.navigate("Cart")}
    >
      <ButtonView>
        <ButtonText>장바구니 가기</ButtonText>
        <Material 
          name="chevron-right"
          color="white"
          size={20}
        />
      </ButtonView>
    </TouchableOpacity>
  </Container>
)