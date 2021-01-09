import React from "react";
import RequestBuildPresenter from "./RequestBuildPresenter";

export default ({ navigation, route: { params: { data } } }) => {
  const option = "build";
  return (
    <RequestBuildPresenter
      data={data}
      navigation={navigation}
      option={option}
    />
  )
}