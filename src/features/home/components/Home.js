import React, { useState } from "react";
import styled, { withTheme } from "styled-components";
import { Link } from "react-router-dom";

import Logo from "../../commonComponents/Logo";
import { ReactComponent as SvgIllustration } from "../styles/illustrations/landing_page.svg";
import Inspiration from "./Inspiration";

const Container = styled.div`
  padding: 0 32px;
  margin: 0 auto;
  max-width: 1200px;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 32px 0;
  font-size: 1rem;
`;

const BrandLink = styled(Link)`
  display: flex;
  align-items: center;
`;

const BrandText = styled.span`
  font-size: 1rem;
  padding: 10px;
  cursor: pointer;
  font-weight: 500;
  color: ${props => props.theme.primary};
`;

const Links = styled.div`
  display: none;
  @media (min-width: 576px) {
    display: flex;
  }
`;

const StyledLink = styled(Link)`
  padding: 10px;
  cursor: pointer;
  font-weight: 500;
  color: ${props => (props.color ? props.color : props.theme.primary)};
`;

const Hero = styled.div`
  display: grid;
  grid-gap: 32px;
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    align-items: center;
  }
`;

const HeroText = styled.div``;

const Illustration = styled(SvgIllustration)`
  display: none;
  @media (min-width: 576px) {
    display: block;
  }
`;

const Heading = styled.h1`
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 1rem;
  @media (min-width: 576px) {
    font-size: 3.5rem;
  }
  color: ${props => props.theme.primary};
`;

const Subheading = styled.h2`
  font-size: 1.2rem;
  font-weight: normal;
  margin-bottom: 2rem;
  @media (min-width: 576px) {
    font-size: 1.75rem;
  }
  color: ${props => props.theme.secondary};
`;

const Form = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  max-width: 380px;
  grid-gap: 0.5rem;
`;

const Input = styled.input`
  font-size: 1rem;
  padding: 0.6rem 1rem;
  outline: 0;
  border: 2px solid transparent;
  border-radius: 6px;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: 500;
  color: ${props => props.theme.primary};
  background-color: ${props => props.theme.backgroundInput};
  &:focus {
    border-color: ${props => props.theme.borderColor};
  }
`;

const CTA = styled.button`
  font-size: 1rem;
  border: 0;
  color: #fff;
  padding: 0.6rem 1rem;
  cursor: pointer;
  font-family: "Roboto", sans-serif;
  border-radius: 6px;
  font-weight: 500;
  @media (min-width: 576px) {
    margin: 0;
  }
  background-color: ${props => props.theme.brand};
`;

const Note = styled.p`
  font-size: 0.8rem;
  opacity: 0.75;
  padding: 1rem 0;
  color: ${props => props.theme.secondary};
`;

function Home(props) {
  const [email, setEmail] = useState("");

  return (
    <>
      <Container>
        <Nav>
          <BrandLink to="/">
            <Logo size={16} color={props.theme.brand} />
            <BrandText>Templates</BrandText>
          </BrandLink>
          <Links>
            <StyledLink to="/">Product</StyledLink>
            <StyledLink to="/">Templates</StyledLink>
            <StyledLink to="/">Pricing</StyledLink>
            <StyledLink to="/login">Sign in</StyledLink>
            <StyledLink to="/signup" color={props.theme.brand}>
              Sign up
            </StyledLink>
          </Links>
        </Nav>
      </Container>
      <Container>
        <Hero>
          <HeroText>
            <Heading>Create, your way</Heading>
            <Subheading>
              Templates is the all-in-one platform to build a beautiful online
              presence.
            </Subheading>
            <Form>
              <Input
                type="text"
                placeholder="Enter your email address"
                value={email}
                onChange={e => setEmail(e.currentTarget.value)}
              />
              <Link to={`/signup?email=${email}`}>
                <CTA>Get started</CTA>
              </Link>
            </Form>
            <Note>
              Already using Templates ?
              <StyledLink to="/login">Sign in</StyledLink>
            </Note>
          </HeroText>
          <Illustration />
        </Hero>
        <Inspiration />
      </Container>
    </>
  );
}

export default withTheme(Home);
