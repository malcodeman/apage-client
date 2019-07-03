import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";

import Pages from "../../pages/containers/Pages";
import Home from "../../home/components/Home";

function Root(props) {
  const { isAuthorized } = props;

  return isAuthorized ? <Pages /> : <Home />;
}

const mapStateToProps = state => {
  return {
    isAuthorized: state.auth.isAuthorized
  };
};

const withConnect = connect(
  mapStateToProps,
  null
);

export default compose(withConnect)(Root);
