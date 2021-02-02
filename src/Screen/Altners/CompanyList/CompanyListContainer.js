import React, { useState, useEffect } from "react";
import CompanyListPresenter from "./CompanyListPresenter";
import { CompanyInfoAPI } from "../../../common/api";

export default ({ navigation, route }) => {
  const Screen = route.name;
  const [list, setList] = useState();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const [success, data] = await CompanyInfoAPI();
    if (success) {
      setList(data);
    }
  }

  return (
    <CompanyListPresenter 
      navigation={navigation}
      screen={Screen}
      list={list}
    />
  )
}