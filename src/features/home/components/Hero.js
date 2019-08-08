import React from "react";
import { compose } from "redux";
import styled, { withTheme } from "styled-components";
import { Link } from "react-router-dom";

import EmailForm from "./EmailForm";
import Text from "../../commonComponents/Text";
import LandingPage from "../styles/illustrations/LandingPage";
import { NAME } from "../../../core/constants";

const Container = styled.section`
  padding: 0 2rem;
  margin: 0 auto;
  max-width: 1200px;
`;

const Grid = styled.div`
  display: grid;
  grid-gap: 2rem;
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    align-items: center;
  }
`;

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

function Hero(props) {
  const { theme } = props;

  return (
    <Container>
      <Grid>
        <div>
          <Title>Create, your way</Title>
          <Subtitle>
            {NAME} is the all-in-one platform to build a beautiful online
            presence.
          </Subtitle>
          <EmailForm />
          <Text mt={1} type="secondary">
            Already using {NAME}?{" "}
            <Link to="/login">
              <Text underline strong>
                Sign in
              </Text>
            </Link>
          </Text>
        </div>
        <Illustration>
          <LandingPage color={theme.brand} />
        </Illustration>
      </Grid>
    </Container>
  );
}

export default compose(withTheme)(Hero);
