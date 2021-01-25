import React from "react";
import styled from "styled-components/native";
import { backgroundColor } from "../../../../common/theme";
import Head from "../../../../Components/Cart/Head";
import CartBox from "../../../../Components/Cart/CartBox";
import { ScrollView } from "react-native";
import OrderView from "../../../../Components/Cart/OrderView";
import CheckView from "../../../../Components/Cart/CheckView";

const Container = styled.View`
  flex: 1;
  background-color: ${backgroundColor};
`;

const EmptyCart = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const EmptyText = styled.Text`
  font-size: 22px;
  font-weight: 600;
`;

export default ({ 
  navigation, cartList, checkCount, allCheck, goToPayment,
  deleteAllCart, price, handleCheck, deleteCart, updateCart
}) => ( 
  <Container>
    <Head navigation={navigation} />
    { cartList.length > 0 ? (
      <>
      <ScrollView
        contentContainerStyle={{
          paddingBottom: 90
        }}
      >
        <CheckView 
          cartCount={cartList.length}
          checkCount={checkCount}
          allCheck={allCheck}
          deleteAllCart={deleteAllCart}
        />
        { cartList.map(item => (
            <CartBox 
              key={item.ct_index}
              info={item}
              handleCheck={handleCheck}
              deleteCart={deleteCart}
              updateCart={updateCart}
            />
          ))
        } 
      </ScrollView>
      <OrderView 
        count={checkCount}
        price={price}
        goToPayment={goToPayment}
      />
      </>
    ) : (
      <EmptyCart>
        <EmptyText>장바구니에 상품이 없습니다.</EmptyText>
      </EmptyCart>
    )}
  </Container>
)