import { combineReducers } from "redux";
import SignUpReducer from "./signupReducer";
import UserReducer from "./userReducer";

export default combineReducers({
  screen: SignUpReducer,
  user_id: UserReducer
});