import React, { Fragment } from "react";
import { DonutChart } from "..";
import {
  Content,
  Button,
  TextContent,
  RenewSubscriptionContainer,
} from "./RenewSubscription.style";

const RenewSubscription: React.FC = () => {
  return (
    <Fragment>
      <RenewSubscriptionContainer>
        <div>
          <DonutChart
            size={133}
            strokewidth={12}
            value={27}
            valuelabel="Days remaining"
            total={30}
          />
        </div>
        <Content>
          <Button>Renew</Button>
          <TextContent>
            You agree to terms of service by purchasing EndlessAIO
          </TextContent>
        </Content>
      </RenewSubscriptionContainer>
    </Fragment>
  );
};

export default RenewSubscription;
