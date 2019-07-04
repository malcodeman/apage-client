import React from "react";
import styled from "styled-components";

import Header from "../../header/containers/Header";
import AddPage from "./AddPage";

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

function Pages() {
  return (
    <>
      <Header />
      <Main>
        <Container>
          <Grid>
            <AddPage />
          </Grid>
        </Container>
      </Main>
    </>
  );
}

export default Pages;
