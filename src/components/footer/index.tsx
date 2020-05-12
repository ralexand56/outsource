import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import moment from "moment";

export default function Footer() {
  return (
    <MainContainer>
      {`Copyright ${moment().format("YYYY")} Outsource | All Rights Reserved`} |{" "}
      <Link to="/terms">Terms</Link>
    </MainContainer>
  );
}

const MainContainer = styled.section`
  grid-area: footer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  color: ${(props) => props.theme.colors.secondary};
  background-color: ${(props) => props.theme.colors.main};
  width: 100%;
  padding: 0.5rem;
  :visited {
      color: white;
  }
`;
