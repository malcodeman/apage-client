import { SIGNUP_SUCCESS, LOGIN_SUCCESS } from "../actions/authActionTypes";

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
    default:
      return state;
  }
};
