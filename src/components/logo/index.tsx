import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Logo() {
  return (
    <LogoContainer>
      <LogoArrow1>
        <FontAwesomeIcon icon="angle-left" />
        <FontAwesomeIcon icon="angle-left" />
        <FontAwesomeIcon icon="angle-left" />
      </LogoArrow1>
      <LogoPrefix>out</LogoPrefix>
      <LogoSuffix>source</LogoSuffix>
    </LogoContainer>
  );
}

const LogoContainer = styled.section`
  white-space: nowrap;
  grid-area: logo;
  display: flex;
  align-items: center;
  color: white;
  margin: 0.5rem;
  padding: 0rem 0.7rem;
  font-size: 1.1rem;
  border-radius: 2rem;
  align-self: center;
  justify-self: flex-start;
  opacity: 0;
  animation: in 3s ease-out forwards;
  animation-delay: 1s;
  background-color: ${(props) => props.theme.colors.main};
  box-shadow: ${(props) => props.theme.dropShadow};
`;

const LogoArrow1 = styled.span`
  transform: scale(0.7, 1);
  color: #c1d731;
  letter-spacing: 0rem;
  padding-top: 0.3rem;
  border: solid 0px;
  opacity: 0;
  animation: in 3s ease-out forwards;
  animation-delay: 1s;
`;

const LogoPrefix = styled.span`
  color: ${(props) => props.theme.colors.secondary};
  font-style: italic;
  letter-spacing: 0rem;
  opacity: 0;
  animation: in 3s ease-out forwards;
  animation-delay: 1s;
`;

const LogoSuffix = styled.span`
  color: white;
  font-style: italic;
  opacity: 0;
  animation: in 3s ease-out forwards;
  animation-delay: 1s;
`;

// const logo = `/images/Outsource_Logos-300x57.png`;
