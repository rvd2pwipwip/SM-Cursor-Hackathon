import React from "react";
import { mockCategories } from "./data/channels";
import type { Channel, Category } from "./types";
import CategorySwimlane from "./components/swimlanes/CategorySwimlane";

function App() {
  const handleChannelClick = (channel: Channel) => {
    console.log("Playing channel:", channel.name);
  };

  const handleMoreClick = (category: Category) => {
    console.log("Show more for category:", category.name);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Test Element - Remove this once Tailwind is confirmed working */}
      <div className="bg-red-500 text-white p-4 text-center font-bold">
        🎵 TAILWIND TEST - This should be RED with white text 🎵
      </div>

      {/* Temporary simple layout for testing */}
      <div className="flex">
        {/* Sidebar placeholder */}
        <div className="w-sidebar bg-gray-100">
          {/* Sidebar content will go here */}
        </div>

        {/* Main content */}
        <div className="flex-1 overflow-y-auto">
          {/* Header placeholder */}
          <div className="h-header bg-gray-50 border-b border-gray-200">
            {/* Header content will go here */}
          </div>

          {/* Content area */}
          <div className="px-10 py-10 space-y-10">
            {/* Promo Banner placeholder */}
            <div className="bg-stingray-gray-500 rounded-card h-32 flex items-center justify-center">
              <span className="text-white text-5xl font-light">
                Promo Banner
              </span>
            </div>

            {/* Categories */}
            {mockCategories.map((category) => (
              <CategorySwimlane
                key={category.id}
                category={category}
                onChannelClick={handleChannelClick}
                onMoreClick={handleMoreClick}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
