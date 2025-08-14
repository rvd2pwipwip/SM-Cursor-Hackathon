import { useState, useRef, useEffect, useLayoutEffect } from "react";
import { mockCategories, mockChannels } from "../../data/channels";
import { homeContentSwitcher } from "../../data/switcher";
import type { Channel, Category } from "../../types";
import CategorySwimlane from "../swimlanes/CategorySwimlane";
import FavoriteSwimlane from "../swimlanes/FavoriteSwimlane";
import Header from "../Header";
import { useResponsiveLayout } from "../../hooks/useResponsiveLayout";
import { useNavigation } from "../../hooks/useNavigation";

function Home() {
  const { cardWidth, leftMargin, horizontalPadding } = useResponsiveLayout();
  const { navigateToChannel } = useNavigation();
  const [activeFilter, setActiveFilter] = useState(
    homeContentSwitcher.defaultActiveTab || "all"
  );
  const [headerHeight, setHeaderHeight] = useState(0);
  const [isHeaderMeasured, setIsHeaderMeasured] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);

  // Use useLayoutEffect to measure header AFTER DOM layout but BEFORE paint
  useLayoutEffect(() => {
    const measureHeaderHeight = () => {
      if (headerRef.current) {
        // Force a reflow to ensure accurate measurement
        void headerRef.current.offsetHeight;

        // Use getBoundingClientRect for most accurate measurements
        const rect = headerRef.current.getBoundingClientRect();
        const height = Math.ceil(rect.height); // Ceil to avoid sub-pixel issues

        setHeaderHeight(height);
        setIsHeaderMeasured(true);
      }
    };

    // Measure immediately in layout effect
    measureHeaderHeight();
  }, [activeFilter]); // Re-measure when filter changes (affects header content)

  // Separate effect for resize handling
  useEffect(() => {
    const updateHeaderHeight = () => {
      if (headerRef.current && isHeaderMeasured) {
        // Force reflow
        void headerRef.current.offsetHeight;

        const rect = headerRef.current.getBoundingClientRect();
        const height = Math.ceil(rect.height);

        setHeaderHeight(height);
      }
    };

    // Use ResizeObserver for dynamic height changes
    let resizeObserver: ResizeObserver | null = null;

    if (headerRef.current && isHeaderMeasured) {
      resizeObserver = new ResizeObserver((entries) => {
        for (const entry of entries) {
          const height = Math.ceil(entry.contentRect.height);
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

  const handleChannelClick = (channel: Channel) => {
    navigateToChannel(channel);
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

  // Get favorite channels from all channels
  const getFavoriteChannels = () => {
    return mockChannels.filter((channel) => channel.isFavorite);
  };

  const favoriteChannels = getFavoriteChannels();

  return (
    <div className="flex-1 relative">
      {/* Header with glass effect - fixed positioned for stickiness */}
      <div ref={headerRef} className="fixed top-0 left-0 right-0 z-50">
        <Header
          switcherTabs={homeContentSwitcher.tabs}
          activeTab={activeFilter}
          onTabChange={handleFilterChange}
        />
      </div>

      {/* Scrollable Content area - starts from top, scrolls behind header */}
      <div className="h-full overflow-y-auto hide-scrollbar">
        <div
          className="space-y-10 pb-10"
          style={{
            marginLeft: `${leftMargin}px`,
            paddingLeft: `${horizontalPadding}px`,
            paddingRight: `${horizontalPadding}px`,
            paddingTop: `${headerHeight + 16}px`, // Dynamic padding with 1rem (16px) buffer
          }}
        >
          {/* Promo Banner - only show when "All" filter is active */}
          {activeFilter === "all" && (
            <div
              className="bg-stingray-gray-500 flex items-center justify-center w-full"
              style={{
                height: `${cardWidth}px`,
                borderRadius: `${Math.round(cardWidth * 0.1)}px`,
              }}
            >
              <span className="text-white text-5xl font-light">
                Promo Banner
              </span>
            </div>
          )}

          {/* Favorite Swimlane - show when user has favorites */}
          {favoriteChannels.length > 0 && (
            <FavoriteSwimlane favoriteChannels={favoriteChannels} />
          )}

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
    </div>
  );
}

export default Home;
