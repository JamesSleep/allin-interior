import React from "react";
import styled from "styled-components/native";
import { _WIDTH } from "../../common/theme";

export default ({ ceoName, year, city }) => (
  <Container>
    <StarView>
      <StarText>4.5</StarText>
    </StarView>
    <InfoColumn>
      <CategoryText>대표명</CategoryText>
      <CategoryValue>{ceoName}</CategoryValue>
      <TierView>
        <TierText>명장</TierText>
      </TierView>
    </InfoColumn>
    <InfoColumn>
      <CategoryText>업력</CategoryText>
      <CategoryValue>{year}년</CategoryValue>
    </InfoColumn>
    <InfoColumn>
      <CategoryText>시공지역</CategoryText>
      <CategoryValue>{city}</CategoryValue>
    </InfoColumn>
    <InfoColumn>
      <CategoryText>시공횟수</CategoryText>
      <CategoryValue>21회</CategoryValue>
    </InfoColumn>
  </Container>
);

const Container = styled.View`
  width: 100%;
  padding: 20px 30px;
`;

const InfoColumn = styled.View`
  flex-direction: row;
  margin: 7px 0px;
`;

const CategoryText = styled.Text`
  width: ${_WIDTH * 0.25}px;
  font-size: ${_WIDTH / 27}px;
  color: gray;
`;

const CategoryValue = styled.Text`
  font-size: ${_WIDTH / 27}px;
`;

const TierView = styled.View`
  width: ${_WIDTH / 10}px;
  background-color: blue;
  border-radius: 5px;
  align-items: center;
  margin-left: 10px;
`;

const TierText = styled.Text`
  color: white;
  font-size: ${_WIDTH / 30}px;
`;

const StarView = styled.View`
  position: absolute;
  top: 10;
  right: 20;
`;

const StarText = styled.Text`
  font-size: ${_WIDTH / 26}px;
  font-weight: bold;
`;