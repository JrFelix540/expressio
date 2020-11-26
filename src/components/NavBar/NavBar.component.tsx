import React, { Fragment } from "react";
import {
  NavbarContainer,
  NavbarLogo,
  NavbarList,
  NavbarItem,
  LinkContainer,
  ActiveBorder,
  ActiveLinkContainer,
} from "./NavBar.styles";

const NavBar: React.FC = () => {
  return (
    <Fragment>
      <NavbarContainer>
        <NavbarLogo>
          <img src="./logo.png" alt="" />
        </NavbarLogo>
        <NavbarList>
          <div>
            <NavbarItem>
              <ActiveLinkContainer>
                <ActiveBorder>
                  <img src="./home-icon.png" alt="" />
                </ActiveBorder>
              </ActiveLinkContainer>
            </NavbarItem>
          </div>
          <div>
            <NavbarItem>
              <LinkContainer>
                <img src="./hamburger.png" alt="" />
              </LinkContainer>
            </NavbarItem>
          </div>
          <div>
            <NavbarItem>
              <LinkContainer>
                <img src="./profile.png" alt="" />
              </LinkContainer>
            </NavbarItem>
          </div>
          <div>
            <NavbarItem>
              <LinkContainer>
                <img src="./dashboard.png" alt="" />
              </LinkContainer>
            </NavbarItem>
          </div>
          <div>
            <NavbarItem>
              <LinkContainer>
                <img src="./chart-icon.png" alt="" />
              </LinkContainer>
            </NavbarItem>
          </div>
        </NavbarList>
      </NavbarContainer>
    </Fragment>
  );
};

export default NavBar;
