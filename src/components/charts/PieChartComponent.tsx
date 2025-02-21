import React from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";

interface PieChartProps {
  data?: { name: string; value: number; color: string }[];
  title?: string;
}

const PieChartComponent: React.FC<PieChartProps> = ({ data, title }) => {
  const total = data?.reduce((sum, item) => sum + item?.value, 0);

  return (
    <div className="relative flex flex-col items-center p-4 sm:p-6 rounded-xl w-full max-w-lg mx-auto">
           <h2 className="text-lg sm:text-2xl font-semibold text-center mb-4">{title}</h2>
           <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md flex items-center justify-center">
        <PieChart width={300} height={300}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={85}
            outerRadius={100}
            dataKey="value"
            paddingAngle={5}
            cornerRadius={8} 
            stroke="#fff"
            strokeWidth={2}
            isAnimationActive={true}
            animationDuration={800}
            animationEasing="ease-out"
          >
            {data?.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
        <div className="absolute text-center">
        <p className="text-gray-500 text-xs sm:text-sm">Total Cards</p>
        <p className="text-xl sm:text-3xl font-medium">{total?.toLocaleString()}</p>
        </div>
      </div>
      <div className="mt-6 flex flex-wrap justify-center gap-4">
        {data?.map((entry, index) => (
          <div key={index} className="flex items-center gap-2">
            <div
              className="w-3 h-3 sm:w-4 sm:h-4 rounded-full"
              style={{ backgroundColor: entry.color }}
            ></div>
            <p className="text-gray-600 text-base ">{entry.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PieChartComponent;
