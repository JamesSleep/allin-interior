import React, { useEffect, useState } from "react";
import AltnersPresenter from "./AltnersPresenter";
import { CompanyInfoAPI } from "../../../common/api";

export default ({ navigation }) => {
  const [companies, setCompanies] = useState();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const result = await CompanyInfoAPI();
    setCompanies(result[1]);
  }

  return (
    <AltnersPresenter
      companies={companies}
      navigation={navigation}
    />
  )
}