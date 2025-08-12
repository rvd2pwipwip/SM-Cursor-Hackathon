import React from "react";

interface GhostFavoriteCardProps {
  cardWidth: number;
  cardHeight: number;
}

const GhostFavoriteCard: React.FC<GhostFavoriteCardProps> = ({
  cardWidth,
  cardHeight,
}) => {
  // Calculate border radius to match card styling
  const borderRadius = Math.round(cardHeight * 0.1);

  return (
    <div
      className="flex-shrink-0 bg-black/10"
      style={{
        width: cardWidth,
        height: cardHeight,
        borderRadius: `${borderRadius}px`,
      }}
    />
  );
};

export default GhostFavoriteCard;
