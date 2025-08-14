import React from "react";
import type { Category, Channel } from "../../types";
import { useResponsiveLayout } from "../../hooks/useResponsiveLayout";
import CategoryHeader from "./CategoryHeader";
import FilterGrid from "./FilterGrid";

interface FilterSwimlaneProps {
  category: Category;
  selectedFilter?: string;
  onChannelClick?: (channel: Channel) => void;
  onMoreClick?: (category: Category) => void;
}

export const FilterSwimlane: React.FC<FilterSwimlaneProps> = ({
  category,
  selectedFilter,
  onChannelClick,
  onMoreClick,
}) => {
  const { cardsPerRow } = useResponsiveLayout();

  const handleMoreClick = () => {
    onMoreClick?.(category);
  };

  return (
    <div className="flex flex-col gap-2.5 w-full">
      <CategoryHeader title={category.name} onMoreClick={handleMoreClick} />

      <FilterGrid
        channels={category.channels}
        maxCards={cardsPerRow}
        selectedFilter={selectedFilter}
        onChannelClick={onChannelClick}
      />
    </div>
  );
};

export default FilterSwimlane;
