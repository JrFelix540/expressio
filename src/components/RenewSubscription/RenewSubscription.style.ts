import styled from "styled-components";
export const RenewSubscriptionContainer = styled.div`
  background: #1d1d1d;
  border: 1px solid #28292e;
  padding: 20px;
  border-radius: 10px;
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-column-gap: 20px;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Button = styled.button`
  height: 30px;
  width: 160px;
  background: linear-gradient(315deg, #33729c 0%, #4ca6e3 100%), #2d668a;
  border-radius: 3px;
  border: none;
  font-family: "Montserrat", sans-serif;
  font-size: 10px;
  font-weight: 700;
  color: #fff;
  margin-bottom: 10px;
`;
export const TextContent = styled.p`
  font-family: "Montserrat", sans-serif;
  font-size: 9px;
  font-weight: 400;
  color: #979a9c;
  text-align: center;
  max-width: 186px;
  line-height: 10px;
`;
