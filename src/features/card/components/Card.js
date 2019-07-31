import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import styled, { withTheme } from "styled-components";

import LinkIcon from "../../commonAssets/icons/Link";
import Button from "../../commonComponents/Button";

const StyledCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 160px 2rem;
  box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.05);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 100vh;
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
  const {
    theme,
    mainImageURL,
    profileImageURL,
    name,
    tagline,
    location,
    ctaButtonText,
    ctaButtonLink,
    socialLinks
  } = props;

  return (
    <StyledCard bg={mainImageURL}>
      <CardContent>
        <CardProfile>
          <ProfileImage bg={profileImageURL} />
          <Name>{name}</Name>
          <Tagline>{tagline}</Tagline>
          <Location>{location}</Location>
          <Button type="primary" target="_blank" href={ctaButtonLink}>
            {ctaButtonText}
          </Button>
        </CardProfile>
        <CardLinks>
          {socialLinks.map(link => {
            return (
              <CardLink
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <SocialIcon>
                  <LinkIcon color={theme.primary} />
                </SocialIcon>
                <SocialUrl>{link.url}</SocialUrl>
              </CardLink>
            );
          })}
        </CardLinks>
      </CardContent>
    </StyledCard>
  );
}

const mapStateToProps = state => {
  return {
    isAuthorized: state.auth.isAuthorized,
    mainImageURL: state.pages.page.mainImageURL,
    profileImageURL: state.pages.page.profileImageURL,
    name: state.pages.page.name,
    tagline: state.pages.page.tagline,
    location: state.pages.page.location,
    ctaButtonText: state.pages.page.ctaButtonText,
    ctaButtonLink: state.pages.page.ctaButtonLink,
    socialLinks: state.pages.page.socialLinks
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
