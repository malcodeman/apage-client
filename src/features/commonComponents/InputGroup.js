import React from "react";
import styled from "styled-components";

const StyledInputGroup = styled.div`
  display: flex;
  & > :first-child {
    border-radius: 0;
    border-top-left-radius: ${props => props.theme.borderRadius};
    border-bottom-left-radius: ${props => props.theme.borderRadius};
  }
  & > :not(:first-child):not(:last-child) {
    border-radius: 0;
  }
  & > :last-child {
    border-radius: 0;
    border-top-right-radius: ${props => props.theme.borderRadius};
    border-bottom-right-radius: ${props => props.theme.borderRadius};
  }
`;

function InputGroup(props) {
  const { children } = props;

  return <StyledInputGroup>{children}</StyledInputGroup>;
}

export default InputGroup;
