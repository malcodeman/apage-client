import React from "react";
import styled from "styled-components";

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
  background-size: cover;
  background-position: center;
  background-image: url(${props => props.bg});
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

function Templates() {
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
                    <Category key={category.id}>
                      <Cover bg={category.coverPhoto} />
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

export default Templates;
