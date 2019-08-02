import React from "react";
import { compose } from "redux";
import styled, { withTheme } from "styled-components";
import { Link } from "react-router-dom";

import EmailForm from "./EmailForm";
import LandingPage from "../styles/illustrations/LandingPage";
import { NAME } from "../../../core/constants";

const Container = styled.section`
  padding: 0 2rem;
  margin: 0 auto;
  max-width: 1200px;
`;

const StyledLink = styled(Link)`
  padding: 10px;
  cursor: pointer;
  font-weight: 500;
  color: ${props => (props.color ? props.color : props.theme.primary)};
`;

const Grid = styled.div`
  display: grid;
  grid-gap: 2rem;
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    align-items: center;
  }
`;

const HeroText = styled.div``;

const Illustration = styled.div`
  display: none;
  @media (min-width: 576px) {
    display: block;
    max-width: 32rem;
    margin: 0 auto;
    width: 100%;
  }
  @media (min-width: 768px) {
    max-width: initial;
    margin: initial;
  }
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 500;
  margin-bottom: 1rem;
  color: ${props => props.theme.primary};
`;

const Subtitle = styled.h2`
  font-size: 2rem;
  font-weight: 400;
  line-height: 1.25;
  margin-bottom: 2rem;
  color: ${props => props.theme.secondary};
`;

const Note = styled.p`
  font-size: 0.8rem;
  padding: 1rem 0;
  color: ${props => props.theme.secondary};
`;

function Hero(props) {
  const { theme } = props;

  return (
    <Container>
      <Grid>
        <HeroText>
          <Title>Create, your way</Title>
          <Subtitle>
            {NAME} is the all-in-one platform to build a beautiful online
            presence.
          </Subtitle>
          <EmailForm />
          <Note>
            Already using {NAME} ?<StyledLink to="/login">Sign in</StyledLink>
          </Note>
        </HeroText>
        <Illustration>
          <LandingPage color={theme.brand} />
        </Illustration>
      </Grid>
    </Container>
  );
}

export default compose(withTheme)(Hero);
