import React from "react";
import { Icon, IconName } from "../../assets/Icon";

type IconProp = {
    title?: string
    icon: IconName;
  }
const QuickAccessCard = () => {
  const quickAccess: IconProp[] = [
    {
      title: "Manage a Card",
      icon: "card1",
    },
    {
      title: "Issue Instant Card",
      icon: "card1",
    },
    {
      title: "Issue Personalized Card",
      icon: "card1",
    },
    {
      title: "Review Card Requests",
      icon: "card1",
    },
  ];

  return (
    <div className="px-6 py-4 bg-white rounded-lg shadow-sm mb-4">
      <h2 className="text-lg font-semibold mb-4">Your Quick Access</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex gap-4">
        {quickAccess.map((item, index) => (
          <button
            key={index}
            className="flex items-center justify-between p-3 w-full rounded-lg 
                      bg-blue-50 shadow-sm hover:bg-blue-100 transition-all"
          >
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 flex items-center justify-center rounded-full">
                <Icon name={item?.icon} size={8} />
              </div>
              <h3 className="text-base font-semibold mr-2">{item.title}</h3>
              <Icon name="right-arrow"  />
            </div>
           
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuickAccessCard;
