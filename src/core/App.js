import React from "react";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { Router, Route } from "react-router-dom";

import store from "./state/store";
import theme from "./styles/themes/light";
import history from "./routing/history";
import Home from "../features/home/components/Home";
import Login from "../features/auth/components/Login";
import Signup from "../features/auth/components/Signup";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router history={history}>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
        </Router>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
