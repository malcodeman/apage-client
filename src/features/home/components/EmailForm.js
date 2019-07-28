import React, { useState } from "react";
import { compose } from "redux";
import PropTypes from "prop-types";
import styled from "styled-components";
import { withRouter } from "react-router-dom";

import Button from "../../commonComponents/Button";

const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  max-width: 380px;
  grid-gap: 0.5rem;
`;

const Input = styled.input`
  font-size: 1rem;
  padding: 0.5rem 1rem;
  outline: 0;
  border: 2px solid transparent;
  border-radius: 6px;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: 500;
  color: ${props => props.theme.primary};
  transition: ${props => props.theme.easeIn};
  background-color: ${props => props.theme.backgroundInput};
  &:focus {
    border-color: ${props => props.theme.borderColor};
  }
`;

function EmailForm(props) {
  const { placeholderText, ctaText, history } = props;
  const [email, setEmail] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    history.push(`/signup?email=${email}`);
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder={placeholderText}
        value={email}
        onChange={e => setEmail(e.currentTarget.value)}
      />
      <Button type="primary" htmlType="submit">
        {ctaText}
      </Button>
    </Form>
  );
}

EmailForm.propTypes = {
  placeholderText: PropTypes.string,
  ctaText: PropTypes.string
};

EmailForm.defaultProps = {
  placeholderText: "Enter your email address",
  ctaText: "Get started"
};

export default compose(withRouter)(EmailForm);
