import React, { useEffect, useCallback, cloneElement } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import styled, { withTheme } from "styled-components";
import { withRouter } from "react-router-dom";

import {
  createPage,
  createPageReset
} from "../../pages/actions/pagesActionCreators";
import Header from "../../header/containers/Header";
import CategoriesList from "../components/CategoriesList";
import { PROFILE } from "../contants/templatesConstants";

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
  grid-template-columns: 1fr;
  gap: 1rem;
  padding 2rem 0;
  @media (min-width: 768px) {
    grid-template-columns: 20% 1fr;
    gap: 2rem;
  }
`;

const CategoriesWrapper = styled.div``;

const CategoriesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(256px, 1fr));
  gap: 1rem;
`;

const Category = styled.div`
  border-radius: 6px;
  box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.05);
  cursor: pointer;
  &:hover {
    opacity: 0.85;
  }
`;

const Cover = styled.div`
  border-top-right-radius: 6px;
  border-top-left-radius: 6px;
  height: 140px;
  svg {
    width: 100%;
    max-height: 100%;
  }
`;

const TextWrapper = styled.div`
  padding: 1rem;
`;

const CategoryTitle = styled.h2`
  font-size: 1rem;
  line-height: 1.25;
  font-weight: 500;
  margin-bottom: 0.5rem;
  color: ${props => props.theme.primary};
`;

const Description = styled.div`
  font-size: 0.8rem;
  line-height: 1.5;
  color: ${props => props.theme.secondary};
`;

function Templates(props) {
  const { pages, createPageSuccess, history, createPageReset, theme } = props;
  const redirect = useCallback(link => history.push(`/${link}/config`), [
    history
  ]);

  useEffect(() => {
    if (pages.length && createPageSuccess) {
      const link = pages[pages.length - 1].domain;

      redirect(link);
    }
    return () => createPageReset();
  }, [pages, redirect, createPageSuccess, createPageReset]);

  function handleOnClick(template) {
    const { createPage } = props;

    createPage({
      template
    });
  }

  return (
    <>
      <Header />
      <Main>
        <Container>
          <Grid>
            <CategoriesList />
            <CategoriesWrapper>
              <CategoriesGrid>
                {PROFILE.map(category => {
                  return (
                    <Category
                      key={category.id}
                      onClick={() => handleOnClick(category.template)}
                    >
                      <Cover>
                        {cloneElement(category.coverPhoto, {
                          color: theme.brand
                        })}
                      </Cover>
                      <TextWrapper>
                        <CategoryTitle>{category.title}</CategoryTitle>
                        <Description>{category.description}</Description>
                      </TextWrapper>
                    </Category>
                  );
                })}
              </CategoriesGrid>
            </CategoriesWrapper>
          </Grid>
        </Container>
      </Main>
    </>
  );
}

const mapStateToProps = state => {
  return {
    pages: state.pages.pages,
    createPageSuccess: state.pages.createPageSuccess
  };
};

const withConnect = connect(
  mapStateToProps,
  { createPage, createPageReset }
);

export default compose(
  withRouter,
  withConnect,
  withTheme
)(Templates);
