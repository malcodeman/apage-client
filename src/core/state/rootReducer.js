import { combineReducers } from "redux";

import settings from "../../features/settings/reducers/settingsReducers";

const rootReducer = combineReducers({
  settings
});

export default rootReducer;
