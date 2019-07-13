import React, { useEffect, useCallback } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { getPage, getPageReset } from "../actions/pagesActionCreators";
import Card from "../../templates/card/components/Card";
import ManageCard from "../../templates/card/components/ManageCard";

function RootPage(props) {
  const { getPage, getPageReset, page, match, config } = props;
  const memoizedGetPage = useCallback(domain => getPage(domain), [getPage]);
  const domain = match.params.domain;

  useEffect(() => {
    memoizedGetPage(domain);

    return () => getPageReset();
  }, [memoizedGetPage, domain, getPageReset]);

  if (page.template === "card") {
    return config ? <ManageCard domain={domain} /> : <Card domain={domain} />;
  }

  return <div>ROOT PAGE</div>;
}

const mapStateToProps = state => {
  return {
    page: state.pages.page
  };
};

const withConnect = connect(
  mapStateToProps,
  { getPage, getPageReset }
);

export default compose(
  withConnect,
  withRouter
)(RootPage);
