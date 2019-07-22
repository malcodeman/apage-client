import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { Router, Switch, Route } from "react-router-dom";

import store from "./core/state/store";
import theme from "./core/styles/themes/light";
import history from "./core/routing/history";
import Root from "./features/root/containers/Root";
import Login from "./features/auth/components/Login";
import Signup from "./features/auth/components/Signup";
import Templates from "./features/templates/containers/Templates";
import Card from "./features/templates/card/components/Card";
import Privacy from "./features/legal/components/Privacy";
import RootPage from "./features/pages/containers/RootPage";
import GlobalStyles from "./core/styles/GlobalStyles";

const MOUNT_NODE = document.getElementById("root");

function render() {
  ReactDOM.render(
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <>
          <Router history={history}>
            <Switch>
              <Route exact path="/" component={Root} />
              <Route path="/login" component={Login} />
              <Route path="/signup" component={Signup} />
              <Route path="/templates" component={Templates} />
              <Route path="/card" component={Card} />
              <Route path="/privacy" component={Privacy} />
              <Route
                exact
                path="/:domain"
                render={() => <RootPage config={false} />}
              />
              <Route
                path="/:domain/config"
                render={() => <RootPage config={true} />}
              />
            </Switch>
          </Router>
          <GlobalStyles />
        </>
      </ThemeProvider>
    </Provider>,
    MOUNT_NODE
  );
}

render();
