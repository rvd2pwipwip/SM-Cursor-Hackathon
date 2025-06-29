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

  return (
    <div
      className="flex flex-col gap-2.5 cursor-pointer group transition-transform duration-200 hover:scale-105"
      onClick={handleClick}
      style={{ width: cardWidth }}
    >
      {/* Square Thumbnail */}
      <div
        className="bg-stingray-gray-500 rounded-card flex items-center justify-center flex-shrink-0 group-hover:shadow-lg transition-shadow duration-200"
        style={{
          width: cardWidth,
          height: cardHeight,
        }}
      >
        {channel.thumbnail ? (
          <img
            src={channel.thumbnail}
            alt={channel.name}
            className="w-full h-full object-cover rounded-card"
          />
        ) : (
          <div className="text-white text-4xl font-light opacity-50">♪</div>
        )}
      </div>

      {/* Label - matches thumbnail width */}
      <div className="flex-shrink-0" style={{ width: cardWidth }}>
        <h3
          className="
            text-stingray-gray-800 font-roboto font-normal text-2xl
            leading-tight line-clamp-2 
          "
          title={channel.name}
        >
          {channel.name}
        </h3>
      </div>
    </div>
  );
};

export default ChannelCard;
