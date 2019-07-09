import React from "react";
import styled from "styled-components";

import { INSPIRATIONS } from "../constants/homeConstants";

const Wrapper = styled.section`
  padding: 8rem 0;
`;

const Grid = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(1, 1fr);
  grid-template-areas:
    "text"
    "creative"
    "marketing"
    "product"
    "project";
  @media (min-width: 576px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas:
      "text text"
      "creative marketing"
      "product project";
  }
  @media (min-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-areas:
      "creative marketing text"
      "product project text";
  }
  @media (min-width: 1200px) {
    grid-template-columns: repeat(5, 1fr);
    grid-template-areas: "creative marketing product project text";
  }
`;

const TextWrapper = styled.div`
  padding: 1rem;
  grid-area: text;
  @media (min-width: 992px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

const Heading = styled.h2`
  font-size: 2rem;
  font-weight: 500;
  margin-bottom: 1rem;
  color: ${props => props.theme.primary};
`;

const Subheading = styled.h3`
  font-size: 1.2rem;
  font-weight: 400;
  color: ${props => props.theme.secondary};
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 14px;
  background-color: transparent;
  cursor: pointer;
  transition: 0.085s all ease-in;
  &:hover {
    box-shadow: 0 0 0 10px hsla(0, 0%, 0%, 0.05);
    background-color: hsla(0, 0%, 0%, 0.05);
  }
  &:nth-child(2) {
    grid-area: creative;
  }
  &:nth-child(3) {
    grid-area: marketing;
  }
  &:nth-child(4) {
    grid-area: product;
  }
  &:nth-child(5) {
    grid-area: project;
  }
`;

const CardCover = styled.div`
  display: flex;
  height: 180px;
  margin-bottom: 1rem;
  background-color: #f0efff;
  padding: 1rem;
  border-radius: 14px;
  @media (min-width: 1200px) {
    height: 300px;
  }
`;

const CardText = styled.span`
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-size: 0.8rem;
  font-weight: 500;
  line-height: 1.5;
`;

function Inspiration() {
  return (
    <Wrapper>
      <Grid>
        <TextWrapper>
          <Heading>Inspiration for every team</Heading>
          <Subheading>
            Get started fast with templates built by industry experts.
          </Subheading>
        </TextWrapper>
        {INSPIRATIONS.map(inspiration => (
          <Card key={inspiration.id}>
            <CardCover>{inspiration.cover}</CardCover>
            <CardText>{inspiration.text}</CardText>
          </Card>
        ))}
      </Grid>
    </Wrapper>
  );
}

export default Inspiration;
