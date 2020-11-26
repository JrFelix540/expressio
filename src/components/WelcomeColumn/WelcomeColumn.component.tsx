import React, { Fragment } from "react";
import { Announcements, RenewSubscription } from "..";

const WelcomeColumn: React.FC = () => {
  return (
    <Fragment>
      <div>
        <Announcements />
        <RenewSubscription />
      </div>
    </Fragment>
  );
};

export default WelcomeColumn;
