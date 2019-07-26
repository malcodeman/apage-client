import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h4`
  font-size: 1.2rem;
  line-height: 1.6;
  letter-spacing: 0.01em;
  margin-bottom: 1rem;
  text-transform: capitalize;
  color: ${props => props.theme.primary};
`;

const Description = styled.p`
  font-size: 0.8rem;
  color: ${props => props.theme.secondary};
`;

function NotExists() {
  return (
    <Wrapper>
      <Title>No such page</Title>
      <Description>The page you requested does not exist.</Description>
    </Wrapper>
  );
}

export default NotExists;
