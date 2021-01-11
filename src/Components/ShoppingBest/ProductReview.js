import React from "react";
import styled from "styled-components/native";
import { _WIDTH } from "../../common/theme";
import AntDesign from "react-native-vector-icons/AntDesign";

const Container = styled.View`
  flex-direction: row;
  padding: 10px 15px;
  border-bottom-width: 1px;
  border-bottom-color: #ecf0f1;
`;

const Image = styled.Image`
  width: ${_WIDTH * 0.3}px;
  height: ${_WIDTH * 0.3}px;
  border-radius: 10px;
  margin-right: 15px;
`;

const TextView = styled.View`
  justify-content: space-around;
`;

const ScoreView = styled.View`
  flex-direction: row;
  align-items: center;
`;

const ScoreText = styled.Text`
  font-size: ${_WIDTH / 30}px;
  font-weight: bold;
`;

const Count = styled.Text`
  font-size: ${_WIDTH / 30}px;
  color: gray;
`;

const Name = styled.Text`
  font-size: ${_WIDTH / 30}px;
  font-weight: bold;
`;

const ReviewText = styled.Text`
  font-size: ${_WIDTH / 32}px;
`;

export default ({ info }) => (
  <Container>
    <Image source={info.imageUrl} />
    <TextView>
      <ScoreView>
        <AntDesign
          name="star"
          size={_WIDTH / 30}
          color="#e67e22"
        />
        <ScoreText> 4.7</ScoreText>
        <Count>  (2277)</Count>
      </ScoreView>
      <Name>{info.name}</Name>
      <ReviewText>{info.review}</ReviewText>
    </TextView>
  </Container>
);