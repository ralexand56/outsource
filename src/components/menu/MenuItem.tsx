import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LinkType } from "../../utils";

interface MenuProps {
  isFirst: boolean;
  isLast: boolean;
  isActive: boolean;
}

export default function MenuItem(props: LinkType & MenuProps) {
  const { to, title, icon, childLinks, isFirst, isLast } = props;

  return (
    <LinkContainer key={to}>
      <StyledLink
        style={{ borderRadius: getBorderRadius(isFirst, isLast) }}
        activeStyle={{ opacity: 0.7 }}
        to={`/${to}`}
      >
        <IconContainer>
          <FontAwesomeIcon icon={icon} size="lg" />
        </IconContainer>
        <LinkTitle>{title}</LinkTitle>
      </StyledLink>
      {childLinks && (
        <VerticalMenuContainer>
          {renderChildMenuItems(childLinks)}
        </VerticalMenuContainer>
      )}
    </LinkContainer>
  );
}

const getBorderRadius = (isFirst: boolean, isLast: boolean) => {
  return isFirst
    ? "0.4rem 0rem 0rem 0.4rem"
    : isLast
    ? "0rem 0.4rem 0.4rem 0rem"
    : "0";
};

const renderChildMenuItems = (childLinks: LinkType[]) =>
  childLinks.map((c) => (
    <TertiaryContainer key={c.to}>
      <StyledLink to={c.to} activeStyle={{ opacity: 0.9 }}>
        <IconContainer>
          <FontAwesomeIcon icon={c.icon} size="lg" />
        </IconContainer>
        <LinkTitle>{c.title}</LinkTitle>
      </StyledLink>
      {c.childLinks && (
        <TertieryMenuContainer
          style={{
            top: 0,
            left: "100%",
          }}
        >
          {c.childLinks.map((g) => (
            <StyledLink to={g.to} key={g.to} activeStyle={{ opacity: 0.7 }}>
              <IconContainer>
                <FontAwesomeIcon icon={g.icon} size="lg" />
              </IconContainer>
              <LinkTitle>{g.title}</LinkTitle>
            </StyledLink>
          ))}
        </TertieryMenuContainer>
      )}
    </TertiaryContainer>
  ));

const StyledLink = styled(NavLink)`
  position: relative;
  display: flex;
  width: 100%;
  align-items: center;
  white-space: nowrap;
  padding: 0.5rem;
  border: solid 0px;
  box-shadow: ${(props) => props.theme.dropShadow};
  color: ${(props) => props.theme.colors.secondary};
  background-color: ${(props) => props.theme.colors.main};
  font-size: 0.8rem;
  text-decoration: none;
  text-transform: none;
  transition: 0.5s all;

  :hover {
    background-color: ${(props) => props.theme.colors.secondary};
    color: ${(props) => props.theme.colors.main};
  }
`;

const LinkContainer = styled.section`
  position: relative;
  border: solid 0px;
  justify-content: stretch;
  :hover article {
    display: block;
  }
`;

const TertiaryContainer = styled.section`
  position: relative;
  border: solid 0px;
  justify-content: stretch;
  :hover aside {
    display: block;
  }
`;

const VerticalMenuContainer = styled.article`
  position: absolute;
  display: none;
  z-index: 1;
`;

const TertieryMenuContainer = styled.aside`
  position: absolute;
  display: none;
  z-index: 1;
`;

const IconContainer = styled.section`
  display: flex;
  justify-content: center;
  border: solid 0px;
  margin: 0 0.5rem;
  min-width: 33px;
`;

const LinkTitle = styled.span`
  margin-left: 0rem;
`;
