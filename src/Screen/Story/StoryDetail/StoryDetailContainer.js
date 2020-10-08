import React from "react";
import StoryDetailPresentor from "./StoryDetailPresentor";

export default ({ navigation, route }) => {
  const { params: { data } } = route;
  return (
    <StoryDetailPresentor 
      navigation={navigation}
      data={data}
    />
  )
}