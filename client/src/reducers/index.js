import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import jobReducer from "./jobReducer";
import proposalReducer from "./proposalReducer";
export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  work: jobReducer,
  proposals: proposalReducer,
});
