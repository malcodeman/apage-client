import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { Form, Field, withFormik } from "formik";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import Loader from "../../commonComponents/Loader";
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

const Brand = styled(Link)`
  font-size: 1rem;
  margin: 24px;
  display: block;
  color: ${props => props.theme.primary};
`;

const FormWrapper = styled.div`
  background-color: #f2f2f2;
  padding: 32px;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  margin-bottom: 24px;
`;

const Heading = styled.h1`
  font-weight: normal;
  font-size: 1rem;
`;

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
`;

const FormItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
`;

const Input = styled(Field)`
  font-size: 0.8rem;
  padding: 0.5rem;
  outline: 0;
  border: 2px solid transparent;
  color: ${props => props.theme.primary};
  border-radius: ${props => props.theme.borderRadius};
  background-color: ${props => props.theme.backgroundSecondary};
  &:focus {
    border-color: ${props => props.theme.borderColor};
  }
`;

const Button = styled.button`
  color: #fff;
  border: 0;
  cursor: pointer;
  padding: 0.5rem;
  font-size: 0.8rem;
  &:disabled {
    opacity: 0.2;
  }
  background-color: ${props => props.theme.brand};
  border-radius: ${props => props.theme.borderRadius};
`;

const ErrorMessage = styled.span`
  margin: 4px 0;
  font-size: 0.8rem;
  color: ${props => props.theme.error};
`;

const FormikForm = props => {
  const { errors, touched, isSubmitting } = props;

  return (
    <Wrapper>
      <Content>
        <Brand to="/">Templates</Brand>
        <FormWrapper>
          <Header>
            <Heading>Sign in</Heading>
          </Header>
          <StyledForm>
            <FormItem>
              <Input
                type="text"
                name="username"
                placeholder="Username or email"
              />
              {touched.username && errors.username && (
                <ErrorMessage>{errors.username}</ErrorMessage>
              )}
            </FormItem>
            <FormItem>
              <Input type="password" name="password" placeholder="Password" />
              {touched.password && errors.password && (
                <ErrorMessage>{errors.password}</ErrorMessage>
              )}
            </FormItem>
            <Button disabled={isSubmitting}>
              {isSubmitting ? <Loader /> : "Log in"}
            </Button>
            {errors.general && <ErrorMessage>{errors.general}</ErrorMessage>}
          </StyledForm>
        </FormWrapper>
      </Content>
    </Wrapper>
  );
};

const LoginForm = withFormik({
  mapPropsToValues: props => ({
    username: props.username || "",
    password: props.password || ""
  }),
  validationSchema: Yup.object().shape({
    username: Yup.string().required("Username or email is required"),
    password: Yup.string().required("Password is required")
  }),
  handleSubmit(payload, bag) {
    bag.props.login(payload, {
      setSubmitting: bag.setSubmitting,
      setFieldError: bag.setFieldError,
      history: bag.props.history
    });
  }
})(FormikForm);

export default withRouter(
  connect(
    null,
    { login }
  )(LoginForm)
);
