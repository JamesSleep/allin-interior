import types from "../action/types";

const user_info = {
  information: {},
  follower: 0,
  following: 0,
  write: 0
};

export default (state = user_info, action) => {
  switch (action.type) {
    case types.SET_USER_INFO:
      return {
        ...state,
        information: action.payload
      };
    default:
      return state;
  }
};