import React from "react";
import { themes } from "../../utils";
import styled, { DefaultTheme } from "styled-components";

interface Props {
  handleThemeSwitching: (theme: DefaultTheme) => void;
}

export default function ThemeSelector({ handleThemeSwitching }: Props) {
  return (
    <Container>
      <span>Themes | </span>
      <Selector
        onChange={(evt) => {
          const fndTheme = themes.find((x) => x.name === evt.target.value);

          fndTheme && handleThemeSwitching(fndTheme);
        }}
      >
        {themes.map((t) => (
          <option key={t.name} value={t.name}>
            {t.name}
          </option>
        ))}
      </Selector>
    </Container>
  );
}

const Selector = styled.select``;

const Container = styled.section`
  grid-area: theme;
  justify-self: flex-end;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0.3rem;
  padding: 0.3rem 0.7rem;
  border-radius: 2rem;
  color: ${(props) => props.theme.colors.secondary};
  background-color: ${(props) => props.theme.colors.main};
`;
