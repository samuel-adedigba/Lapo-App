import React from "react";

const UserInfo = () => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 px-4 sm:px-0">
      
      {/* Left Section */}
      <div className="flex flex-col gap-2">
        <h1 className="font-semibold text-lg sm:text-xl">
          Hi Nazeer, what would you like to do today?
        </h1>
        <p className="text-sm sm:text-base">
          <span className="font-medium">Last login:</span> 
          <span className="font-light"> 26/11/2024 14:39:58</span>
        </p>
      </div>

      {/* Calendar Box */}
      <div className="mt-3 sm:mt-0 rounded-lg shadow-sm border flex items-center gap-2 w-full sm:w-auto py-2 px-3">
        <img src="../src/assets/calendar.png" alt="calendar" className="w-5 h-5" />
        <span className="border-r-2 pr-2">Today</span>
        <span>11 Nov 2024</span>
      </div>
    </div>
  );
};

export default UserInfo;
