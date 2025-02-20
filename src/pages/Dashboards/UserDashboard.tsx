import React from "react";
import PieChartDiagram from "../dashboard/PieChartDiagram";
import LineChartDiagram from "../dashboard/LineChartDiagram";
import QuickAccessCard from "../dashboard/QuickAccessCard";
import UserInfo from "../dashboard/UserInfo";
import AnalyticsCard from "../dashboard/AnalyticsCard";
import RecentCardRequests from "../dashboard/RecentCardRequests";
import MonthlyIssuanceChart from "../dashboard/MonthlyIssuanceChart";

const UserDashboard = () => {
  return (
    <>
      <UserInfo />
      <QuickAccessCard />
      <AnalyticsCard />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex gap-8 md:gap-4 my-4 ">
        <MonthlyIssuanceChart />
        <RecentCardRequests />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex gap-8 md:gap-4 mb-5">
        <LineChartDiagram />
        <PieChartDiagram />
      </div>
    </>
  );
};

export default UserDashboard;
