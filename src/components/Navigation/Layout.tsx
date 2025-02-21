import React, { useState } from "react";
import MobileToggle from "./MobileToggle";
import Sidebar from "./SideBar";
import Overlay from "./OverLay";
import TopBar from "./TopBar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={closeSidebar} />
      <MobileToggle isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div
        className={`flex flex-col flex-grow transition-all duration-300 ${
          isSidebarOpen ? "ml-56" : "ml-0 md:ml-56"
        }`}
      >
        <TopBar isSidebarOpen={isSidebarOpen} />
        <main
          className="p-2 sm:p-4 md:p-8 mt-14 mx-2 sm:mx-4 w-full min-h- overflow-y-auto scrollbar-hide bg-[#F1F7FF]"
        >
          {children}
        </main>
      </div>
      <Overlay isOpen={isSidebarOpen} closeSidebar={closeSidebar} />
    </div>
  );
};

export default Layout;
