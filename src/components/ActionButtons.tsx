import React from "react";
import type { Channel } from "../types";

interface ActionButtonsProps {
  channel: Channel;
  onPlay?: (channel: Channel) => void;
  onLike?: (channel: Channel) => void;
  onShare?: (channel: Channel) => void;
}

export const ActionButtons: React.FC<ActionButtonsProps> = ({
  channel,
  onPlay,
  onLike,
  onShare,
}) => {
  const handlePlay = () => {
    onPlay?.(channel);
    console.log("Playing channel:", channel.name);
  };

  const handleLike = () => {
    onLike?.(channel);
    console.log("Liking channel:", channel.name);
  };

  const handleShare = () => {
    onShare?.(channel);
    console.log("Sharing channel:", channel.name);
  };

  return (
    <div className="flex gap-2.5">
      {/* Play Button */}
      <button
        onClick={handlePlay}
        className="flex items-center gap-3 px-6 py-4 bg-stingray-blue text-white rounded-full hover:bg-stingray-blue/90 transition-colors"
      >
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
          <path d="M8 5v14l11-7z" />
        </svg>
        <span className="text-lg font-medium">Play</span>
      </button>

      {/* Like Button */}
      <button
        onClick={handleLike}
        className={`flex items-center gap-3 px-6 py-4 rounded-full border-2 transition-colors ${
          channel.isFavorite
            ? "bg-stingray-blue text-white border-stingray-blue"
            : "bg-transparent text-gray-700 border-gray-300 hover:border-gray-400"
        }`}
      >
        <svg
          className="w-7 h-7"
          fill={channel.isFavorite ? "currentColor" : "none"}
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
        <span className="text-lg font-medium">Like</span>
      </button>

      {/* Share Button */}
      <button
        onClick={handleShare}
        className="flex items-center gap-3 px-6 py-4 bg-transparent text-gray-700 border-2 border-gray-300 rounded-full hover:border-gray-400 transition-colors"
      >
        <svg
          className="w-7 h-7"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"
          />
        </svg>
        <span className="text-lg font-medium">Share</span>
      </button>
    </div>
  );
};

export default ActionButtons;
