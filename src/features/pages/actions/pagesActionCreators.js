import { CREATE_PAGE_REQUEST, CREATE_PAGE_RESET } from "./pagesActionTypes";

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
