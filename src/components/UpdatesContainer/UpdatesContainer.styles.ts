import styled from "styled-components";

export const Container = styled.div`
  background: #1d1d1d;
  border: 1px solid #28292e;
  padding: 20px;
  border-radius: 10px;
`;

export const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #28292e;
  padding-bottom: 10px;
  margin-bottom: 10px;
`;

export const Heading = styled.p`
  font-family: "Montserrat", sans-serif;
  font-size: 13px;
  font-weight: 700;
  color: #fff;
  margin-bottom: 5px;
`;

export const TextContent = styled.p`
  font-family: "Montserrat", sans-serif;
  font-size: 9px;
  font-weight: 400;
  color: #979a9c;
`;

export const UpdateButtons = styled.div`
  display: flex;
  align-items: center;
`;

export const ButtonContainer = styled.div``;

export const MarginRight = styled.div`
  margin-right: 8px;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20px;
`;

export const Changelogs = styled.div`
  background: #161616;
  border: 1px solid #28292e;
  border-radius: 5px;
  padding: 10px;
`;
export const Flex = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #28292e;
  padding-bottom: 10px;
  margin-bottom: 10px;
`;
export const ChangelogsTitle = styled.p`
  font-family: "Montserrat", sans-serif;
  font-size: 9px;
  line-height: 11px;
  font-weight: 700;
  color: #ffffff;
  margin-right: 5px;
`;

export const ChangesIndicator = styled.div`
  height: 5px;
  width: 5px;
  border-radius: 50%;
  background-color: #3f8abd; ;
`;

export const ChangeLog = styled.div`
  background: #1d1d1d;
  border: 1px solid #28292e;
  border-radius: 5px;
  width: 100%;
  height: 25px;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  &:last-child {
    margin-bottom: 0;
  }
`;

export const LogText = styled.p`
  font-family: "Montserrat", sans-serif;
  color: #979a9c;
  font-size: 9px;
  font-weight: 700;
`;

export const MaxHeight = styled.div`
  height: 100%;
  width: 100%;
`;

export const SmallContainer = styled.div`
  background: #161616;
  border: 1px solid #28292e;
  border-radius: 5px;
  padding: 10px;
`;

export const IndicatorGreen = styled.div`
  height: 5px;
  width: 5px;
  border-radius: 50%;
  background-color: #00ff0b;
`;

export const StatusContainer = styled.div`
  height: 25px;
  background: #1d1d1d;
  border: 1px solid #28292e;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  margin-bottom: 10px;
  &:last-child {
    margin-bottom: 0;
  }
`;

export const Separator = styled.div`
  background: #28292e;
  height: 1px;
  margin: 14px 0;
`;
