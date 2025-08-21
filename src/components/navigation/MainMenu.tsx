import React from "react";
import { useNavigation } from "../../hooks/useNavigation";
import type { Screen } from "../../contexts/NavigationContext";

interface MainMenuProps {
  onClickOutside?: () => void;
}

const MainMenu: React.FC<MainMenuProps> = ({ onClickOutside }) => {
  const {
    currentScreen,
    isMenuExpanded,
    menuItems,
    navigateToScreen,
    toggleMenu,
    collapseMenu,
  } = useNavigation();

  // Handle click outside to collapse menu
  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      collapseMenu();
      onClickOutside?.();
    }
  };

  return (
    <>
      {/* Gradient Scrim - only visible when menu is expanded */}
      {isMenuExpanded && (
        <div
          className="fixed inset-0 z-[60]"
          style={{
            background:
              "linear-gradient(to right, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 280px, rgba(255, 255, 255, 0) 100%)",
          }}
          onClick={handleOverlayClick}
        />
      )}

      {/* Main Menu Container */}
      <div
        className={`fixed left-0 top-0 h-full bg-white z-[70] ${
          isMenuExpanded
            ? "w-72 transition-all duration-300 ease-in-out"
            : "w-20"
        }`}
        style={{ border: "none", boxShadow: "none" }}
      >
        <div className="flex flex-col h-full">
          {/* All Menu Items - unified vertical distribution */}
          <nav className="flex-1 pt-8">
            <ul className="space-y-16">
              {menuItems.map((item) => (
                <li key={item.id} className="pl-5">
                  <button
                    onClick={() => {
                      if (item.id === "burger") {
                        toggleMenu();
                      } else {
                        navigateToScreen(item.id as Screen);
                      }
                    }}
                    className="group flex items-center transition-all duration-200 w-full"
                    aria-label={item.label}
                  >
                    {/* Icon Container - 40px clickable area, left-aligned */}
                    <div className="relative flex items-center justify-center w-10 h-10 flex-shrink-0">
                      <img
                        src={item.icon}
                        alt={item.label}
                        className={`transition-opacity duration-200 ${
                          item.id === "burger"
                            ? "opacity-100" // Burger always solid
                            : currentScreen === item.id
                            ? "opacity-100"
                            : "opacity-40 group-hover:opacity-60"
                        }`}
                        style={{
                          width: "auto",
                          height: "auto",
                          maxWidth: "32px",
                          maxHeight: "32px",
                        }}
                      />

                      {/* Active underscore - only for navigation items, not burger */}
                      {item.id !== "burger" && currentScreen === item.id && (
                        <div className="absolute -bottom-2 w-10 h-1 bg-stingray-blue rounded-full" />
                      )}
                    </div>

                    {/* Label - only visible when expanded, left-aligned (not for burger) */}
                    {isMenuExpanded && item.id !== "burger" && (
                      <span
                        className={`ml-4 font-roboto font-normal text-lg whitespace-nowrap transition-all duration-200 ${
                          currentScreen === item.id
                            ? "text-stingray-dark font-medium"
                            : "text-gray-500 group-hover:text-gray-700"
                        }`}
                      >
                        {item.label}
                      </span>
                    )}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default MainMenu;
