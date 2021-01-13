import React, { useEffect, useState } from "react";
import { GetProductAPI } from "../../../../common/api";
import ShoppingDiscountPresenter from "./ShoppingDiscountPresenter";

export default ({ navigation }) => {
  const [list, setList] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const result = await GetProductAPI();
    setList(result[1]);
  }

  return (
    <ShoppingDiscountPresenter
      navigation={navigation}
      list={list}
    />
  )
}