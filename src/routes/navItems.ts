import { IconName } from "../assets/Icon"

export type NavItemType = {
    key: string;
    name: string;
    path: string;
    icon: IconName ;
    subMenu?: NavItemType[]; 
};

const navItems: NavItemType[] = [
  {
    key: "dashboard",
    name: "Dashboard",
    path: "/",
    icon: "home", 
  },
  {
    key: "main-menu",
    name: "MAIN MENU",
    path: "/",
    icon: "menu", 
  },
  {
    key: "branches",
    name: "Branches",
    path: "/branches",
    icon: "building",
  },
  {
    key: "roles",
    name: "Roles",
    path: "/roles",
    icon: "roles",
  },
  {
    key: "users",
    name: "Users",
    path: "/users",
    icon: "users",
  },
  {
    key: "card-scheme",
    name: "Card Scheme",
    path: "/card-scheme",
    icon: "card-scheme",
  },
  {
    key: "card-profile",
    name: "Card Profile",
    path: "/card-profile",
    icon: "card-profile",
  },
  {
    key: "card-request",
    name: "Card Request",
    path: "/card-request",
    icon: "card-request",
  },
  {
    key: "stocks",
    name: "Stock",
    path: "/stocks",
    icon: "stocks",
  },
  {
    key: "cards",
    name: "Cards",
    path: "/cards",
    icon: "credit-card",
  },
  {
    key: "auth-queue",
    name: "Authorization Queue",
    path: "/auth-queue",
    icon: "auth-list",
  },
  {
    key: "trail",
    name: "Trail",
    path: "/trail",
    icon: "trail",
  },
  {
    key: "account",
    name: "Account",
    path: "/account",
    icon: "user",
  },
];

export default navItems;