import React from "react";
import { compose } from "redux";
import styled, { withTheme } from "styled-components";
import { Link } from "react-router-dom";

import Logo from "../../commonComponents/Logo";
import Text from "../../commonComponents/Text";

const Container = styled.div`
  padding: 0 2rem;
  margin: 0 auto;
  max-width: 1200px;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 32px 0;
  font-size: 1rem;
`;

const Links = styled.div`
  display: none;
  @media (min-width: 576px) {
    display: flex;
  }
`;

function Header(props) {
  const { theme } = props;

  return (
    <Container>
      <Nav>
        <Logo />
        <Links>
          <Link to="/">
            <Text strong size={1} mr={1}>
              Product
            </Text>
          </Link>
          <Link to="/">
            <Text strong size={1} mr={1}>
              Templates
            </Text>
          </Link>
          <Link to="/">
            <Text strong size={1} mr={1}>
              Pricing
            </Text>
          </Link>
          <Link to="/login">
            <Text strong size={1} mr={1}>
              Sign in
            </Text>
          </Link>
          <Link to="/signup">
            <Text strong size={1} color={theme.brand}>
              Sign up
            </Text>
          </Link>
        </Links>
      </Nav>
    </Container>
  );
}

export default compose(withTheme)(Header);
