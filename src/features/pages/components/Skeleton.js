import React from "react";
import PropTypes from "prop-types";
import styled, { keyframes, css } from "styled-components";

const loading = keyframes`
  0% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0 50%;
  }
`;

const StyledSkeleton = styled.div`
  background: linear-gradient(90deg, #f2f2f2 25%, #e6e6e6 37%, #f2f2f2 63%);
  background-size: 400% 100%;
  border-radius: ${props => props.theme.borderRadius};
  ${props =>
    props.active &&
    css`
      animation: ${loading} 1.4s ease infinite;
    `}
`;

function Skeleton(props) {
  const { active } = props;

  return <StyledSkeleton active={active} />;
}

Skeleton.propTypes = {
  active: PropTypes.bool
};

Skeleton.defaultProps = {
  active: false
};

export default Skeleton;
