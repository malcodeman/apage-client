import {
  CREATE_PAGE_FAILURE,
  CREATE_PAGE_REQUEST,
  CREATE_PAGE_SUCCESS,
  CREATE_PAGE_RESET,
  GET_PAGES_SUCCESS,
  GET_PAGE_SUCCESS,
  GET_PAGE_RESET,
  UPDATE_PAGE_SUCCESS
} from "../actions/pagesActionTypes";

const initialPageState = {
  domain: "",
  title: ""
};

const initialState = {
  page: initialPageState,
  pages: [],
  createPageSuccess: false
};

export default (state = initialState, action) => {
  console.log(
    `%c${action.type}`,
    "background: #000; color: #22edfc; padding: 4px"
  );
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
        page: action.payload,
        createPageSuccess: true
      };
    case CREATE_PAGE_RESET:
      return {
        ...state,
        createPageSuccess: false
      };
    case GET_PAGES_SUCCESS:
      return {
        ...state,
        pages: action.payload
      };
    case GET_PAGE_SUCCESS:
      return {
        ...state,
        page: action.payload
      };
    case GET_PAGE_RESET:
      return {
        ...state,
        page: initialPageState
      };
    case UPDATE_PAGE_SUCCESS:
      return {
        ...state,
        page: action.payload
      };
    default:
      return state;
  }
};
