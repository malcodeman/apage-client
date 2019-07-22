import React from "react";
import styled from "styled-components";

const StyledList = styled.ul`
  margin: 1rem 0;
  padding-left: 2rem;
`;

const Item = styled.li`
  ::marker {
    font-size: 1rem;
    line-height: 1.6;
  }
  color: ${props => props.theme.secondary};
`;

function List(props) {
  const { children } = props;

  return (
    <StyledList>
      {children.map(item => (
        <Item key={item}>{item}</Item>
      ))}
    </StyledList>
  );
}

export default List;
