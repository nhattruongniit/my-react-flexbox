import { combineReducers } from "redux";

// reducers
import { appReducer } from "../features/apps";

export default combineReducers({
  app: appReducer
});
