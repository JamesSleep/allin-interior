import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import styled from "styled-components/native";
import { _WIDTH } from "../../../../common/theme";
import Product from "../../../../Components/ShoppingBest/Product";
import ProductReview from "../../../../Components/ShoppingBest/ProductReview";

const Container = styled.View`
  flex: 1;
  background-color: white;
`;

const TabView = styled.View`
  flex-direction: row;
  justify-content: center;
  padding: 15px 0px;
  margin-bottom: 15px;
`;

const TabText = styled.Text`
  font-size: ${_WIDTH / 30}px;
  color: ${props => props.selected ? "black" : "gray"};
`;

const Line = styled.View`
  border-width: 0.5px;
  border-color: black;
  margin: 0px 20px;
`;

const ProductView = styled.ScrollView``;

export default ({ list, navigation, selected, setSelected }) => (
  <Container>
    <TabView>
      <TouchableOpacity onPress={() => setSelected(true)}>
        <TabText selected={selected}>많이 구매한 상품</TabText>
      </TouchableOpacity>
      <Line />
      <TouchableOpacity onPress={() => setSelected(false)}>
        <TabText selected={!selected}>리뷰가 좋은 상품</TabText>
      </TouchableOpacity>
    </TabView>
    <ProductView>
      {selected && list.map((product, index) => (
        <Product
          key={index}
          info={product}
        />
      ))}
      {!selected && list.map((product, index) => (
        <ProductReview
          key={index}
          info={product}
        />
      ))}
    </ProductView>
  </Container>
);