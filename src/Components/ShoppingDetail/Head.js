import React from "react";
import styled from "styled-components/native";
import { _WIDTH } from "../../common/theme";
import AntDesign from "react-native-vector-icons/AntDesign";
import { TouchableOpacity } from "react-native-gesture-handler";

const Container = styled.View`
  width: 100%;
  height: 60px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Title = styled.Text`
  font-size: ${_WIDTH / 26}px;
`;

const Back = styled.View`
  position: absolute;
  left: 10px;
`;

const Home = styled.View`
  position: absolute;
  right: 10px;
`;

export default ({ navigation }) => (
  <Container>
    <Title>상품정보</Title>
    <Back onTouchEnd={() => navigation.goBack()}>
      <AntDesign
        name="arrowleft"
        size={_WIDTH / 22}
      />
    </Back>
    <Home>
      <TouchableOpacity onPress={() => navigation.replace("Home")}>
        <AntDesign
          name="home"
          size={_WIDTH / 19}
        />
      </TouchableOpacity>
    </Home>
  </Container>
)