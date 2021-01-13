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

export default ({ navigation, category, filters, setFilter, list }) => {
  const [visible, setVisible] = useState(false);

  /* const filterSet = (array = []) => {
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
  } */

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
          {list.length}건의 검색결과
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
        {list.map(product => (
          <Product
            key={product.pr_index}
            info={product}
            navigation={navigation}
          />
        ))}
      </List>
    </Container>
  )
}