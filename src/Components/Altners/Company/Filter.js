import React from "react";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { buttonColor } from "../../../common/theme";

const Container = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding-bottom: 20px;
`;

const Button = styled.View`
  justify-content: space-around;
  align-items: center;
  background-color: ${props=>props.select ? "#e67e22" : "#dddddd"};
  border-radius: 5px;
  padding: 5px 10px;
`;

const Text = styled.Text`
  font-size: 15px;
  color: white;
`;

const list = ["전체선택", "주거공간", "상업공간", "청소"];

export default ({ filter, setFilter }) => (
  <Container>
    {list.map((item, index) => (
      <TouchableOpacity
        key={index}
        onPress={() => setFilter(item)}
      >
        <Button select={filter === item}>
          <Text>{item}</Text>
        </Button>
      </TouchableOpacity>
    ))}
  </Container>
)