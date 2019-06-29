import React from "react";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { Router, Route } from "react-router-dom";

import store from "./state/store";
import theme from "./styles/themes/light";
import history from "./routing/history";
import Home from "../features/home/components/Home";
import Login from "../features/auth/components/Login";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router history={history}>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
        </Router>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
