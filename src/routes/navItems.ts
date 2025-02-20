import { ElementType } from "react";
import { FaUser, FaWallet, FaChartBar, FaCogs } from "react-icons/fa";

export type NavItemType = {
    key: string;
    name: string;
    path: string;
    icon: ElementType ;
    subMenu?: NavItemType[]; 
};

const navItems: NavItemType[] = [
  {
    key: "SuperAdminDashboard",
    name: "Dashboard",
    path: "/",
    icon: FaChartBar,
  },
  {
    key: "main-maen",
    name: "MAIN MENU",
    path: "/",
    icon: FaWallet ,
  },
  {
    key: "users",
    name: "Branches",
    path: "/",
   icon: FaUser,
  },
  {
    key: "settings",
    name: "Roles",
    path: "/",
   icon: FaCogs,
  },
  {
    key: "settings",
    name: "Users",
    path: "/",
   icon: FaCogs,
  },
  {
    key: "settings",
    name: "Card Scheme",
    path: "/",
   icon: FaCogs,
  },
  {
    key: "settings",
    name: "Card Profile",
    path: "/",
   icon: FaCogs,
  },
  {
    key: "settings",
    name: "Card Request",
    path: "/",
   icon: FaCogs,
  },
  {
    key: "settings",
    name: "Stock",
    path: "/",
   icon: FaCogs,
  },
  {
    key: "settings",
    name: "Cards",
    path: "/",
   icon: FaCogs,
  },
  {
    key: "settings",
    name: "Authorization Queue",
    path: "/",
   icon: FaCogs,
  },
  {
    key: "settings",
    name: "Trail",
    path: "/",
   icon: FaCogs,
  },
  {
    key: "settings",
    name: "Account",
    path: "/",
   icon: FaCogs,
  },
];

export default navItems;
