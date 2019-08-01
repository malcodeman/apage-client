import React, { useState } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import styled from "styled-components";
import * as Yup from "yup";
import { Form, withFormik } from "formik";

import { updatePage } from "../../pages/actions/pagesActionCreators";
import BackButton from "../../commonComponents/BackButton";
import Button from "../../commonComponents/Button";
import Input from "../../commonComponents/Input";
import FormItem from "../../commonComponents/FormItem";
import ImageModal from "./ImageModal";
import Image from "./Image";

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

const ImagesWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

function Profile(props) {
  const [mainImageModal, setMainImageModal] = useState(false);
  const [profileImageModal, setProfileImageModal] = useState(false);

  function dismissModal() {
    setMainImageModal(false);
    setProfileImageModal(false);
  }

  const {
    errors,
    touched,
    values,
    handleChange,
    handleBlur,
    isSubmitting,
    profileImageURL,
    mainImageURL
  } = props;

  return (
    <>
      {(mainImageModal || profileImageModal) && (
        <ImageModal
          dismiss={dismissModal}
          profileImage={profileImageModal ? true : false}
        />
      )}
      <StyledForm>
        <BackButton text={"Home"} />
        <Title>Profile</Title>
        <ImagesWrapper>
          <Image
            image={mainImageURL}
            handleOnClick={() => setMainImageModal(true)}
          />
          <Image
            circle
            image={profileImageURL}
            handleOnClick={() => setProfileImageModal(true)}
          />
        </ImagesWrapper>
        <FormItem
          label="name"
          help={touched.name && errors.name}
          validateStatus="error"
        >
          <Input
            placeholder="Name"
            type="text"
            name="name"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
          />
        </FormItem>
        <FormItem
          label="tagline"
          help={touched.tagline && errors.tagline}
          validateStatus="error"
        >
          <Input
            placeholder="Tagline"
            type="text"
            name="tagline"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.tagline}
          />
        </FormItem>
        <FormItem
          label="location"
          help={touched.location && errors.location}
          validateStatus="error"
        >
          <Input
            placeholder="Location"
            type="text"
            name="location"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.location}
          />
        </FormItem>
        <FormItem
          label="CTA button title"
          help={touched.ctaButtonText && errors.ctaButtonText}
          validateStatus="error"
        >
          <Input
            placeholder="CTA Button Title"
            type="text"
            name="ctaButtonText"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.ctaButtonText}
          />
        </FormItem>
        <FormItem
          label="CTA button link"
          help={touched.ctaButtonLink && errors.ctaButtonLink}
          validateStatus="error"
        >
          <Input
            placeholder="CTA Button Link"
            type="text"
            name="ctaButtonLink"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.ctaButtonLink}
          />
        </FormItem>
        <Button
          loading={isSubmitting}
          disabled={isSubmitting}
          htmlType="submit"
          type="primary"
        >
          Save changes
        </Button>
      </StyledForm>
    </>
  );
}

const ProfileForm = withFormik({
  enableReinitialize: true,
  validationSchema: Yup.object().shape({
    name: Yup.string().required("Name is required"),
    tagline: Yup.string().required("Tagline is required"),
    location: Yup.string().required("Location is required"),
    ctaButtonText: Yup.string().required("CTA Button text is required"),
    ctaButtonLink: Yup.string().required("CTA Button Link is required")
  }),
  mapPropsToValues: props => ({
    domain: props.domain || "",
    name: props.name || "",
    tagline: props.tagline || "",
    location: props.location || "",
    ctaButtonText: props.ctaButtonText || "",
    ctaButtonLink: props.ctaButtonLink || ""
  }),
  handleSubmit(payload, bag) {
    bag.props.updatePage(payload, {
      setSubmitting: bag.setSubmitting,
      setFieldError: bag.setFieldError
    });
  }
})(Profile);

const mapStateToProps = state => {
  return {
    mainImageURL: state.pages.page.mainImageURL,
    profileImageURL: state.pages.page.profileImageURL,
    name: state.pages.page.name,
    tagline: state.pages.page.tagline,
    location: state.pages.page.location,
    ctaButtonText: state.pages.page.ctaButtonText,
    ctaButtonLink: state.pages.page.ctaButtonLink
  };
};

const withConnect = connect(
  mapStateToProps,
  { updatePage }
);

export default compose(withConnect)(ProfileForm);
