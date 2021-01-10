import React from "react";
import styled from "styled-components/native";
import AntDesign from "react-native-vector-icons/AntDesign";
import { TouchableOpacity } from "react-native-gesture-handler";
import { _WIDTH } from "../../common/theme";

const Container = styled.View`
  height: ${_WIDTH / 10}px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Text = styled.Text`
  font-size: ${_WIDTH / 25}px;
  font-weight: bold;
`;

const Back = styled.View`
  position: absolute;
  left: 15px;
`;

export default ({ navigation }) => (
  <Container>
    <Back>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <AntDesign
          name={"arrowleft"}
          size={_WIDTH / 20}
        />
      </TouchableOpacity>
    </Back>
    <Text>계약금 결제</Text>
  </Container>
)