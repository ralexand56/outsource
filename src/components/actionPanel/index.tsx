import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export function ActionPanel() {
  return (
    <MainContainer>
      <LeftButton to="jobs">Find a Job</LeftButton>
      <RightButton to="/employees">Hire a Crew</RightButton>
    </MainContainer>
  );
}

const MainContainer = styled.section`
  display: flex;
  margin: 1rem;
  grid-area: action;
`;

const Button = styled(Link)`
  color: ${props => props.theme.colors.secondary};
  background-color: ${props => props.theme.colors.main};
  padding: 0.7rem 1rem;
  text-decoration: none;
  box-shadow: ${props => props.theme.dropShadow};
`;

const LeftButton = styled(Button)`
  border-radius: 2rem 0 0 2rem;
`;

const RightButton = styled(Button)`
  border-radius: 0 2rem 2rem 0;
`;

export default ActionPanel;
