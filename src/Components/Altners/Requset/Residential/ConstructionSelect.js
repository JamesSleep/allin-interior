import React from "react";
import styled from "styled-components/native";
import Title from "../Title";
import { TouchableOpacity } from "react-native-gesture-handler";
import { _WIDTH, buttonColor } from "../../../../common/theme";

const Container = styled.View`
  margin-top: 25px;
`;

const ListView = styled.View`
`;

const Button = styled.View`
  width: ${_WIDTH * 0.87}px;
  height: 60px;
  justify-content: center;
  align-items: center;
  border-color: ${props=>props.select ? buttonColor : "gray"};
  border-width: ${props=>props.select ? 1.3 : 0.5}px;
  border-radius: 5px;
  margin: 7px 0px;
  flex-direction: row;
`;

const Image = styled.Image`
  width: 100px;
  height: 40px;
  margin-right: 15px;
`;

const Text = styled.Text`
  width: 100px;
  font-size: 13px;
`;

export default ({ value, setValue }) => (
  <Container>
    <Title>공간구조</Title>
    <ListView>
      {list.map((item, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => setValue({...value, structureStyle: item.value})}
        >
          <Button select={value.structureStyle === item.value}>
            <Image source={item.source} resizeMode="contain" />
            <Text>{item.value}</Text>
          </Button>
        </TouchableOpacity>
      ))}
    </ListView>
  </Container>
);

const list = [
  { source: require("../../../../Image/general.png"), value: "일반형" },
  { source: require("../../../../Image/double_layer.png"), value: "복층형" },
  { source: require("../../../../Image/terrace.png"), value: "테라스 있음" },
  { source: require("../../../../Image/veranda.png"), value: "베란다 확장형" },
]