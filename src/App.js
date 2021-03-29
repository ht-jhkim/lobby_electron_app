import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import "./scss/style.scss";
import Regular from "./assets/fonts/NotoSansKR-Regular.otf";

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);

// Containers
const TheLayout = React.lazy(() => import("./containers/TheLayout"));

function App() {
  const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'NotoSans-Regular';
    src: url(${Regular}) format('truetype');
    font-weight: 300;
    font-style: normal;
    font-display: auto;
  }
  body {
    font-family: 'NotoSans-Regular';
  }
`;
  return (
    <>
      <GlobalStyle />
      <HashRouter>
        <React.Suspense fallback={loading}>
          <Switch>
            <Route path="/" name="Home" render={(props) => <TheLayout {...props} />} />
          </Switch>
        </React.Suspense>
      </HashRouter>
    </>
  );
}

export default App;
