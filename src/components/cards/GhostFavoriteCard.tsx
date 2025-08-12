import React from "react";

interface GhostFavoriteCardProps {
  cardWidth: number;
  cardHeight: number;
}

const GhostFavoriteCard: React.FC<GhostFavoriteCardProps> = ({
  cardWidth,
  cardHeight,
}) => {
  // Calculate thumbnail dimensions (square, centered in left half)
  const thumbnailSize = Math.min(cardHeight, cardWidth / 2 - 20); // 20px padding
  const borderRadius = Math.round(thumbnailSize * 0.1);

  return (
    <div
      className="flex flex-shrink-0 border-2 border-dashed border-gray-300 rounded-card opacity-40"
      style={{
        width: cardWidth,
        height: cardHeight,
        borderRadius: `${borderRadius}px`,
      }}
    >
      {/* Left half - Ghost Thumbnail */}
      <div
        className="flex items-center justify-center"
        style={{
          width: cardWidth / 2,
          height: cardHeight,
        }}
      >
        <div
          className="border-2 border-dashed flex items-center justify-center"
          style={{
            width: thumbnailSize,
            height: thumbnailSize,
            borderRadius: `${borderRadius}px`,
            borderColor: "#777777",
          }}
        >
          <div className="text-gray-400 text-xs">♥</div>
        </div>
      </div>

      {/* Right half - Ghost Content */}
      <div
        className="flex flex-col justify-center px-4"
        style={{
          width: cardWidth / 2,
          height: cardHeight,
        }}
      >
        <div className="space-y-2">
          <div className="h-4 bg-gray-200 rounded-sm opacity-50"></div>
          <div className="h-3 bg-gray-200 rounded-sm opacity-30 w-3/4"></div>
        </div>
      </div>
    </div>
  );
};

export default GhostFavoriteCard;
