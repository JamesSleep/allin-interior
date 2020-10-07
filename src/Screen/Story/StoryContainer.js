import React, { useState, useEffect } from "react";
import StoryPresenter from "./StoryPresenter";

import { connect } from "react-redux";
import ActionCreators from "../../redux/action";
import { GetStoryAPI } from "../../common/api";

const mapStateToProps = state => {
  return {
    user_info: state.user_info
  }
};

const mapDispatchToProps = dispatch => {
  return {
    setUserInfo: (user_info) => {
      dispatch(ActionCreators.setUserInfo(user_info))
    }
  }
} 

export default connect(mapStateToProps, mapDispatchToProps)
(({ navigation, user_info }) => {
  const [storyList, setStoryList] = useState([]);

  useEffect(() => { getStoryList(); }, []);

  const getStoryList = async () => {
    const result = await GetStoryAPI();
    setStoryList(result[1]);
  };

  return (
    <StoryPresenter 
      userInfo={user_info.information}
      navigation={navigation}
      storyList={storyList}
    />
  )
});