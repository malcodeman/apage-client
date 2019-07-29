import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import styled from "styled-components";
import * as Yup from "yup";
import { Form, Field, withFormik } from "formik";
import { Redirect } from "react-router-dom";

import {
  updateDomain,
  updateDomainReset
} from "../../pages/actions/pagesActionCreators";
import BackButton from "../../commonComponents/BackButton";
import Button from "../../commonComponents/Button";

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

const FormItem = styled.div`
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

function General(props) {
  const {
    values,
    errors,
    touched,
    isSubmitting,
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
      <FormItem>
        <DescriptionTitle>Domain</DescriptionTitle>
        <DescriptionText>Customize your built-in domain.</DescriptionText>
        <Input placeholder="Domain" type="text" name="domain" />
        {touched.domain && errors.domain && (
          <ErrorMessage>{errors.domain}</ErrorMessage>
        )}
      </FormItem>
      <Button loading={isSubmitting} htmlType="submit" type="primary">
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
