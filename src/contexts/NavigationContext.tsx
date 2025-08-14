import { createContext, useState } from "react";
import type { ReactNode } from "react";
import { menuItems, navigationItems } from "../data/navigation";
import type { Channel } from "../types";

export type Screen = "home" | "search" | "appInfo" | "channelDetails";
export type MenuItemId = "burger" | Screen;

export interface NavigationItem {
  id: Screen;
  label: string;
  icon: string; // Will be replaced with actual icons later
}

export interface MenuItem {
  id: MenuItemId;
  label: string;
  icon: string;
}

interface NavigationContextType {
  currentScreen: Screen;
  isMenuExpanded: boolean;
  menuItems: MenuItem[];
  navigationItems: NavigationItem[];
  selectedChannel: Channel | null;
  navigateToScreen: (screen: Screen) => void;
  navigateToChannel: (channel: Channel) => void;
  toggleMenu: () => void;
  collapseMenu: () => void;
  expandMenu: () => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(
  undefined
);

interface NavigationProviderProps {
  children: ReactNode;
}

export const NavigationProvider = ({ children }: NavigationProviderProps) => {
  const [currentScreen, setCurrentScreen] = useState<Screen>("home");
  const [isMenuExpanded, setIsMenuExpanded] = useState(false);
  const [selectedChannel, setSelectedChannel] = useState<Channel | null>(null);

  const navigateToScreen = (screen: Screen) => {
    // Always collapse menu before navigating
    setIsMenuExpanded(false);
    setCurrentScreen(screen);
    console.log("Navigating to:", screen); // Debug log
  };

  const navigateToChannel = (channel: Channel) => {
    setSelectedChannel(channel);
    setIsMenuExpanded(false);
    setCurrentScreen("channelDetails");
    console.log("Navigating to channel:", channel.name); // Debug log
  };

  const toggleMenu = () => {
    setIsMenuExpanded((prev) => !prev);
  };

  const collapseMenu = () => {
    setIsMenuExpanded(false);
  };

  const expandMenu = () => {
    setIsMenuExpanded(true);
  };

  const value = {
    currentScreen,
    isMenuExpanded,
    menuItems,
    navigationItems,
    selectedChannel,
    navigateToScreen,
    navigateToChannel,
    toggleMenu,
    collapseMenu,
    expandMenu,
  };

  return (
    <NavigationContext.Provider value={value}>
      {children}
    </NavigationContext.Provider>
  );
};

export default NavigationContext;
