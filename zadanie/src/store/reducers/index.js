import switchReducer from "./switchHelpReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  help: switchReducer,
});

export default rootReducer;
