import React from "react";
import styled from "styled-components/native";
import Title from "./Title";
import { buttonColor, _WIDTH } from "../../../common/theme";
import { TouchableOpacity } from "react-native-gesture-handler";

const Container = styled.View`
  margin-bottom: 30px;
`;

const List = styled.View`
  flex-direction: row;
  margin-top: 15px;
`;

const Button = styled.View`
  width: ${_WIDTH*0.15}px;
  height: ${_WIDTH*0.06}px;
  border-width: ${props=>props.selected ? 1 : 0.5}px;
  border-color: ${props=>props.selected ? buttonColor: "gray"};
  border-radius: 15px;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
`;

const Text = styled.Text`
  font-size: ${_WIDTH/29}px;
  color: ${props=>props.selected ? buttonColor: "gray"};
`;

const StyleList = [
  "아파트", "빌라", "주택", "원룸"
]; 

export default ({ info, setInfo }) => (
  <Container>
    <Title>공간유형</Title>
    <List>
      {StyleList.map((style, index) => (
        <TouchableOpacity 
          key={index}
          onPress={()=>setInfo({ ...info, areaStyle: style })}
        >
          <Button selected={info.areaStyle === style}>
            <Text selected={info.areaStyle === style}>{style}</Text>
          </Button>
        </TouchableOpacity>
      ))}
    </List>
  </Container>
)