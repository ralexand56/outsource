import React from "react";
import styled from "styled-components";
import { Person, getFormattedDuration } from "../../utils";

export function PersonView({
  id,
  name,
  title,
  months,
  description,
  src,
}: Person) {
  return (
    <HorizontalContainer key={id}>
      <LeftSection>
        <TopLeftSection>
          <Name>{name}</Name>
          <Title>{title}</Title>
          <Duration>{getFormattedDuration(months)}</Duration>
        </TopLeftSection>
        <Separator />
        <Description>{description}</Description>
      </LeftSection>
      <HorizontalImage style={{ backgroundImage: `url(${src})` }} />
    </HorizontalContainer>
  );
}

const HorizontalContainer = styled.section`
  display: flex;
  color: ${props => props.theme.colors.main};
  width: 640px;
  height: 350px;
  font-size: 1.5rem;
  border-radius: 1rem;
  border: solid 0px;
  overflow: hidden;
  background-color: ${props => props.theme.colors.secondary};
`;

const LeftSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 600px;
  border: solid 0px;
  overflow: hidden;
  padding: 1rem;
`;

const TopLeftSection = styled.section`
  display: flex;
  flex-direction: column;
  border: solid 0px;
`;

const Name = styled.section`
  font-size: 1.4rem;
`;

const Separator = styled.section`
  width: 100%;
  height: 1px;
  background: ${props => props.theme.colors.main};
`;

const Title = styled.section`
  font-weight: bold;
`;

const Duration = styled.section`
  font-size: 1.3rem;
`;

const Description = styled.section`
  font-size: 1.2rem;
`;

const HorizontalImage = styled.section`
  height: 100%;
  width: 100%;
  border: solid 0px;
  background-size: cover;
`;

export default PersonView;
