import React from "react";
import styled from "styled-components";
import { WorkService } from "../../utils";

export function ServiceView({ name, src }: WorkService) {
  return (
    <MainContainer style={{ backgroundImage: `url(${src})` }}>
      <Title>{name}</Title>
    </MainContainer>
  );
}

const Title = styled.header`
  background-color: rgba(255, 255, 255, 0.7);
  margin-bottom: 0.8rem;
  text-align: center;
  font-weight: bold;
`;

const MainContainer = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin: 0.3rem;
  color: #506b63;
  width: 100px;
  height: 100px;
  border-radius: 0.5rem;
  background-color: #d8e6cb;
  background-size: cover;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.02),
    0 6.7px 5.3px rgba(0, 0, 0, 0.028), 0 12.5px 10px rgba(0, 0, 0, 0.035),
    0 22.3px 17.9px rgba(0, 0, 0, 0.042), 0 41.8px 33.4px rgba(0, 0, 0, 0.05),
    0 100px 80px rgba(0, 0, 0, 0.07);
`;

export default ServiceView;
