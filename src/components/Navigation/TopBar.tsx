import React from "react";
import { Link } from "react-router-dom";

interface TopBarProps {
  isSidebarOpen: boolean;
}

const TopBar: React.FC<TopBarProps> = ({ isSidebarOpen }) => {
  return (
    <header
      className={`fixed z-10 top-2 left-0  ml  md:left-72 w-full md:w-[calc(100%-18rem)]  h-16 text-gray-900 flex items-center justify-between px-6 shadow-md  transition-all`}
    >
      <div  className="text-lg gap-4 flex ml-16 md:ml-0 font-bold">
        <img src="../src/assets/home.png" alt="" width={26} height={10}  />
         <h1 className="text-lg  ml-16 md:ml-0 font-bold">Dashboard</h1>
      </div>
     
      <div className="flex items-center gap-2">
        <div className="relative hidden md:block">
          <input
            type="text"
            placeholder="Search"
            className="text-black rounded-full px-4 py-2 pl-10 border border-gray-300 shadow-sm focus:outline-none focus:ring-1 focus:ring-black"
          />
          <img src="../src/assets/search.png"  width={18}  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>

        <button className="relative p-2 rounded-full hover:bg-gray-300">
          <img src="../src/assets/bell.png" width={50} />
          <span className="absolute top-4 right-5 bg-red-500 w-3 h-3 rounded-full">  </span>
        </button>

        <Link to="/profile">
          <div className="w-10 h-10 rounded-full bg-gray-600 flex items-center justify-center">
            <img className="text-sm font-semibold text-white" src="../src/assets/profile.png" />
          </div>
        </Link>
      </div>
    </header>
  );
};

export default TopBar;
