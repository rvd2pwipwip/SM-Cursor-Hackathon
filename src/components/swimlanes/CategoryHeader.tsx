import React from "react";
import { Next } from "stingray-icons";

interface CategoryHeaderProps {
  title: string;
  onMoreClick?: () => void;
}

export const CategoryHeader: React.FC<CategoryHeaderProps> = ({
  title,
  onMoreClick,
}) => {
  const handleMoreClick = () => {
    onMoreClick?.();
    console.log("More clicked for category:", title);
  };

  return (
    <div className="flex items-end justify-between w-full">
      {/* Category Title */}
      <div className="flex items-center">
        <h2
          className="
          text-stingray-gray-700 font-roboto font-normal text-3xl
          leading-tight
        "
        >
          {title}
        </h2>
      </div>

      {/* Spacer */}
      <div className="flex-1" />

      {/* More Button */}
      <div
        className="flex items-center cursor-pointer group"
        onClick={handleMoreClick}
      >
        <span
          className="
          text-stingray-gray-500 font-roboto font-normal text-2xl
          group-hover:text-stingray-blue transition-colors duration-200
        "
        >
          More
        </span>
        <div
          className="
          w-8 h-8 flex items-center justify-center
          group-hover:text-stingray-blue transition-colors duration-200
        "
        >
          <Next size={18} />
        </div>
      </div>
    </div>
  );
};

export default CategoryHeader;
