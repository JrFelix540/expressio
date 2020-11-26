import styled from "styled-components";
export const AnnouncementsContainer = styled.div`
  background: #1d1d1d;
  border: 1px solid #28292e;
  padding: 20px;
  border-radius: 10px;
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-column-gap: 20px;
  margin-bottom: 20px;
`;
export const AnnouncementsContent = styled.div`
  max-width: 226px;
  display: flex;
  flex-direction: column;
`;
export const Heading = styled.div`
  font-size: 13px;
  font-weight: 700;
  color: #fff;
  font-family: "Montserrat", sans-serif;
  line-height: 16px;
`;

export const TextContent = styled.p`
  font-family: "Montserrat", sans-serif;
  font-size: 9px;
  font-weight: 400;
  color: #979a9c;
  line-height: 11px;
  margin-top: 10px;
`;

export const Button = styled.button`
  background: linear-gradient(315deg, #33729c 0%, #4ca6e3 100%), #2d668a;
  font-family: "Montserrat", sans-serif;
  font-size: 10px;
  font-weight: 700;
  color: #fff;
  border: none;
  width: 160px;
  height: 29px;
  border-radius: 3px;
  margin-top: 10px;
`;
export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px solid #28292e;
`;

export const Link = styled.div`
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  font-size: 9px;
  color: #469ad3;
`;
