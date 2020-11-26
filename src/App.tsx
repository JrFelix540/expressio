import React from "react";
import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";
import HomePage from "./pages/Home/HomePage.component";

const GlobalStyle = createGlobalStyle`
  ${reset}
  
`;

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <HomePage />
    </>
  );
};

export default App;
