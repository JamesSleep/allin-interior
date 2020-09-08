import { combineReducers } from "redux";
import SignUpReducer from "./signupReducer";

export default combineReducers({
  screen: SignUpReducer
});