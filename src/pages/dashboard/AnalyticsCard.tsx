import React from "react";
import CardList from "../../components/re-useable/CardList";

const AnalyticsCard = () => {
  const analyticsData = [
    {
      key: "active",
      title: "Total Active Cards",
      value: "26,478",
      icon: "../src/assets/icon1.png",
      status: "this month",
      rate: "+9%",
    },
    {
      key: "personalized",
      title: "Total Personalized Cards",
      value: "15,703",
      icon: "../src/assets/card2.png",
      status: "this month",
      rate: "+8.5%",
    },
    {
      key: "revenue",
      title: "Today's Revenue",
      value: "₦9.3M",
      icon: "../src/assets/card3.png",
      status: "vs yesterday",
      rate: "+6%",
    },
    {
      key: "pending",
      title: "Pending Requests",
      value: "38",
      icon: "../src/assets/hourglass.png",
      status: "Requires attention",
    },
  ];

  return (
    <div>
      <CardList
        title="Analytics"
        items={analyticsData}
        containerClass="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-2"
        itemClass="p-4  bg-[#FFFFFF] hover:bg-gray-50 shadow-lg rounded-lg "
        textClass="flex items-center gap-2 text-gray-600 mb-4  font-semibold grid "
      />
    </div>
  );
};

export default AnalyticsCard;
