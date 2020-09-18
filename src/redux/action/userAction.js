import types from "./types";

export const setUserInfo = user_info => {
  return {
    type: types.SET_USER_INFO,
    payload: user_info
  }
}