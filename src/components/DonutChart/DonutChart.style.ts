import styled from "styled-components";

export const DonutChartContainer = styled.svg`
  margin: 0 auto;
  border-radius: 50%;
  display: block;
`;

export const DonutChartTrack = styled.circle`
  fill: #161616;
  stroke: #161616;
  stroke-width: 26;
`;

export const DonutChartIndicator = styled.circle`
  fill: transparent;
  stroke: #33729c;
  stroke-dasharray: 0 10000;
  transition: stroke-dasharray 0.3s ease;
`;

export const DonutChartText = styled.text`
  fill: #fff;
  font-family: "Montserrat", sans-serif;
  text-anchor: middle;
`;

export const DonutChartTextValue = styled.tspan`
  font-size: 24px;
  font-weight: 700;
`;

export const DonutChartTextLabel = styled.tspan`
  font-size: 9px;
  font-weight: 400;
`;
