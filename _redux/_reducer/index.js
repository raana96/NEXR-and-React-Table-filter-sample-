import { combineReducers } from "redux";
import userReducer from "./user-reducer";
import alertReducer from "./alert-reducer";

export default combineReducers({
  user: userReducer,
  alert: alertReducer,
});
