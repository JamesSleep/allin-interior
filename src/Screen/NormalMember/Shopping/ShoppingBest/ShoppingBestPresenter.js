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
      {selected && ProductArray.map((product, index) => (
        <Product
          key={index}
          info={product}
        />
      ))}
      {!selected && ProductArray2.map((product, index) => (
        <ProductReview
          key={index}
          info={product}
        />
      ))}
    </ProductView>
  </Container>
);

const ProductArray = [
  {
    imageUrl: require("../../../../Image/shop_test1.jpg"),
    brand: "2ndContainer",
    name: "하이덴 파티션 수납형 침대",
    payment: "562232",
    heart: 5,
    category: "furniture"
  },
  {
    imageUrl: require("../../../../Image/shop_test8.jpg"),
    brand: "PEANUTS",
    name: "머그컵_스누피와 친구들",
    payment: "9000",
    heart: 3959,
    category: "kitchen"
  },
  {
    imageUrl: require("../../../../Image/shop_test11.jpg"),
    brand: "Ainishop",
    name: "습기제거 대나무 원목 옷바구니",
    payment: "34500",
    heart: 0,
    category: "supplies"
  },
  {
    imageUrl: require("../../../../Image/shop_test12.jpg"),
    brand: "Ainishop",
    name: "하드케이스 시크릿 비밀 일기장",
    payment: "28600",
    heart: 3,
    category: "supplies"
  }
];

const ProductArray2 = [
  {
    imageUrl: require("../../../../Image/shop_test2.jpg"),
    brand: "BIANS",
    name: "비앙스 켈른 틈새 입식화장대",
    payment: "111000",
    heart: 352,
    category: "furniture",
    review: "수납할 수 있는 공간이 많아서 좋아요"
  },
  {
    imageUrl: require("../../../../Image/shop_test7.jpg"),
    brand: "PRISM",
    name: "프리즘 충전식 무선 LED 스탠드",
    payment: "29900",
    heart: 4969,
    category: "deco",
    review: "진짜 가볍고 좋아요"
  },
  {
    imageUrl: require("../../../../Image/shop_test10.jpg"),
    brand: "neoflam",
    name: "네오플램 피카 IH 쁘띠웍",
    payment: "35000",
    heart: 773,
    category: "kitchen",
    review: "1인용으로 딱이에요"
  },
  {
    imageUrl: require("../../../../Image/shop_test13.jpg"),
    brand: "The Home",
    name: "어반 2단 슬라이딩 주방 선반",
    payment: "14900",
    heart: 900,
    category: "receiving",
    review: "슬라이딩도 부드럽고 튼튼해요"
  }
];