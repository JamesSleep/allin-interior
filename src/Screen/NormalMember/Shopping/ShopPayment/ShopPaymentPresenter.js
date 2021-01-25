import React from "react";
import { ScrollView, KeyboardAvoidingView, Platform } from "react-native";
import styled from "styled-components/native";
import { backgroundColor, _WIDTH, buttonColor } from "../../../../common/theme";
import Header from "../../../../Components/ShoppingPayment/Header";
import ProductView from "../../../../Components/ShoppingPayment/ProductView";
import OwnerView from "../../../../Components/ShoppingPayment/OwnerView";
import DeliveryInfo from "../../../../Components/ShoppingPayment/DeliveryInfo";
import PaymentInfo from "../../../../Components/ShoppingPayment/PaymentInfo";
import PayWayView from "../../../../Components/ShoppingPayment/PayWayView";
import { TouchableOpacity } from "react-native-gesture-handler";

const Container = styled.View`
  flex: 1;
  background-color: ${backgroundColor};
`;

const ButtonView = styled.View`
  width: 100%;
  height: 85px;
  justify-content: center;
  align-items: center;
`;

const Button = styled.View`
  width: ${_WIDTH * 0.9}px;
  height: 45px;
  background-color: ${buttonColor};
  justify-content: center;
  align-items: center;
  border-radius: 5px;
`;

const Text = styled.Text`
  font-size: 15px;
  color: white;
`;

export default ({ 
  navigation, shopList, userInfo, visible, setVisible,
  receiverInfo, setReceiverInfo, modalVisible, setModalVisible,
  price, tranfer, requestHandler
}) => (
  <KeyboardAvoidingView
    style={{ flex: 1 }}
    behavior={Platform.OS === "ios" ? "padding" : null}
  >
    <Container>
      <Header navigation={navigation} />
      <ScrollView>
        <ProductView 
          productList={shopList}
          visible={visible}
          setVisible={setVisible}
        />
        <OwnerView 
          userInfo={userInfo}
        />
        <DeliveryInfo 
          receiverInfo={receiverInfo}
          setReceiverInfo={setReceiverInfo}
          visible={modalVisible}
          setVisible={setModalVisible}
        />
        <PaymentInfo 
          price={price}
          transfer={tranfer}
        />
        <PayWayView 
          info={receiverInfo}
          setInfo={setReceiverInfo}
        />
      </ScrollView>
      <ButtonView>
        <TouchableOpacity onPress={() => requestHandler()}>
          <Button>
            <Text>주문하기</Text>
          </Button>
        </TouchableOpacity>
      </ButtonView>
    </Container>
  </KeyboardAvoidingView>
)