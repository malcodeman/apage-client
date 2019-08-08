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
            <Heading>Create an account</Heading>
          </FormHeader>
          <Form>
            <FormItem
              label="email"
              help={touched.email && errors.email}
              validateStatus="error"
            >
              <Input
                type="text"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </FormItem>
            <FormItem
              label="create a password"
              help={touched.password && errors.password}
              validateStatus="error"
            >
              <Input
                type="password"
                name="password"
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
              Sign up for free
            </Button>
            {errors.general && (
              <Alert type="error" message={errors.general} closable />
            )}
          </Form>
        </FormWrapper>
        <Footer>
          <Button mb={1} icon="google" block>
            Sign up with Google
          </Button>
          <Text mb={2}>
            By creating an account, you agree to the{" "}
            <Link to="/tos">
              <Text underline>Terms of Service</Text>
            </Link>
            .
          </Text>
          <OtherOptions>
            <NoAccountWrapper>
              <Text>Already have an account?</Text>
              <Link to="/login">
                <Text underline strong color={theme.brand}>
                  Sign in
                </Text>
              </Link>
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
  { signup }
);

export default compose(
  withTheme,
  withConnect
)(SignupForm);
