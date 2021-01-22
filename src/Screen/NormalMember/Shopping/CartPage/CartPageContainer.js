import React, { useState, useEffect } from "react";
import CartPagePresenter from "./CartPagePresenter";
import AsyncStorage from "@react-native-community/async-storage";
import { GetCartAPI, UpdateCartAPI, DeleteCartAPI } from "../../../../common/api";

export default ({ navigation }) => {
  const [list, setList] = useState([]);
  const [checkList, setCheckList] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    getList();
    calPrice();
  }, [refresh]);

  const getList = async () => {
    const { email } = JSON.parse(await AsyncStorage.getItem("loginData"));
    const data = JSON.stringify({ "email": email });
    const result = await GetCartAPI(data);

    if (!result[0]) return;
    if (result[1].length < 1) {
      setList([]);
      setRefresh(!refresh);
      return;
    }

    setList(result[1]);
    if(list.length < 1) setCheckList(result[1]);
  }

  const updateCart = async (index, quantity) => {
    const array = checkList.map((item, idx) => {
      if (item.ct_index === index) {
        item.quantity = quantity;
        return item;
      } else return item;
    });
    console.log(array)
    setCheckList(array);

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
    const array = checkList.filter(item=>item.ct_index !== index);
    setCheckList(array);
    setList(array);

    const data = JSON.stringify({ "ct_index": index });
    const result = await DeleteCartAPI(data);
   
    if (result[0]) {
      setRefresh(!refresh);
    }
  }

  const deleteAllCart = async () => {
    setCheckList([]);
    setList([]);
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
    for (let i=0; i<checkList.length; i++) {
      const { quantity, price } = checkList[i];
      result += Number(quantity) * Number(price);
    }
    setPrice(result);
  }

  const allCheck = () => {
    setCheckList(list);
    setRefresh(!refresh);
  }

  return (
    <CartPagePresenter 
      navigation={navigation}
      list={list}
      updateCart={updateCart}
      deleteCart={deleteCart}
      refresh={refresh}
      setRefresh={setRefresh}
      count={list.length}
      price={price}
      checkList={checkList}
      setCheckList={setCheckList}
      allCheck={allCheck}
      delAllCart={deleteAllCart}
    />
  )
}