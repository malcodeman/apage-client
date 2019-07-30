import React from "react";
import PropTypes from "prop-types";
import { compose } from "redux";
import styled, { withTheme } from "styled-components";
import { withRouter } from "react-router-dom";

import ChevronLeftIcon from "../commonAssets/icons/ChevronLeft";

const Container = styled.div``;

const Button = styled.button`
  display: flex;
  align-items: center;
  cursor: pointer;
  border: 0;
  background-color: transparent;
  padding: 0;
  margin-left: -8px;
`;

const Text = styled.span`
  font-size: 0.8rem;
  color: ${props => props.theme.primary};
`;

function BackButton(props) {
  const { text, theme, history } = props;

  return (
    <Container>
      <Button onClick={() => history.goBack()} type="button">
        <ChevronLeftIcon color={theme.primary} />
        <Text>{text}</Text>
      </Button>
    </Container>
  );
}

BackButton.propTypes = {
  text: PropTypes.string
};

BackButton.defaultProps = {
  text: ""
};

export default compose(
  withTheme,
  withRouter
)(BackButton);
