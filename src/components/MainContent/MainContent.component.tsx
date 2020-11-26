import React, { Fragment } from "react";
import { TopMenu, HomeTop } from "..";
import { Container } from "./MainContent.styles";
const MainContent: React.FC = () => {
  return (
    <Fragment>
      <Container>
        <TopMenu />
        <HomeTop />
      </Container>
    </Fragment>
  );
};

export default MainContent;
