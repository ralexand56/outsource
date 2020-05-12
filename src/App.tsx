import React from "react";
import { Routes, Route } from "react-router-dom";
import { baseUrl, people } from "./utils";
import styled, { DefaultTheme } from "styled-components";
import Slider from "./components/slider";
import "./App.css";
import PersonView from "./components/personView";
import ActionPanel from "./components/actionPanel";
import PositionList from "./components/positionList";
import StaffingServices from "./components/staffingServices";
import TopNav from "./components/menu";
import Footer from "./components/footer";
import Logo from "./components/logo";
import ThemeSelector from "./components/themeSelector";

interface Props {
  handleThemeSwitching: (theme: DefaultTheme) => void;
  theme?: DefaultTheme;
}

const App = ({ handleThemeSwitching }: Props) => {
  return (
    <AppContainer>
      <Logo />
      <TopNav />
      <ThemeSelector handleThemeSwitching={handleThemeSwitching} />
      <Main>
        <Routes>
          <Route path={`${baseUrl}`} element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Main>
      <Footer />
    </AppContainer>
  );
};

export default App;

const Home = () => (
  <>
    <MainBody>
      <Slider>
        {people.map((p) => (
          <PersonView key={p.id} {...p} />
        ))}
      </Slider>
      <ActionPanel />
      <StaffingServices />
    </MainBody>
    <PositionList />
  </>
);

const NotFound = () => (
  <NotFoundContainer>
    <h2>Coming Soon</h2>
  </NotFoundContainer>
);

const NotFoundContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.main};
  border-radius: 2rem;
  padding: 1rem;
`;

const MainBody = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const AppContainer = styled.main`
  display: grid;
  height: 100%;
  flex-direction: column;
  align-items: center;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto 1fr auto;
  grid-template-areas:
    "logo"
    "theme"
    "main"
    "footer";
  grid-gap: 0.1rem;
  color: ${(props) => props.theme.colors.secondary};

  @media screen and (min-width: 768px) {
    display: grid;
    justify-content: center;
    align-items: center;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto 1fr auto;
    grid-template-areas:
      "logo theme"
      "menu menu"
      "main main"
      "footer footer";
    grid-gap: 0.1rem;
    margin: 0;
    padding: 0;
    background: none;
    overflow: hidden;
  }
`;

const Main = styled.main`
  grid-area: main;

  @media screen and (min-width: 768px) {
    display: flex;
    align-self: flex-start;
    justify-content: center;
    align-items: flex-start;
  }
`;
