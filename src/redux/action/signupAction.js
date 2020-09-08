import types from "./types";

export const setSignUp = screen => {
  return {
    type: types.SET_SIGNUP_TYPE,
    payload: screen
  }
}