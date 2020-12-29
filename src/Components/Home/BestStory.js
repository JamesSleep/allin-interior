import React from "react";
import styled from "styled-components/native";
import { _WIDTH, buttonColor } from "../../common/theme";
import { TouchableOpacity } from "react-native-gesture-handler";
import { imagePathFormat } from "../../utils/imagePathFormat";

const Container = styled.View`
  margin: 20px 0px;
  padding: 0px 20px;
`;

const TitleView = styled.View`
  margin-bottom: 15px;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`;

const Title = styled.Text`
  font-size: ${_WIDTH / 27}px;
  font-weight: 500;
`;

const PageMove = styled.Text`
  color: ${buttonColor};
  font-size: ${_WIDTH / 33}px;
`;

const ImageView = styled.View`
  flex-direction: row;
  justify-content: space-around;
`;

const Image = styled.Image`
  width: ${_WIDTH * 0.3}px;
  height: ${_WIDTH * 0.3}px;
  margin: 0px 1px;
  border-radius: 5px;
`;

export default ({ storyList=[], navigation }) => (
  <Container>
    <TitleView>
      <Title>한 주 베스트 스토리</Title>
      <TouchableOpacity onPress={()=>navigation.navigate("Story")}>
        <PageMove>+ 스토리 더보기</PageMove>
      </TouchableOpacity>
    </TitleView>
    { storyList.length > 0 && (
      <ImageView>
        <TouchableOpacity onPress={()=>navigation.navigate("Story", { screen: "Detail", params: { data: storyList[0] } })}>
          <Image source={{ uri: imagePathFormat(storyList[0].images[0].image_path) }} />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate("Story", { screen: "Detail", params: { data: storyList[2] } })}>
          <Image source={{ uri: imagePathFormat(storyList[2].images[0]?.image_path) }} />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate("Story", { screen: "Detail", params: { data: storyList[1] } })}>
          <Image source={{ uri: imagePathFormat(storyList[1].images[0]?.image_path) }} />
        </TouchableOpacity>
      </ImageView>
    )}
  </Container>
)