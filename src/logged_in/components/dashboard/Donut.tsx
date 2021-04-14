import React, { Component, useState } from "react";
import Chart from "react-apexcharts";

const Donut = () => {
  const [series, setSeries] = useState([100, 55, 41, 17, 15]);
  const [labels, setLabels] = useState([
    "Pending requests",
    "Rejected requests",
    "Approved requests",
    "Quote attached",
    "Quote sent",
  ]);

  const [options, setOptions] = useState({ labels });

  return (
    <div className="donut" style={{ height: 400 }}>
      <Chart options={options} series={series} type="pie" height="400" />
    </div>
  );
};

export default Donut;
