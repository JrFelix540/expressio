import React, { Fragment } from "react";
import { NavBar } from "../../components";
import { MainContent } from "../../components/";
import { HomePageContainer } from "./HomePage.styles";

const HomePage: React.FC = () => {
  return (
    <Fragment>
      <HomePageContainer>
        <NavBar />
        <MainContent />
      </HomePageContainer>
    </Fragment>
  );
};

export default HomePage;
