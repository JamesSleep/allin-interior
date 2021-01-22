import React, { useState } from "react";
import styled from "styled-components/native";
import AntDesign from "react-native-vector-icons/AntDesign";
import { backgroundColor, buttonColor, _WIDTH } from "../../common/theme";
import { TouchableOpacity } from "react-native-gesture-handler";
import { ScrollView } from "react-native";
import SelectedBox from "./SelectedBox";

const Container = styled.View`
  width: 100%;
  padding: 13px 15px;
  background-color: #f8f8f8;
  align-items: center;
  border-top-width: 0.4px;
  border-top-color: #dddddd;
`;

const SelectBox = styled.View`
  width: 100%;
  height: ${_WIDTH * 0.1}px;
  padding: 0px 10px;
  justify-content: center;
  border-width: 1px;
  border-color: ${buttonColor};
  background-color: white;
  margin-bottom: 20px;
`;

const SelectColumn = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const SelectText = styled.Text`
  color: gray;
`;

const PriceView = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const PriceTitle = styled.Text`
  color: gray;
  font-size: ${_WIDTH / 28}px;
`;

const PriceText = styled.Text`
  font-size: ${_WIDTH / 26}px;
  font-weight: bold;
`;

const ButtonColumn = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const CartButton = styled.View`
  width: ${_WIDTH * 0.4}px;
  height: ${_WIDTH * 0.12}px;
  background-color: ${props => props.onOption ? backgroundColor : "#bdc3c7"};
  border-width: 0.5px;
  border-color: ${props => props.onOption ? buttonColor : 0};
  margin-right: 15px;
  border-radius: 2px;
  justify-content: center;
  align-items: center;
`;

const CartText = styled.Text`
  font-size: ${_WIDTH / 28}px;
  color: ${props => props.onOption ? buttonColor : "white" };
  font-weight: bold;
`;

const BuyButton = styled.View`
  width: ${_WIDTH * 0.4}px;
  height: ${_WIDTH * 0.12}px;
  background-color: ${props => props.onOption ? buttonColor : "#bdc3c7"};
  border-radius: 2px;
  justify-content: center;
  align-items: center;
`;

const BuyText = styled.Text`
  font-size: ${_WIDTH / 28}px;
  color: white;
  font-weight: bold;
`;

const TopButton = styled.View`
  position: absolute;
  width: 80px;
  height: 27px;
  top: -26px;
  background-color: #f8f8f8;
  justify-content: center;
  align-items: center;
  border-top-width: 0.6px;
  border-left-width: 0.6px;
  border-right-width: 0.6px;
  border-color: #dddddd;
`;

const OptionBox = styled.View`
  width: 100%;
  justify-content: center;
  border-width: 1px;
  border-color: ${buttonColor};
  background-color: white;
`;

const OptionColumn = styled.View`
  width: 100%;
  height: 50px;
  padding: 0px 10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-top-width: 0.5px;
  border-top-color: gray;
`;

const OptionText = styled.Text``;

export default ({ 
  navigation, setVisible, info, productArray, 
  setProductArray, price, productIndex, setProductIndex,
  cartInsert
}) => {
  const [open, setOpen] = useState(false);

  return (
    <Container>
      <TopButton>
        <TouchableOpacity 
          onPress={() => {
            if(open) setOpen(false);
            else setVisible(false);
          }}
        >
          <AntDesign
            name="down"
            size={_WIDTH / 18}
            color={buttonColor}
          />
        </TouchableOpacity>
      </TopButton>
      { !open ? (
        <>
        <SelectBox>
          <TouchableOpacity onPress={()=> setOpen(true)}>
            <SelectColumn>
              <SelectText>옵션을 선택해주세요.</SelectText>
              <AntDesign
                name="caretdown"
                size={_WIDTH / 30}
                color={buttonColor}
              />
            </SelectColumn>
          </TouchableOpacity>
        </SelectBox>
        { productArray.length > 0 && (
          <SelectedBox 
            info={info}
            productArray={productArray}
            setProductArray={setProductArray}
          />
        )}
        <PriceView>
          <PriceTitle>상품 합계</PriceTitle>
          <PriceText>{numbering(price.toString())}</PriceText>
        </PriceView>
        <ButtonColumn>
          <TouchableOpacity
            activeOpacity={productArray.length > 0 ? 0.5 : 1}
            onPress={() => cartInsert()}
          >
            <CartButton onOption={productArray.length > 0}>
              <CartText onOption={productArray.length > 0}>장바구니</CartText>
            </CartButton>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={productArray.length > 0 ? 0.5 : 1}
          >
            <BuyButton onOption={productArray.length > 0}>
              <BuyText>바로구매</BuyText>
            </BuyButton>
          </TouchableOpacity>
        </ButtonColumn>
        </>
      ) : (
        <OptionBox>
          <ScrollView>
            { info.option?.map((opt, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  setProductArray([
                    ...productArray,
                    { index: productIndex, option: opt.option, quantity: 1, price: Number(info.sale_price)+Number(opt.add_price) }
                  ]);
                  setOpen(false);
                  setProductIndex(productIndex + 1);
                }}
              >
                <OptionColumn>
                  <OptionText>{opt.option}</OptionText>
                  <OptionText>
                    {numbering((Number(info.sale_price)+Number(opt.add_price)).toString())}
                  </OptionText>
                </OptionColumn>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </OptionBox>
      )}
    </Container>
  )
}

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

  return result + " 원";
} 