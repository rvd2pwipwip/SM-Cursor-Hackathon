import React from "react";
import type { Channel } from "../../types";
import { useResponsiveLayout } from "../../hooks/useResponsiveLayout";
import ChannelCard from "../cards/ChannelCard";

interface ChannelGridProps {
  channels: Channel[];
  maxCards?: number;
  onChannelClick?: (channel: Channel) => void;
}

export const ChannelGrid: React.FC<ChannelGridProps> = ({
  channels,
  maxCards,
  onChannelClick,
}) => {
  const { cardsPerRow, cardSize } = useResponsiveLayout();

  // Limit channels if maxCards is specified
  const displayChannels = maxCards ? channels.slice(0, maxCards) : channels;

  // Get grid class based on cards per row
  const getGridClass = () => {
    switch (cardsPerRow) {
      case 1:
        return "grid-cols-responsive-1";
      case 2:
        return "grid-cols-responsive-2";
      case 3:
        return "grid-cols-responsive-3";
      case 4:
        return "grid-cols-responsive-4";
      case 5:
        return "grid-cols-responsive-5";
      case 6:
        return "grid-cols-responsive-6";
      default:
        return "grid-cols-responsive-6";
    }
  };

  return (
    <div
      className={`
      grid ${getGridClass()} gap-5 w-full
    `}
    >
      {displayChannels.map((channel) => (
        <ChannelCard
          key={channel.id}
          channel={channel}
          size={cardSize}
          onClick={onChannelClick}
        />
      ))}
    </div>
  );
};

export default ChannelGrid;
