import { all, fork } from "redux-saga/effects";

import authSagas from "../../features/auth/sagas/authSagas";

export default function* rootSaga() {
  yield all([fork(authSagas)]);
}
