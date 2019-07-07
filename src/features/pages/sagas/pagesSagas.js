import { call, put, takeLatest } from "redux-saga/effects";

import axios from "../../../core/http/httpInstance";
import {
  CREATE_PAGE_FAILURE,
  CREATE_PAGE_REQUEST,
  CREATE_PAGE_SUCCESS
} from "../actions/pagesActionTypes";

const createPageApi = newPage => {
  return axios.post("/pages", newPage);
};

function* createPage(action) {
  try {
    const data = yield call(createPageApi, action.payload);
    const payload = data.data;

    yield put({ type: CREATE_PAGE_SUCCESS, payload });
  } catch (error) {
    yield put({ type: CREATE_PAGE_FAILURE, error });
  }
}

const saga = function*() {
  yield takeLatest(CREATE_PAGE_REQUEST, createPage);
};

export default saga;
