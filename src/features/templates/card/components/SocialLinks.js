import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import styled, { withTheme } from "styled-components";
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";

import { addSocialLink } from "../../../pages/actions/pagesActionCreators";
import BackButton from "../../components/BackButton";
import LinkIcon from "./assets/icons/Link";
import Loader from "../../../commonComponents/Loader";

const Wrapper = styled.div`
  padding: 0 2rem;
`;

const Title = styled.h2`
  font-size: 1rem;
  font-weight: 500;
  margin: 2rem 0;
  color: ${props => props.theme.primary};
`;

const DescriptionText = styled.p`
  font-size: 0.8rem;
  margin-bottom: 0.5rem;
  color: ${props => props.theme.secondary};
`;

const Link = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem 2rem;
  cursor: pointer;
  border-top: 1px solid ${props => props.theme.borderColor};
`;

const Links = styled.div`
  ${Link}:last-child {
    border-bottom: 1px solid ${props => props.theme.borderColor};
  }
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

const StyledForm = styled(Form)`
  margin-top: 1rem;
  padding: 0 2rem;
`;

const FormItem = styled.div`
  margin-bottom: 1rem;
`;

const Input = styled(Field)`
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

const ErrorMessage = styled.span`
  padding: 4px 8px;
  font-size: 0.8rem;
  font-weight: 500;
  color: ${props => props.theme.error};
  animation: ${props => props.theme.bounceInAnimation};
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
  margin: 0 auto;
`;

const SubmitButtonText = styled.span`
  font-family: "Roboto", sans-serif;
  font-size: 0.6rem;
  font-weight: 500;
  text-transform: uppercase;
`;

function SocialLinks(props) {
  const { theme, touched, errors, isSubmitting, socialLinks } = props;

  return (
    <>
      <Wrapper>
        <BackButton text={"Home"} />
        <Title>Social Links</Title>
        <DescriptionText>Manage your links</DescriptionText>
      </Wrapper>
      <Links>
        {socialLinks.map(link => {
          return (
            <Link key={link.id}>
              <SocialIcon>
                <LinkIcon size={16} color={theme.primary} />
              </SocialIcon>
              <SocialUrl>{link.url}</SocialUrl>
            </Link>
          );
        })}
      </Links>
      <StyledForm>
        <FormItem>
          <Input placeholder="Paste a URL" type="text" name="url" />
          {touched.url && errors.url && (
            <ErrorMessage>{errors.url}</ErrorMessage>
          )}
        </FormItem>
        <SubmitButton type="submit">
          <SubmitButtonText>
            {isSubmitting ? <Loader /> : "Add new"}
          </SubmitButtonText>
        </SubmitButton>
      </StyledForm>
    </>
  );
}

const SocialLinkForm = withFormik({
  validationSchema: Yup.object().shape({
    url: Yup.string()
      .required("URL is required")
      .url("URL not detected")
  }),
  mapPropsToValues: props => ({
    url: props.url || ""
  }),
  handleSubmit(payload, bag) {
    const addSocialLink = bag.props.addSocialLink;
    const meta = {
      domain: bag.props.domain,
      setSubmitting: bag.setSubmitting,
      setFieldError: bag.setFieldError,
      resetForm: bag.resetForm
    };

    addSocialLink(payload, meta);
  }
})(SocialLinks);

const mapStateToProps = state => {
  return {
    domain: state.pages.page.domain,
    socialLinks: state.pages.page.socialLinks
  };
};

const withConnect = connect(
  mapStateToProps,
  { addSocialLink }
);

export default compose(
  withTheme,
  withConnect
)(SocialLinkForm);
