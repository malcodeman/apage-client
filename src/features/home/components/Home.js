import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { ReactComponent as WebDeveloper } from "../styles/illustrations/web_developer.svg";

const StyledHome = styled.div``;

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`;

const Brand = styled.a`
  font-size: 0.8rem;
  text-transform: uppercase;
  padding: 10px;
  cursor: pointer;
  font-weight: 500;
  color: ${props => props.theme.primary};
`;

const Nav = styled.nav`
  display: flex;
  padding: 20px;
`;

const Links = styled.div`
  display: none;
  @media (min-width: 576px) {
    display: flex;
  }
`;

const StyledLink = styled(Link)`
  font-size: 0.8rem;
  text-transform: uppercase;
  padding: 10px;
  cursor: pointer;
  color: ${props => props.theme.primary};
`;

const SignIn = styled(Link)`
  margin-left: auto;
  font-size: 0.8rem;
  text-transform: uppercase;
  padding: 10px;
  cursor: pointer;
  color: ${props => props.theme.primary};
`;

const Hero = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

const Illustration = styled(WebDeveloper)`
  width: 232px;
  height: 232px;
  margin-bottom: 32px;
  @media (min-width: 576px) {
    width: 422px;
    height: 232px;
  }
`;

const HeroContent = styled.div``;

const SubheadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 576px) {
    flex-direction: row;
    align-items: center;
  }
`;

const Subheading = styled.h1`
  font-size: 1rem;
  font-weight: normal;
  @media (min-width: 576px) {
    margin-right: 32px;
  }
  color: ${props => props.theme.primary};
`;

const CTA = styled.button`
  font-size: 0.8rem;
  border: 0;
  text-transform: uppercase;
  color: #fff;
  padding: 10px 12px;
  cursor: pointer;
  font-family: "Roboto", sans-serif;
  margin: 32px 0;
  @media (min-width: 576px) {
    margin: 0;
  }
  background-color: ${props => props.theme.backgroundPrimary};
`;

const Note = styled.p`
  font-size: 0.8rem;
  color: ${props => props.theme.secondary};
`;

function Home() {
  return (
    <StyledHome>
      <Header>
        <Nav>
          <Brand>Templates</Brand>
          <Links>
            <StyledLink to="/">Features</StyledLink>
            <StyledLink to="/">Pricing</StyledLink>
            <StyledLink to="/">Contact</StyledLink>
          </Links>
          <SignIn to="/login">Sign in</SignIn>
        </Nav>
      </Header>
      <Hero>
        <Illustration />
        <HeroContent>
          <SubheadingWrapper>
            <Subheading>
              Templates is the all-in-one platform to build a beautiful online
              presence.
            </Subheading>
            <CTA>Get started</CTA>
          </SubheadingWrapper>
          <Note>Free trial. No credit card required.</Note>
        </HeroContent>
      </Hero>
    </StyledHome>
  );
}

export default Home;
