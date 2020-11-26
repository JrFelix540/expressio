import React, { Fragment, useState } from "react";
import {
  Container,
  FlexContainer,
  Heading,
  TextContent,
  UpdateButtons,
  MarginRight,
  GridContainer,
  Changelogs,
  Flex,
  ChangelogsTitle,
  ChangesIndicator,
  ChangeLog,
  LogText,
  MaxHeight,
  SmallContainer,
  IndicatorGreen,
  StatusContainer,
  Separator,
} from "./UpdatesContainer.styles";

const UpdatesContainer: React.FC = () => {
  const [logTitles, setLogTitles] = useState<string[]>([
    `Added Request Mode`,
    `Added Cookie Harvester`,
    `Added Request Mode`,
    `Added Request Mode`,
    `Added Request Mode`,
    `Added Request Mode`,
  ]);
  return (
    <Fragment>
      <Container>
        <FlexContainer>
          <div>
            <Heading>Updates</Heading>
            <TextContent>
              We are always trying to provide you the <br /> best
            </TextContent>
          </div>
          <UpdateButtons>
            <MarginRight>
              <img src="./download.png" alt="" />
            </MarginRight>
            <div>
              <img src="./refresh.png" alt="" />
            </div>
          </UpdateButtons>
        </FlexContainer>
        <GridContainer>
          <Changelogs>
            <Flex>
              <ChangelogsTitle>Changelogs</ChangelogsTitle>
              <ChangesIndicator></ChangesIndicator>
            </Flex>
            <div>
              {logTitles.map((logTitle, index) => (
                <ChangeLog key={index}>
                  <LogText>- {logTitle}</LogText>
                </ChangeLog>
              ))}
            </div>
          </Changelogs>
          <MaxHeight>
            <SmallContainer>
              <Flex>
                <ChangelogsTitle>Current Status</ChangelogsTitle>
                <IndicatorGreen />
              </Flex>
              <StatusContainer>
                <LogText>No Updates Available</LogText>
                <img src="./greencheck.png" alt="" />
              </StatusContainer>
              <StatusContainer>
                <LogText>Latest Version Installed</LogText>
                <img src="./greencheck.png" alt="" />
              </StatusContainer>
            </SmallContainer>
            <Separator />
            <SmallContainer>
              <Flex>
                <ChangelogsTitle>Next Features Planned</ChangelogsTitle>
                <IndicatorGreen />
              </Flex>
              <StatusContainer>
                <LogText>Mobile App</LogText>
                <img src="./bluecheck.png" alt="" />
              </StatusContainer>
              <StatusContainer>
                <LogText>Shopify Support</LogText>
                <img src="./bluecheck.png" alt="" />
              </StatusContainer>
            </SmallContainer>
          </MaxHeight>
        </GridContainer>
      </Container>
    </Fragment>
  );
};

export default UpdatesContainer;
