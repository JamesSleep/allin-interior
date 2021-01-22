import React from "react";
import styled from "styled-components/native";
import AntDesign from "react-native-vector-icons/AntDesign";
import { _WIDTH } from "../../common/theme";
import { TouchableOpacity } from "react-native-gesture-handler";

const Container = styled.View`
  width: 100%;
  margin-bottom: 10px;
`;

const ProductView = styled.View`
  width: 100%;
  padding-top: 10px;
  padding-bottom: 10px;
  border-bottom-width: 0.5px;
  border-bottom-color: #dddddd;
`;

const ProductText = styled.Text`
  font-size: ${_WIDTH / 28}px;
  margin-bottom: 5px;
`;

const ResultRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const ChangeButtonView = styled.View`
  flex-direction: row;
  align-items: center;
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
  flex-direction: row;
  align-items: center;
`;

const Price = styled.Text`
  font-weight: bold;
  font-size: ${_WIDTH / 28}px;
  margin-right: 10px;
`;

const Delete = styled.View`
  width: 30px;
  height: 30px;
  border-width: 0.5px;
  border-color: gray;
  border-radius: 1px;
  background-color: white;
  justify-content: center;
  align-items: center;
`;

export default ({ info, productArray, setProductArray }) => (
  <Container>
    { productArray.map((select, index) => (
      <ProductView key={index}>
        <ProductText>
          {`[${select.option}] ${info.name}`}
        </ProductText>
        <ResultRow>
          <ChangeButtonView>
            <TouchableOpacity
              onPress={() => {
                if (select.quantity === 1) return;
                let array = productArray.map((product, index) =>(
                  product.index === select.index ? {...product, quantity: select.quantity - 1} : product
                ));
                setProductArray(array);
              }}
            >
              <Minus>
                <AntDesign 
                  name="minus"
                  size={_WIDTH / 24}
                  color="#95a5a6"
                />
              </Minus>
            </TouchableOpacity>
            <Quantity>
              <QuantityText>
                {select.quantity}
              </QuantityText>
            </Quantity>
            <TouchableOpacity
              onPress={() => {
                let array = productArray.map((product, index) =>(
                  product.index === select.index ? {...product, quantity: select.quantity + 1} : product
                ));
                setProductArray(array);
              }}
            >
              <Plus>
                <AntDesign 
                  name="plus"
                  size={_WIDTH / 24}
                  color="#95a5a6"
                />
              </Plus>
            </TouchableOpacity>
          </ChangeButtonView>
          <PriceView>
            <Price>
              {numbering((select.price * select.quantity).toString())}
            </Price>
            <TouchableOpacity
              onPress={() => {
                let array = productArray.filter(product => product.index !== select.index);
                setProductArray(array);
              }}
            >
              <Delete>
                <AntDesign 
                  name="close"
                  size={_WIDTH / 22}
                  color="#95a5a6"
                />
              </Delete>
            </TouchableOpacity>
          </PriceView>
        </ResultRow>
      </ProductView>
    ))}
  </Container>
)

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