import React, { useState } from "react";
import { mockCategories } from "../../data/channels";
import { homeContentSwitcher } from "../../data/switcher";
import type { Channel, Category } from "../../types";
import CategorySwimlane from "../swimlanes/CategorySwimlane";
import ContentSwitcher from "../ContentSwitcher";
import { useResponsiveLayout } from "../../hooks/useResponsiveLayout";

function Home() {
  const { cardWidth } = useResponsiveLayout();
  const [activeFilter, setActiveFilter] = useState(
    homeContentSwitcher.defaultActiveTab || "all"
  );

  const handleChannelClick = (channel: Channel) => {
    console.log("Playing channel:", channel.name);
  };

  const handleMoreClick = (category: Category) => {
    console.log("Show more for category:", category.name);
  };

  const handleFilterChange = (filterId: string) => {
    setActiveFilter(filterId);
    console.log("Filter changed to:", filterId);
  };

  // Filter categories based on active filter
  const getFilteredCategories = () => {
    if (activeFilter === "all") {
      return mockCategories;
    }

    return mockCategories
      .map((category) => ({
        ...category,
        channels: category.channels.filter((channel) => {
          switch (activeFilter) {
            case "music":
              return channel.type === "music";
            case "podcasts":
              return channel.type === "podcast";
            case "radio":
              return channel.type === "radio";
            default:
              return true;
          }
        }),
      }))
      .filter((category) => category.channels.length > 0);
  };

  const filteredCategories = getFilteredCategories();

  return (
    <div className="flex-1 overflow-y-auto">
      {/* Header placeholder */}
      <div className="h-header bg-gray-50 border-b border-gray-200 flex items-center justify-center">
        {/* Content Switcher */}
        <ContentSwitcher
          tabs={homeContentSwitcher.tabs}
          activeTab={activeFilter}
          onTabChange={handleFilterChange}
        />
      </div>

      {/* Content area */}
      <div className="px-10 py-10 space-y-10">
        {/* Promo Banner - height matches card thumbnails */}
        <div
          className="bg-stingray-gray-500 rounded-card flex items-center justify-center w-full"
          style={{ height: `${cardWidth}px` }}
        >
          <span className="text-white text-5xl font-light">Promo Banner</span>
        </div>

        {/* Categories */}
        {filteredCategories.map((category) => (
          <CategorySwimlane
            key={category.id}
            category={category}
            onChannelClick={handleChannelClick}
            onMoreClick={handleMoreClick}
          />
        ))}

        {/* Empty state */}
        {filteredCategories.length === 0 && (
          <div className="text-center py-20">
            <p className="text-stingray-gray-700 text-xl">
              No content available for "{activeFilter}" filter
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
