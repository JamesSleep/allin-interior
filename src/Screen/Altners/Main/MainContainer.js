import React, { useState, useEffect } from "react";
import MainPresenter from "./MainPresenter";
import { GetInteriorAPI } from "../../../common/api";

export default ({ navigation, route }) => {
  const Screen = route.name;
  const [list, setList] = useState();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    let array = [];
    const [success, data] = await GetInteriorAPI();
    array = data.filter(item => item.state === "500");
    setList(array);
  }

  return (
    <MainPresenter 
      navigation={navigation}
      screen={Screen}
      list={list}
    />
  )
}