import React from "react";
import RequestResultPresenter from "./RequestResultPresenter";

export default ({ navigation, route }) => {
  const { data, option } = route.params;
  return (
    <RequestResultPresenter 
      navigation={navigation}
      data={data}
      option={option}
    />
  )
}