import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Info = styled.div`
  padding: 0.5rem;
  background-color: #efefef;
  margin-bottom: 0.5rem;
  width: 100%;
  border-radius: ${props => props.theme.borderRadius};
`;

const Title = styled.h1`
  font-weight: 500;
  font-size: 1rem;
  color: ${props => props.theme.primary};
`;

const Domain = styled.span`
  font-size: 0.8rem;
  color: ${props => props.theme.primary};
`;

function Page(props) {
  const { domain, title } = props;

  return (
    <Link to={`/${domain}/config`}>
      <Wrapper>
        <Info>
          <Title>{domain}</Title>
        </Info>
        <Domain>{title}</Domain>
      </Wrapper>
    </Link>
  );
}

export default Page;
