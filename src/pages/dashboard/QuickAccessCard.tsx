import React from "react";

const QuickAccessCard = () => {
  const quickAccess = [
    {
      title: "Manage a Card",
      icon: "/src/assets/card1.png",
    },
    {
      title: "Issue Instant Card",
      icon: "/src/assets/card1.png",
    },
    {
      title: "Issue Personalized Card",
      icon: "/src/assets/card1.png",
    },
    {
      title: "Review Card Requests",
      icon: "/src/assets/card1.png",
    },
  ];

  return (
    <div className="px-6 py-4 bg-white rounded-lg shadow-sm">
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
                <img src={item.icon} alt="icon" className="w-8 h-8" />
              </div>
              <h3 className="text-base font-semibold mr-2">{item.title}</h3>
               <img src="/src/assets/right_arrow.png" alt="arrow" className="w-6 h-6" />
            </div>
           
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuickAccessCard;
