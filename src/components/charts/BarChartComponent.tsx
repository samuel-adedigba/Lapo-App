import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from "recharts";

interface ChartData {
  month: string;
  personalized: number;
  instant: number;
}

interface MonthlyIssuanceChartProps {
  data: ChartData[];
}

const BarChartComponent: React.FC<MonthlyIssuanceChartProps> = ({ data }) => {
  return (
    <div className="p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Monthly Issuance</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} margin={{ top: 10, right: 20, left: 0, bottom: 20 }}>
          <XAxis dataKey="month" tick={{ fill: "#64748b" }} />
          <YAxis tick={{ fill: "#64748b" }} />
          <Tooltip />
          <Legend />
           <Bar dataKey="personalized" stackId="a" fill="#014DAF" name="Personalized" />
          <Bar dataKey="instant" stackId="a" fill="#CCE2FF" name="Instant"  />         
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarChartComponent;
