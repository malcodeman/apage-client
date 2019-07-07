import { combineReducers } from "redux";

import auth from "../../features/auth/reducers/authReducers";
import settings from "../../features/settings/reducers/settingsReducers";
import pages from "../../features/pages/reducers/pagesReducers";

const rootReducer = combineReducers({
  auth,
  settings,
  pages
});

export default rootReducer;
