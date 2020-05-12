import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router } from "react-router-dom";
import "./slick-carousel/slick/slick.css";
import "./slick-carousel/slick/slick-theme.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faAddressBook,
  faAngleLeft,
  faArrowRight,
  faChalkboardTeacher,
  faCircle,
  faDolly,
  faHome,
  faIdCard,
  faInfo,
  faPlus,
  faCheck,
  faCheckCircle,
  faClock,
  faMap,
  faMapMarkerAlt,
  faTimesCircle,
  faQuestionCircle,
  faRetweet,
  faSquare,
} from "@fortawesome/free-solid-svg-icons";
import { ThemeProvider, DefaultTheme } from "styled-components";
import { themes } from "./utils";

library.add(
  faAddressBook,
  faAngleLeft,
  faArrowRight,
  faCircle,
  faChalkboardTeacher,
  faClock,
  faDolly,
  faHome,
  faIdCard,
  faInfo,
  faPlus,
  faCheck,
  faCheckCircle,
  faClock,
  faMap,
  faMapMarkerAlt,
  faTimesCircle,
  faQuestionCircle,
  faRetweet,
  faSquare
);

const AppContainer = () => {
  const [theme, setTheme] = React.useState(themes[0]);

  const handleThemeSwitching = (selectedTheme: DefaultTheme) => setTheme(selectedTheme);

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <App handleThemeSwitching={handleThemeSwitching} />
      </ThemeProvider>
    </Router>
  );
};

ReactDOM.render(<AppContainer />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
