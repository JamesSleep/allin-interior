import React from "react";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { _WIDTH, buttonColor } from "../../../../common/theme";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Title = styled.Text`
  font-size: 15px;
  margin-bottom: 35px;
`;

const SelectButton = styled.View`
  flex-direction: row;
  width: ${_WIDTH * 0.8}px;
  height: 60px;
  border-color: ${props=>props.select ? buttonColor : "gray"};
  border-width: ${props=>props.select ? 2 : 0.5}px;
  border-radius: 10px;
  margin-bottom: 15px;
  justify-content: center;
  align-items: center;
`;

const IconView = styled.View`
  width: 40%;
  justify-content: center;
  align-items: flex-end;
  padding-right: 15px;
`;

const Icon = styled.Image`
  width: 50px;
  height: 50px;
`;

const SelectText = styled.Text`
  width: 50%;
  font-size: 14px;
`;

export default ({ value, setValue }) => (
  <Container>
    <Title>청소종류를 선택해주세요.</Title>
    {list.map((item, index) => (
      <TouchableOpacity
        key={index}
        onPress={() => setValue({...value, cleaningStyle: item.name})}
      >
        <SelectButton select={item.name === value.cleaningStyle}>
          <IconView>
            <Icon source={item.value} />
          </IconView>
          <SelectText select={item.name === value.cleaningStyle}>
            {item.name}
          </SelectText>
        </SelectButton>
      </TouchableOpacity>
    ))}
  </Container>
);

const list = [
  { name: "입주 청소", value: require("../../../../Image/in_cleaning.png")},
  { name: "이사 청소", value: require("../../../../Image/moving_cleaning.png")},
  { name: "인테리어 후 청소", value: require("../../../../Image/interior_cleaning.png")},
  { name: "정기 청소", value: require("../../../../Image/regular_cleaning.png")}
];