import React from "react";
import type { Channel } from "../../types";

interface ChannelCardProps {
  channel: Channel;
  size?: "sm" | "md" | "lg";
  width?: number; // Dynamic width for distributed layout
  onClick?: (channel: Channel) => void;
}

// Fallback sizes for non-distributed layouts
const fallbackSizes = {
  sm: 160,
  md: 200,
  lg: 240,
};

export const ChannelCard: React.FC<ChannelCardProps> = ({
  channel,
  size = "md",
  width,
  onClick,
}) => {
  const handleClick = () => {
    onClick?.(channel);
    console.log("Channel clicked:", channel.name);
  };

  // Use dynamic width if provided, otherwise fall back to size-based width
  const cardWidth = width || fallbackSizes[size];
  const cardHeight = cardWidth; // Always square

  // Calculate dynamic font size to maintain consistent character count per line
  // Base formula: roughly 12% of card width (20% larger than before), with min/max bounds
  const baseFontSize = Math.round(cardWidth * 0.12);
  const fontSize = Math.max(14, Math.min(28, baseFontSize)); // Min 14px, max 28px

  return (
    <div
      className="flex flex-col gap-2.5 cursor-pointer group"
      onClick={handleClick}
      style={{ width: cardWidth }}
    >
      {/* Square Thumbnail */}
      <div
        className="bg-stingray-gray-500 rounded-card flex items-center justify-center flex-shrink-0 group-hover:shadow-lg transition-all duration-200 hover:scale-105"
        style={{
          width: cardWidth,
          height: cardHeight,
        }}
      >
        {channel.thumbnail && (
          <img
            src={channel.thumbnail}
            alt={channel.name}
            className="w-full h-full object-cover rounded-card"
          />
        )}
      </div>

      {/* Label - matches thumbnail width */}
      <div className="flex-shrink-0" style={{ width: cardWidth }}>
        <h3
          className="
            text-stingray-gray-800 font-roboto font-normal
            leading-tight line-clamp-2 
          "
          style={{ fontSize: `${fontSize}px` }}
          title={channel.name}
        >
          {channel.name}
        </h3>
      </div>
    </div>
  );
};

export default ChannelCard;
