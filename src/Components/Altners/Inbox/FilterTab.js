import React from "react";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { buttonColor, _WIDTH } from "../../../common/theme";

const Container = styled.View`
  width: 100%;
  height: 60px;
  flex-direction: row;
  padding: 10px 20px;
  justify-content: center;
  align-items: center;
  border-bottom-color: #ddd;
  border-bottom-width: 0.5px;
`;

const Tab = styled.View`
  width: ${_WIDTH * 0.22}px;
  height: 60px;
  justify-content: center;
  align-items: center;
  margin-top: ${props=>props.select ? 3 : 0}px;
  border-bottom-width: ${props=>props.select ? 3 : 0}px;
  border-bottom-color: ${props=>props.select ? buttonColor : "gray"};
`;

const Text = styled.Text`
  font-size: 14px;
  font-weight: ${props=>props.select ? "bold" : 500};
  color: ${props=>props.select ? buttonColor : "#bbb"};
`;

export default ({ tab, setTab, list=[] }) => (
  <Container>
    {list.map((item, index) => (
      <TouchableOpacity
        key={index}
        onPress={() => setTab(item)}
      >
        <Tab select={item === tab}>
          <Text select={item === tab}>{item}</Text>
        </Tab>
      </TouchableOpacity>
    ))}
  </Container>
);