import {
  GET_PAGE_REQUEST,
  GET_PAGES_REQUEST,
  CREATE_PAGE_REQUEST,
  CREATE_PAGE_RESET,
  GET_PAGE_RESET
} from "./pagesActionTypes";

export const getPage = payload => {
  return {
    type: GET_PAGE_REQUEST,
    payload
  };
};

export const getPages = payload => {
  return {
    type: GET_PAGES_REQUEST
  };
};

export const createPage = payload => {
  return {
    type: CREATE_PAGE_REQUEST,
    payload
  };
};

export const createPageReset = () => {
  return {
    type: CREATE_PAGE_RESET
  };
};

export const getPageReset = () => {
  return {
    type: GET_PAGE_RESET
  };
};
