import React from "react";
import RequestPresenter from "./RequestPresenter";

export default ({ navigation, route }) => {
  const Screen = route.name;

  return (
    <RequestPresenter 
      navigation={navigation}
      screen={Screen}
    />
  )
}