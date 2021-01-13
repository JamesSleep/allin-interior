import React, { useEffect, useState } from "react";
import { Image } from "react-native";
import styled from "styled-components/native";
import { _HEIGHT, _WIDTH } from "../../common/theme";

const Contaier = styled.View`
  flex: 1;
  align-items: center;
  padding-top: 10px;
`;

const Image1 = styled.Image`
  flex: 1;
  width: null;
  height: 1100px;
`;

export default ({ info }) => {
  return (
    <Contaier>
      <Image
        style={{ width: "100%", height: undefined, aspectRatio: 0.1 }}
        source={require("../../Image/product_info2.jpg")}
        resizeMode="contain"
      />
    </Contaier>
  )
}