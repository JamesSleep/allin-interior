import React, { useEffect, useState } from "react";
import { GetProductAPI } from "../../../../common/api";
import ShoppingBestPresenter from "./ShoppingBestPresenter";

export default ({ navigation }) => {
  const [selected, setSelected] = useState(true);
  const [list, setList] = useState([]);

  useEffect(() => {
    getData();
  }, [selected]);

  const getData = async () => {
    const result = await GetProductAPI();
    let array = [];

    if (!result[0]) {
      return;
    }

    array = result[1];
    array = filterSet(array);
    setList(array);
  }

  const filterSet = (array = []) => {
    switch (selected) {
      case true: {
        array.sort(function (a, b) {
          if (Number(a.order) > Number(b.order)) return -1;
          if (Number(a.order) === Number(b.order)) return 0;
          if (Number(a.order) < Number(b.order)) return 1;
        });
        return array;
      }
      case false: {
        array.sort(function (a, b) {
          if (Number(a.review) > Number(b.review)) return -1;
          if (Number(a.review) === Number(b.review)) return 0;
          if (Number(a.review) < Number(b.review)) return 1;
        });
        return array;
      }
      default: break;
    }
  }

  return (
    <ShoppingBestPresenter
      navigation={navigation}
      selected={selected}
      setSelected={setSelected}
      list={list}
    />
  )
}