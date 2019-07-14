import React from "react";
import { compose } from "redux";
import styled from "styled-components";
import * as Yup from "yup";
import { Form, Field, withFormik } from "formik";
import { connect } from "react-redux";

import { updateProfileImage } from "../../../pages/actions/pagesActionCreators";
import Modal from "../../../commonComponents/Modal";
import Loader from "../../../commonComponents/Loader";
import LinkIcon from "./assets/icons/Link";
import XIcon from "./assets/icons/X";

const Wrapper = styled.div`
  display: grid;
  width: 100vw;
  height: 100vh;
  transition: width 0.3s cubic-bezier(0.84, 0.02, 0.37, 0.74),
    height 0.3s cubic-bezier(0.84, 0.02, 0.37, 0.74);
  @media (min-width: 768px) {
    width: 50vw;
    height: 50vh;
  }
`;

const Main = styled.main`
  display: grid;
  grid-template-rows: auto 1fr;
  padding: 1rem;
  background-color: ${props => props.theme.backgroundSecondary};
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const Title = styled.h2`
  font-size: 1rem;
  font-weight: normal;
  margin-left: auto;
  color: ${props => (props.active ? props.theme.brand : props.theme.primary)};
`;

const XWrapper = styled.div`
  display: flex;
  margin-left: auto;
  cursor: pointer;
  color: ${props => props.theme.primary};
`;

const FormWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledForm = styled(Form)`
  width: 100%;
  @media (min-width: 992px) {
    width: 50%;
  }
`;

const FormItem = styled.div`
  display: flex;
`;

const Input = styled(Field)`
  border: 2px solid transparent;
  font-size: 1rem;
  padding: 0.5rem;
  font-weight: 400;
  width: 100%;
  background-color: hsla(0, 0%, 0%, 0.05);
  border-radius: ${props => props.theme.borderRadius} 0 0
    ${props => props.theme.borderRadius};
  &:focus {
    border-color: ${props => props.theme.borderColor};
  }
`;

const Submit = styled.button`
  color: #fff;
  border: 0;
  cursor: pointer;
  min-height: 36px;
  font-size: 0.8rem;
  padding: 0 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.brand};
  border-radius: 0px ${props => props.theme.borderRadius}
    ${props => props.theme.borderRadius} 0px;
`;

const ErrorMessage = styled.span`
  padding: 4px 8px;
  font-size: 0.8rem;
  font-weight: 500;
  color: ${props => props.theme.error};
  animation: ${props => props.theme.bounceInAnimation};
`;

function ProfileImageModal(props) {
  const { dismiss, isSubmitting, errors, touched } = props;

  return (
    <Modal dismiss={dismiss}>
      <Wrapper>
        <Main>
          <Header>
            <Title>Link (URL)</Title>
            <XWrapper>
              <XIcon size={16} onClick={dismiss} />
            </XWrapper>
          </Header>
          <FormWrapper>
            <StyledForm>
              <FormItem>
                <Input
                  type="text"
                  name="profileImageURL"
                  placeholder="Enter a URL"
                />
                <Submit disabled={isSubmitting}>
                  {isSubmitting ? <Loader /> : <LinkIcon />}
                </Submit>
              </FormItem>
              <ErrorMessage>
                {(touched.profileImageURL && errors.profileImageURL && (
                  <ErrorMessage>{errors.profileImageURL}</ErrorMessage>
                )) ||
                  errors.general}
              </ErrorMessage>
            </StyledForm>
          </FormWrapper>
        </Main>
      </Wrapper>
    </Modal>
  );
}

const ProfileImageForm = withFormik({
  enableReinitialize: true,
  validationSchema: Yup.object().shape({
    profileImageURL: Yup.string()
      .required("URL is required")
      .url("Please enter a URL")
  }),
  mapPropsToValues: props => ({
    profileImageURL: props.profileImageURL || ""
  }),
  handleSubmit(payload, bag) {
    bag.props.updateProfileImage(payload, {
      domain: bag.props.domain,
      setSubmitting: bag.setSubmitting,
      setFieldError: bag.setFieldError
    });
  }
})(ProfileImageModal);

const mapStateToProps = state => {
  return {
    profileImageURL: state.pages.page.profileImageURL,
    domain: state.pages.page.domain
  };
};

const withConnect = connect(
  mapStateToProps,
  { updateProfileImage }
);

export default compose(withConnect)(ProfileImageForm);
