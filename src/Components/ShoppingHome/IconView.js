import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import styled from "styled-components/native";
import { _WIDTH } from "../../common/theme";

const Container = styled.View`
  padding: 10px 10px;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
`;

const IconBlock = styled.View`
  width: ${_WIDTH / 5}px;
  height: ${_WIDTH / 5}px;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.selected ? "#ecf0f1" : "white"};
`;

const Image = styled.Image`
  width: ${_WIDTH / 11}px;
  height: ${_WIDTH / 11}px;
`;

const Text = styled.Text`
  margin-top: 7px;
  font-size: ${_WIDTH / 33}px;
`;

const IconArray = [
  { icon: require("../../Image/all.png"), text: "전체", category: "" },
  { icon: require("../../Image/furniture.png"), text: "가구", category: "furniture" },
  { icon: require("../../Image/electronic.png"), text: "가전", category: "electronic" },
  { icon: require("../../Image/fabric.png"), text: "페블릭", category: "fabric" },
  { icon: require("../../Image/deco.png"), text: "홈데코", category: "deco" },
  { icon: require("../../Image/kitchen.png"), text: "주방", category: "kitchen" },
  { icon: require("../../Image/supplies.png"), text: "생활용품", category: "supplies" },
  { icon: require("../../Image/receiving.png"), text: "수납 / 정리", category: "receiving" },
]

export default ({ category, setCategory }) => (
  <Container>
    { IconArray.map((block, index) => (
      <TouchableOpacity
        key={index}
        onPress={() => setCategory(block.category)}
      >
        <IconBlock selected={category === block.category}>
          <Image source={block.icon} />
          <Text>{block.text}</Text>
        </IconBlock>
      </TouchableOpacity>
    ))}
  </Container>
)