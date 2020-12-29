import React from "react";
import styled from "styled-components/native";
import Title from "./Title";
import { _WIDTH, buttonColor } from "../../../common/theme";
import { TouchableOpacity } from "react-native-gesture-handler";

const Container = styled.View`
  margin-bottom: 30px;
`;

const List = styled.View`
  flex-direction: row;
  margin-top: 15px;
`;

const Button = styled.View`
  padding: 0px 12px;
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

const DateList = [
  "미정", "1개월 이내", "2개월 이내", "2개월 이후"
]; 

export default ({ info, setInfo }) => (
  <Container>
    <Title>공사예정일</Title>
    <List>
      { DateList.map((date, index) => (
        <TouchableOpacity
          key={index}
          onPress={()=>setInfo({ ...info, endDate: date })}
        >
          <Button selected={info.endDate === date}>
            <Text selected={info.endDate === date}>{date}</Text>
          </Button>
        </TouchableOpacity>
      ))}
    </List>
  </Container>
)