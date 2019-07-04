import React from "react";
import { compose } from "redux";
import styled, { withTheme } from "styled-components";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { Form, Field, withFormik } from "formik";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import Logo from "../../commonComponents/Logo";
import Loader from "../../commonComponents/Loader";
import Mail from "../styles/icons/Mail";
import Lock from "../styles/icons/Lock";
import Google from "../styles/icons/Google";
import { login } from "../actions/authActionCreators";

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

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  border: 2px solid transparent;
  &:focus-within {
    border-color: ${props => props.theme.borderColor};
  }
  border-radius: ${props => props.theme.borderRadius};
  background-color: ${props => props.theme.backgroundSecondary};
`;

const Input = styled(Field)`
  font-size: 1rem;
  outline: 0;
  border: 0;
  padding: 0 0.5rem;
  filter: none;
  font-weight: 500;
  color: ${props => props.theme.primary};
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
  margin-bottom: 2rem;
  border: 2px solid ${props => props.theme.borderColor};
  border-radius: ${props => props.theme.borderRadius};
`;

const SocialSignInText = styled.span`
  font-size: 1rem;
  font-weight: 500;
  padding-left: 1rem;
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
  const { isAuthorized, values, errors, touched, isSubmitting } = props;

  if (isAuthorized) {
    return <Redirect to="/" />;
  }

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
            <Heading>Sign in</Heading>
            <StyledLink to="/forgot">Forgot password ?</StyledLink>
          </FormHeader>
          <StyledForm>
            <FormItem>
              <InputWrapper>
                <Mail size={12} color={props.theme.secondary} />
                <Input type="text" name="email" placeholder="Email" />
              </InputWrapper>
              {touched.email && errors.email && (
                <ErrorMessage>{errors.email}</ErrorMessage>
              )}
            </FormItem>
            <FormItem>
              <InputWrapper>
                <Lock size={12} color={props.theme.secondary} />
                <Input type="password" name="password" placeholder="Password" />
              </InputWrapper>
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
              {isSubmitting ? <Loader /> : "Sign in"}
            </SubmitButton>
            {errors.general && <ErrorMessage>{errors.general}</ErrorMessage>}
          </StyledForm>
        </FormWrapper>
        <Footer>
          <SocialSignInButton>
            <Google size={18} />
            <SocialSignInText>Sign in with Google</SocialSignInText>
          </SocialSignInButton>
          <OtherOptions>
            <NoAccountWrapper>
              <Text>Don't have an account?</Text>
              <StyledLink to="/signup" color={props.theme.brand} bold="true">
                Sign up for free
              </StyledLink>
            </NoAccountWrapper>
            <StyledLink to="/sso/login">Sign in with SSO</StyledLink>
          </OtherOptions>
        </Footer>
      </Content>
    </Wrapper>
  );
};

const LoginForm = withFormik({
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .required("Email is required")
      .email("Invalid email"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters")
  }),
  mapPropsToValues: props => ({
    email: props.email || "",
    password: props.password || ""
  }),
  handleSubmit(payload, bag) {
    bag.props.login(payload, {
      setSubmitting: bag.setSubmitting,
      setFieldError: bag.setFieldError
    });
  }
})(FormikForm);

const mapStateToProps = state => {
  return {
    isAuthorized: state.auth.isAuthorized
  };
};

const withConnect = connect(
  mapStateToProps,
  { login }
);

export default compose(
  withTheme,
  withConnect
)(LoginForm);