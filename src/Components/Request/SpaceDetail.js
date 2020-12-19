import React, { useState } from "react";
import styled from "styled-components/native";
import Modal from "react-native-modal";
import { TouchableOpacity } from "react-native-gesture-handler";
import { buttonColor, _WIDTH } from "../../common/theme";
import AntDesign from "react-native-vector-icons/AntDesign";
import { ScrollView } from "react-native";

const Residential = [
  "선택해주세요", "아파트", "빌라", "주택", "원룸"
];

const Commercial = [
  "선택해주세요", "사무실", "상가/매장", "카페/식당", "학원/교육", "숙박/병원", "간판", "기타"
];

const Container = styled.View``;

const SelectBox = styled.View`
  width: 100%;
  height: ${_WIDTH / 10}px;
  border-width: 0.6px;
  border-color: black;
  border-radius: 5px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 8px;
`;

const SelectText = styled.Text`
  font-size: ${_WIDTH / 28}px;
`;

export default ({ info, setInfo }) => {
  const [visible, setVisible] = useState(false);
  return (
    <Container>
      <TouchableOpacity onPress={() => setVisible(true)}>
        <SelectBox>
          <SelectText>{info.spaceDetail}</SelectText>
          <AntDesign
            name={"down"}
            size={_WIDTH / 25}
            color={"gray"}
          />
        </SelectBox>
      </TouchableOpacity>
    </Container>
  )
}