import types from '../action/types';
import AsyncStorage from "@react-native-community/async-storage";

const userInfo = {
  loginType: null,
  joinInfo: {},
  memberPrivate: {
    following: 0,
    follower: 0,
    crown: 0,
    notification: 0,
    like: 0,
    bookmark: 0,
    request: 0,
  },
  companyPrivate: {
    image_path: null,
    complete: 0, 
    request: 0,
  }
};


export default ( state = userInfo, action ) => {
  switch ( action.type ) {
    case types.SET_USER_INFO:
      return action.payload;
    default:
      return state;
  }
};