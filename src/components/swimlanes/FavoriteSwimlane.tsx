import React from "react";
import type { Channel } from "../../types";
import { useResponsiveLayout } from "../../hooks/useResponsiveLayout";
import FavoriteChannelCard from "../cards/FavoriteChannelCard";
import GhostFavoriteCard from "../cards/GhostFavoriteCard";

interface FavoriteSwimlaneProps {
  favoriteChannels: Channel[];
}

const FavoriteSwimlane: React.FC<FavoriteSwimlaneProps> = ({
  favoriteChannels,
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
    <div className="mb-8">
      {/* Category Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold text-gray-900">My Favorites</h2>
        {favoriteChannels.length > favoriteCardsPerRow && (
          <button className="text-stingray-blue font-medium hover:text-stingray-blue/80 transition-colors">
            More
          </button>
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
