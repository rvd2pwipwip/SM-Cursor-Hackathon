import { useState } from "react";
import { useResponsiveLayout } from "../../hooks/useResponsiveLayout";
import MusicFilterGrid from "../filters/MusicFilterGrid";

function SearchBrowse() {
  const { leftMargin, horizontalPadding } = useResponsiveLayout();
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const handleFilterChange = (filterId: string, _categoryId: string) => {
    setSelectedFilters((prev) => {
      if (prev.includes(filterId)) {
        // Remove filter if already selected
        return prev.filter((id) => id !== filterId);
      } else {
        // Add filter if not selected
        return [...prev, filterId];
      }
    });
  };

  const clearAllFilters = () => {
    setSelectedFilters([]);
  };

  return (
    <div className="flex-1 relative">
      {/* Main content area */}
      <div className="h-full overflow-y-auto hide-scrollbar">
        <div
          className="space-y-10 pt-48 lg:pt-36 pb-10"
          style={{
            marginLeft: `${leftMargin}px`,
            paddingLeft: `${horizontalPadding}px`,
            paddingRight: `${horizontalPadding}px`,
          }}
        >
          {/* Page Header */}
          <div className="text-center">
            <h1 className="text-stingray-gray-700 font-roboto font-normal text-6xl leading-tight mb-4">
              Search & Browse
            </h1>
            <p className="text-stingray-gray-500 text-xl mb-4">
              Discover new content and explore our catalog
            </p>

            {/* Clear Filters Button */}
            {selectedFilters.length > 0 && (
              <button
                onClick={clearAllFilters}
                className="inline-flex items-center px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
              >
                Clear All Filters ({selectedFilters.length})
              </button>
            )}
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for music, artists, genres..."
                className="w-full px-6 py-4 text-lg border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Music Filter Grid */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                Filter Music
              </h2>
              <p className="text-gray-600">
                Select filters to narrow down your music discovery
              </p>
            </div>

            <MusicFilterGrid
              selectedFilters={selectedFilters}
              onFilterChange={handleFilterChange}
            />
          </div>

          {/* Results Section */}
          {selectedFilters.length > 0 ? (
            <div className="bg-gray-50 rounded-lg p-12 text-center">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Search Results
              </h3>
              <p className="text-gray-600 text-lg mb-4">
                Showing results for {selectedFilters.length} selected filter
                {selectedFilters.length !== 1 ? "s" : ""}
              </p>
              <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
                <p className="text-gray-500">
                  Music results matching your filters would appear here...
                </p>
              </div>
            </div>
          ) : (
            <div className="bg-gray-50 rounded-lg p-12 text-center">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Ready to Discover Music?
              </h3>
              <p className="text-gray-600 text-lg">
                Use the filters above to find music that matches your mood,
                activity, or preferences
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SearchBrowse;
