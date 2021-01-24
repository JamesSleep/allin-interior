import React, { useState, useEffect } from "react";
import CartPagePresenter from "./CartPagePresenter";
import AsyncStorage from "@react-native-community/async-storage";
import { GetCartAPI, UpdateCartAPI, DeleteCartAPI } from "../../../../common/api";

export default ({ navigation }) => {
  const [list, setList] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [price, setPrice] = useState(0);
  const [checkCount, setCheckCount] = useState(0);

  useEffect(() => {
    if (list.length < 1) getList();
    if (list.length > 0) {
      checking();
      calPrice();
    }
  }, [refresh]);

  const getList = async () => {
    const { email } = JSON.parse(await AsyncStorage.getItem("loginData"));
    const data = JSON.stringify({ "email": email });
    const result = await GetCartAPI(data);

    if (!result[0]) return;
    let cartList = result[1];
    
    for (let i=0; i<cartList.length; i++) {
      cartList[i].check = true;
    }
    setList(cartList);
    setRefresh(!refresh);
  }

  const checking = () => {
    let count = 0;
    for (let i=0; i<list.length; i++) {
      if (list[i].check) count++;
    }
    setCheckCount(count);
  }

  const allCheck = () => {
    for (let i=0; i<list.length; i++) {
      if (list.length === checkCount) {
        list[i].check = false;
      } else {
        list[i].check = true;
      }
    }
    if (list.length === checkCount) setCheckCount(0);
    else setCheckCount(list.length);
    setRefresh(!refresh);
  }

  const handleCheck = index => {
    let array = list;
    for (let i=0; i<list.length; i++) {
      if (list[i].ct_index === index) {
        array[i].check = !(list[i].check);
      }
    }
    setList(array);
    setRefresh(!refresh);
  }

  const updateCart = async (index, quantity) => {
    if (quantity < 1) return;
    const array = list.map((item, idx) => {
      if (item.ct_index === index) {
        item.quantity = quantity;
        return item;
      } else return item;
    });
    setList(array);

    const data = JSON.stringify({
      "ct_index": index,
      "quantity": quantity
    });
    const result = await UpdateCartAPI(data);
    if (result[0]) {
      setRefresh(!refresh);
    }
  }

  const deleteCart = async (index) => {
    const array = list.filter(item=>item.ct_index !== index);
    setList(array);
    const data = JSON.stringify({ "ct_index": index });
    const result = await DeleteCartAPI(data);
    if (result[0]) {
      setRefresh(!refresh);
    }
  }

  const deleteAllCart = async () => {
    setList([]);
    setCheckCount(0);
    setPrice(0);
    const { email } = JSON.parse(await AsyncStorage.getItem("loginData"));
    const data = JSON.stringify({ "email": email });
    const result = await DeleteCartAPI(data);
    console.log(result);
    if (result[0]) {
      setRefresh(!refresh);
    }
  }

  const calPrice = () => {
    if (list.length < 1) return;
    let result = 0;
    for (let i=0; i<list.length; i++) {
      const { quantity, price } = list[i];
      if (list[i].check) {
        result += Number(quantity) * Number(price);
      }
    }
    setPrice(result);
  }

  return (
    <CartPagePresenter 
      navigation={navigation}
      cartList={list}
      checkCount={checkCount}
      allCheck={allCheck}
      deleteAllCart={deleteAllCart}
      price={price}
      handleCheck={handleCheck}
      deleteCart={deleteCart}
      updateCart={updateCart}
    />
  )
}