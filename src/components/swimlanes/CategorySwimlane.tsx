import React from "react";
import type { Category, Channel } from "../../types";
import { useResponsiveLayout } from "../../hooks/useResponsiveLayout";
import CategoryHeader from "./CategoryHeader";
import ChannelGrid from "./ChannelGrid";

interface CategorySwimlaneProps {
  category: Category;
  onChannelClick?: (channel: Channel) => void;
  onMoreClick?: (category: Category) => void;
}

export const CategorySwimlane: React.FC<CategorySwimlaneProps> = ({
  category,
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

      <ChannelGrid
        channels={category.channels}
        maxCards={cardsPerRow}
        onChannelClick={onChannelClick}
      />
    </div>
  );
};

export default CategorySwimlane;
