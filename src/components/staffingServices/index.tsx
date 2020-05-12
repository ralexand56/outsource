import React from "react";
import styled from "styled-components";
import ServiceView from "./ServiceView";
import { services } from "../../utils";

export function StaffingServices() {
  return (
    <MainContainer>
      <Header>Our Staffing Services</Header>
      <ListContainer>
        {services.map((s) => (
          <ServiceView key={s.id} {...s} />
        ))}
      </ListContainer>
    </MainContainer>
  );
}

const ListContainer = styled.ul`
  padding: 0;
  display: flex;
  justify-content: space-between;
`;

const Header = styled.header`
  display: flex;
  justify-content: center;
  background-color: ${props => props.theme.colors.secondary};
  color: ${props => props.theme.colors.main};
  padding: 0.5rem;
  font-size: 1.2rem;
`;

const MainContainer = styled.main`
  grid-area: services;
  margin: 0 0.5rem 0.8rem 1rem;
  color: ${props => props.theme.colors.secondary};
  background-color: ${props => props.theme.colors.main};
  padding: 1.2rem 0;
  border-radius: 1rem;
  text-decoration: none;
  box-shadow: ${props => props.theme.dropShadow};
`;

export default StaffingServices;
