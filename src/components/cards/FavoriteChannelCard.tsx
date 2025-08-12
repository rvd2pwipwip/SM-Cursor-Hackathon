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
  gapWidth,
}) => {
  // Calculate thumbnail dimensions (square, centered in left half)
  const thumbnailSize = Math.min(cardHeight, cardWidth / 2 - 20); // 20px padding
  const borderRadius = Math.round(thumbnailSize * 0.1);

  // Calculate font size based on card width (smaller than regular cards)
  const fontSize = Math.max(14, Math.min(18, Math.round(cardWidth * 0.06)));

  return (
    <div
      className="flex flex-shrink-0 bg-stingray-dark rounded-card overflow-hidden transition-transform transition-shadow duration-200 hover:scale-105 hover:shadow-lg"
      style={{
        width: cardWidth,
        height: cardHeight,
        borderRadius: `${borderRadius}px`,
      }}
    >
      {/* Left half - Thumbnail */}
      <div
        className="flex items-center justify-center bg-gray-200"
        style={{
          width: cardWidth / 2,
          height: cardHeight,
        }}
      >
        {channel.thumbnail ? (
          <img
            src={channel.thumbnail}
            alt={channel.name}
            className="object-cover"
            style={{
              width: thumbnailSize,
              height: thumbnailSize,
              borderRadius: `${borderRadius}px`,
            }}
          />
        ) : (
          <div
            className="bg-gray-400 flex items-center justify-center"
            style={{
              width: thumbnailSize,
              height: thumbnailSize,
              borderRadius: `${borderRadius}px`,
            }}
          >
            <div className="text-gray-600 text-xs">No Image</div>
          </div>
        )}
      </div>

      {/* Right half - Content */}
      <div
        className="flex flex-col justify-center px-4"
        style={{
          width: cardWidth / 2,
          height: cardHeight,
        }}
      >
        <h3
          className="text-white font-medium line-clamp-2 leading-tight"
          style={{ fontSize: `${fontSize}px` }}
        >
          {channel.name}
        </h3>

        {/* Optional: Channel type indicator */}
        <div className="mt-1">
          <span className="text-stingray-gray text-xs capitalize">
            {channel.type}
          </span>
        </div>
      </div>
    </div>
  );
};

export default FavoriteChannelCard;
