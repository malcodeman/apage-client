import React from "react";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

import Home from "../assets/icons/Home";
import { CATEGORIES } from "../contants/templatesConstants";

const Wrapper = styled.div``;

const Header = styled.header`
  display: flex;
  @media (min-width: 768px) {
    margin-bottom: 1rem;
  }
`;

const HomeLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  padding: 0.5rem;
  background-color: #bdbdbd;
  color: #fff;
  margin-right: 0.5rem;
  border-radius: ${props => props.theme.borderRadius};
`;

const Search = styled.input`
  font-size: 0.8rem;
  font-weight: 500;
  padding: 0.5rem;
  border: 2px solid transparent;
  background-color: #efefef;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
  &:focus {
    border-color: ${props => props.theme.borderColor};
  }
  color: ${props => props.theme.primary};
  border-radius: ${props => props.theme.borderRadius};
`;

const Title = styled.h2`
  font-size: 0.6rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 1rem;
  font-weight: normal;
  color: ${props => props.theme.primary}7F;
`;

const StyledList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: none;
  @media (min-width: 768px) {
    display: block;
  }
`;

const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  font-size: 0.8rem;
`;

const StyledNavLink = styled(NavLink)`
  border-bottom: 2px solid transparent;
  padding-bottom: 0.14rem;
  cursor: pointer;
  &.active {
    border-color: ${props => props.theme.borderColor};
  }
  color: ${props => props.theme.primary};
`;

function CategoriesList(props) {
  return (
    <Wrapper>
      <Header>
        <HomeLink to="/templates">
          <Home size={16} />
        </HomeLink>
        <Search type="text" placeholder="Search templates" />
      </Header>
      <StyledList>
        <Title>Categories</Title>
        {CATEGORIES.map(category => {
          return (
            <Item key={category.id}>
              <StyledNavLink to={category.path}>{category.text}</StyledNavLink>
            </Item>
          );
        })}
      </StyledList>
    </Wrapper>
  );
}

export default CategoriesList;
