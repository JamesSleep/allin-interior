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

const Title = styled.Text`
  font-size: ${_WIDTH / 22}px;
`;

const Arrow = styled.View`
  position: absolute;
  left: ${_WIDTH / 20}px;
`;

export default ({ navigation }) => (
  <Container>
    <Title>견적 신청</Title>
    <Arrow>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <AntDesign
          name="arrowleft"
          size={_WIDTH / 20}
        />
      </TouchableOpacity>
    </Arrow>
  </Container>
)