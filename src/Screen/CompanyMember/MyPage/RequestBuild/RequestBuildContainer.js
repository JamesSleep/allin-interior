import React from "react";
import RequestBuildPresenter from "./RequestBuildPresenter";

export default ({ navigation, route: { params: { data } } }) => {
  return (
    <RequestBuildPresenter
      data={data}
      navigation={navigation}
      option={"company"}
    />
  )
}