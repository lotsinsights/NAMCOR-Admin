import ReactApexChart from "react-apexcharts";

import React, { useState } from "react";
import { ApexOptions } from "apexcharts";

const AreaChart = () => {
  const [series, setSeries] = useState([
    {
      name: "series1",
      data: [31, 40, 28, 51, 42, 109, 100],
    },
    {
      name: "series2",
      data: [11, 32, 45, 32, 34, 52, 41],
    },
  ]);
  const [options, setOptions] = useState<ApexOptions>({
    chart: {
      height: 400,
      type: "area",
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      type: "datetime",
      categories: [
        "2018-09-19T00:00:00.000Z",
        "2018-09-19T01:30:00.000Z",
        "2018-09-19T02:30:00.000Z",
        "2018-09-19T03:30:00.000Z",
        "2018-09-19T04:30:00.000Z",
        "2018-09-19T05:30:00.000Z",
        "2018-09-19T06:30:00.000Z",
      ],
    },
    tooltip: {
      x: {
        format: "dd/MM/yy HH:mm",
      },
    },
  });

  return (
    <div id="chart" style={{ height: 400 }}>
      <ReactApexChart
        options={options}
        series={series}
        type="area"
        height={400}
      />
    </div>
  );
};

export default AreaChart;
