import React from "react";
import CompanyInfoPresenter from "./CompanyInfoPresenter";

export default ({ navigation, route }) => {
  const Screen = route.name;
  const { info } = route.params;

  return (
    <CompanyInfoPresenter 
      navigation={navigation}
      screen={Screen}
      info={info}
    />
  )
}