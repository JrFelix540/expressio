import styled from "styled-components";
export const NavbarContainer = styled.div`
  height: 100vh;
  background-color: #1d1d1d;
  border-right: 1px solid #28292e;
  box-shadow: 0px 0px 32px rgba(1, 1, 1, 0.05);
  width: 60px;
`;

export const NavbarLogo = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NavbarList = styled.ul`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 40px;
  flex-direction: column;
`;

export const NavbarItem = styled.li`
  display: flex;
  justify-content: center;
  margin-bottom: 12px;
  padding: 10px 0;
`;

export const LinkContainer = styled.div`
  height: 40px;
  width: 40px;
  background-color: #161616;
  border: 1px solid #28292e;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ActiveLinkContainer = styled.div`
  height: 30px;
  width: 40px;
  background-color: #161616;
  border: 1px solid #28292e;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
`;
export const ActiveBorder = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-left: 2px solid #2d668a;
`;
