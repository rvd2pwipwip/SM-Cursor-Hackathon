import React from "react";

interface CategoryCardProps {
  label: string;
  size?: "sm" | "md" | "lg";
  width?: number; // Dynamic width for responsive layout
  isSelected?: boolean;
  onClick?: () => void;
  className?: string;
}

// Fallback sizes for non-distributed layouts
const fallbackSizes = {
  sm: 160,
  md: 200,
  lg: 240,
};

export const CategoryCard: React.FC<CategoryCardProps> = ({
  label,
  size = "md",
  width,
  isSelected = false,
  onClick,
  className = "",
}) => {
  const handleClick = () => {
    onClick?.();
    console.log("Category clicked:", label);
  };

  // Use dynamic width if provided, otherwise fall back to size-based width
  const cardWidth = width || fallbackSizes[size];
  const cardHeight = cardWidth; // Always 1:1 square aspect ratio

  // Calculate dynamic border radius (10% of card width, matching ChannelCard)
  const borderRadius = Math.round(cardWidth * 0.1);

  // Calculate dynamic font size based on card width
  // Base formula: roughly 12% of card width, with min/max bounds for readability
  const baseFontSize = Math.round(cardWidth * 0.12);
  const fontSize = Math.max(14, Math.min(28, baseFontSize)); // Min 14px, max 28px

  return (
    <div
      className={`flex flex-col cursor-pointer group ${className}`}
      onClick={handleClick}
      style={{ width: cardWidth }}
    >
      {/* Square Thumbnail with Overlay Text */}
      <div
        className={`
          relative flex items-center justify-center flex-shrink-0 
          group-hover:shadow-lg transition-all duration-200 hover:scale-105
          ${isSelected ? "ring-2 ring-blue-500 transform scale-105" : ""}
        `}
        style={{
          width: cardWidth,
          height: cardHeight,
          borderRadius: `${borderRadius}px`,
          backgroundColor: "#777777", // Gray background as per Figma
        }}
      >
        {/* Label Overlay - Centered white text */}
        <div
          className="absolute inset-0 flex items-center justify-center p-2"
          style={{
            borderRadius: `${borderRadius}px`,
          }}
        >
          <span
            className="text-white font-black text-center leading-tight"
            style={{
              fontSize: `${fontSize}px`,
              fontWeight: 900, // Font-weight: 900 as per Figma
            }}
          >
            {label}
          </span>
        </div>

        {/* Selection indicator */}
        {isSelected && (
          <div className="absolute top-2 right-2 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
            <svg
              className="w-4 h-4 text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryCard;
