import * as signupAction from "./signupAction";
import * as userAction from "./userAction";

const ActionCreators = Object.assign({},
  signupAction,
  userAction
);

export default ActionCreators;