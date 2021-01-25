import React, { useState, useEffect } from "react";
import ShopPaymentPresenter from "./ShopPaymentPresenter";
import AsyncStorage from "@react-native-community/async-storage";
import { UserInfoAPI, NewDeliveryAPI } from "../../../../common/api";

export default ({ navigation, route: { params: { data } } }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [listVisible, setListVisible] = useState(false);
  const [tranferFee, setTransferFee] = useState(0);
  const [userInfo, setUserInfo] = useState({});
  const [receiverInfo, setReceiverInfo] = useState({
    name: "",
    phone1: "",
    phone2: "",
    phone3: "",
    zipcode: "",
    address1: "",
    address2: "",
    memo: "",
    payment: "",
  });

  useEffect(() => {
    getUser();
    calTranfer();
  }, []);

  const getUser = async () => {
    const { email } = JSON.parse(await AsyncStorage.getItem("loginData"));
    const postData = JSON.stringify({ "email": email });
    const result = await UserInfoAPI(postData);
    setReceiverInfo({
      ...receiverInfo,
      name: result[1].user_name,
      phone1: (result[1].phone_number).slice(0,3),
      phone2: (result[1].phone_number).slice(3,7),
      phone3: (result[1].phone_number).slice(7,11),
      zipcode: result[1].zipcode,
      address1: result[1].address1,
      address2: result[1].address2
    });
    setUserInfo(result[1]);
  }

  const calTranfer = () => {
    let tranfer = 0;
    const array = data.list;
    for (let i=0; i<array.length; i++) {
      tranfer += Number(array[i].product.transfer_fee);
    }
    setTransferFee(tranfer);
  }

  const requestHandler = async () => {
    const date = new Date();
    const requestNumber = `${date.getFullYear()}${date.getMonth()+1}${date.getDate()}${data.list[0].ct_index}`;
    const postData = JSON.stringify({
      "mb_index": userInfo.mb_index,
      "price": (data.price+tranferFee).toString(),
      "receiver": receiverInfo.name,
      "phone_number": receiverInfo.phone1+receiverInfo.phone2+receiverInfo.phone3,
      "zipcode": receiverInfo.zipcode,
      "address1": receiverInfo.address1,
      "address2": receiverInfo.address2,
      "memo": receiverInfo.memo,
      "transfer_fee": tranferFee.toString(),
      "payment_way": receiverInfo.payment,
      "state": "결제완료",
      "request_number": requestNumber,
      "request_timestamp": date.getTime(),
      "payment_timestamp": date.getTime()
    });

    console.log(postData);

    const result = await NewDeliveryAPI(postData);
    if (result[0]) {    
      const data = JSON.stringify({ "email": userInfo.email });
      await DeleteCartAPI(data);
      navigation.reset({
        index: 0,
        routes: [{ name: 'Home' }],
      });
    } else {
      console.log(result);
    }
  }

  return (
    <ShopPaymentPresenter 
      navigation={navigation}
      shopList={data.list}
      visible={listVisible}
      setVisible={setListVisible}
      userInfo={userInfo}
      receiverInfo={receiverInfo}
      setReceiverInfo={setReceiverInfo}
      modalVisible={modalVisible}
      setModalVisible={setModalVisible}
      price={data.price}
      tranfer={tranferFee}
      requestHandler={requestHandler}
    />
  )
}