import React from "react";
import MainPresenter from "./MainPresenter";

export default ({ navigation, route }) => {
  const Screen = route.name;
  return (
    <MainPresenter 
      navigation={navigation}
      screen={Screen}
    />
  )
}