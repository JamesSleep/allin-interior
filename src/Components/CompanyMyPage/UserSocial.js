import React from "react";
import styled from "styled-components/native";
import { buttonColor, _WIDTH } from "../../common/theme";

const Container = styled.View`
  flex: 3;
  border-top-width: 7px;
  border-top-color: #dff9fb;
  justify-content: center;
  align-items: center;
`;

const Title = styled.Text`
  font-size: ${_WIDTH / 28}px;
`;

const IconList = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-around;
  margin: 10px 0px;
  padding: 0px 15px;
`;

const IconView = styled.View``;

const Image = styled.Image`
  width: ${_WIDTH / 8}px;
  height: ${_WIDTH / 8}px;
`;

const Text = styled.Text`
  font-size: ${_WIDTH / 32}px;
`;

const Count = styled.Text`
  font-size: ${_WIDTH / 30}px;
`;

const Number = styled.Text`
  color: ${buttonColor};
`;

export default ({ }) => (
  <Container>
    <Title>전문분야</Title>
    <IconList>
      <IconView>
        <Image
          source={require("../../Image/residential.png")}
        />
        <Text>주거공간</Text>
      </IconView>
      <IconView>
        <Image
          source={require("../../Image/space.png")}
        />
        <Text>상업공간</Text>
      </IconView>
      <IconView>
        <Image
          source={require("../../Image/partial_construction.png")}
        />
        <Text>부분시공</Text>
      </IconView>
    </IconList>
    <Count>
      시공횟수
      <Number> 22 </Number>회
    </Count>
  </Container>
);
