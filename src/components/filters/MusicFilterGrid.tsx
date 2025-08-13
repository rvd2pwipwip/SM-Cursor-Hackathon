import React, { useState } from "react";
import type { FilterCategory, FilterItem, FilterType } from "../../types";
import { musicFilters } from "../../data/musicFilters";

interface MusicFilterGridProps {
  selectedFilters: string[];
  onFilterChange: (filterId: string, categoryId: string) => void;
  className?: string;
}

interface FilterCardProps {
  item: FilterItem;
  categoryId: string;
  onSelect: (filterId: string, categoryId: string) => void;
}

const FilterCard: React.FC<FilterCardProps> = ({
  item,
  categoryId,
  onSelect,
}) => {
  return (
    <button
      onClick={() => onSelect(item.id, categoryId)}
      className={`
        relative w-44 h-44 rounded-2xl overflow-hidden transition-all duration-200
        ${
          item.isSelected
            ? "ring-2 ring-blue-500 transform scale-105"
            : "hover:transform hover:scale-102"
        }
      `}
    >
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-400 to-gray-600" />

      {/* Dark overlay similar to Figma design */}
      <div className="absolute inset-0 bg-black bg-opacity-50" />

      {/* Filter label */}
      <div className="absolute inset-0 flex items-center justify-center p-2">
        <span className="text-white font-black text-xl text-center leading-tight">
          {item.label}
        </span>
      </div>

      {/* Selection indicator */}
      {item.isSelected && (
        <div className="absolute top-2 right-2 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
          <svg
            className="w-4 h-4 text-white"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      )}
    </button>
  );
};

interface FilterCategoryProps {
  category: FilterCategory;
  selectedFilters: string[];
  onFilterChange: (filterId: string, categoryId: string) => void;
}

const FilterCategorySection: React.FC<FilterCategoryProps> = ({
  category,
  selectedFilters,
  onFilterChange,
}) => {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 capitalize">
        {category.name}
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5">
        {category.items.map((item) => (
          <FilterCard
            key={item.id}
            item={{
              ...item,
              isSelected: selectedFilters.includes(item.id),
            }}
            categoryId={category.id}
            onSelect={onFilterChange}
          />
        ))}
      </div>
    </div>
  );
};

const MusicFilterGrid: React.FC<MusicFilterGridProps> = ({
  selectedFilters,
  onFilterChange,
  className = "",
}) => {
  const [activeTab, setActiveTab] = useState<FilterType>("genre");

  const filterTabs: { id: FilterType; label: string }[] = [
    { id: "genre", label: "Genre" },
    { id: "era", label: "Era" },
    { id: "mood", label: "Mood" },
    { id: "activity", label: "Activity" },
    { id: "theme", label: "Theme" },
  ];

  return (
    <div className={`w-full ${className}`}>
      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2 mb-8 border-b border-gray-200">
        {filterTabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`
              px-6 py-3 font-medium text-sm rounded-t-lg transition-colors duration-200
              ${
                activeTab === tab.id
                  ? "bg-blue-500 text-white border-b-2 border-blue-500"
                  : "text-gray-600 hover:text-gray-800 hover:bg-gray-100"
              }
            `}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Active Filter Category */}
      <FilterCategorySection
        category={musicFilters[activeTab]}
        selectedFilters={selectedFilters}
        onFilterChange={onFilterChange}
      />

      {/* Selected Filters Summary */}
      {selectedFilters.length > 0 && (
        <div className="mt-8 p-4 bg-gray-50 rounded-lg">
          <h3 className="font-semibold text-gray-800 mb-2">
            Selected Filters ({selectedFilters.length})
          </h3>
          <div className="flex flex-wrap gap-2">
            {selectedFilters.map((filterId) => {
              // Find the filter item in all categories
              const allItems = Object.values(musicFilters).flatMap(
                (cat) => cat.items
              );
              const filterItem = allItems.find((item) => item.id === filterId);

              return filterItem ? (
                <span
                  key={filterId}
                  className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-800"
                >
                  {filterItem.label}
                  <button
                    onClick={() => {
                      // Find which category this filter belongs to
                      const category = Object.values(musicFilters).find((cat) =>
                        cat.items.some(
                          (item: FilterItem) => item.id === filterId
                        )
                      );
                      if (category) {
                        onFilterChange(filterId, category.id);
                      }
                    }}
                    className="ml-2 text-blue-600 hover:text-blue-800"
                  >
                    ×
                  </button>
                </span>
              ) : null;
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default MusicFilterGrid;
