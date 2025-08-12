import React from "react";
import type { Channel } from "../../types";

interface FavoriteChannelCardProps {
  channel: Channel;
  cardWidth: number;
  cardHeight: number;
  gapWidth: number;
}

const FavoriteChannelCard: React.FC<FavoriteChannelCardProps> = ({
  channel,
  cardWidth,
  cardHeight,
}) => {
  // Calculate thumbnail dimensions (square, left-aligned)
  const thumbnailSize = cardHeight; // Square thumbnail same height as card
  const cardBorderRadius = Math.round(cardHeight * 0.1); // Card border radius

  // Calculate font size based on card width (smaller than regular cards)
  const fontSize = Math.max(14, Math.min(18, Math.round(cardWidth * 0.06)));

  return (
    <div
      className="flex flex-shrink-0 overflow-hidden transition-transform transition-shadow duration-200 hover:scale-105 hover:shadow-lg relative"
      style={{
        width: cardWidth,
        height: cardHeight,
        borderRadius: `${cardBorderRadius}px`,
      }}
    >
      {/* Background Image with Blur and Scrim */}
      {channel.thumbnail ? (
        <>
          <div
            className="absolute inset-0 bg-cover bg-center filter blur-md"
            style={{
              backgroundImage: `url(${channel.thumbnail})`,
              transform: "scale(1.1)", // Slightly scale to avoid blur edge artifacts
            }}
          />
          <div className="absolute inset-0 bg-black opacity-30" />
        </>
      ) : (
        <div className="absolute inset-0 bg-stingray-dark" />
      )}
      {/* Left-aligned Square Thumbnail */}
      <div
        className="flex items-center justify-center flex-shrink-0 relative z-10"
        style={{
          width: thumbnailSize,
          height: thumbnailSize,
          backgroundColor: "#777777",
        }}
      >
        {channel.thumbnail && (
          <img
            src={channel.thumbnail}
            alt={channel.name}
            className="w-full h-full object-cover"
          />
        )}
      </div>

      {/* Content section - fills remaining space */}
      <div className="flex flex-col justify-center px-4 flex-1 relative z-10">
        <h3
          className="text-white font-medium line-clamp-2 leading-tight"
          style={{ fontSize: `${fontSize}px` }}
        >
          {channel.name}
        </h3>

        {/* TODO: Replace with type icon and make conditional based on filter mode */}
        {/* Only show when app is in "All" filter mode, hide for specific categories */}
        <div className="mt-1">
          <span className="text-white/60 text-xs capitalize">
            {channel.type}
          </span>
        </div>
      </div>
    </div>
  );
};

export default FavoriteChannelCard;
