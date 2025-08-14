import React from "react";
import { useNavigation } from "../hooks/useNavigation";
import { useResponsiveLayout } from "../hooks/useResponsiveLayout";

interface BackHeaderProps {
  title?: string;
}

export const BackHeader: React.FC<BackHeaderProps> = ({ title }) => {
  const { navigateToScreen } = useNavigation();
  const { leftMargin, horizontalPadding } = useResponsiveLayout();

  const handleBackClick = () => {
    navigateToScreen("home");
  };

  return (
    <div
      className="bg-white/90 backdrop-blur-md border-b border-gray-200/50"
      style={{
        paddingLeft: `${leftMargin + horizontalPadding}px`,
        paddingRight: `${horizontalPadding}px`,
      }}
    >
      <div className="flex items-center justify-between min-h-[100px] py-6">
        {/* Back Button */}
        <button
          onClick={handleBackClick}
          className="flex items-center justify-center w-12 h-12 rounded-lg hover:bg-gray-100 transition-colors"
        >
          <svg
            className="w-6 h-6 text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        {/* Title (if provided) */}
        {title && (
          <h1 className="text-xl font-semibold text-gray-800 text-center flex-1 mx-4">
            {title}
          </h1>
        )}

        {/* Spacer to balance layout when no title */}
        {!title && <div className="w-12 h-12" />}
      </div>
    </div>
  );
};

export default BackHeader;
