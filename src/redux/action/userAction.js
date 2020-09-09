import types from "./types";

export const setUserId = user_id => {
  return {
    type: types.SET_USER_ID,
    payload: user_id
  }
}