import {
  GET_PAGE_REQUEST,
  GET_PAGES_REQUEST,
  CREATE_PAGE_REQUEST,
  CREATE_PAGE_RESET,
  GET_PAGE_RESET,
  UPDATE_PAGE_REQUEST,
  UPDATE_DOMAIN_REQUEST,
  UPDATE_DOMAIN_RESET,
  UPDATE_PROFILE_IMAGE_REQUEST
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

export const updatePage = (payload, meta) => {
  return {
    type: UPDATE_PAGE_REQUEST,
    payload,
    meta
  };
};

export const updateDomain = (payload, meta) => {
  return {
    type: UPDATE_DOMAIN_REQUEST,
    payload,
    meta
  };
};

export const updateDomainReset = () => {
  return {
    type: UPDATE_DOMAIN_RESET
  };
};

export const updateProfileImage = (payload, meta) => {
  return {
    type: UPDATE_PROFILE_IMAGE_REQUEST,
    payload,
    meta
  };
};
