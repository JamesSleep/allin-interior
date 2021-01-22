import React, { useState, useEffect } from "react";
import styled from "styled-components/native";
import { GetOneProductAPI } from "../../common/api";
import Icon from "react-native-vector-icons/FontAwesome";
import EvilIcon from "react-native-vector-icons/EvilIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import { _WIDTH, buttonColor } from "../../common/theme";
import { TouchableOpacity } from "react-native-gesture-handler";
import { imagePathFormat } from "../../utils/imagePathFormat";

const Container = styled.View`
  padding: 10px 20px;
  border-bottom-width: 5px;
  border-color: #dddddd;
`;

const TitleView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const ComboView = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const CheckBox = styled.View`
  width: 25px;
  height: 25px;
  border-width: 0.5px;
  border-color: gray;
  border-radius: 5px;
  margin-right: 5px;
`;

const Title = styled.Text`
  font-size: 14px;
`;

const ImageView = styled.View`
  margin-top: 10px;
  flex-direction: row;
  justify-content: space-around;
`;

const Image = styled.Image`
  flex: 1;
  width: 120px;
  height: 120px;
`;

const OptionText = styled.Text`
  padding-left: 10px;
  font-size: 13px;
  color: gray;
  flex: 1;
`;

const ButtonView = styled.View`
  flex: 1;
  justify-content: flex-end;
  align-items: flex-end;
`;

const ChangeView = styled.View`
  flex-direction: row;
`;

const Minus = styled.View`
  width: 30px;
  height: 30px;
  border-width: 0.5px;
  border-color: gray;
  justify-content: center;
  align-items: center;
  border-bottom-left-radius: 3px;
  border-top-left-radius: 3px;
`;

const Plus = styled.View`
  width: 30px;
  height: 30px;
  border-width: 0.5px;
  border-color: gray;
  justify-content: center;
  align-items: center;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
`;

const Quantity = styled.View`
  width: 35px;
  height: 30px;
  border-top-width: 0.5px;
  border-bottom-width: 0.5px;
  border-color: gray;
  background-color: white;
  justify-content: center;
  align-items: center;
`;

const QuantityText = styled.Text`
  font-size: ${_WIDTH / 28}px;
`;

const PriceView = styled.View`
  margin-top: 10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-top-width: 0.5px;
  border-top-color: #dddddd;
  padding-top: 5px;
`;

const PriceTitle = styled.Text`
  font-size: 15px;
  color: gray;
`;

const PriceText = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;

const PriceWon = styled.Text`
  font-size: 13px;
  font-weight: 500;
  color: gray;
`;

export default ({ info, updateCart, deleteCart, checkList, setCheckList }) => {
  const [product, setProduct] = useState({});

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = async () => {
    const data = JSON.stringify({ "pr_index": info.pr_index });
    const result = await GetOneProductAPI(data);
    setProduct(result[1]);
  }

  const isCheck = () => {
    const array = checkList.filter(check => check.ct_index === info.ct_index);
    if (array.length > 0) return true;
    else return false;
  }

  const checking = () => {
    if (isCheck()) {
      setCheckList(checkList.filter(check => check.ct_index !== info.ct_index ));
    } else {
      setCheckList([...checkList, info]);
    }
  }

  return (
    <Container>
      <TitleView>
        <ComboView>
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => checking()}
          >
            <CheckBox>
              { isCheck() && (
                <Icon name="check" size={24} color={buttonColor} />
              )}
            </CheckBox>
          </TouchableOpacity>
          <Title>{product.name}</Title>
        </ComboView>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => deleteCart(info.ct_index)}
        >
          <EvilIcon name="close" size={24} color={"black"} />
        </TouchableOpacity>
      </TitleView>
      <ImageView>
        { product.image && (
          <Image source={{ uri: imagePathFormat(product.image) }} />
        )}
        <OptionText>{info.option}</OptionText>
        <ButtonView>
          <ChangeView>
            <TouchableOpacity
              onPress={() => {
                if (Number(info.quantity) === 1 ) return;
                updateCart(info.ct_index, Number(info.quantity)-1);
              }}
            >
              <Minus>
                <AntDesign name="minus" size={_WIDTH / 24} color="#95a5a6" />
              </Minus>
            </TouchableOpacity>
            <Quantity>
              <QuantityText>{info.quantity}</QuantityText>
            </Quantity>
            <TouchableOpacity
              onPress={() => {
                updateCart(info.ct_index, Number(info.quantity)+1);
              }}
            >
              <Plus>
                <AntDesign name="plus" size={_WIDTH / 24} color="#95a5a6" />
              </Plus>
            </TouchableOpacity>
          </ChangeView>
        </ButtonView>
      </ImageView>
      <PriceView>
        <PriceTitle>판매가</PriceTitle>
        <PriceText>
          {numbering((Number(info.price) * Number(info.quantity)).toString())}
          <PriceWon>원</PriceWon>
        </PriceText>
      </PriceView>
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

  return result + " ";
} 