import React from "react";
import StoryPresenter from "./StoryPresenter";

import { connect } from "react-redux";
import ActionCreators from "../../redux/action";

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
  return (
    <StoryPresenter 
      userInfo={user_info.information}
    />
  )
});