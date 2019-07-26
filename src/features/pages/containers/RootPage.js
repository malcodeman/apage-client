import React, { useEffect, useCallback } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { getPage, getPageReset } from "../actions/pagesActionCreators";
import Card from "../../templates/card/components/Card";
import ManageCard from "../../templates/card/components/ManageCard";
import NotExists from "../components/NotExists";

function RootPage(props) {
  const { getPage, getPageReset, page, match, config, pageNotExists } = props;
  const memoizedGetPage = useCallback(domain => getPage(domain), [getPage]);
  const domain = match.params.domain;

  useEffect(() => {
    memoizedGetPage(domain);

    return () => getPageReset();
  }, [memoizedGetPage, domain, getPageReset]);

  if (page.template === "card") {
    return config ? <ManageCard domain={domain} /> : <Card domain={domain} />;
  }
  if (pageNotExists) {
    return <NotExists />;
  }
  return null;
}

const mapStateToProps = state => {
  return {
    page: state.pages.page,
    pageNotExists: state.pages.pageNotExists
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
