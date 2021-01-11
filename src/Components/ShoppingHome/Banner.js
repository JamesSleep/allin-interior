import React from "react";
import Swiper from "react-native-swiper";
import styled from "styled-components/native";
import { _WIDTH } from "../../common/theme";

const RenderView = styled.View`
  padding: 2px 13px;
  position: absolute;
  bottom: 10px;
  right: 10px;
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 10px;
`;

const Text1 = styled.Text`
  color: gray;
`;

const Text2 = styled.Text`
  color: white;
  font-size: ${_WIDTH / 32}px;
`;

const renderPagination = (index, total, context) => {
  return (
    <RenderView>
      <Text1>
        <Text2>{index + 1} / {total}</Text2>
      </Text1>
    </RenderView>
  )
}

const Container = styled.View`
  width: 100%;
  height: 150px;
`;

const ImageView = styled.View`
  width: 100%;
  height: 100%;
`;

const Image = styled.Image`
  width: 100%;
  height: 100%;
`;

export default ({ }) => (
  <Container>
    <Swiper
      renderPagination={renderPagination}
      autoplay={true}
    >
      <ImageView>
        <Image source={require("../../Image/example1.jpg")} />
      </ImageView>
      <ImageView>
        <Image source={require("../../Image/example2.jpg")} />
      </ImageView>
      <ImageView>
        <Image source={require("../../Image/example3.jpg")} />
      </ImageView>
    </Swiper>
  </Container>
)