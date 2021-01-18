import React, { useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import styled from "styled-components/native";
import { buttonColor, _WIDTH } from "../../common/theme";
import DetailInfo from "./DetailInfo";
import Policy from "./Policy";
import Qa from "./Qa";
import Review from "./Review";

const Contaier = styled.View`
  margin-top: 20px;
  padding-top: 15px;
  border-top-width: 8px;
  border-top-color: #dff9fb;
`;

const TabView = styled.View`
  flex-direction: row;
`;

const TabButton = styled.View`
  width: ${_WIDTH / 4}px;
  height: ${_WIDTH / 13}px;
  justify-content: center;
  align-items: center;
`;

const TabText = styled.Text`
  padding-bottom: 10px;
  border-bottom-width: 3px;
  border-bottom-color: ${props => props.select ? buttonColor : "white"};
  color: ${props => props.select ? buttonColor : "black"};
`;

export default () => {
  const [tabName, setTabName] = useState("상품정보");

  return (
    <Contaier>
      <TabView>
        <TouchableOpacity onPress={() => setTabName("상품정보")}>
          <TabButton>
            <TabText select={tabName === "상품정보"}>상품정보</TabText>
          </TabButton>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setTabName("리뷰")}>
          <TabButton>
            <TabText select={tabName === "리뷰"}>리뷰</TabText>
          </TabButton>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setTabName("문의")}>
          <TabButton>
            <TabText select={tabName === "문의"}>문의</TabText>
          </TabButton>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setTabName("배송/교환")}>
          <TabButton>
            <TabText select={tabName === "배송/교환"}>배송/교환</TabText>
          </TabButton>
        </TouchableOpacity>
      </TabView>
      { tabName === "상품정보" && <DetailInfo />}
      { tabName === "리뷰" && <Review />}
      { tabName === "문의" && <Qa />}
      { tabName === "배송/교환" && <Policy />}
    </Contaier>
  )
}
