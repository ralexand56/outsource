import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { baseUrl, navLinks } from "../../utils";

const Nav = () => {
  const loc = useLocation();

  return (
    <NavContainer>
      <NavLinkContainer>
        {navLinks.map(({ title, to, icon }) => {
          const activePath = loc.pathname.replace(`/${baseUrl}`, "");
          const currPath = `${to}`;
          const active =
            activePath === "" && currPath === ""
              ? "active"
              : activePath.endsWith(currPath) && currPath !== ""
              ? "active"
              : "";

          return (
            <StyledLink active={active} key={to} to={`${baseUrl}/${to}`}>
              <IconContainer>
                <FontAwesomeIcon icon={icon} size="lg" />
              </IconContainer>
              <LinkTitle>{title}</LinkTitle>
            </StyledLink>
          );
        })}
      </NavLinkContainer>
    </NavContainer>
  );
};

const IconContainer = styled.section`
  display: flex;
  justify-content: center;
  border: solid 0px;
  min-width: 35px;
`;

const LinkTitle = styled.span`
  margin-left: 0.7rem;
  @media screen and (max-width: 1260px) {
    display: none;
  }
`;

const StyledLink = styled(Link)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 1.1rem 1rem;
  color: ${(prop: { active: string }) =>
    prop.active === "active" ? "#506b63" : "#d8e6cb"} !important;
  background-color: ${(prop: { active: string }) =>
    prop.active === "active" ? "#d8e6cb" : "transparent"} !important;
  font-size: 1.1rem;
  text-decoration: none;
  text-transform: none;
  width: 100%;
  transition: 0.7s all;
`;

const NavLinkContainer = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 0;
  border: solid 0px;
  a:nth-child(odd) {
    background-color: hsl(162, 15%, 30%);
  }
`;

const NavContainer = styled.nav`
  display: none;
  grid-area: nav;

  @media screen and (min-width: 768px) {
    display: flex;
    margin: 1em;
    grid-area: nav;
    background: #506b63;
    border-radius: 1em;
    padding: 2rem 0;
    border: solid 0px;
    box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.02),
      0 6.7px 5.3px rgba(0, 0, 0, 0.028), 0 12.5px 10px rgba(0, 0, 0, 0.035),
      0 22.3px 17.9px rgba(0, 0, 0, 0.042), 0 41.8px 33.4px rgba(0, 0, 0, 0.05),
      0 100px 80px rgba(0, 0, 0, 0.07);
  }
`;

export default Nav;
