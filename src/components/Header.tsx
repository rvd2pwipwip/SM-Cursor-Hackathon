import React from "react";
import ContentSwitcher from "./ContentSwitcher";
import type { SwitcherTab } from "../data/switcher";
import stingrayLogo from "../assets/stingray-logo.svg";

interface HeaderProps {
  switcherTabs: SwitcherTab[];
  activeTab?: string;
  onTabChange?: (tabId: string) => void;
}

export default function Header({
  switcherTabs,
  activeTab,
  onTabChange,
}: HeaderProps) {
  const handleSubscribeClick = () => {
    console.log("Subscribe button clicked");
    // TODO: Implement subscription logic
  };

  return (
    <div className="h-header bg-white/60 backdrop-blur-[12px]">
      <div className="flex items-center justify-between h-full px-10 pt-2.5">
        {/* Left: Stingray Logo */}
        <div className="flex items-center">
          <img
            src={stingrayLogo}
            alt="Stingray Music"
            className="h-14 w-auto"
          />
        </div>

        {/* Center: Content Switcher */}
        <div className="flex items-center">
          <ContentSwitcher
            tabs={switcherTabs}
            activeTab={activeTab}
            onTabChange={onTabChange}
          />
        </div>

        {/* Right: Subscribe/Provider Button */}
        <div className="flex items-center">
          <button
            onClick={handleSubscribeClick}
            className="flex items-center gap-2.5 bg-stingray-blue hover:bg-stingray-blue/90 text-white font-roboto font-medium text-2xl px-6 py-4 rounded-[50px] transition-colors duration-200"
          >
            {/* Subscribe Icon */}
            <div className="w-[30px] h-[30px] flex items-center justify-center">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="9"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  d="M12 8v8M8 12h8"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <span>Subscribe</span>
          </button>
        </div>
      </div>
    </div>
  );
}
