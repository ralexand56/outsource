import React from "react";
import styled from "styled-components";
import { WorkPosition, getFormattedHireText } from "../../utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function PositionView({
  title,
  hireType,
  city,
  isNew,
  state,
  source,
  availability,
}: WorkPosition) {
  return (
    <MainContainer>
      <Row>
        <TitleSection>
          <span>{title}</span>
        </TitleSection>
        <HireSection>
          <span>{getFormattedHireText(hireType)}</span>
          {isNew && <NewBadge>NEW</NewBadge>}
        </HireSection>
      </Row>
      <Row>
        <LocationSection>
          <span>{source}</span>
          <LocationContainer>
            <FontAwesomeIcon icon="map-marker-alt" />
          </LocationContainer>
          <span>{`${city}, ${state}`}</span>
        </LocationSection>
        <DateSection>{availability.toDateString()}</DateSection>
      </Row>
    </MainContainer>
  );
}

const NewBadge = styled.span`
  background-color: #ffb119;
  color: #506b63;
  border-radius: 0.2rem;
  margin-left: 0.5rem;
  padding: 0.1rem 0.2rem;
  font-weight: bold;
`;

const LocationContainer = styled.span`
  margin: 0 0.5rem;
`;

const Row = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0.3rem 0;
  white-space: nowrap;
`;

const TitleSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const HireSection = styled.section`
  display: flex;
  align-items: center;
  white-space: nowrap;
`;

const LocationSection = styled.section`
  display: flex;
`;

const DateSection = styled.section`
  display: flex;
`;

const MainContainer = styled.li`
  list-style: none;
  border: solid 0px;
  padding: 0.5rem 1rem;
  font-size: 0.8rem;
`;

export default PositionView;
