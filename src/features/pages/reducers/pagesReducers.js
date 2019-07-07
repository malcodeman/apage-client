import {
  CREATE_PAGE_FAILURE,
  CREATE_PAGE_REQUEST,
  CREATE_PAGE_SUCCESS,
  CREATE_PAGE_RESET
} from "../actions/pagesActionTypes";

const initialState = {
  pages: [],
  createPageSuccess: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_PAGE_FAILURE:
      return {
        ...state,
        createPageSuccess: false
      };
    case CREATE_PAGE_REQUEST:
      return {
        ...state,
        createPageSuccess: false
      };
    case CREATE_PAGE_SUCCESS:
      return {
        ...state,
        pages: [...state.pages, action.payload],
        createPageSuccess: true
      };
    case CREATE_PAGE_RESET:
      return {
        ...state,
        createPageSuccess: false
      };
    default:
      return state;
  }
};
