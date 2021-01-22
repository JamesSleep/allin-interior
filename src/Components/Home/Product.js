import React from "react";
import styled from "styled-components/native";
import { _WIDTH } from "../../common/theme";
import { imagePathFormat } from "../../utils/imagePathFormat";
import { TouchableOpacity } from "react-native-gesture-handler";

const Container = styled.View`
  margin: 0px 5px;
  width: ${_WIDTH / 5}px;
`;

const Image = styled.Image`
  width: ${_WIDTH / 5}px;
  height: ${_WIDTH / 5}px;
  border-radius: 10px;
  margin-bottom: 10px;
`;

const Text = styled.Text`
  margin-bottom: 5px;
  font-size: 10px
`;

export default ({ info, navigation }) => (
  <TouchableOpacity
    onPress={() => navigation.navigate("Shopping", { screen: "Detail", params: { data: info } })}
  >
    <Container>
      <Image source={{ uri: imagePathFormat(info.image) }} />
      <Text>{info.name}</Text>
      <Text>{numbering(info.sale_price)}</Text>
    </Container>
  </TouchableOpacity>
)

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

  return result + "원";
} 