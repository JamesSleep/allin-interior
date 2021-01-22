import React from "react";
import styled from "styled-components/native";
import { _WIDTH } from "../../common/theme";
import AntDesign from "react-native-vector-icons/AntDesign";
import { TouchableOpacity } from "react-native-gesture-handler";

const Container = styled.View`
  width: 100%;
  height: 60px;
  justify-content: center;
  align-items: center;
`;

const BackButton = styled.View`
  position: absolute;
  left: 20px;
`;

const Title = styled.Text`
  font-size: 16px;
`;

export default ({ navigation }) => (
  <Container>
    <BackButton>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <AntDesign 
          name="arrowleft"
          size={_WIDTH / 19}
        />
      </TouchableOpacity>
    </BackButton>
    <Title>장바구니</Title>
  </Container>
)