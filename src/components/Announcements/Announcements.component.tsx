import React, { Fragment } from "react";
import {
  AnnouncementsContainer,
  LogoContainer,
  AnnouncementsContent,
  Button,
  Link,
  Heading,
  TextContent,
} from "./Announcements.styles";

const Announcements: React.FC = () => {
  return (
    <Fragment>
      <AnnouncementsContainer>
        <LogoContainer>
          <img src="./logo-lg.png" alt="" />
        </LogoContainer>
        <AnnouncementsContent>
          <Heading>Welcome to EndlessIO !</Heading>
          <TextContent>
            We are always trying to provide you the best and most reliabelst
            products on the market. For the cheapest price avalaible. Forever.
          </TextContent>
          <Button>Announcements</Button>
          <TextContent>
            We are always trying to provide you the best
          </TextContent>
          <Link>Read More</Link>
        </AnnouncementsContent>
      </AnnouncementsContainer>
    </Fragment>
  );
};

export default Announcements;
