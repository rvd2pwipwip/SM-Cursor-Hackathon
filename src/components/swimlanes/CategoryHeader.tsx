import React from "react";

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
          text-stingray-gray-700 font-roboto font-normal text-4xl
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
        className="flex items-center gap-2 cursor-pointer group"
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
          <svg
            width="10"
            height="18"
            viewBox="0 0 10 18"
            fill="none"
            className="fill-current"
          >
            <path
              d="M1.5 1.5L8.5 9L1.5 16.5"
              stroke="currentColor"
              strokeWidth="2"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default CategoryHeader;
