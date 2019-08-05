import React from "react";
import styled from "styled-components";

import Logo from "../../commonComponents/Logo";

const StyledHeader = styled.header`
  padding: 1rem 2rem;
  background-color: #f2f2f2;
  @media (min-width: 576px) {
    background-color: initial;
  }
`;

function Header(props) {
  return (
    <StyledHeader>
      <Logo />
    </StyledHeader>
  );
}

export default Header;
