import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledFormItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

const Label = styled.label`
  font-size: 0.8rem;
  padding-bottom: 0.25rem;
  line-height: 1.25;
  text-transform: capitalize;
  color: ${props => props.theme.secondary};
`;

const Help = styled.span`
  font-size: 0.8rem;
  font-weight: 500;
  padding: 0.25rem 0.5rem;
  line-height: 1.25;
  animation: ${props => props.theme.animations.bounceIn};
  color: ${props =>
    props.theme.form[props.validateStatus].color || props.theme.secondary};
`;

function FormItem(props) {
  const { label, children, help, validateStatus } = props;

  return (
    <StyledFormItem>
      {label && <Label>{label}</Label>}
      {children}
      {help && <Help validateStatus={validateStatus}>{help}</Help>}
    </StyledFormItem>
  );
}

FormItem.propTypes = {
  label: PropTypes.string,
  help: PropTypes.string,
  validateStatus: PropTypes.oneOf(["success", "warning", "error", "validating"])
};

FormItem.defaultProps = {};

export default FormItem;
