import React from "react";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import AntDesign from "react-native-vector-icons/AntDesign";
import { backgroundColor } from "../../../common/theme";

const Container = styled.View`
  width: 100%;
  height: 60px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${backgroundColor};
`;

const Exit = styled.View`
  position: absolute;
  left: 20px;
`;

const Title = styled.Text`
  font-size: 15px;
`;

export default ({ title, navigation }) => (
  <Container>
    <Title>{title}</Title>
    <Exit>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
      >
        <AntDesign 
          name="close"
          size={25}
        />
      </TouchableOpacity>
    </Exit>
  </Container>
)