import axios from "axios";

import history from "../routing/history";
import store from "../state/store";
import { logout } from "../../features/auth/actions/authActionCreators";

const API_URL = process.env.REACT_APP_API_URL;
const instance = axios.create({
  baseURL: API_URL
});

instance.interceptors.request.use(
  config => {
    config.headers.authorization = localStorage.getItem("token");
    return config;
  },
  error => {
    return Promise.reject(error.response);
  }
);
instance.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (error.response.status === 401) {
      localStorage.removeItem("token");
      store.dispatch(logout());
      history.push("/login");
    }
    return Promise.reject(error.response);
  }
);

export default instance;
