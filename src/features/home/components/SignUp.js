import React from "react";
import styled from "styled-components";

import EmailForm from "./EmailForm";

const Wrapper = styled.section`
  padding: 4rem 2rem;
  margin: 0 auto;
  max-width: 1200px;
`;

const Center = styled.div`
  margin: 0 auto;
  max-width: 24rem;
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: 500;
  line-height: 1.25;
  text-align: center;
  margin-bottom: 2rem;
  color: ${props => props.theme.primary};
`;

const Text = styled.div`
  font-size: 0.8rem;
  margin-top: 1rem;
  text-align: center;
  color: ${props => props.theme.secondary};
`;

function SignUp() {
  return (
    <Wrapper>
      <Title>Power your team with Templates</Title>
      <Center>
        <EmailForm
          placeholderText="Enter your email"
          ctaText="Sign up for free"
        />
        <Text>
          Templates is free to use for teams of any size. We also offer paid
          plans with additional features, storage, and support.
        </Text>
      </Center>
    </Wrapper>
  );
}

export default SignUp;
