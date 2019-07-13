import { call, put, takeLatest } from "redux-saga/effects";

import axios from "../../../core/http/httpInstance";
import {
  GET_PAGE_FAILURE,
  GET_PAGE_REQUEST,
  GET_PAGE_SUCCESS,
  GET_PAGES_FAILURE,
  GET_PAGES_REQUEST,
  GET_PAGES_SUCCESS,
  CREATE_PAGE_FAILURE,
  CREATE_PAGE_REQUEST,
  CREATE_PAGE_SUCCESS,
  UPDATE_PAGE_FAILURE,
  UPDATE_PAGE_REQUEST,
  UPDATE_PAGE_SUCCESS
} from "../actions/pagesActionTypes";

const getPageApi = domain => {
  return axios.get(`/pages/${domain}`);
};

const getPagesApi = () => {
  return axios.get("/pages");
};

const createPageApi = newPage => {
  return axios.post("/pages", newPage);
};

const updatePageApi = updatedPage => {
  return axios.put(`/pages/${updatedPage.domain}`, updatedPage);
};

function* getPage(action) {
  try {
    const data = yield call(getPageApi, action.payload);
    const payload = data.data;

    yield put({ type: GET_PAGE_SUCCESS, payload });
  } catch (error) {
    yield put({ type: GET_PAGE_FAILURE, error });
  }
}

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

function* updatePage(action) {
  try {
    const data = yield call(updatePageApi, action.payload);
    const payload = data.data;

    yield put({ type: UPDATE_PAGE_SUCCESS, payload });
  } catch (error) {
    yield put({ type: UPDATE_PAGE_FAILURE, error });
  } finally {
    const { setSubmitting } = action.meta;

    setSubmitting(false);
  }
}

const saga = function*() {
  yield takeLatest(GET_PAGE_REQUEST, getPage);
  yield takeLatest(GET_PAGES_REQUEST, getPages);
  yield takeLatest(CREATE_PAGE_REQUEST, createPage);
  yield takeLatest(UPDATE_PAGE_REQUEST, updatePage);
};

export default saga;
