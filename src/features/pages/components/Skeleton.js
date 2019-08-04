import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledSkeleton = styled.div`
  background: linear-gradient(90deg, #f2f2f2 25%, #e6e6e6 37%, #f2f2f2 63%);
  background-size: 400% 100%;
  border-radius: ${props => props.theme.borderRadius};
  animation: ${props => props.active && props.theme.animations.loading};
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
