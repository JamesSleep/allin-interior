import React, { useState, useEffect } from "react";
import HomePresenter from "./HomePresenter";
import { GetStoryAPI } from "../../../common/api";

export default ({ navigation }) => {
  const [storyList, setStoryList] = useState();

  useEffect(() => {
    getStory();
  }, []);

  const getStory = async () => {
    const list = await GetStoryAPI();
    setStoryList(list[1]);
  }

  return (
    <HomePresenter 
      navigation={navigation}
      storyList={storyList}
    />
  )
}