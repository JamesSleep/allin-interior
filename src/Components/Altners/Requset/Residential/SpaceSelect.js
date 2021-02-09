import React from "react";
import styled from "styled-components/native";
import Title from "../Title";
import { TouchableOpacity } from "react-native-gesture-handler";
import { buttonColor } from "../../../../common/theme";

const Container = styled.View``;

const ListView = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
`;

const Button = styled.View`
  padding: 6px 15px;
  border-color: ${props=>props.select ? buttonColor : "gray"};
  border-width: ${props=>props.select ? 1 : 0.5}px;
  border-radius: 20px;
  margin-right: 10px;
`;

const Text = styled.Text`
  font-size: 14px;
  color: ${props=>props.select ? buttonColor : "gray"};
`;

export default ({ value, setValue }) => (
  <Container>
    <Title>공간 유형</Title>
    <ListView>
      {list.map((item, index) => (
        <TouchableOpacity
          key={item}
          onPress={() => setValue({
            ...value,
            spaceStyle: item
          })}
        >
          <Button select={item === value.spaceStyle}>
            <Text select={item === value.spaceStyle}>{item}</Text>
          </Button>
        </TouchableOpacity>
      ))}
    </ListView>
  </Container>
)

const list = [
  "아파트", "빌라", "주택", "원룸"
];