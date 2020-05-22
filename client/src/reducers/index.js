import { combineReducers } from "redux";
import dbcReducer from "./dbcReducer";

export default combineReducers({
  dbcResults: dbcReducer,
});
