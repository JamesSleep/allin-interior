import React, { useState } from "react";
import styled from "styled-components/native";
import AntDesign from "react-native-vector-icons/AntDesign";
import { backgroundColor, buttonColor, _WIDTH } from "../../common/theme";
import { TouchableOpacity } from "react-native-gesture-handler";
import { ScrollView } from "react-native";

const Container = styled.View`
  width: 100%;
  height: 280px;
  padding: 15px 15px;
  background-color: #f8f8f8;
  align-items: center;
`;

const SelectBox = styled.View`
  width: 100%;
  height: ${props => props.open ? 280 : _WIDTH * 0.1}px;
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
  font-size: ${_WIDTH / 28}px;
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
  background-color: #bdc3c7;
  margin-right: 15px;
  border-radius: 2px;
  justify-content: center;
  align-items: center;
`;

const CartText = styled.Text`
  font-size: ${_WIDTH / 28}px;
  color: white;
  font-weight: bold;
`;

const BuyButton = styled.View`
  width: ${_WIDTH * 0.4}px;
  height: ${_WIDTH * 0.12}px;
  background-color: #bdc3c7;
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
`;

const OptionColumn = styled.View`
  height: 35px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-top-width: 0.5px;
  border-top-color: gray;
`;

const OptionText = styled.Text``;

export default ({ navigation, setVisible, info }) => {
  const [open, setOpen] = useState(false);

  return (
    <Container>
      <TopButton>
        <TouchableOpacity onPress={() => setVisible(false)}>
          <AntDesign
            name="down"
            size={_WIDTH / 18}
            color={buttonColor}
          />
        </TouchableOpacity>
      </TopButton>
      <SelectBox open={open}>
        <SelectColumn onTouchEnd={() => setOpen(true)}>
          <SelectText>옵션을 선택해주세요.</SelectText>
          <AntDesign
            name="caretdown"
            size={_WIDTH / 30}
            color={buttonColor}
          />
        </SelectColumn>
        {open &&
          <ScrollView
            contentContainerStyle={{
              marginTop: 10
            }}
          >
            {info.option?.map((opt, index) => (
              <OptionColumn
                key={index}
                onTouchEnd={() => setOpen(false)}
              >
                <OptionText>{opt.option}</OptionText>
              </OptionColumn>
            ))}
          </ScrollView>
        }
      </SelectBox>
      <PriceView>
        <PriceTitle>상품 합계</PriceTitle>
        <PriceText>0원</PriceText>
      </PriceView>
      <ButtonColumn>
        <TouchableOpacity>
          <CartButton>
            <CartText>장바구니</CartText>
          </CartButton>
        </TouchableOpacity>
        <TouchableOpacity>
          <BuyButton>
            <BuyText>바로구매</BuyText>
          </BuyButton>
        </TouchableOpacity>
      </ButtonColumn>
    </Container>
  )
}