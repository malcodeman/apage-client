import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Heading1 = styled.h1`
  font-size: 2.3rem;
  line-height: 1.6;
  font-weight: ${props => props.weight};
  margin-top: ${props => (props.mt ? `${props.mt}rem` : 0)};
  margin-bottom: ${props => (props.mb ? `${props.mb}rem` : 0)};
  color: ${props => (props.color ? `${props.color}` : props.theme.primary)};
`;

const Heading2 = styled.h2`
  font-size: 2rem;
  line-height: 1.6;
  font-weight: ${props => props.weight};
  margin-top: ${props => (props.mt ? `${props.mt}rem` : 0)};
  margin-bottom: ${props => (props.mb ? `${props.mb}rem` : 0)};
  color: ${props => (props.color ? `${props.color}` : props.theme.primary)};
`;

const Heading3 = styled.h3`
  font-size: 1.4rem;
  line-height: 1.6;
  font-weight: ${props => props.weight};
  margin-top: ${props => (props.mt ? `${props.mt}rem` : 0)};
  margin-bottom: ${props => (props.mb ? `${props.mb}rem` : 0)};
  color: ${props => (props.color ? `${props.color}` : props.theme.primary)};
`;

const Heading4 = styled.h4`
  font-size: 1.2rem;
  line-height: 1.6;
  letter-spacing: 0.01em;
  font-weight: ${props => props.weight};
  margin-top: ${props => (props.mt ? `${props.mt}rem` : 0)};
  margin-bottom: ${props => (props.mb ? `${props.mb}rem` : 0)};
  color: ${props => (props.color ? `${props.color}` : props.theme.primary)};
`;

function Title(props) {
  const { level, children, mt, mb, weight, color } = props;

  switch (level) {
    case 1:
      return (
        <Heading1 mt={mt} mb={mb} weight={weight} color={color}>
          {children}
        </Heading1>
      );
    case 2:
      return (
        <Heading2 mt={mt} mb={mb} weight={weight} color={color}>
          {children}
        </Heading2>
      );
    case 3:
      return (
        <Heading3 mt={mt} mb={mb} weight={weight} color={color}>
          {children}
        </Heading3>
      );
    case 4:
      return (
        <Heading4 mt={mt} mb={mb} weight={weight} color={color}>
          {children}
        </Heading4>
      );
    default:
      return (
        <Heading1 mt={mt} mb={mb} weight={weight} color={color}>
          {children}
        </Heading1>
      );
  }
}

Title.propTypes = {
  level: PropTypes.oneOf([1, 2, 3, 4]),
  mt: PropTypes.number,
  mb: PropTypes.number,
  weight: PropTypes.number,
  color: PropTypes.string
};

Title.defaultProps = {
  level: 1,
  mt: 0,
  mb: 0,
  weight: 400
};

export default Title;
