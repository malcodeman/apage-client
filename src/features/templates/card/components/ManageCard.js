import React from "react";
import styled from "styled-components";

import Config from "./Config";
import Card from "./Card";

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  padding: 2rem;
  background-color: #fcfcfc;
  height: 100vh;
  @media (min-width: 576px) {
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }
  @media (min-width: 992px) {
    grid-template-columns: minmax(396px, 20%) 1fr;
  }
`;

const CardContainer = styled.div`
  display: none;
  @media (min-width: 576px) {
    display: block;
    overflow-y: auto;
  }
`;

function ManageCard(props) {
  const { domain } = props;

  return (
    <Grid>
      <Config domain={domain} />
      <CardContainer>
        <Card />
      </CardContainer>
    </Grid>
  );
}

export default ManageCard;
