import React, { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import Modal from "react-native-modal";
import styled from "styled-components/native";
import AntDesign from "react-native-vector-icons/AntDesign";
import { _WIDTH } from "../../common/theme";
import Product from "./Product";

const Container = styled.View`
  border-top-width: 7px;
  border-top-color: #dff9fb;
`;

const FilterView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 15px 10px;
  border-bottom-width: 0.4px;
  border-bottom-color: gray;
`;

const SearchCount = styled.Text`
  font-size: ${_WIDTH / 31}px;
`;

const Filter = styled.View`
  flex-direction: row;
  align-items: center;
`;

const FilterText = styled.Text`
  font-size: ${_WIDTH / 32}px;
`;

const List = styled.View`
  padding: 15px 10px;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const ModalView = styled.View`
  width: 100%;
  background-color: white;
  border-radius: 5px;
`;

const ModalButton = styled.View`
  height: 60px;
  border-bottom-color: gray;
  border-bottom-width: 0.5px;
  justify-content: center;
  padding-left: 15px;
`;

const ModalText = styled.Text`
  font-size: ${_WIDTH / 20}px;
  font-weight: 600;
`;

const ModalList = [
  "신상품순", "판매량순", "인기순", "낮은가격순", "높은가격순", "높은할인율순"
];

export default ({ navigation, category, filters, setFilter }) => {
  const [Array, setArray] = useState([]);
  const [visible, setVisible] = useState(false);

  const filterSet = (array = []) => {
    switch (filters) {
      case "신상품순": {
        return array;
      }
      case "인기순": {
        array.sort(function (a, b) {
          if (a.heart > b.heart) return -1;
          if (a.heart === b.heart) return 0;
          if (a.heart < b.heart) return 1;
        });
        return array;
      }
      case "낮은가격순": {
        array.sort(function (a, b) {
          if (Number(a.payment) > Number(b.payment)) return 1;
          if (Number(a.payment) === Number(b.payment)) return 0;
          if (Number(a.payment) < Number(b.payment)) return -1;
        });
        return array;
      }
      default: break;
    }
  }

  useEffect(() => {
    let array = Array;
    if (category === "") {
      array = ProductArray;
      //array = filterSet(array);
    } else {
      let arr = ProductArray.filter(product => product.category === category);
      array = arr;
      //array = filterSet(array);
    }
    setArray(array);
  }, [category, filters]);

  /*   useEffect(() => {
      let array = Array;
      const result = filterSet(array);
      setArray(result);
    }, [visible]); */

  return (
    <Container>
      <Modal
        isVisible={visible}
        animationIn="zoomIn"
        animationInTiming={200}
        animationOut="zoomOut"
        animationOutTiming={100}
        onBackButtonPress={() => setVisible(false)}
        onBackdropPress={() => setVisible(false)}
      >
        <ModalView>
          {ModalList.map((obj, index) => (
            <ModalButton
              key={index}
              onTouchEnd={() => { setVisible(false); setFilter(obj); }}
            >
              <ModalText>{obj}</ModalText>
            </ModalButton>
          ))}
        </ModalView>
      </Modal>
      <FilterView>
        <SearchCount>
          {Array.length}건의 검색결과
        </SearchCount>
        <TouchableOpacity onPress={() => setVisible(true)}>
          <Filter>
            <FilterText>{filters}</FilterText>
            <AntDesign
              name="down"
              size={_WIDTH / 27}
              color="gray"
            />
          </Filter>
        </TouchableOpacity>
      </FilterView>
      <List>
        {Array.map((product, index) => (
          <Product
            key={index}
            info={product}
          />
        ))}
      </List>
    </Container>
  )
}

const ProductArray = [
  {
    imageUrl: require("../../Image/shop_test1.jpg"),
    brand: "2ndContainer",
    name: "하이덴 파티션 수납형 침대",
    payment: "562232",
    heart: 5,
    category: "furniture"
  },
  {
    imageUrl: require("../../Image/shop_test2.jpg"),
    brand: "BIANS",
    name: "비앙스 켈른 틈새 입식화장대",
    payment: "111000",
    heart: 352,
    category: "furniture"
  },
  {
    imageUrl: require("../../Image/shop_test3.jpg"),
    brand: "Lacuzin",
    name: "라쿠진 오리엔탈 티팟 전기포트",
    payment: "55900",
    heart: 420,
    category: "electronic"
  },
  {
    imageUrl: require("../../Image/shop_test4.jpg"),
    brand: "ideecompany",
    name: "턴테이블 무선 무드등 가습기",
    payment: "31900",
    heart: 1759,
    category: "electronic"
  },
  {
    imageUrl: require("../../Image/shop_test5.jpg"),
    brand: "Already Not Yet",
    name: "블랭크 광목원단 도어커튼",
    payment: "15800",
    heart: 1680,
    category: "fabric"
  },
  {
    imageUrl: require("../../Image/shop_test6.jpg"),
    brand: "Already Not Yet",
    name: "블랭크 햄프린넨 침대 캐노피",
    payment: "39800",
    heart: 9,
    category: "fabric"
  },
  {
    imageUrl: require("../../Image/shop_test7.jpg"),
    brand: "PRISM",
    name: "프리즘 충전식 무선 LED 스탠드",
    payment: "29900",
    heart: 4969,
    category: "deco"
  },
  {
    imageUrl: require("../../Image/shop_test8.jpg"),
    brand: "PEANUTS",
    name: "머그컵_스누피와 친구들",
    payment: "9000",
    heart: 3959,
    category: "kitchen"
  },
  {
    imageUrl: require("../../Image/shop_test9.jpg"),
    brand: "ilyang",
    name: "드리텍 주방저울 KS-605",
    payment: "11900",
    heart: 721,
    category: "kitchen"
  },
  {
    imageUrl: require("../../Image/shop_test10.jpg"),
    brand: "neoflam",
    name: "네오플램 피카 IH 쁘띠웍",
    payment: "35000",
    heart: 773,
    category: "kitchen"
  },
  {
    imageUrl: require("../../Image/shop_test11.jpg"),
    brand: "Ainishop",
    name: "습기제거 대나무 원목 옷바구니",
    payment: "34500",
    heart: 0,
    category: "supplies"
  },
  {
    imageUrl: require("../../Image/shop_test12.jpg"),
    brand: "Ainishop",
    name: "하드케이스 시크릿 비밀 일기장",
    payment: "28600",
    heart: 3,
    category: "supplies"
  },
  {
    imageUrl: require("../../Image/shop_test13.jpg"),
    brand: "The Home",
    name: "어반 2단 슬라이딩 주방 선반",
    payment: "14900",
    heart: 900,
    category: "receiving"
  },
  {
    imageUrl: require("../../Image/shop_test14.jpg"),
    brand: "HouseRecipe",
    name: "스틸 접이식 실내화걸이",
    payment: "20000",
    heart: 1515,
    category: "receiving"
  },
];