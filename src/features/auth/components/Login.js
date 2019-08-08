import React from "react";
import { compose } from "redux";
import styled, { withTheme } from "styled-components";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { Form, withFormik } from "formik";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import Header from "./Header";
import Button from "../../commonComponents/Button";
import Input from "../../commonComponents/Input";
import FormItem from "../../commonComponents/FormItem";
import Alert from "../../commonComponents/Alert";
import Text from "../../commonComponents/Text";
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

const FormWrapper = styled.div`
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

const Footer = styled.footer`
  padding: 1rem 2rem;
`;

const OtherOptions = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

const NoAccountWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const FormikForm = props => {
  const {
    isAuthorized,
    values,
    errors,
    touched,
    isSubmitting,
    handleChange,
    handleBlur,
    theme
  } = props;

  if (isAuthorized) {
    return <Redirect to="/" />;
  }

  return (
    <Wrapper>
      <Content>
        <Header />
        <FormWrapper>
          <FormHeader>
            <Heading>Sign in</Heading>
            <Link to="/forgot">
              <Text underline>Forgot password ?</Text>
            </Link>
          </FormHeader>
          <Form>
            <FormItem
              validateStatus="error"
              help={touched.email && errors.email}
            >
              <Input
                type="text"
                name="email"
                placeholder="Email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </FormItem>
            <FormItem
              validateStatus="error"
              help={touched.password && errors.password}
            >
              <Input
                type="password"
                name="password"
                placeholder="Password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </FormItem>
            <Button
              type="primary"
              htmlType="submit"
              disabled={Boolean(
                isSubmitting ||
                  !values.email.length ||
                  !values.password.length ||
                  errors.email ||
                  errors.password
              )}
              loading={isSubmitting}
              mb={1}
              block
            >
              Sign in
            </Button>
            {errors.general && (
              <Alert type="error" message={errors.general} closable />
            )}
          </Form>
        </FormWrapper>
        <Footer>
          <Button mb={1} icon="google" block>
            Sign in with Google
          </Button>
          <OtherOptions>
            <NoAccountWrapper>
              <Text>Don't have an account?</Text>
              <Link to="/signup">
                <Text underline strong color={theme.brand}>
                  Sign up for free
                </Text>
              </Link>
            </NoAccountWrapper>
            <Link to="/sso/login">
              <Text underline>Sign in with SSO</Text>
            </Link>
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
