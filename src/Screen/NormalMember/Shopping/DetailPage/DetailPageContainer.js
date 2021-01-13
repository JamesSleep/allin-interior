import React from "react";
import DetailPagePresenter from "./DetailPagePresenter";

export default ({ navigation, route: { params: { data } } }) => {
  return (
    <DetailPagePresenter
      navigation={navigation}
      info={data}
    />
  )
}