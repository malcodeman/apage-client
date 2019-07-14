import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledImage = styled.div`
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  cursor: pointer;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  transition: 0.06s box-shadow ease-in;
  :hover {
    box-shadow: 0 0 0 6px hsla(0, 0%, 0%, 0.06);
  }
  background-image: url(${props => props.bg});
  border-radius: ${props => (props.circle ? "50%" : "0")};
  height: ${props => `${props.size}px`};
  width: ${props => `${props.size}px`};
`;

function Image(props) {
  const { circle, size, image, handleOnClick } = props;

  return (
    <StyledImage
      circle={circle}
      size={size}
      bg={image}
      onClick={handleOnClick}
    />
  );
}

Image.propTypes = {
  circle: PropTypes.bool,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  handleOnClick: PropTypes.func
};

Image.defaultProps = {
  circle: false,
  size: 120
};

export default Image;
