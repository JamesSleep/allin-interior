import React from "react";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { _WIDTH, buttonColor } from "../../../common/theme";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Question = styled.Text`
  font-size: 15px;
  margin-bottom: 10px;
`;

const Button = styled.View`
  width: ${_WIDTH * 0.8}px;
  height: 60px;
  flex-direction: row;
  border-width: 1px;
  border-color: ${buttonColor};
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  margin: 20px 0px;
`;

const Image = styled.Image`
  width: 40px;
  height: 40px;
`;

const Text = styled.Text`
  width: 100px;
  font-size: 15px;
  text-align: center;
`;

const list = [
  { 
    source: require("../../../Image/residential.png"),
    text: "주거공간",
    value: "Residential",
  },
  { 
    source: require("../../../Image/commercial_space.png"),
    text: "상업공간",
    value: "Commercial",
  },
  { 
    source: require("../../../Image/cleaning.png"),
    text: "청소",
    value: "Cleaning",
  },
]

export default ({ navigation }) => (
  <Container>
    <Question>
      원하는 시공을 선택해주세요.
    </Question>
    {list.map((item, index) => (
      <TouchableOpacity
        key={index}
        onPress={() => navigation.navigate(item.value)}
      >
        <Button>
          <Image source={item.source} />
          <Text>{item.text}</Text>
        </Button>
      </TouchableOpacity>
    ))}
  </Container>
)