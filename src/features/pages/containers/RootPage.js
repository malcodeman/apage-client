import React, { useEffect, useCallback } from "react";
import { compose } from "redux";
import { connect } from "react-redux";

import { getPage, getPageReset } from "../actions/pagesActionCreators";
import Card from "../../templates/card/components/Card";

function RootPage(props) {
  const { getPage, getPageReset, page, match } = props;
  const memoizedGetPage = useCallback(domain => getPage(domain), [getPage]);
  const domain = match.params.domain;

  useEffect(() => {
    memoizedGetPage(domain);

    return () => getPageReset();
  }, [memoizedGetPage, domain, getPageReset]);

  if (page.template === "card") {
    return <Card domain={domain} />;
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

export default compose(withConnect)(RootPage);
