import React from "react";
import { compose } from "redux";
import PropTypes from "prop-types";
import styled, { withTheme } from "styled-components";
import { Link } from "react-router-dom";

import LogoIcon from "../commonAssets/icons/Logo";
import { NAME } from "../../core/constants";

const BrandLink = styled(Link)`
  display: flex;
  align-items: center;
`;

const BrandText = styled.span`
  font-size: 1rem;
  padding: 10px;
  cursor: pointer;
  font-weight: 500;
  color: ${props => props.theme.primary};
`;

function Logo(props) {
  const { to, color, theme, size } = props;

  return (
    <BrandLink to={to}>
      <LogoIcon color={color || theme.brand} size={size} />
      <BrandText>{NAME}</BrandText>
    </BrandLink>
  );
}

Logo.propTypes = {
  to: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.number
};

Logo.defaultProps = {
  to: "/",
  size: 16
};

export default compose(withTheme)(Logo);
