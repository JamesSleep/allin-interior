import React, { useState, useEffect } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import styled from "styled-components/native";
import { buttonColor, _WIDTH } from "../../common/theme";
import SelectProduct from "./SelectProduct";
import AsyncStorage from "@react-native-community/async-storage";
import { NewCartAPI } from "../../common/api";
import CartMessage from "./CartMessage";

const Container = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const Button = styled.View`
  width: ${_WIDTH * 0.85}px;
  height: ${_WIDTH * 0.1}px;
  margin: 15px 0px;
  background-color: ${buttonColor};
  border-radius: 5px;
  justify-content: center;
  align-items: center;
`;

const Text = styled.Text`
  font-size: ${_WIDTH / 28}px;
  color: white;
`;

export default ({ navigation, info, message, setMessage }) => {
  const [visible, setVisible] = useState(false);
  const [productArray, setProductArray] = useState([]);
  const [productIndex, setProductIndex] = useState(0);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    cal_price();
  }, [productArray]);

  const cal_price = () => {
    let result = 0;
    for (let i=0; i<productArray.length; i++) {
      const { price, quantity } = productArray[i];
      result += price * quantity;
    }
    setPrice(result);
  }

  const cartInsert = async () => {
    if (productArray.length < 1) return;

    const { email } = JSON.parse(await AsyncStorage.getItem("loginData"));
    for (let i=0; i<productArray.length; i++) {
      const data = JSON.stringify({
        "pr_index": info.pr_index,
        "option": productArray[i].option,
        "quantity": productArray[i].quantity,
        "price": productArray[i].price,
        "email": email
      });
      const result = await NewCartAPI(data);
      if (!result[0]) console.log(`장바구니 추가 실패 ${i}`);
    }
    //장바구니 메시지 + 네이게이션
    setMessage(true);
    setTimeout(() => {
      setMessage(false);
    }, 1500);
  }

  return (
    <Container visible={visible}>
      { !visible ? (
        <TouchableOpacity onPress={() => setVisible(true)}>
          <Button>
            <Text>구매하기</Text>
          </Button>
        </TouchableOpacity>
      ) : (
        <SelectProduct
          setVisible={setVisible}
          info={info}
          productArray={productArray}
          setProductArray={setProductArray}
          price={price}
          productIndex={productIndex}
          setProductIndex={setProductIndex}
          cartInsert={cartInsert}
        />
      )}
    </Container>
  )
}