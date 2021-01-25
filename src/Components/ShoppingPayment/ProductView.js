import React from "react";
import styled from "styled-components/native";
import AntDesign from "react-native-vector-icons/AntDesign";
import { TouchableOpacity } from "react-native-gesture-handler";
import { imagePathFormat } from "../../utils/imagePathFormat";

const Container = styled.View`
  border-color: #eeeeee;
  border-bottom-width: 8px;
`;

const TitleView = styled.View`
  width: 100%;
  height: 50px;
  flex-direction: row;
  align-items: center;
  padding: 0px 20px;
  border-color: #dddddd;
  border-bottom-width: 0.7px;
`;

const TitleText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin-right: 10px;
`;

const CountText = styled.Text`
  font-size: 14px;
`;

const ArrowView = styled.View`
  position: absolute;
  right: 20px;
`;

const ProductBox = styled.View`
  width: 100%;
  height: 130px;
  padding: 12px 0px;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  border-color: #dddddd;
  border-bottom-width: 0.7px;
`;

const Image = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 10px;
`;

const InfoView = styled.View`
  padding: 3px 0px;
  height: 100%;
  justify-content: center;
  align-items: flex-start;
`;

const ProductName = styled.Text`
  font-size: 13px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const InfoText = styled.Text`
  font-size: 12px;
  color: gray;
`;

const PriceView = styled.View``;

const PriceText = styled.Text`
  font-size: 13px;
  font-weight: bold;
`;

export default ({ productList, visible, setVisible }) => (
  <Container>
    <TouchableOpacity onPress={() => setVisible(!visible)}>
      <TitleView>
        <TitleText>상품 정보</TitleText>
        <CountText>( {productList.length}개 )</CountText>
        <ArrowView>
          <AntDesign name={visible ? "up" : "down"} size={20} color="gray" />
        </ArrowView>
      </TitleView>
    </TouchableOpacity>
    { visible && (
      productList.map(item => (
        <ProductBox key={item.ct_index}>
          <Image source={{ uri: imagePathFormat(item.product.image) }} />
          <InfoView>
            <ProductName>{nameWrap(item.product.name)}</ProductName>
            <InfoText>
              옵션: {item.option} {"\n"}
              수량: {item.quantity}
            </InfoText>
          </InfoView>
          <PriceView>
            <PriceText>{numbering((Number(item.price) * Number(item.quantity)).toString())}</PriceText>
          </PriceView>
        </ProductBox>
      ))
    )}
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

  return result + "원";
} 

const nameWrap = (text = "") => 
  text.length > 14 ? `${text.slice(0, 14)}...` : text;
