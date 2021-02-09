import React from "react";
import styled from "styled-components/native";
import Title from "../Title";
import { TouchableOpacity } from "react-native-gesture-handler";
import { buttonColor } from "../../../../common/theme";

const Container = styled.View`
  margin-top: 25px;
`;

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
  margin-bottom: 7px;
`;

const Text = styled.Text`
  font-size: 12px;
  color: ${props=>props.select ? buttonColor : "gray"};
`;

export default ({ value, setValue }) => (
  <Container>
    <Title>운영 여부</Title>
    <ListView>
      {list.map((item, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => setValue({
            ...value,
            managed: item.value
          })}
        >
          <Button select={item.value === value.managed}>
            <Text select={item.value === value.managed}>{item.name}</Text>
          </Button>
        </TouchableOpacity>
      ))}
    </ListView>
  </Container>
)

const list = [
  { name: "운영중", value: "100" },
  { name: "운영예정(계약전)", value: "200" },
  { name: "운영예정(계약완료)", value: "300" },
];