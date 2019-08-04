import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import XIcon from "../commonAssets/icons/X";

const StyledAlert = styled.div`
  position: relative;
  padding: 0.5rem 1rem;
  border-radius: ${props => props.theme.borderRadius};
  animation: ${props => props.theme.animations.bounceIn};
  background-color: ${props => props.theme.alert[props.type]}3F;
`;

const Message = styled.p`
  font-size: 1rem;
  color: ${props => props.theme.primary};
`;

const Description = styled.p`
  font-size: 0.8rem;
  color: ${props => props.theme.secondary};
`;

const CloseText = styled.span`
  font-size: 0.8rem;
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  cursor: pointer;
  color: ${props => props.theme.primary};
`;

const StyledXIcon = styled(XIcon)`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  cursor: pointer;
  color: ${props => props.theme.primary};
`;

function Alert(props) {
  const { type, message, description, closable, closeText } = props;
  const [close, setClose] = useState(false);

  function handleClose() {
    setClose(true);
  }

  if (close) {
    return null;
  }

  return (
    <StyledAlert type={type}>
      <Message>{message}</Message>
      {description && <Description>{description}</Description>}
      {closable && closeText ? (
        <CloseText onClick={handleClose}>{closeText}</CloseText>
      ) : (
        <StyledXIcon onClick={handleClose} />
      )}
    </StyledAlert>
  );
}

Alert.propTypes = {
  type: PropTypes.oneOf(["success", "info", "warning", "error"]),
  message: PropTypes.string,
  description: PropTypes.string,
  closable: PropTypes.bool,
  closeText: PropTypes.string
};

Alert.defaultProps = {
  type: "warning",
  message: "",
  closable: false,
  closeText: ""
};

export default Alert;
