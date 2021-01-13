import React from "react";
import styled from "styled-components/native";
import Swiper from "react-native-swiper";
import { _WIDTH } from "../../common/theme";
import { imagePathFormat } from "../../utils/imagePathFormat";

const Container = styled.View`
  width: 100%;
  height: 420px;
`;

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

const ImageViewer = styled.View`
  width: 100%;
  height: 100%;
`;

const Image = styled.Image`
  width: 100%;
  height: 100%;
`;

export default ({ imageUrl }) => (
  <Container>
    <Swiper
      renderPagination={renderPagination}
      autoplay={true}
    >
      <ImageViewer>
        <Image
          source={{ uri: imagePathFormat(imageUrl) }}
        />
      </ImageViewer>
    </Swiper>
  </Container>
)

const renderPagination = (index, total, context) => {
  return (
    <RenderView>
      { total > 1 && (
        <Text1>
          <Text2>{index + 1} / {total}</Text2>
        </Text1>
      )}
    </RenderView>
  )
};
