import React from "react";

interface CategoryCardProps {
  label: string;
  size?: "sm" | "md" | "lg";
  width?: number; // Dynamic width for responsive layout
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
  onClick,
  className = "",
}) => {
  const handleClick = () => {
    onClick?.();
    console.log("Navigate to category grid view:", label);
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
        className="relative flex items-center justify-center flex-shrink-0 group-hover:shadow-lg transition-shadow duration-200"
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
      </div>
    </div>
  );
};

export default CategoryCard;
