import { useState, useRef, useEffect } from "react";
import type { SwitcherTab } from "../data/switcher";

interface ContentSwitcherProps {
  tabs: SwitcherTab[];
  activeTab?: string;
  onTabChange?: (tabId: string) => void;
  className?: string;
}

export default function ContentSwitcher({
  tabs,
  activeTab,
  onTabChange,
  className = "",
}: ContentSwitcherProps) {
  // Use first tab as default if no activeTab is provided
  const defaultTab = activeTab || tabs[0]?.id || "";
  const [currentTab, setCurrentTab] = useState(defaultTab);
  const [activeTabStyle, setActiveTabStyle] = useState({
    left: 0,
    width: 0,
  });
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (activeTab && activeTab !== currentTab) {
      setCurrentTab(activeTab);
    }
  }, [activeTab]);

  useEffect(() => {
    updateActiveTabPosition();
  }, [currentTab, tabs]);

  useEffect(() => {
    // Update position on window resize or layout changes
    const handleResize = () => {
      setTimeout(updateActiveTabPosition, 100);
    };

    window.addEventListener("resize", handleResize);
    // Also update after a short delay to ensure layout is stable
    setTimeout(updateActiveTabPosition, 100);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const updateActiveTabPosition = () => {
    const activeIndex = tabs.findIndex((tab) => tab.id === currentTab);
    const activeTabElement = tabRefs.current[activeIndex];
    const containerElement = containerRef.current;

    if (activeTabElement && containerElement) {
      const containerRect = containerElement.getBoundingClientRect();
      const tabRect = activeTabElement.getBoundingClientRect();

      setActiveTabStyle({
        left: tabRect.left - containerRect.left,
        width: tabRect.width,
      });
    }
  };

  const handleTabClick = (tabId: string) => {
    setCurrentTab(tabId);
    onTabChange?.(tabId);
  };

  // Don't render if no tabs provided
  if (!tabs || tabs.length === 0) {
    return null;
  }

  return (
    <div
      className={`mx-auto box-border content-stretch flex flex-col items-start justify-start p-[3px] relative shrink-0 w-fit ${className}`}
      data-name="contentSwitcher"
    >
      {/* PillTrack Background */}
      <div
        className="absolute inset-0 rounded-[30px] bg-stingray-gray-100"
        data-name="pillTrack"
      />

      {/* Tabs Container */}
      <div
        ref={containerRef}
        className="box-border content-stretch flex flex-row items-start justify-start p-0 relative rounded-[30px] shrink-0"
        data-name="tabs"
      >
        {/* Active Tab Indicator */}
        <div
          className="absolute box-border content-stretch flex flex-row items-center justify-start overflow-clip p-0 rounded-[50px] top-0 transition-all duration-300 ease-in-out"
          data-name="activeTab"
          style={{
            left: activeTabStyle.left,
            width: activeTabStyle.width,
          }}
        >
          <div
            className="bg-stingray-blue h-[60px] relative rounded-[50px] w-full"
            data-name="activeBackground"
          />
        </div>

        {/* Tab Labels */}
        <div
          className="box-border content-stretch flex flex-row items-start justify-start p-0 relative shrink-0"
          data-name="labels"
        >
          {tabs.map((tab, index) => (
            <button
              key={tab.id}
              ref={(el) => {
                tabRefs.current[index] = el;
              }}
              className="box-border content-stretch cursor-pointer flex flex-row items-center justify-start overflow-clip p-0 relative rounded-[50px] shrink-0 hover:opacity-80 transition-opacity"
              data-name="buttons"
              onClick={() => handleTabClick(tab.id)}
            >
              <div
                className="h-[60px] relative rounded-[50px] shrink-0"
                data-name="button_md"
              >
                <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
                  <div className="box-border content-stretch flex flex-row gap-2.5 h-[60px] items-center justify-center px-[26px] py-[15px] relative">
                    <div
                      className={`font-roboto font-medium leading-[0] relative shrink-0 text-[24px] text-left text-nowrap transition-colors duration-300 ${
                        currentTab === tab.id
                          ? "text-white relative z-10"
                          : "text-stingray-gray-700"
                      }`}
                    >
                      <p className="block leading-[normal] whitespace-pre">
                        {tab.label}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
