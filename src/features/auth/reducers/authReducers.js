import {
  SIGNUP_SUCCESS,
  LOGIN_SUCCESS,
  LOGOUT
} from "../actions/authActionTypes";

export default (state = {}, action) => {
  switch (action.type) {
    case SIGNUP_SUCCESS:
      return {
        ...state,
        isAuthorized: true
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthorized: true
      };
    case LOGOUT:
      return {
        ...state,
        isAuthorized: false
      };
    default:
      return state;
  }
};
