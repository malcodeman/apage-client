import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Plus from "../assets/icons/Plus";

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: 0;
  padding: 10px;
  height: 100%;
  width: 100%;
  background-color: #efefef;
  margin-bottom: 0.5rem;
  color: ${props => props.theme.primary};
  border-radius: ${props => props.theme.borderRadius};
`;

const Text = styled.span`
  font-size: 0.8rem;
  color: ${props => props.theme.primary};
`;

function AddPage(props) {
  const { handleOnClick } = props;

  return (
    <Link to="/templates">
      <ButtonWrapper>
        <Button onClick={handleOnClick}>
          <Plus height={16} width={16} />
        </Button>
        <Text>Create a new page</Text>
      </ButtonWrapper>
    </Link>
  );
}

export default AddPage;
