import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import styled, { withTheme } from "styled-components";
import { Link } from "react-router-dom";

import Logo from "../../commonComponents/Logo";
import LinkIcon from "../assets/icons/Link";

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  padding: 2rem;
  background-color: #fcfcfc;
  height: 100vh;
  @media (min-width: 576px) {
    grid-template-columns: 20% 1fr;
    gap: 2rem;
  }
`;

const Configs = styled.div`
  display: flex;
  flex-direction: column;
`;

const Header = styled.header`
  margin-bottom: 1rem;
`;

const BrandLink = styled(Link)`
  display: flex;
  align-items: center;
`;

const LogoWrapper = styled.div`
  display: flex;
`;

const BrandText = styled.span`
  font-size: 1rem;
  padding: 10px;
  cursor: pointer;
  font-weight: 500;
  color: ${props => props.theme.primary};
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

const ItemText = styled.span`
  border-bottom: 2px solid transparent;
  padding-bottom: 0.14rem;
  cursor: pointer;
  &:hover {
    border-color: ${props => props.theme.borderColor};
  }
  color: ${props => props.theme.primary};
`;

const CardContainer = styled.div`
  display: none;
  @media (min-width: 576px) {
    display: block;
    overflow-y: auto;
  }
`;

const StyledCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 160px 2rem;
  box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.05);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${props => props.bg});
`;

const CardContent = styled.div`
  background-color: rgba(255, 255, 255, 0.95);
  box-shadow: 0 0.25vw 1vw -0.2vw rgba(0, 0, 0, 0.25);
  border-radius: 6px;
  max-width: 24rem;
  width: 100%;
`;

const CardProfile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 60px;
`;

const ProfileImage = styled.div`
  margin-top: -60px;
  margin-bottom: 2rem;
  height: 120px;
  width: 120px;
  border-radius: 50%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${props => props.bg});
`;

const Name = styled.h1`
  font-weight: 500;
  font-size: 1.2rem;
  line-height: 1.6;
  color: ${props => props.theme.primary};
`;

const Tagline = styled.p`
  font-size: 0.8rem;
  margin-bottom: 0.5rem;
`;

const Location = styled.span`
  font-size: 0.6rem;
  text-transform: uppercase;
  margin-bottom: 2rem;
`;

const CtaButton = styled.button`
  height: 36px;
  padding: 0 1rem;
  font-size: 18px;
  border-radius: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0;
  color: #fff;
  cursor: pointer;
  background-color: #000;
`;

const CtaButtonText = styled.span`
  font-family: "Roboto", sans-serif;
  font-size: 0.6rem;
  font-weight: 500;
  text-transform: uppercase;
`;

const CardLinks = styled.div`
  display: flex;
  flex-direction: column;
`;

const CardLink = styled.a`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  cursor: pointer;
  border-top: 1px solid ${props => props.theme.borderColor};
`;

const SocialIcon = styled.div`
  background-color: rgba(0, 0, 0, 0.05);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
`;

const SocialUrl = styled.span`
  font-size: 0.8rem;
  font-weight: 500;
  color: ${props => props.theme.primary};
`;

function Card(props) {
  const { theme } = props;
  return (
    <Grid>
      <Configs>
        <Header>
          <BrandLink to="/">
            <LogoWrapper>
              <Logo size={16} color={theme.brand} />
            </LogoWrapper>
            <BrandText>Templates</BrandText>
          </BrandLink>
        </Header>
        <StyledList>
          <Item>
            <ItemText>Colors</ItemText>
          </Item>
          <Item>
            <ItemText>Profile</ItemText>
          </Item>
          <Item>
            <ItemText>Social links</ItemText>
          </Item>
        </StyledList>
      </Configs>
      <CardContainer>
        <StyledCard
          bg={"https://images.unsplash.com/photo-1492252719637-c7b68468489b"}
        >
          <CardContent>
            <CardProfile>
              <ProfileImage
                bg={
                  "https://pbs.twimg.com/profile_images/1115609012907560961/ugZB3UD7_400x400.jpg"
                }
              />
              <Name>Dua Lipa</Name>
              <Tagline>Singer</Tagline>
              <Location>London</Location>
              <CtaButton>
                <CtaButtonText>Get in touch</CtaButtonText>
              </CtaButton>
            </CardProfile>
            <CardLinks>
              <CardLink
                href="https://www.instagram.com/dualipa/"
                target="_blank"
                rel="noreferrer"
              >
                <SocialIcon>
                  <LinkIcon size={16} color={theme.primary} />
                </SocialIcon>
                <SocialUrl>instagram.com/dualipa/</SocialUrl>
              </CardLink>
            </CardLinks>
          </CardContent>
        </StyledCard>
      </CardContainer>
    </Grid>
  );
}

const mapStateToProps = state => {
  return {
    isAuthorized: state.auth.isAuthorized
  };
};

const withConnect = connect(
  mapStateToProps,
  null
);

export default compose(
  withTheme,
  withConnect
)(Card);
