import React from "react";
import styled from "styled-components/native";
import AntDesign from "react-native-vector-icons/AntDesign";
import { _WIDTH } from "../../common/theme";
import { TouchableOpacity } from "react-native-gesture-handler";

const Container = styled.View`
  width: 100%;
  height: 60px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-bottom-width: 0.5px;
  border-color: #dddddd;
`;

const BackView = styled.View`
  position: absolute;
  left: 20px;
`;

const Title = styled.Text`
  font-size: 15px;
`;

export default ({ navigation }) => (
  <Container>
    <BackView>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <AntDesign 
          name="arrowleft"
          size={22}
        />
      </TouchableOpacity>
    </BackView>
    <Title>주문서 작성</Title>
  </Container>
)