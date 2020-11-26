import React, { Fragment } from "react";
import {
  ButtonContainer,
  Heading,
  SmallMargin,
  TopMenuButtons,
  TopMenuContainer,
} from "./TopMenu.styles";

const TopMenu: React.FC = () => {
  return (
    <Fragment>
      <TopMenuContainer>
        <Heading>General Overview</Heading>
        <TopMenuButtons>
          <SmallMargin>
            <ButtonContainer>
              <img src="minimize.png" alt="" />
            </ButtonContainer>
          </SmallMargin>
          <div>
            <ButtonContainer>
              <img src="close.png" alt="" />
            </ButtonContainer>
          </div>
        </TopMenuButtons>
      </TopMenuContainer>
    </Fragment>
  );
};

export default TopMenu;
