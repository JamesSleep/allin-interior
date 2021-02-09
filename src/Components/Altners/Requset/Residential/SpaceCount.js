import React from "react";
import styled from "styled-components/native";
import Title from "../Title";
import { _WIDTH } from "../../../../common/theme";
import AntDesign from "react-native-vector-icons/AntDesign";
import { TouchableOpacity } from "react-native-gesture-handler";

const Container = styled.View`
  margin-top: 25px;
`;

const ListView = styled.View``;

const RowView = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 10px;
`;

const OptionText = styled.Text`
  width: 100px;
  font-size: 13px;
  text-align: center;
`;

const ButtonView = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: ${_WIDTH * 0.55}px;
  height: 35px;
  border-width: 0.5px;
  border-color: gray;
  border-radius: 15px;
`;

const CountText = styled.Text`
  font-size: 13px;
`;

export default ({ value, setValue }) => (
  <Container>
    <Title>공간 개수</Title>
    <ListView>
      {list.map((item, index) => (
        <RowView key={index}>
          <OptionText>{item.name}</OptionText>
          <ButtonView>
            <TouchableOpacity 
              onPress={() => value[item.value] > 0 && setValue({...value, [item.value]: value[item.value] - 1})}
            >
              <AntDesign name="minus" size={15} />
            </TouchableOpacity>
            <CountText>{value[item.value]}</CountText>
            <TouchableOpacity
              onPress={() => setValue({...value, [item.value]: value[item.value] + 1})}
            >
              <AntDesign name="plus" size={15} />
            </TouchableOpacity>
          </ButtonView>
        </RowView>
      ))}
    </ListView>
  </Container>
);

const list = [
  { name: "방", value: "room" },
  { name: "화장실", value: "restroom" },
  { name: "베란다", value: "veranda" },
]