import React from "react";
import { compose } from "redux";
import styled, { withTheme } from "styled-components";
import { Link } from "react-router-dom";

import Logo from "../../commonAssets/icons/Logo";
import { FOOTER_LINKS } from "../constants/homeConstants";
import { NAME } from "../../../core/constants";

const Wrapper = styled.section`
  padding: 4rem 2rem;
  margin: 0 auto;
  max-width: 1200px;
`;

const StyledFooter = styled.footer`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 2rem;
  @media (min-width: 768px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;

const LinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledLink = styled(Link)`
  display: inline-block;
  margin-bottom: 0.5rem;
  cursor: pointer;
  font-weight: 500;
  line-height: 1.5;
  padding-bottom: 0.14rem;
  &:hover {
    border-color: currentColor;
  }
  opacity: ${props => (props.quiet ? `${props.quiet}` : "1")};
  font-size: ${props => (props.small ? "0.7rem" : "0.8rem")};
  margin-right: ${props => (props.mr ? `${props.mr}rem` : "0")};
  border-bottom: 2px solid
    ${props =>
      props.bordercolor ? props.bordercolor : props.theme.borderColor};
  color: ${props => (props.color ? props.color : props.theme.secondary)};
`;

const Text = styled.span`
  display: inline-block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  line-height: 1.5;
  color: ${props => props.theme.secondary};
  opacity: ${props => (props.quiet ? `${props.quiet}` : "1")};
  font-size: ${props => (props.small ? "0.7rem" : "0.8rem")};
  margin-right: ${props => (props.mr ? `${props.mr}rem` : "0")};
`;

const LegalWrapper = styled.div`
  margin-top: 4rem;
`;

function Footer(props) {
  const { theme } = props;

  return (
    <Wrapper>
      <StyledFooter>
        <Logo color={theme.brand} />
        <LinksWrapper>
          {FOOTER_LINKS[0].map(link => {
            return (
              <div key={link.id}>
                <StyledLink to={link.path}>{link.text}</StyledLink>
              </div>
            );
          })}
        </LinksWrapper>
        <LinksWrapper>
          {FOOTER_LINKS[1].map(link => {
            return (
              <div key={link.id}>
                <StyledLink to={link.path}>{link.text}</StyledLink>
              </div>
            );
          })}
        </LinksWrapper>
        <LinksWrapper>
          {FOOTER_LINKS[2].map(link => {
            return (
              <div key={link.id}>
                <StyledLink to={link.path}>{link.text}</StyledLink>
              </div>
            );
          })}
        </LinksWrapper>
        <LinksWrapper>
          <div>
            <StyledLink to="/" color={theme.brand} bordercolor={theme.brand}>
              We’re hiring!
            </StyledLink>
          </div>
          <Text>Questions?</Text>
          <div>
            <StyledLink to="/">Explore our help center</StyledLink>
          </div>
          <LegalWrapper>
            <Text mr={0.5} small quiet={0.75}>
              © {NAME}
            </Text>
            <StyledLink mr={0.5} small="true" quiet={0.75} to="/tos">
              Terms
            </StyledLink>
            <StyledLink small="true" quiet={0.75} to="/privacy">
              Privacy
            </StyledLink>
          </LegalWrapper>
        </LinksWrapper>
      </StyledFooter>
    </Wrapper>
  );
}

export default compose(withTheme)(Footer);
