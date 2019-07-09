import React, { useEffect, useCallback } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import styled from "styled-components";

import { getPages } from "../actions/pagesActionCreators";
import Header from "../../header/containers/Header";
import AddPage from "./AddPage";
import Page from "../components/Page";

const Main = styled.main`
  margin-top: 48px;
  min-height: calc(100vh - 48px);
  background-color: #fcfcfc;
`;

const Container = styled.div`
  padding: 0 2rem;
  margin: 0 auto;
  max-width: 1200px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(256px, 1fr));
  grid-gap: 20px;
  padding 2rem 0;
`;

function Pages(props) {
  const { getPages, pages } = props;
  const memoizedGetPages = useCallback(() => getPages(), [getPages]);

  useEffect(() => {
    if (!pages.length) {
      memoizedGetPages();
    }
  }, [memoizedGetPages, pages.length]);

  return (
    <>
      <Header />
      <Main>
        <Container>
          <Grid>
            {pages.map(page => (
              <Page key={page.id} domain={page.domain} title={page.title} />
            ))}
            <AddPage />
          </Grid>
        </Container>
      </Main>
    </>
  );
}

const mapStateToProps = state => {
  return {
    pages: state.pages.pages
  };
};

const withConnect = connect(
  mapStateToProps,
  { getPages }
);

export default compose(withConnect)(Pages);
