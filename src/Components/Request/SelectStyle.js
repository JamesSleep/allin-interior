import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import styled from "styled-components/native";
import { buttonColor, _WIDTH } from "../../common/theme";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Question = styled.Text`
  font-size: ${_WIDTH / 25}px;
`;

const MenuList = styled.View`
  margin-top: 10px;
`;

const MenuBlock = styled.View`
  width: ${_WIDTH * 0.8}px;
  height: ${_WIDTH / 8}px;
  border-width: 0.8px;
  border-color: ${props => props.selected ? buttonColor : "gray"};
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  margin: 7px 0px;
`;

const MenuText = styled.Text`
  font-size: ${_WIDTH / 27}px;
  color: ${props => props.selected ? buttonColor : "gray"};
`;

const Menu = [
  { value: "Residential", text: "주거 공간" },
  { value: "Commercial", text: "상업 공간" },
];

export default ({ info, setInfo }) => (
  <Container>
    <Question>
      견적 유형을 골라주세요
    </Question>
    <MenuList>
      {Menu.map((menu, index) => (
        <TouchableOpacity key={index}>
          <MenuBlock selected={info.spaceStyle === menu.value}>
            <MenuText selected={info.spaceStyle === menu.value}>{menu.text}</MenuText>
          </MenuBlock>
        </TouchableOpacity>
      ))}
    </MenuList>
  </Container>
)