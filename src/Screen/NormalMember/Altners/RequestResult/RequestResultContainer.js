import React from "react";
import RequestResultPresenter from "./RequestResultPresenter";

export default ({ navigation, route: { params: { data } } }) => {
  return (
    <RequestResultPresenter 
      navigation={navigation}
      data={data}
    />
  )
}