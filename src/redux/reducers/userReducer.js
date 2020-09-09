import types from '../action/types';

const user_id = "";

export default ( state = user_id, action ) => {
  switch ( action.type ) {
    case types.SET_USER_ID:
      return action.payload;
    default:
      return state;
  }
};