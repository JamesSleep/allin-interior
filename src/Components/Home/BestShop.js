import React, { useState } from "react";
import styled from "styled-components/native";
import { _WIDTH, buttonColor } from "../../common/theme";
import { TouchableOpacity } from "react-native-gesture-handler";
import { ScrollView } from "react-native";
import Product from "./Product";

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
  border-top-color: gray;
  border-top-width: 0.4px;
`;

const TabView = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 20px;
`;

const Text = styled.Text`
  font-size: ${_WIDTH/34}px;
  color: ${props => props.seleted ? "black" : "gray"};
`;

const Line = styled.View`
  height: ${_WIDTH/25}px;
  border-width: 0.7px;
  border-color: gray;
  margin: 0px 15px;
`;

const Image = styled.Image``;

export default ({ navigation }) => {
  const [tab, setTab] = useState(true);

  return (
    <Container>
      <TitleView>
        <Title>베스트 상품</Title>
        <TouchableOpacity onPress={()=>navigation.navigate("Shopping")}>
          <PageMove>+ 상품 더보기</PageMove>
        </TouchableOpacity>
      </TitleView>
      <ImageView>
        <TabView>
          <TouchableOpacity onPress={()=>setTab(!tab)}>
            <Text seleted={tab}>많이 구매한 상품</Text>
          </TouchableOpacity>
          <Line />
          <TouchableOpacity onPress={()=>setTab(!tab)}>
            <Text seleted={!tab}>리뷰가 좋은 상품</Text>
          </TouchableOpacity>
        </TabView>
        <ScrollView
          horizontal
        >
          <Product image={require("../../Image/product1.jpeg")} />
          <Product image={require("../../Image/product2.jpeg")} />
          <Product image={require("../../Image/product3.jpeg")} />
          <Product image={require("../../Image/product4.jpeg")} />
        </ScrollView>
      </ImageView>
    </Container>
  )
}