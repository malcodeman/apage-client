import React from "react";
import styled, { withTheme } from "styled-components";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { Form, Field, withFormik } from "formik";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import Logo from "../../commonComponents/Logo";
import Loader from "../../commonComponents/Loader";
import Google from "../styles/icons/Google";
import { signup } from "../actions/authActionCreators";
import utils from "../../../core/utils";

const Wrapper = styled.div`
  @media (min-width: 576px) {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }
`;

const Content = styled.div`
  @media (min-width: 576px) {
    width: 100%;
    max-width: 384px;
  }
`;

const Header = styled.header`
  padding: 1rem 2rem;
  background-color: #f2f2f2;
  @media (min-width: 576px) {
    background-color: initial;
  }
`;

const BrandLink = styled(Link)`
  display: flex;
  align-items: center;
`;

const BrandText = styled.span`
  font-size: 1rem;
  padding: 10px;
  cursor: pointer;
  font-weight: 500;
  color: ${props => props.theme.primary};
`;

const FormWrapper = styled.div`
  background-color: #f2f2f2;
  padding: 32px;
  border-radius: 6px;
`;

const FormHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

const Heading = styled.h1`
  font-weight: normal;
  font-size: 1rem;
`;

const StyledLink = styled(Link)`
  font-size: 0.8rem;
  padding-bottom: 0.14rem;
  font-weight: ${props => (props.bold ? "500" : "normal")};
  border-bottom: 2px solid
    ${props => (props.color ? props.color : props.theme.secondary)};
  color: ${props => (props.color ? props.color : props.theme.secondary)};
`;

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
`;

const FormItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

const Label = styled.label`
  font-size: 0.8rem;
  padding-bottom: 0.25rem;
  color: ${props => props.theme.secondary};
`;

const Input = styled(Field)`
  font-size: 1rem;
  outline: 0;
  padding: 0 0.5rem;
  padding: 0.5rem;
  border: 2px solid transparent;
  font-weight: 500;
  &:focus {
    border-color: ${props => props.theme.borderColor};
  }
  border-radius: ${props => props.theme.borderRadius};
  color: ${props => props.theme.primary};
  background-color: ${props => props.theme.backgroundSecondary};
`;

const SubmitButton = styled.button`
  color: #fff;
  border: 0;
  cursor: pointer;
  padding: 0.5rem;
  font-size: 1rem;
  &:disabled {
    cursor: default;
    color: rgba(0, 0, 0, 0.247);
    background-color: ${props => props.theme.disabled};
  }
  background-color: ${props => props.theme.brand};
  border-radius: ${props => props.theme.borderRadius};
`;

const ErrorMessage = styled.span`
  padding: 4px 8px;
  font-size: 0.8rem;
  font-weight: 500;
  color: ${props => props.theme.error};
  animation: ${props => props.theme.bounceInAnimation};
`;

const Footer = styled.footer`
  padding: 1rem 2rem;
`;

const OtherOptions = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

const SocialSignInButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 0.5rem;
  background-color: transparent;
  width: 100%;
  margin-bottom: 1rem;
  border: 2px solid ${props => props.theme.borderColor};
  border-radius: ${props => props.theme.borderRadius};
`;

const SocialSignInText = styled.span`
  font-size: 1rem;
  font-weight: 500;
  padding-left: 1rem;
  color: ${props => props.theme.primary};
`;

const TextSecondary = styled.p`
  font-size: 0.8rem;
  opacity: 0.75;
  margin-bottom: 1rem;
  color: ${props => props.theme.primary};
`;

const NoAccountWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Text = styled.span`
  font-size: 0.8rem;
  line-height: 1.6;
  opacity: 0.75;
  color: ${props => props.theme.primary};
`;

const FormikForm = props => {
  const { values, errors, touched, isSubmitting } = props;

  return (
    <Wrapper>
      <Content>
        <Header>
          <BrandLink to="/">
            <Logo size={16} color={props.theme.brand} />
            <BrandText>Templates</BrandText>
          </BrandLink>
        </Header>
        <FormWrapper>
          <FormHeader>
            <Heading>Create an account</Heading>
          </FormHeader>
          <StyledForm>
            <FormItem>
              <Label>Email</Label>
              <Input type="text" name="email" />
              {touched.email && errors.email && (
                <ErrorMessage>{errors.email}</ErrorMessage>
              )}
            </FormItem>
            <FormItem>
              <Label>Create a password</Label>
              <Input type="password" name="password" />
              {touched.password && errors.password && (
                <ErrorMessage>{errors.password}</ErrorMessage>
              )}
            </FormItem>
            <SubmitButton
              disabled={
                isSubmitting ||
                !values.email.length ||
                !values.password.length ||
                errors.email ||
                errors.password
              }
            >
              {isSubmitting ? <Loader /> : "Sign up for free"}
            </SubmitButton>
            {errors.general && <ErrorMessage>{errors.general}</ErrorMessage>}
          </StyledForm>
        </FormWrapper>
        <Footer>
          <SocialSignInButton>
            <Google size={18} />
            <SocialSignInText>Sign up with Google</SocialSignInText>
          </SocialSignInButton>
          <TextSecondary>
            By creating an account, you agree to the{" "}
            <StyledLink to="/tos">Terms of Service</StyledLink>.
          </TextSecondary>
          <OtherOptions>
            <NoAccountWrapper>
              <Text>Already have an account?</Text>
              <StyledLink to="/login" color={props.theme.brand} bold="true">
                Sign in
              </StyledLink>
            </NoAccountWrapper>
          </OtherOptions>
        </Footer>
      </Content>
    </Wrapper>
  );
};

const SignupForm = withFormik({
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .required("Email is required")
      .email("Invalid email"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters")
  }),
  mapPropsToValues: props => ({
    email: utils.getParam("email") || props.email || "",
    password: props.password || ""
  }),
  handleSubmit(payload, bag) {
    bag.props.signup(payload, {
      setSubmitting: bag.setSubmitting,
      setFieldError: bag.setFieldError,
      history: bag.props.history
    });
  }
})(FormikForm);

export default withRouter(
  withTheme(
    connect(
      null,
      { signup }
    )(SignupForm)
  )
);
