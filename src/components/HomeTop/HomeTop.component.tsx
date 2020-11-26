import React, { Fragment } from "react";
import { WelcomeColumn, UpdatesContainer } from "..";
import { Container } from "./HomeTop.styles";

const HomeTop: React.FC = () => {
  return (
    <Fragment>
      <Container>
        <WelcomeColumn />
        <UpdatesContainer />
      </Container>
    </Fragment>
  );
};

export default HomeTop;
