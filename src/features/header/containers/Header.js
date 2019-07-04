import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import LogOut from "../assets/icons/LogOut";

import { logout } from "../../auth/actions/authActionCreators";

const StyledHeader = styled.header`
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  z-index: 1;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.03) 0px 2px 0px 0px;
`;

const Container = styled.div`
  padding: 0 32px;
  margin: 0 auto;
  max-width: 1200px;
`;

const Nav = styled.nav`
  display: flex;
  height: 48px;
  width: 100%;
`;

const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  font-size: 1rem;
  color: rgba(51, 51, 51, 0.6);
  &.active {
    color: rgb(51, 51, 51);
  }
`;

const LogOutWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  cursor: pointer;
`;

const LogOutText = styled.span`
  font-size: 1rem;
  color: rgb(51, 51, 51);
  margin-left: 0.25rem;
`;

function Header(props) {
  const { isAuthorized } = props;

  function handleLogOut() {
    const { logout } = props;

    localStorage.removeItem("token");
    logout();
  }

  return (
    <StyledHeader>
      <Container>
        <Nav>
          <StyledNavLink exact to="/">
            Pages
          </StyledNavLink>
          <StyledNavLink to="/templates">Templates</StyledNavLink>
          {isAuthorized && (
            <LogOutWrapper onClick={handleLogOut}>
              <LogOut size={16} />
              <LogOutText>Log out</LogOutText>
            </LogOutWrapper>
          )}
        </Nav>
      </Container>
    </StyledHeader>
  );
}

const mapStateToProps = state => {
  return {
    isAuthorized: state.auth.isAuthorized
  };
};

const withConnect = connect(
  mapStateToProps,
  { logout }
);

export default compose(withConnect)(Header);
