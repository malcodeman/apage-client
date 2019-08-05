import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Logo from "../../commonComponents/Logo";

const Wrapper = styled.div`
  padding: 0 2rem;
`;

const Header = styled.header`
  margin-bottom: 1rem;
`;

const StyledList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  font-size: 1rem;
`;

const StyledLink = styled(Link)`
  border-bottom: 2px solid transparent;
  padding-bottom: 0.14rem;
  cursor: pointer;
  &:hover {
    border-color: ${props => props.theme.borderColor};
  }
  color: ${props => props.theme.primary};
`;

function Home(props) {
  const { domain } = props;

  return (
    <Wrapper>
      <Header>
        <Logo />
      </Header>
      <StyledList>
        <Item>
          <StyledLink to={`/${domain}/config/general`}>General</StyledLink>
        </Item>
        <Item>
          <StyledLink to={`/${domain}/config/color`}>Colors</StyledLink>
        </Item>
        <Item>
          <StyledLink to={`/${domain}/config/profile`}>Profile</StyledLink>
        </Item>
        <Item>
          <StyledLink to={`/${domain}/config/links`}>Social links</StyledLink>
        </Item>
      </StyledList>
    </Wrapper>
  );
}

export default Home;
