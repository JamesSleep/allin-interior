import React from "react";
import styled from "styled-components/native";
import { _WIDTH } from "../../common/theme";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";

const Container = styled.View`
  padding: 15px 20px;
  justify-content: center;
`;

const Name = styled.Text`
  font-size: ${_WIDTH / 26}px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Review = styled.View`
  flex-direction: row;
  align-items: center;
`;

const StarText = styled.Text`
  font-size: ${_WIDTH / 28}px;
  margin-left: 3px;
  margin-right: 10px;
`;

const ReviewText = styled.Text`
  font-size: ${_WIDTH / 30}px;
  color: #e58e26;
`;

const BookMark = styled.View`
  position: absolute;
  right: 10px;
  justify-content: center;
  align-items: center;
`;

const MarkText = styled.Text`
  font-size: ${_WIDTH / 34}px;
`;

export default ({ info }) => (
  <Container>
    <Name>{info.name}</Name>
    <Review>
      <AntDesign
        name="star"
        color="#e58e26"
        size={_WIDTH / 25}
      />
      <StarText>4.7</StarText>
      <ReviewText>리뷰 {info.review}건</ReviewText>
    </Review>
    <BookMark>
      <Ionicons
        name="bookmark-outline"
        size={_WIDTH / 15}
      />
      <MarkText>{info.bookmark}</MarkText>
    </BookMark>
  </Container>
)


