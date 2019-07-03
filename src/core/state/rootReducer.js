import { combineReducers } from "redux";

import auth from "../../features/auth/reducers/authReducers";
import settings from "../../features/settings/reducers/settingsReducers";

const rootReducer = combineReducers({
  auth,
  settings
});

export default rootReducer;
