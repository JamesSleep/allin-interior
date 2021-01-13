import React, { useEffect, useState } from "react";
import { GetProductAPI } from "../../../../common/api";
import ShoppingHomePresenter from "./ShoppingHomePresenter";

const ModalList = [
  "신상품순", "판매량순", "인기순", "낮은가격순", "높은가격순", "높은할인율순"
];

export default ({ navigation }) => {
  const [category, setCategory] = useState("");
  const [filter, setFilter] = useState("신상품순");
  const [list, setList] = useState([]);

  useEffect(() => {
    getData();
  }, [category, filter]);

  const getData = async () => {
    const result = await GetProductAPI();
    let array = [];

    if (!result[1]) {
      return;
    }

    array = result[1];
    if (category !== "") {
      array = array.filter(product => product.category === category);
    }
    array = filterSet(array);
    setList(array);
  }

  const filterSet = (array = []) => {
    switch (filter) {
      case "신상품순": {
        array.sort(function (a, b) {
          if (Number(a.pr_index) > Number(b.pr_index)) return -1;
          if (Number(a.pr_index) === Number(b.pr_index)) return 0;
          if (Number(a.pr_index) < Number(b.pr_index)) return 1;
        });
        return array;
      }
      case "판매량순": {
        array.sort(function (a, b) {
          if (Number(a.order) > Number(b.order)) return -1;
          if (Number(a.order) === Number(b.order)) return 0;
          if (Number(a.order) < Number(b.order)) return 1;
        });
        return array;
      }
      case "인기순": {
        array.sort(function (a, b) {
          if (Number(a.bookmark) > Number(b.bookmark)) return -1;
          if (Number(a.bookmark) === Number(b.bookmark)) return 0;
          if (Number(a.bookmark) < Number(b.bookmark)) return 1;
        });
        return array;
      }
      case "낮은가격순": {
        array.sort(function (a, b) {
          if (Number(a.sale_price) > Number(b.sale_price)) return 1;
          if (Number(a.sale_price) === Number(b.sale_price)) return 0;
          if (Number(a.sale_price) < Number(b.sale_price)) return -1;
        });
        return array;
      }
      case "높은가격순": {
        array.sort(function (a, b) {
          if (Number(a.sale_price) > Number(b.sale_price)) return -1;
          if (Number(a.sale_price) === Number(b.sale_price)) return 0;
          if (Number(a.sale_price) < Number(b.sale_price)) return 1;
        });
        return array;
      }
      case "높은할인율순": {
        array.sort(function (a, b) {
          if (Number(a.discount) > Number(b.discount)) return -1;
          if (Number(a.discount) === Number(b.discount)) return 0;
          if (Number(a.discount) < Number(b.discount)) return 1;
        });
        return array;
      }
      default: break;
    }
  }

  return (
    <ShoppingHomePresenter
      navigation={navigation}
      category={category}
      setCategory={setCategory}
      filter={filter}
      setFilter={setFilter}
      list={list}
    />
  )
}