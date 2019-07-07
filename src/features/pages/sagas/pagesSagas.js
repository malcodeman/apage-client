import { call, put, takeLatest } from "redux-saga/effects";

import axios from "../../../core/http/httpInstance";
import {
  GET_PAGES_FAILURE,
  GET_PAGES_REQUEST,
  GET_PAGES_SUCCESS,
  CREATE_PAGE_FAILURE,
  CREATE_PAGE_REQUEST,
  CREATE_PAGE_SUCCESS
} from "../actions/pagesActionTypes";

const getPagesApi = () => {
  return axios.get("/pages");
};

const createPageApi = newPage => {
  return axios.post("/pages", newPage);
};

function* getPages() {
  try {
    const data = yield call(getPagesApi);
    const payload = data.data;

    yield put({ type: GET_PAGES_SUCCESS, payload });
  } catch (error) {
    yield put({ type: GET_PAGES_FAILURE, error });
  }
}

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
  yield takeLatest(GET_PAGES_REQUEST, getPages);
  yield takeLatest(CREATE_PAGE_REQUEST, createPage);
};

export default saga;
