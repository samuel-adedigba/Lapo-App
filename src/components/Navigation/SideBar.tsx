import React from "react";
import { Link } from "react-router-dom";
import navItems, { NavItemType } from "../../routes/navItems";

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  return (
    <nav
      className={`
        fixed top-0 left-0 h-full w-72 bg-[#FFFFFF] p-4 shadow-md
        transition-transform duration-300 z-40
        ${isOpen ? "translate-x-0" : "-translate-x-64"}
        md:translate-x-0
      `}
    >
      <div className="h-full flex flex-col">
        <img className="mb-6" src="../src/assets/lapo_logo.png" alt="Logo" />
        <ul className="flex-grow overflow-y-auto pb-12 scrollbar-hide">
          {navItems.map((item: NavItemType) => (
            <li key={item.path} className="mb-4">
              <Link
                to={item.path}
                className="flex items-center p-2"
                onClick={toggleSidebar}
              >
                <item.icon className="mr-2" />
                <span>{item.name}</span>
              </Link>
              {item.subMenu && (
                <ul className="ml-4">
                  {item.subMenu.map((sub: NavItemType) => (
                    <li key={sub.path} className="mb-2">
                      <Link
                        to={sub.path}
                        className="flex items-center p-2"
                        onClick={toggleSidebar}
                      >
                        <sub.icon className="mr-2" />
                        <span>{sub.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
        <div className="flex-shrink-0 mb-6">
          <div className="flex items-center gap-4">
            <img
              src="../src/assets/logout-02.png"
              alt="logout icon"
              className="w-7 h-7"
            />
            <button className="text-base">Logout</button>
          </div>
          <div className="mt-6 text-base font-light text-gray-400">
            <h2>POWERED BY</h2>
            <img
              src="../src/assets/cardinfra.png"
              alt="company_logo"
              className="mt-4"
              width={150}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
