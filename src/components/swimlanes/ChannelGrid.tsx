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
  const { cardsPerRow, cardSize, cardWidth, gapWidth } = useResponsiveLayout();

  // Limit channels - use maxCards if specified, otherwise use cardsPerRow
  const limitCards = maxCards || cardsPerRow;
  const displayChannels = channels.slice(0, limitCards);

  return (
    <div
      className="w-full"
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${cardsPerRow}, 1fr)`,
        gap: `${gapWidth}px`,
        alignItems: "start",
      }}
    >
      {displayChannels.map((channel) => (
        <ChannelCard
          key={channel.id}
          channel={channel}
          size={cardSize}
          width={cardWidth}
          onClick={onChannelClick}
        />
      ))}
    </div>
  );
};

export default ChannelGrid;
