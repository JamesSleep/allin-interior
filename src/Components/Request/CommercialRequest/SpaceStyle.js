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
  flex-wrap: wrap;
  margin-top: 15px;
`;

const Button = styled.View`
  padding: 3px 15px;
  height: ${_WIDTH*0.07}px;
  border-width: ${props=>props.selected ? 1 : 0.5}px;
  border-color: ${props=>props.selected ? buttonColor: "gray"};
  border-radius: 15px;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  margin-bottom: 10px;
`;

const Text = styled.Text`
  font-size: ${_WIDTH/29}px;
  color: ${props=>props.selected ? buttonColor: "gray"};
`;

const StyleList = [
  "사무실", "상가/매장", "카페/식당", "학원/교육", "숙박/병원", "간판", "기타"
]; 

export default ({ info, setInfo }) => (
  <Container>
    <Title>업종유형</Title>
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