import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { baseUrl, navLinks } from "../../utils";
import MenuItem from "./MenuItem";

const TopNav = () => {
  const loc = useLocation();

  return (
    <NavContainer>
      <NavLinkContainer>
        {navLinks.map((m, ind) => {
          const activePath = loc.pathname.replace(`/${baseUrl}`, "");
          const currPath = `${m.to}`;
          const isActive =
            activePath === "" && currPath === ""
              ? true
              : activePath.endsWith(currPath) && currPath !== ""
              ? true
              : false;

          return (
            <MenuItem
              key={m.to}
              {...m}
              isActive={isActive}
              isFirst={ind === 0}
              isLast={ind === navLinks.length - 1}
            />
          );
        })}
      </NavLinkContainer>
    </NavContainer>
  );
};

const NavLinkContainer = styled.ul`
  display: flex;
  align-items: center;
  padding: 0;
  margin: 0;
  border: solid 0px;
`;

const NavContainer = styled.nav`
  display: none;
  grid-area: menu;
  margin: 0.7rem;

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: center;
    justify-self: center;
    grid-area: menu;
    /* background: ${(props) => props.theme.colors.main}; */
    border: solid 0px;
    /* box-shadow: ${(props) => props.theme.dropShadow}; */
  }
`;

export default TopNav;
