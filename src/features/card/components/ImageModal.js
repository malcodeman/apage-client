import React from "react";
import PropTypes from "prop-types";
import { compose } from "redux";
import styled from "styled-components";
import * as Yup from "yup";
import { Form, withFormik } from "formik";
import { connect } from "react-redux";

import {
  updateMainImage,
  updateProfileImage
} from "../../pages/actions/pagesActionCreators";
import Modal from "../../commonComponents/Modal";
import Input from "../../commonComponents/Input";
import Button from "../../commonComponents/Button";
import InputGroup from "../../commonComponents/InputGroup";
import XIcon from "../../commonAssets/icons/X";

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

const ErrorMessage = styled.span`
  padding: 4px 8px;
  font-size: 0.8rem;
  font-weight: 500;
  color: ${props => props.theme.error};
  animation: ${props => props.theme.bounceInAnimation};
`;

function ImageModal(props) {
  const {
    dismiss,
    isSubmitting,
    errors,
    touched,
    values,
    handleChange,
    handleBlur
  } = props;

  return (
    <Modal dismiss={dismiss}>
      <Wrapper>
        <Main>
          <Header>
            <Title>Link (URL)</Title>
            <XWrapper>
              <XIcon onClick={dismiss} />
            </XWrapper>
          </Header>
          <FormWrapper>
            <StyledForm>
              <InputGroup>
                <Input
                  type="text"
                  name="imageURL"
                  placeholder="Enter a URL"
                  value={values.imageURL}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
                <Button
                  type="primary"
                  htmlType="submit"
                  disabled={Boolean(
                    isSubmitting || !values.imageURL || errors.imageURL
                  )}
                  loading={isSubmitting}
                  icon="link"
                />
              </InputGroup>
              <ErrorMessage>
                {(touched.imageURL && errors.imageURL && (
                  <ErrorMessage>{errors.imageURL}</ErrorMessage>
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

const ImageForm = withFormik({
  enableReinitialize: true,
  validationSchema: Yup.object().shape({
    imageURL: Yup.string()
      .required("URL is required")
      .url("Please enter a URL")
  }),
  mapPropsToValues: props => ({
    imageURL: props.profileImage
      ? props.profileImageURL || " "
      : props.mainImageURL || ""
  }),
  handleSubmit(payload, bag) {
    const profileImage = bag.props.profileImage;
    const meta = {
      domain: bag.props.domain,
      setSubmitting: bag.setSubmitting,
      setFieldError: bag.setFieldError
    };

    if (profileImage) {
      const updatedPayload = {
        profileImageURL: payload.imageURL
      };

      bag.props.updateProfileImage(updatedPayload, meta);
    } else {
      const updatedPayload = {
        mainImageURL: payload.imageURL
      };

      bag.props.updateMainImage(updatedPayload, meta);
    }
  }
})(ImageModal);

const mapStateToProps = state => {
  return {
    mainImageURL: state.pages.page.mainImageURL,
    profileImageURL: state.pages.page.profileImageURL,
    domain: state.pages.page.domain
  };
};

const withConnect = connect(
  mapStateToProps,
  { updateMainImage, updateProfileImage }
);

ImageForm.propTypes = {
  profileImage: PropTypes.bool
};

ImageForm.defaultProps = {
  profileImage: false
};

export default compose(withConnect)(ImageForm);
