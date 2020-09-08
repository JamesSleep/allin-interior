import types from '../action/types';

const screen = "";

export default ( state = screen, action ) => {
  switch ( action.type ) {
    case types.SET_SIGNUP_TYPE:
      return action.payload;
    default:
      return state;
  }
};