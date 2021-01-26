import switchReducer from "./switchHelpReducer";
import donationReducer from "./donationReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  help: switchReducer,
  donation: donationReducer,
});

export default rootReducer;
