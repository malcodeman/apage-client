import React from "react";
import { compose } from "redux";
import styled, { withTheme } from "styled-components";

import { Link, Route } from "react-router-dom";

import Logo from "../../commonComponents/Logo";
import BackButton from "../components/BackButton";

const Config = styled.div`
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

const StyledLink = styled(Link)`
  border-bottom: 2px solid transparent;
  padding-bottom: 0.14rem;
  cursor: pointer;
  &:hover {
    border-color: ${props => props.theme.borderColor};
  }
  color: ${props => props.theme.primary};
`;

const Title = styled.h2`
  font-size: 1rem;
  font-weight: 500;
  margin: 2rem 0;
  color: ${props => props.theme.primary};
`;

const ProfileItem = styled.div`
  margin-bottom: 1rem;
`;

const DescriptionTitle = styled.h3`
  text-transform: uppercase;
  font-weight: 500;
  letter-spacing: 0.5px;
  font-size: 0.8rem;
  line-height: 1.2;
  color: ${props => props.theme.primary};
`;

const DescriptionText = styled.p`
  font-size: 0.8rem;
  margin-bottom: 0.5rem;
  color: ${props => props.theme.secondary};
`;

const Input = styled.input`
  border: 2px solid transparent;
  font-size: 1rem;
  padding: 0.5rem;
  font-weight: 400;
  width: 100%;
  background-color: hsla(0, 0%, 0%, 0.05);
  border-radius: ${props => props.theme.borderRadius};
  &:focus {
    border-color: ${props => props.theme.borderColor};
  }
`;

const SubmitButton = styled.button`
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
  align-self: center;
`;

const SubmitButtonText = styled.span`
  font-family: "Roboto", sans-serif;
  font-size: 0.6rem;
  font-weight: 500;
  text-transform: uppercase;
`;

function Home(props) {
  const { domain, theme } = props;

  return (
    <>
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
          <StyledLink to={`${domain}/config/color`}>Colors</StyledLink>
        </Item>
        <Item>
          <StyledLink to={`${domain}/config/profile`}>Profile</StyledLink>
        </Item>
        <Item>
          <StyledLink to={`${domain}/config/links`}>Social links</StyledLink>
        </Item>
      </StyledList>
    </>
  );
}

function Profile(props) {
  return (
    <>
      <BackButton text={"Home"} />
      <Title>Profile</Title>
      <ProfileItem>
        <DescriptionTitle>Name</DescriptionTitle>
        <DescriptionText>e.g. Alex McRad</DescriptionText>
        <Input placeholder="Name" type="text" />
      </ProfileItem>
      <ProfileItem>
        <DescriptionTitle>Tagline</DescriptionTitle>
        <DescriptionText>e.g. Drinker of Coffee</DescriptionText>
        <Input placeholder="Tagline" type="text" />
      </ProfileItem>
      <ProfileItem>
        <DescriptionTitle>Location</DescriptionTitle>
        <DescriptionText>e.g. Seattle, WA</DescriptionText>
        <Input placeholder="Location" type="text" />
      </ProfileItem>
      <ProfileItem>
        <DescriptionTitle>CTA button title</DescriptionTitle>
        <DescriptionText>e.g. Get in Touch</DescriptionText>
        <Input placeholder="CTA Button Title" type="text" />
      </ProfileItem>
      <ProfileItem>
        <DescriptionTitle>CTA button link</DescriptionTitle>
        <DescriptionText>e.g. mailto:hi@templates.com</DescriptionText>
        <Input placeholder="CTA Button Link" type="text" />
      </ProfileItem>
      <SubmitButton>
        <SubmitButtonText>Save changes</SubmitButtonText>
      </SubmitButton>
    </>
  );
}

function CardConfig(props) {
  const { theme, domain } = props;

  return (
    <Config>
      <Route
        exact
        path={`/${domain}`}
        render={() => <Home domain={domain} theme={theme} />}
      />
      <Route path={`/${domain}/config/profile`} component={Profile} />
    </Config>
  );
}

export default compose(withTheme)(CardConfig);
