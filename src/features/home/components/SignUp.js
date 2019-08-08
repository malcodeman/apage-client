import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import EmailForm from "./EmailForm";
import Text from "../../commonComponents/Text";
import { NAME } from "../../../core/constants";

const Wrapper = styled.section`
  padding: 4rem 2rem;
  margin: 0 auto;
  max-width: 1200px;
`;

const Center = styled.div`
  margin: 0 auto;
  max-width: 24rem;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: 500;
  line-height: 1.25;
  text-align: center;
  margin-bottom: 2rem;
  color: ${props => props.theme.primary};
`;

function SignUp() {
  return (
    <Wrapper>
      <Title>Power your team with {NAME}</Title>
      <Center>
        <EmailForm
          placeholderText="Enter your email"
          ctaText="Sign up for free"
        />
        <Text mt={1} type="secondary">
          {NAME} is free to use for teams of any size. We also offer{" "}
          <Link to="/pricing">
            <Text underline bold>
              paid plans
            </Text>
          </Link>{" "}
          with additional features, storage, and support.
        </Text>
      </Center>
    </Wrapper>
  );
}

export default SignUp;
