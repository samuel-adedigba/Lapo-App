import React from "react";
import BarChartComponent from "../../components/charts/BarChartComponent";


const issuanceData = [
  { month: "May", personalized: 10, instant: 35 },
  { month: "Jun", personalized: 20, instant: 45 },
  { month: "Jul", personalized: 8, instant: 20 },
  { month: "Aug", personalized: 9, instant: 50 },
  { month: "Sep", personalized: 11, instant: 40 },
  { month: "Oct", personalized: 15, instant: 65 },
  { month: "Nov", personalized: 10, instant: 55 },
];

const MonthlyIssuanceChart = () => {
  return (
    <div className=' w-full' >
      <BarChartComponent data={issuanceData} />
    </div>
  );
};

export default MonthlyIssuanceChart;
