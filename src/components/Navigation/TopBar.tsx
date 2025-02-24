/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "../../assets/Icon";

interface TopBarProps {
  isSidebarOpen: boolean;
}

const TopBar: React.FC<TopBarProps> = ({ isSidebarOpen }) => {
  return (
    <header
      className={`fixed z-30 top-2 left-0 bg-white  md:left-64 w-full md:w-[calc(100%-16rem)]  h-16 text-gray-900 flex items-center justify-between px-6 shadow-md  transition-all`}
    >
      <div  className="text-lg gap-4 flex ml-16 md:ml-0 font-bold">
          <Icon name="home" className="ml-0" size={10} />
         <h1 className="text-xl  -ml-0 md:ml-0 font-bold mt-2">Dashboard</h1>
      </div>
     
      <div className="flex items-center gap-2">
        <div className="relative hidden md:block">
          <input
            type="text"
            placeholder="Search"
            className="text-black rounded-full px-4 py-2 pl-10 border border-gray-300 shadow-sm focus:outline-none focus:ring-1 focus:ring-black"
          />
            <Icon name="search" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"  />
        </div>

        <button className="relative rounded-full hover:bg-gray-300">
          <Icon name="notification-bell" size={10} />
        </button>

        <Link to="/profile">
          <div className="w-10 h-10 rounded-full bg-gray-600 flex items-center justify-center">
            <Icon name="profile" className="text-sm font-semibold text-white" size={10} />
          </div>
        </Link>
      </div>
    </header>
  );
};

export default TopBar;
