import React, { useState, useEffect } from "react";
import CompanyListPresenter from "./CompanyListPresenter";
import { CompanyInfoAPI } from "../../../common/api";

export default ({ navigation, route }) => {
  const Screen = route.name;
  const [list, setList] = useState();
  const [filter, setFilter] = useState("전체선택");

  useEffect(() => {
    getData();
  }, [filter]);

  const getData = async () => {
    const [success, data] = await CompanyInfoAPI();
    if (!success) return;
    
    let array = [];
    array = data;
    array = filterSet(array);
    setList(array);
  }

  const filterSet = (array = []) => {
    switch (filter) {
      case "전체선택": {
        return array;
      }
      case "주거공간": {
        return array.filter(item => item.residential === "1");
      }
      case "상업공간": {
        return array.filter(item => item.commercial === "1");
      }
      case "청소": {
        return array.filter(item => item.cleaning === "1");
      }
      default: break;
    }
  }

  return (
    <CompanyListPresenter 
      navigation={navigation}
      screen={Screen}
      list={list}
      filter={filter}
      setFilter={setFilter}
    />
  )
}