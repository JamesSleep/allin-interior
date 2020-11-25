import React from "react";
import styled from "styled-components/native";
import { _WIDTH } from "../../common/theme";

const Container = styled.View`
  width: 100%;
  padding: 10px 30px;
`;

const Title = styled.Text`
  font-size: ${_WIDTH / 27}px;
  font-weight: bold;
`;

const IconView = styled.View`
  width: 100%;
  background-color: #F9F9F9;
  border-radius: 10px;
  margin: 10px 0px;
  padding: 10px 20px;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const IconTile = styled.View`
  justify-content: center;
  align-items: center;
`;

const Icon = styled.Image`
  width: ${_WIDTH / 7}px;
  height: ${_WIDTH / 7}px;
`;

const Text = styled.Text`
  color: gray;
  font-size: ${_WIDTH / 30}px;
`;

export default () => (
  <Container>
    <Title>전문분야</Title>
    <IconView>
      <IconTile>
        <Icon source={require("../../Image/comprehensive.png")} />
        <Text>종합시공</Text>
      </IconTile>
      <IconTile>
        <Icon source={require("../../Image/comprehensive.png")} />
        <Text>종합시공</Text>
      </IconTile>
      <IconTile>
        <Icon source={require("../../Image/comprehensive.png")} />
        <Text>종합시공</Text>
      </IconTile>
      <IconTile>
        <Icon source={require("../../Image/comprehensive.png")} />
        <Text>종합시공</Text>
      </IconTile>
    </IconView>
  </Container>
);