import React from "react";
import type { Channel } from "../../types";
import { useResponsiveLayout } from "../../hooks/useResponsiveLayout";
import CategoryCard from "../cards/CategoryCard";

interface FilterGridProps {
  channels: Channel[];
  maxCards?: number;
  selectedFilter?: string;
  onChannelClick?: (channel: Channel) => void;
}

export const FilterGrid: React.FC<FilterGridProps> = ({
  channels,
  maxCards,
  selectedFilter,
  onChannelClick,
}) => {
  const { cardsPerRow, cardWidth, gapWidth } = useResponsiveLayout();

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
        <CategoryCard
          key={channel.id}
          label={channel.name}
          width={cardWidth}
          isSelected={selectedFilter === channel.id}
          onClick={() => onChannelClick?.(channel)}
        />
      ))}
    </div>
  );
};

export default FilterGrid;
