import React, { Fragment } from "react";
import {
  DonutChartContainer,
  DonutChartIndicator,
  DonutChartText,
  DonutChartTextLabel,
  DonutChartTextValue,
  DonutChartTrack,
} from "./DonutChart.style";

interface DonutChartProps {
  value: number;
  valuelabel: string;
  size: number;
  strokewidth: number;
  total: number;
}

const DonutChart: React.FC<DonutChartProps> = ({
  value,
  valuelabel,
  size,
  strokewidth,
  total,
}) => {
  const halfsize = size * 0.5;
  const radius = halfsize - strokewidth * 0.5;
  const circumference = 2 * Math.PI * radius;
  const strokeval = (value * circumference) / total;
  const dashval = strokeval + " " + circumference;

  const trackstyle = { strokeWidth: strokewidth };
  const indicatorstyle = { strokeWidth: strokewidth, strokeDasharray: dashval };
  const rotateval = "rotate(-90 " + halfsize + "," + halfsize + ")";
  return (
    <Fragment>
      <DonutChartContainer width={size} height={size}>
        <DonutChartTrack
          r={radius}
          cx={halfsize}
          cy={halfsize}
          transform={rotateval}
          style={trackstyle}
        />
        <DonutChartIndicator
          r={radius}
          cx={halfsize}
          cy={halfsize}
          transform={rotateval}
          style={indicatorstyle}
        />
        <DonutChartText
          className="donutchart-text"
          x={halfsize}
          y={halfsize}
          style={{ textAnchor: "middle" }}
        >
          <DonutChartTextValue>{value}</DonutChartTextValue>
          <DonutChartTextLabel x={halfsize} y={halfsize + 10}>
            {valuelabel}
          </DonutChartTextLabel>
        </DonutChartText>
      </DonutChartContainer>
    </Fragment>
  );
};

export default DonutChart;
