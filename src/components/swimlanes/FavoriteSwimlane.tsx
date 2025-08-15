import React from "react";
import type { Channel } from "../../types";
import { useResponsiveLayout } from "../../hooks/useResponsiveLayout";
import FavoriteChannelCard from "../cards/FavoriteChannelCard";
import GhostFavoriteCard from "../cards/GhostFavoriteCard";

interface FavoriteSwimlaneProps {
  favoriteChannels: Channel[];
  onChannelClick?: (channel: Channel) => void;
}

const FavoriteSwimlane: React.FC<FavoriteSwimlaneProps> = ({
  favoriteChannels,
  onChannelClick,
}) => {
  const {
    favoriteCardsPerRow,
    favoriteCardWidth,
    cardWidth: regularCardWidth,
    gapWidth,
  } = useResponsiveLayout();

  // Calculate card height (same as regular cards)
  const cardHeight = regularCardWidth;

  // Only show favorites that fit in one row (like other category swimlanes)
  const displayedFavorites = favoriteChannels.slice(0, favoriteCardsPerRow);

  // Calculate ghost cards needed to fill the single row
  const ghostCardsNeeded = Math.max(
    0,
    favoriteCardsPerRow - displayedFavorites.length
  );
  const ghostCards = Array.from(
    { length: ghostCardsNeeded },
    (_, index) => index
  );

  // If no favorite cards, don't render anything
  if (favoriteChannels.length === 0 || favoriteCardsPerRow === 0) {
    return null;
  }

  return (
    <div className="flex flex-col gap-2.5 w-full mb-8">
      {/* Category Header - styled exactly like other swimlane headers */}
      <div className="flex items-end justify-between w-full">
        {/* Category Title */}
        <div className="flex items-center">
          <h2 className="text-stingray-gray-700 font-roboto font-normal text-4xl leading-tight">
            Favorites
          </h2>
        </div>

        {/* Spacer */}
        <div className="flex-1" />

        {/* More Button */}
        {favoriteChannels.length > favoriteCardsPerRow && (
          <div className="flex items-center gap-2 cursor-pointer group">
            <span className="text-stingray-gray-500 font-roboto font-normal text-2xl group-hover:text-stingray-blue transition-colors duration-200">
              More
            </span>
            <div className="w-8 h-8 flex items-center justify-center group-hover:text-stingray-blue transition-colors duration-200">
              <svg
                width="10"
                height="18"
                viewBox="0 0 10 18"
                fill="none"
                className="fill-current"
              >
                <path
                  d="M1.5 1.5L8.5 9L1.5 16.5"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
            </div>
          </div>
        )}
      </div>

      {/* Favorite Cards Grid - single row with ghost cards to fill */}
      <div
        className="grid items-start"
        style={{
          gridTemplateColumns: `repeat(${favoriteCardsPerRow}, 1fr)`,
          gap: `${gapWidth}px`,
        }}
      >
        {/* Render favorite channel cards (only those that fit in one row) */}
        {displayedFavorites.map((channel) => (
          <FavoriteChannelCard
            key={channel.id}
            channel={channel}
            cardWidth={favoriteCardWidth}
            cardHeight={cardHeight}
            gapWidth={gapWidth}
            onClick={onChannelClick}
          />
        ))}

        {/* Render ghost cards to fill the single row */}
        {ghostCards.map((ghostIndex) => (
          <GhostFavoriteCard
            key={`ghost-${ghostIndex}`}
            cardWidth={favoriteCardWidth}
            cardHeight={cardHeight}
          />
        ))}
      </div>
    </div>
  );
};

export default FavoriteSwimlane;
