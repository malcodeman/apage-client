import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Loader from "./Loader";
import LinkIcon from "../commonAssets/icons/Link";
import SearchIcon from "../commonAssets/icons/Search";

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  cursor: pointer;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  &:disabled {
    cursor: default;
    color: ${props => props.theme.button.disabled.color};
    background-color: ${props => props.theme.button.disabled.background};
  }
  &:hover:enabled {
    opacity: 0.85;
  }
  transition: ${props => props.theme.easeIn};
  border-radius: ${props => props.theme.borderRadius};
  color: ${props => props.theme.button[props.styleType].color};
  background-color: ${props => props.theme.button[props.styleType].background};
`;

function Button(props) {
  const { onClick, disabled, type, htmlType, loading, children, icon } = props;

  function handleIcon(icon) {
    switch (icon) {
      case "link":
        return <LinkIcon />;
      case "search":
        return <SearchIcon />;
      default:
        return null;
    }
  }

  return (
    <StyledButton
      onClick={onClick}
      disabled={disabled}
      styleType={type}
      type={htmlType}
    >
      {loading && <Loader />}
      {icon && !loading && handleIcon(icon)}
      {children}
    </StyledButton>
  );
}

Button.propTypes = {
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  block: PropTypes.bool,
  onClick: PropTypes.func,
  size: PropTypes.oneOf(["default", "small", "large"]),
  type: PropTypes.oneOf([
    "default",
    "primary",
    "ghost",
    "dashed",
    "danger",
    "link"
  ]),
  htmlType: PropTypes.oneOf(["button", "submit", "reset"]),
  icon: PropTypes.oneOf(["link", "search"])
};

Button.defaultProps = {
  disabled: false,
  loading: false,
  block: false,
  size: "default",
  type: "default",
  htmlType: "button"
};

export default Button;
