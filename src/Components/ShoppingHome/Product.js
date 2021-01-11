import React from "react";
import styled from "styled-components/native";
import { _WIDTH } from "../../common/theme";
import AntDesign from "react-native-vector-icons/AntDesign";

const Container = styled.View`
  width: ${_WIDTH * 0.45}px;
  margin: 15px 0px;
`;

const Image = styled.Image`
  width: ${_WIDTH * 0.42}px;
  height: ${_WIDTH * 0.42}px;
`;

const Brand = styled.Text`
  font-size: ${_WIDTH / 33}px;
  color: gray;
  margin-top: 10px;
  margin-bottom: 5px;
`;

const Name = styled.Text`
  font-size: ${_WIDTH / 30}px;
  font-weight: 500;
  margin-bottom: 10px;
`;

const Payment = styled.Text`
  font-size: ${_WIDTH / 28}px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Bookmark = styled.View`
  flex-direction: row;
  align-items: center;
`;

const Markcount = styled.Text`
  font-size: ${_WIDTH / 35}px;
  color: gray;
  margin-left: 3px;
`;

export default ({ navigation, info }) => (
  <Container>
    <Image source={info.imageUrl} />
    <Brand>{info.brand}</Brand>
    <Name>{info.name}</Name>
    <Payment>{numbering(info.payment)}</Payment>
    <Bookmark>
      <AntDesign
        name="heart"
        size={_WIDTH / 32}
        color="gray"
      />
      <Markcount>{info.heart}</Markcount>
    </Bookmark>
  </Container>
);

const numbering = (pay = "") => {
  const len = pay.length;
  let dot = 0;
  let result = "";
  const textArray = pay.split('');

  for (let i = len - 1; i >= 0; i--) {
    if (dot === 3) {
      result = ',' + result;
      dot = 0;
    }
    result = textArray[i] + result;
    dot++;
  }

  return result + " 원";
} 