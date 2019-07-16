import React, { useState } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import styled from "styled-components";
import * as Yup from "yup";
import { Form, Field, withFormik } from "formik";

import { updatePage } from "../../../pages/actions/pagesActionCreators";
import BackButton from "../../components/BackButton";
import Loader from "../../../commonComponents/Loader";
import ImageModal from "./ImageModal";
import Image from "./Image";

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
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

const ProfileItem = styled.div`
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

const SubmitButton = styled.button`
  height: 36px;
  padding: 0 1rem;
  font-size: 18px;
  border-radius: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0;
  color: #fff;
  cursor: pointer;
  background-color: #000;
  align-self: center;
`;

const SubmitButtonText = styled.span`
  font-family: "Roboto", sans-serif;
  font-size: 0.6rem;
  font-weight: 500;
  text-transform: uppercase;
`;

const ErrorMessage = styled.span`
  padding: 4px 8px;
  font-size: 0.8rem;
  font-weight: 500;
  color: ${props => props.theme.error};
  animation: ${props => props.theme.bounceInAnimation};
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
        <ProfileItem>
          <DescriptionTitle>Name</DescriptionTitle>
          <DescriptionText>e.g. Alex McRad</DescriptionText>
          <Input placeholder="Name" type="text" name="name" />
          {touched.name && errors.name && (
            <ErrorMessage>{errors.name}</ErrorMessage>
          )}
        </ProfileItem>
        <ProfileItem>
          <DescriptionTitle>Tagline</DescriptionTitle>
          <DescriptionText>e.g. Drinker of Coffee</DescriptionText>
          <Input placeholder="Tagline" type="text" name="tagline" />
          {touched.tagline && errors.tagline && (
            <ErrorMessage>{errors.tagline}</ErrorMessage>
          )}
        </ProfileItem>
        <ProfileItem>
          <DescriptionTitle>Location</DescriptionTitle>
          <DescriptionText>e.g. Seattle, WA</DescriptionText>
          <Input placeholder="Location" type="text" name="location" />
          {touched.location && errors.location && (
            <ErrorMessage>{errors.location}</ErrorMessage>
          )}
        </ProfileItem>
        <ProfileItem>
          <DescriptionTitle>CTA button title</DescriptionTitle>
          <DescriptionText>e.g. Get in Touch</DescriptionText>
          <Input
            placeholder="CTA Button Title"
            type="text"
            name="cta_button_text"
          />
          {touched.cta_button_text && errors.cta_button_text && (
            <ErrorMessage>{errors.cta_button_text}</ErrorMessage>
          )}
        </ProfileItem>
        <ProfileItem>
          <DescriptionTitle>CTA button link</DescriptionTitle>
          <DescriptionText>e.g. mailto:hi@templates.com</DescriptionText>
          <Input
            placeholder="CTA Button Link"
            type="text"
            name="cta_button_link"
          />
          {touched.cta_button_link && errors.cta_button_link && (
            <ErrorMessage>{errors.cta_button_link}</ErrorMessage>
          )}
        </ProfileItem>
        <SubmitButton>
          <SubmitButtonText>
            {isSubmitting ? <Loader /> : "Save changes"}
          </SubmitButtonText>
        </SubmitButton>
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
    cta_button_text: Yup.string().required("CTA Button text is required"),
    cta_button_link: Yup.string().required("CTA Button Link is required")
  }),
  mapPropsToValues: props => ({
    domain: props.domain || "",
    name: props.name || "",
    tagline: props.tagline || "",
    location: props.location || "",
    cta_button_text: props.cta_button_text || "",
    cta_button_link: props.cta_button_link || ""
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
    cta_button_text: state.pages.page.cta_button_text,
    cta_button_link: state.pages.page.cta_button_link
  };
};

const withConnect = connect(
  mapStateToProps,
  { updatePage }
);

export default compose(withConnect)(ProfileForm);
