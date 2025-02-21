/* eslint-disable @typescript-eslint/no-explicit-any */
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
const CustomLegend = (props: any) => {
    const { payload } = props;
    return (
      <div className="flex justify-center gap-4 mt-4">
        {payload.map((entry: any, index: number) => (
          <div key={`legend-${index}`} className="flex items-center gap-2">
            <span 
              className="w-4 h-4 rounded-full block" 
              style={{ backgroundColor: entry.color }} 
            />
            <p className="text-gray-600 text-sm">{entry.value}</p>
          </div>
        ))}
      </div>
    );
  };
  
const BarChartComponent: React.FC<MonthlyIssuanceChartProps> = ({ data }) => {
  return (
    <div className="p-4 sm:p-6 bg-white shadow-md rounded-lg w-full max-w-3xl mx-auto">
      <h2 className="text-lg sm:text-xl font-semibold text-center mb-4 text-gray-800">Monthly Issuance</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} margin={{ top: 10, right: 20, left: 0, bottom: 20 }}>
        <XAxis 
            dataKey="month" 
            tick={{ fill: "#64748b" }} 
            axisLine={{ stroke: "#E5E7EB" }} 
            tickLine={false} 
          />
          <YAxis 
            tick={{ fill: "#64748b" }} 
            domain={[0, 100]} 
            tickCount={6} 
            axisLine={false} 
            tickLine={false} 
          />
           <Tooltip contentStyle={{ backgroundColor: "#ffffff", borderRadius: "8px" }} />
           <Legend content={<CustomLegend />} />
           <Bar dataKey="personalized" stackId="a" fill="#014DAF" name="Personalized" radius={[4, 4, 0, 0]} />
          <Bar dataKey="instant" stackId="a" fill="#CCE2FF" name="Instant" radius={[4, 4, 0, 0]} />      
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarChartComponent;
