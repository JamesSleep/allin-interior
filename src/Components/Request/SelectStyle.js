import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import styled from "styled-components/native";
import { buttonColor, _WIDTH } from "../../common/theme";
import AntDesign from "react-native-vector-icons/AntDesign";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Question = styled.View`
  flex: 2;
  justify-content: center;
  align-items: center;
`;

const QuestionText = styled.Text`
  font-size: ${_WIDTH / 25}px;
`;

const MenuList = styled.View`
  margin-top: 10px;
  flex: 12;
  justify-content: center;
  align-items: center;
`;

const MenuBlock = styled.View`
  width: ${_WIDTH * 0.8}px;
  height: ${_WIDTH / 8}px;
  border-width: ${props => props.selected ? 1.2 : 0.6}px;
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

const ButtonColumn = styled.View`
  flex: 2;
  width: 100%;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

const ButtonObj = styled.View`
  flex-direction: row;
  align-items: center;
`;

const ButtonText = styled.Text`
  font-size: ${_WIDTH/25}px;
`;


const Menu = [
  { value: "Residential", text: "주거 공간" },
  { value: "Commercial", text: "상업 공간" },
];

export default ({ info, setInfo, setPage }) => (
  <Container>
    {/* <Question>
      <QuestionText>
        견적 유형을 골라주세요
      </QuestionText>
    </Question> */}
    <MenuList>
      {Menu.map((menu, index) => (
        <TouchableOpacity 
          key={index}
          onPress={()=>setInfo({...info, spaceStyle: menu.value})}
        >
          <MenuBlock selected={info.spaceStyle === menu.value}>
            <MenuText selected={info.spaceStyle === menu.value}>{menu.text}</MenuText>
          </MenuBlock>
        </TouchableOpacity>
      ))}
    </MenuList>
    <ButtonColumn>
      <TouchableOpacity 
        onPress={()=>{
          info.spaceStyle === "Residential" ? 
          setPage(1) : setPage(2)
        }}
      >
        <ButtonObj>
          <ButtonText>다음 </ButtonText>
          <AntDesign name={"right"} size={_WIDTH/25} />
        </ButtonObj>
      </TouchableOpacity>
    </ButtonColumn>
  </Container>
)