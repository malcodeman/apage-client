import React from "react";
import styled from "styled-components";

import Config from "./Config";
import Card from "./Card";

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  background-color: #fcfcfc;
  height: 100vh;
  @media (min-width: 576px) {
    grid-template-columns: 1fr 1fr;
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
    margin: 2rem 2rem 2rem 0;
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
