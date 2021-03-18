import React from "react";
import styled from "styled-components/native";
import AntDesign from "react-native-vector-icons/AntDesign";
import { TouchableOpacity } from "react-native-gesture-handler";

const Container = styled.View`
  padding: 15px 10px 0px 10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Count = styled.Text`
  font-size: 14px;
`;

const FilterView = styled.View`
  padding: 3px 10px;
  border-width: 0.7px;
  border-color: black;
  flex-direction: row;
  align-items: center;
  border-radius: 10px;
`;

const FilterText = styled.Text`
  font-size: 13px;
  margin-left: 5px;
`;

export default ({ len }) => (
  <Container>
    <Count>총 {len}건의 인테리어</Count>
    <TouchableOpacity>
      <FilterView>
        <AntDesign name="filter" size={20} />
        <FilterText>필터</FilterText>
      </FilterView>
    </TouchableOpacity>
  </Container>
)