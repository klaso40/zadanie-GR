import switchReducer from "./switchHelpReducer";
import donationReducer from "./donationReducer";
import formReducer from "./formReducer";
import nameReducer from "./nameReducer";
import lastNameReducer from "./lastNameReducer";
import emailReducer from "./emailReducer";
import phoneNumberReducer from "./phoneNumberReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  help: switchReducer,
  donation: donationReducer,
  formIndex: formReducer,
  name: nameReducer,
  lastName: lastNameReducer,
  email: emailReducer,
  phoneNumber: phoneNumberReducer,
});

export default rootReducer;
