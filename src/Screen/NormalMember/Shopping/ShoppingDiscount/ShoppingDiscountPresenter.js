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

export default ({ navigation }) => (
  <Container>
    <ScrollView>
      <ImageView>
        <Image
          source={require("../../../../Image/discount_sale.png")}
        />
      </ImageView>
      {ProductArray.map((product, index) => (
        <Product
          key={index}
          info={product}
        />
      ))}
    </ScrollView>
  </Container>
);

const ProductArray = [
  {
    imageUrl: require("../../../../Image/shop_test1.jpg"),
    brand: "2ndContainer",
    name: "하이덴 파티션 수납형 침대",
    payment: "562232",
    heart: 5,
    category: "furniture",
    discount: 42
  },
  {
    imageUrl: require("../../../../Image/shop_test8.jpg"),
    brand: "PEANUTS",
    name: "머그컵_스누피와 친구들",
    payment: "9000",
    heart: 3959,
    category: "kitchen",
    discount: 72
  },
  {
    imageUrl: require("../../../../Image/shop_test11.jpg"),
    brand: "Ainishop",
    name: "습기제거 대나무 원목 옷바구니",
    payment: "34500",
    heart: 0,
    category: "supplies",
    discount: 23
  },
  {
    imageUrl: require("../../../../Image/shop_test12.jpg"),
    brand: "Ainishop",
    name: "하드케이스 시크릿 비밀 일기장",
    payment: "28600",
    heart: 3,
    category: "supplies",
    discount: 30
  }
];