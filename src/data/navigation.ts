import type { MenuItem, NavigationItem } from "../contexts/NavigationContext";

export const menuItems: MenuItem[] = [
  { id: "burger", label: "Menu", icon: "/src/assets/icons/menu-burger.svg" },
  { id: "home", label: "Home", icon: "/src/assets/icons/menu-home.svg" },
  {
    id: "search",
    label: "Search",
    icon: "/src/assets/icons/menu-search.svg",
  },
  { id: "appInfo", label: "Info", icon: "/src/assets/icons/menu-info.svg" },
];

export const navigationItems: NavigationItem[] = [
  { id: "home", label: "Home", icon: "/src/assets/icons/menu-home.svg" },
  {
    id: "search",
    label: "Search",
    icon: "/src/assets/icons/menu-search.svg",
  },
  { id: "appInfo", label: "Info", icon: "/src/assets/icons/menu-info.svg" },
];
