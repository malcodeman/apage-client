import React from "react";
import styled from "styled-components";

import Header from "../../header/components/Header";

const Main = styled.main`
  margin-top: 48px;
  height: calc(100vh - 48px);
  background-color: #fcfcfc;
`;

const Container = styled.div`
  padding: 0 32px;
  margin: 0 auto;
  max-width: 1200px;
`;

function Pages() {
  return (
    <>
      <Header />
      <Main>
        <Container>Pages</Container>
      </Main>
    </>
  );
}

export default Pages;
