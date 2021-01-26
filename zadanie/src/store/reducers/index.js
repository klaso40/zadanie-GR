import switchReducer from "./switchHelpReducer";
import donationReducer from "./donationReducer";
import formReducer from "./formReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  help: switchReducer,
  donation: donationReducer,
  formIndex: formReducer,
});

export default rootReducer;
