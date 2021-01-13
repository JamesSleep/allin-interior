import React from "react";
import styled from "styled-components/native";
import { _WIDTH } from "../../../../common/theme";
import Product from "../../../../Components/ShoppingDiscount/Product";

const Container = styled.View`
  flex: 1;
  background-color: white;
`;

const ImageView = styled.View`
  width: 100%;
  height: 150px;
`;

const Image = styled.Image`
  width: 100%;
  height: 100%;
`;

const ScrollView = styled.ScrollView``;

export default ({ navigation, list }) => (
  <Container>
    <ScrollView>
      <ImageView>
        <Image
          source={require("../../../../Image/discount_sale.png")}
        />
      </ImageView>
      {list.map((product, index) => (
        <Product
          key={index}
          info={product}
        />
      ))}
    </ScrollView>
  </Container>
);