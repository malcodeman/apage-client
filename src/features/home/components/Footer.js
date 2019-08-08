import React from "react";
import { compose } from "redux";
import styled, { withTheme } from "styled-components";
import { Link } from "react-router-dom";

import Logo from "../../commonAssets/icons/Logo";
import Text from "../../commonComponents/Text";
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

function Footer(props) {
  const { theme } = props;

  return (
    <Wrapper>
      <StyledFooter>
        <Logo color={theme.brand} />
        <LinksWrapper>
          {FOOTER_LINKS[0].map(link => {
            return (
              <Link to={link.path} key={link.id}>
                <Text underline strong mb={0.5}>
                  {link.text}
                </Text>
              </Link>
            );
          })}
        </LinksWrapper>
        <LinksWrapper>
          {FOOTER_LINKS[1].map(link => {
            return (
              <Link to={link.path} key={link.id}>
                <Text underline strong mb={0.5}>
                  {link.text}
                </Text>
              </Link>
            );
          })}
        </LinksWrapper>
        <LinksWrapper>
          {FOOTER_LINKS[2].map(link => {
            return (
              <Link to={link.path} key={link.id}>
                <Text underline strong mb={0.5}>
                  {link.text}
                </Text>
              </Link>
            );
          })}
        </LinksWrapper>
        <LinksWrapper>
          <Link to="/" color={theme.brand} bordercolor={theme.brand}>
            <Text underline strong mb={1} color={theme.brand}>
              We’re hiring!
            </Text>
          </Link>
          <Text>Questions?</Text>
          <Link to="/">
            <Text underline strong mb={4}>
              Explore our help center
            </Text>
          </Link>
          <div>
            <Text mr={0.5}>© {NAME}</Text>
            <Link to="/tos">
              <Text type="secondary" underline strong mr={0.5}>
                Terms
              </Text>
            </Link>
            <Link to="/privacy">
              <Text type="secondary" underline strong>
                Privacy
              </Text>
            </Link>
          </div>
        </LinksWrapper>
      </StyledFooter>
    </Wrapper>
  );
}

export default compose(withTheme)(Footer);
