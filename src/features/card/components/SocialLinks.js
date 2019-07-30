import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import styled, { withTheme } from "styled-components";
import { Form, withFormik } from "formik";
import * as Yup from "yup";

import {
  addSocialLink,
  removeSocialLink
} from "../../pages/actions/pagesActionCreators";
import BackButton from "../../commonComponents/BackButton";
import Button from "../../commonComponents/Button";
import Input from "../../commonComponents/Input";
import LinkIcon from "../../commonAssets/icons/Link";
import XIcon from "../assets/icons/X";

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

const RemoveButton = styled.div`
  opacity: 0;
  transform: scale(0);
  position: relative;
  top: -7px;
  align-self: flex-start;
  margin-left: auto;
  right: -7px;
  background-color: #ff492f;
  width: 21px;
  height: 21px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275),
    opacity 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
`;

const Link = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  border-top: 1px solid ${props => props.theme.borderColor};
  &:hover ${RemoveButton} {
    opacity: 1;
    transform: scale(1);
  }
`;

const Links = styled.div`
  ${Link}:last-child {
    border-bottom: 1px solid ${props => props.theme.borderColor};
  }
`;

const SocialIcon = styled.div`
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  margin-left: 2rem;
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
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  padding: 0 2rem;
`;

const FormItem = styled.div`
  margin-bottom: 1rem;
`;

const ErrorMessage = styled.span`
  padding: 4px 8px;
  font-size: 0.8rem;
  font-weight: 500;
  color: ${props => props.theme.error};
  animation: ${props => props.theme.bounceInAnimation};
`;

function SocialLinks(props) {
  const {
    theme,
    touched,
    errors,
    isSubmitting,
    values,
    handleBlur,
    handleChange,
    socialLinks,
    domain,
    removeSocialLink
  } = props;
  const meta = {
    domain
  };

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
              <RemoveButton onClick={() => removeSocialLink(link.id, meta)}>
                <XIcon size={14} />
              </RemoveButton>
            </Link>
          );
        })}
      </Links>
      <StyledForm>
        <FormItem>
          <Input
            placeholder="Paste a URL"
            type="text"
            name="url"
            value={values.url}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.url && errors.url && (
            <ErrorMessage>{errors.url}</ErrorMessage>
          )}
        </FormItem>
        <Button
          loading={isSubmitting}
          disabled={Boolean(isSubmitting || !values.url || errors.url)}
          htmlType="submit"
          type="primary"
        >
          Add new
        </Button>
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
  { addSocialLink, removeSocialLink }
);

export default compose(
  withTheme,
  withConnect
)(SocialLinkForm);
