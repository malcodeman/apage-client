import React from "react";
import { compose } from "redux";
import styled, { withTheme } from "styled-components";

import { Route } from "react-router-dom";

import Home from "./Home";
import General from "./General";
import SocialLinks from "./SocialLinks";
import Profile from "./Profile";

const Config = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 0;
`;

function CardConfig(props) {
  const { domain } = props;

  return (
    <Config>
      <Route
        exact
        path={`/${domain}/config`}
        render={() => <Home domain={domain} />}
      />
      <Route
        exact
        path={`/${domain}/config/general`}
        render={() => <General />}
      />
      <Route
        exact
        path={`/${domain}/config/links`}
        render={() => <SocialLinks />}
      />
      <Route
        exact
        path={`/${domain}/config/profile`}
        render={() => <Profile domain={domain} />}
      />
    </Config>
  );
}

export default compose(withTheme)(CardConfig);
