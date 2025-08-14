import { useState, useRef, useEffect, useLayoutEffect } from "react";
import { useResponsiveLayout } from "../../hooks/useResponsiveLayout";
import { searchBrowseContentSwitcher } from "../../data/switcher";
import ContentSwitcher from "../ContentSwitcher";
import FilterSwimlane from "../swimlanes/FilterSwimlane";
import { musicFilters } from "../../data/musicFilters";
import type { FilterType, Category, Channel } from "../../types";

function SearchBrowse() {
  const { leftMargin, horizontalPadding, cardWidth, gapWidth, cardsPerRow } =
    useResponsiveLayout();
  const [activeContentType, setActiveContentType] = useState(
    searchBrowseContentSwitcher.defaultActiveTab || "music"
  );
  const [headerHeight, setHeaderHeight] = useState(0);
  const [isHeaderMeasured, setIsHeaderMeasured] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);

  const handleContentTypeChange = (contentType: string) => {
    setActiveContentType(contentType);
    console.log("Content type changed to:", contentType);
  };

  const handleFilterClick = (channel: Channel) => {
    console.log("Navigate to category grid view for:", channel.name);
    // TODO: Implement navigation to category grid view
  };

  const handleCategoryMoreClick = (category: Category) => {
    console.log("Navigate to category page:", category.name);
    // TODO: Implement navigation to dedicated category page
  };

  // Transform filter item to Channel for CategorySwimlane compatibility
  const transformFilterToChannel = (
    filter: any,
    categoryId: string
  ): Channel => ({
    id: filter.id,
    name: filter.label,
    category: categoryId,
    type: "music" as const,
    description: filter.description,
  });

  // Transform FilterCategory to Category for CategorySwimlane
  const transformFilterCategoryToCategory = (
    filterCategory: any,
    categoryId: string
  ): Category => ({
    id: categoryId,
    name: filterCategory.name,
    type: "music" as const,
    channels: filterCategory.items.map((item: any) =>
      transformFilterToChannel(item, categoryId)
    ),
  });

  // Use useLayoutEffect to measure header AFTER DOM layout but BEFORE paint
  useLayoutEffect(() => {
    const measureHeaderHeight = () => {
      if (headerRef.current) {
        // Force a reflow to ensure accurate measurement
        headerRef.current.offsetHeight;

        // Use getBoundingClientRect for most accurate measurements
        const rect = headerRef.current.getBoundingClientRect();
        const height = Math.ceil(rect.height); // Ceil to avoid sub-pixel issues

        console.log(
          "Header height measured (useLayoutEffect):",
          height,
          "rect:",
          rect
        );
        setHeaderHeight(height);
        setIsHeaderMeasured(true);
      }
    };

    // Measure immediately in layout effect
    measureHeaderHeight();
  }, [activeContentType]); // Re-measure when content type changes

  // Separate effect for resize handling
  useEffect(() => {
    const updateHeaderHeight = () => {
      if (headerRef.current && isHeaderMeasured) {
        // Force reflow
        headerRef.current.offsetHeight;

        const rect = headerRef.current.getBoundingClientRect();
        const height = Math.ceil(rect.height);

        console.log("Header height updated (resize):", height);
        setHeaderHeight(height);
      }
    };

    // Use ResizeObserver for dynamic height changes
    let resizeObserver: ResizeObserver | null = null;

    if (headerRef.current && isHeaderMeasured) {
      resizeObserver = new ResizeObserver((entries) => {
        for (const entry of entries) {
          const height = Math.ceil(entry.contentRect.height);
          console.log("Header height changed (ResizeObserver):", height);
          setHeaderHeight(height);
        }
      });
      resizeObserver.observe(headerRef.current);
    }

    // Fallback for window resize
    window.addEventListener("resize", updateHeaderHeight);

    return () => {
      if (resizeObserver) {
        resizeObserver.disconnect();
      }
      window.removeEventListener("resize", updateHeaderHeight);
    };
  }, [isHeaderMeasured]); // Only set up observers after initial measurement

  // Get music filter categories for display
  const getMusicFilterCategories = (): Category[] => {
    if (activeContentType !== "music") {
      return []; // Return empty for podcasts/radio until implemented
    }

    return Object.entries(musicFilters).map(([categoryId, filterCategory]) =>
      transformFilterCategoryToCategory(filterCategory, categoryId)
    );
  };

  const filterCategories = getMusicFilterCategories();

  return (
    <div className="flex-1 relative">
      {/* Fixed Glass Header */}
      <div ref={headerRef} className="fixed top-0 left-0 right-0 z-50">
        <div
          className="bg-white/90 backdrop-blur-md border-b border-gray-200/50"
          style={{
            paddingLeft: `${leftMargin + horizontalPadding}px`,
            paddingRight: `${horizontalPadding}px`,
          }}
        >
          <div className="py-6 space-y-6">
            {/* Search Field */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search music, podcasts or audiobooks"
                className="w-full px-6 py-4 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-100/50"
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

            {/* Content Type Switcher */}
            <div className="flex justify-center">
              <ContentSwitcher
                tabs={searchBrowseContentSwitcher.tabs}
                activeTab={activeContentType}
                onTabChange={handleContentTypeChange}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="h-full overflow-y-auto hide-scrollbar">
        <div
          className="space-y-8 pb-10"
          style={{
            marginLeft: `${leftMargin}px`,
            paddingLeft: `${horizontalPadding}px`,
            paddingRight: `${horizontalPadding}px`,
            paddingTop: `${headerHeight + 16}px`, // Dynamic padding with 1rem (16px) buffer
          }}
        >
          {/* Show content based on active content type */}
          {activeContentType === "music" ? (
            <>
              {/* Filter Category Swimlanes */}
              {filterCategories.map((category) => (
                <FilterSwimlane
                  key={category.id}
                  category={category}
                  onChannelClick={handleFilterClick}
                  onMoreClick={handleCategoryMoreClick}
                />
              ))}

              {/* Browse Instructions */}
              <div className="bg-gray-50 rounded-lg p-12 text-center">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  Ready to Discover Music?
                </h3>
                <p className="text-gray-600 text-lg">
                  Click on any filter above to explore that category's music
                  selection
                </p>
              </div>
            </>
          ) : (
            /* Placeholder for Podcasts/Radio */
            <div className="bg-gray-50 rounded-lg p-12 text-center">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                {activeContentType === "podcasts" ? "Podcasts" : "Radio"} Coming
                Soon
              </h3>
              <p className="text-gray-600 text-lg">
                {activeContentType === "podcasts" ? "Podcast" : "Radio"} filters
                and content will be available shortly
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SearchBrowse;
