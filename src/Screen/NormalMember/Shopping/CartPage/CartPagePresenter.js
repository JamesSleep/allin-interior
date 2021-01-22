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

export default ({ navigation, list, updateCart, deleteCart, count, price, checkList, setCheckList, allCheck, delAllCart }) => ( 
  <Container>
    <Head navigation={navigation} />
    { list.length > 0 ? (
      <>
      <ScrollView
        contentContainerStyle={{
          paddingBottom: 90
        }}
      >
        <CheckView 
          count={count}
          checkCount={checkList.length}
          allCheck={allCheck}
          setCheckList={setCheckList}
          deleteCart={delAllCart}
        />
        { list.map(item => (
            <CartBox 
              key={item.ct_index}
              info={item}
              updateCart={updateCart}
              deleteCart={deleteCart}
              checkList={checkList}
              setCheckList={setCheckList}
            />
          ))
        }
      </ScrollView>
      <OrderView 
        navigation={navigation}
        count={checkList.length}
        price={price}
      />
      </>
    ) : (
      <EmptyCart>
        <EmptyText>장바구니에 상품이 없습니다.</EmptyText>
      </EmptyCart>
    )}
  </Container>
)