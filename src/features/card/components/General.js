import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import styled from "styled-components";
import * as Yup from "yup";
import { Form, withFormik } from "formik";
import { Redirect } from "react-router-dom";

import {
  updateDomain,
  updateDomainReset
} from "../../pages/actions/pagesActionCreators";
import BackButton from "../../commonComponents/BackButton";
import Button from "../../commonComponents/Button";
import Input from "../../commonComponents/Input";
import FormItem from "../../commonComponents/FormItem";

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  padding: 0 2rem;
`;

const Title = styled.h2`
  font-size: 1rem;
  font-weight: 500;
  margin: 2rem 0;
  color: ${props => props.theme.primary};
`;

function General(props) {
  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    updateDomainSuccess,
    updateDomainReset
  } = props;

  if (updateDomainSuccess) {
    updateDomainReset();

    return <Redirect to={`/${values.domain}/config`} />;
  }

  return (
    <StyledForm>
      <BackButton text={"Home"} />
      <Title>General</Title>
      <FormItem
        label="domain"
        help={touched.domain && errors.domain}
        validateStatus="error"
      >
        <Input
          placeholder="Domain"
          type="text"
          name="domain"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.domain}
        />
      </FormItem>
      <Button
        loading={isSubmitting}
        htmlType="submit"
        type="primary"
        disabled={Boolean(isSubmitting || !values.domain)}
      >
        Save changes
      </Button>
    </StyledForm>
  );
}

const GeneralForm = withFormik({
  enableReinitialize: true,
  validationSchema: Yup.object().shape({
    domain: Yup.string().required("Domain is required")
  }),
  mapPropsToValues: props => ({
    domain: props.domain || ""
  }),
  handleSubmit(payload, bag) {
    bag.props.updateDomain(payload, {
      currentDomain: bag.props.domain,
      setSubmitting: bag.setSubmitting,
      setFieldError: bag.setFieldError
    });
  }
})(General);

const mapStateToProps = state => {
  return {
    domain: state.pages.page.domain,
    updateDomainSuccess: state.pages.updateDomainSuccess
  };
};

const withConnect = connect(
  mapStateToProps,
  { updateDomain, updateDomainReset }
);

export default compose(withConnect)(GeneralForm);
