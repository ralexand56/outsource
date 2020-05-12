import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { positions } from "../../utils";
import PositionView from "./positionView";

export function PositionList() {
  return (
    <MainContainer>
      <Header>
        <span>Open Positions</span>
        <StyledLink to="jobs">view all jobs</StyledLink>
      </Header>
      <ListContainer>
        {positions.map((p) => (
          <PositionView {...p} key={p.id} />
        ))}
      </ListContainer>
    </MainContainer>
  );
}

const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 0.8rem;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  background-color: ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.main};
  padding: 0.5rem;
  font-size: 1.2rem;
`;

const ListContainer = styled.ul`
  padding: 0;
  li:nth-child(odd) {
    background-color: ${(props) => props.theme.colors.alternate};
  }
`;

const MainContainer = styled.main`
  grid-area: positions;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: flex-start;
  justify-self: center;
  color: ${(props) => props.theme.colors.secondary};
  background-color: ${(props) => props.theme.colors.main};
  padding: 1.2rem 0;
  border-radius: 1rem;
  text-decoration: none;
  box-shadow: ${(props) => props.theme.dropShadow};
  width: 375px;
`;

export default PositionList;
