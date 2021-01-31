import React from "react";
import styled from "styled-components/native";
import { _WIDTH } from "../../common/theme";
import { imagePathFormat } from "../../utils/imagePathFormat";

const Container = styled.View`
  width: 100%;
  height: ${_WIDTH * 0.6}px;
`;

const Image = styled.Image`
  width: 100%;
  height: 100%;
`;

export default ({ imageUri }) => (
  <Container>
    <Image 
      source={
        imageUri ? 
        { uri: imagePathFormat(imageUri) } :
        require("../../Image/logo.png")
      }
    />
  </Container>
)