import React from "react";
import { Link } from "react-router-dom";
import navItems, { NavItemType } from "../../routes/navItems";
import { Icon } from "../../assets/Icon";

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  return (
    <nav
      className={`
        fixed top-0 left-0 h-full w-64 bg-[#FFFFFF] p-4 shadow-md
        transition-transform duration-300 z-40
        ${isOpen ? "translate-x-0" : "-translate-x-64"}
        md:translate-x-0
      `}
    >
      <div className="h-full flex flex-col">
        <Icon name="lapo-logo" className="mb-4" size={24} />
        <ul className="flex-grow overflow-y-auto pb-12 scrollbar-hide">
          {navItems.map((item: NavItemType) => (
            <li key={item.path} className="mb-4">
              <Link
                to={item.path}
                className="flex items-center p-2"
                onClick={toggleSidebar}
              >
                <Icon name={item.icon} className="mr-3" size={6} />
                <span>
                  {" "}
                  {item.key === "main-menu" ? (
                    <small className="ml-4 text-sm "> {item.name} </small>
                  ) : (
                    <span> {item.name} </span>
                  )}
                </span>
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
                        <Icon name={sub.icon} className="mr-3" size={24} />
                        <span>{sub.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
        <div className="flex-shrink-0 py-6 z-10">
          <div className="flex items-center gap-4">
            <Icon name="logout" className="p-2" />
            <button className="text-base ">Logout</button>
          </div>
          <div className="mt-6 text-base font-light text-gray-400">
            <h2>POWERED BY</h2>
            <Icon name="cardinfra" className="mt-4" size={16} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
