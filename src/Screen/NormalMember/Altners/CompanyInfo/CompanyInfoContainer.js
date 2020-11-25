import React from "react";
import CompanyInfoPresenter from "./CompanyInfoPresenter";

export default ({ route: { params: { info } }, navigation }) => {
  return (
    <CompanyInfoPresenter
      title={info.business_name}
      background={info.landscape}
      navigation={navigation}
      ceoName={info.ceo_name}
      year={info.year}
      city={info.city}
      description={info.description}
    />
  )
}