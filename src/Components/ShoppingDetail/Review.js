import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import styled from "styled-components/native";

const Container = styled.View``;

const WriteView = styled.View`
  position: absolute;
  top: 5px;
  right: 10px;
`;

const WriteButton = styled.Text``;

const ReviewBox = styled.View``;

const Profile = styled.Image``;



export default () => (
  <Container>
    <WriteView>
      <TouchableOpacity>
        <WriteButton>리뷰작성</WriteButton>
      </TouchableOpacity>
    </WriteView>
    <ReviewBox>

    </ReviewBox>
  </Container>
)