import React from "react";
import { compose } from "redux";
import styled, { withTheme } from "styled-components";
import { Link } from "react-router-dom";

import Logo from "../../commonAssets/icons/Logo";
import { NAME } from "../../../core/constants";

const Container = styled.div`
  padding: 0 2rem;
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

function Header(props) {
  const { theme } = props;

  return (
    <Container>
      <Nav>
        <BrandLink to="/">
          <Logo color={theme.brand} />
          <BrandText>{NAME}</BrandText>
        </BrandLink>
        <Links>
          <StyledLink to="/">Product</StyledLink>
          <StyledLink to="/">Templates</StyledLink>
          <StyledLink to="/">Pricing</StyledLink>
          <StyledLink to="/login">Sign in</StyledLink>
          <StyledLink to="/signup" color={theme.brand}>
            Sign up
          </StyledLink>
        </Links>
      </Nav>
    </Container>
  );
}

export default compose(withTheme)(Header);
