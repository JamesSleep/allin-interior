import React, { useState, useEffect } from "react";
import HomePresenter from "./HomePresenter";
import { GetStoryAPI, GetProductAPI } from "../../../common/api";

export default ({ navigation }) => {
  const [storyList, setStoryList] = useState();
  const [selected, setSelected] = useState(true);
  const [shopList, setShopList] = useState([]);

  useEffect(() => {
    getStory();
    getShop();
  }, [selected]);

  const getStory = async () => {
    const list = await GetStoryAPI();
    setStoryList(list[1]);
  }

  const getShop = async () => {
    const result = await GetProductAPI();
    let array = [];

    if (!result[0]) {
      return;
    }
    array = result[1];
    array = filterSet(array);
    setShopList(array);
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
    <HomePresenter 
      navigation={navigation}
      storyList={storyList}
      selected={selected}
      setSelected={setSelected}
      shopList={shopList}
    />
  )
}