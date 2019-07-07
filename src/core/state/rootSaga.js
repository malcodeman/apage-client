import { all, fork } from "redux-saga/effects";

import auth from "../../features/auth/sagas/authSagas";
import pages from "../../features/pages/sagas/pagesSagas";

export default function* rootSaga() {
  yield all([fork(auth), fork(pages)]);
}
