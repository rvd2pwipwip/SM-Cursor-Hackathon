import React from "react";
import type { Channel } from "../../types";

interface ChannelCardProps {
  channel: Channel;
  size?: "sm" | "md" | "lg";
  onClick?: (channel: Channel) => void;
}

const sizeClasses = {
  sm: "w-card-sm h-card-sm",
  md: "w-card-md h-card-md",
  lg: "w-card-lg h-card-lg",
};

export const ChannelCard: React.FC<ChannelCardProps> = ({
  channel,
  size = "md",
  onClick,
}) => {
  const handleClick = () => {
    onClick?.(channel);
    console.log("Channel clicked:", channel.name);
  };

  return (
    <div
      className={`
        ${sizeClasses[size]} 
        flex flex-col gap-2.5 cursor-pointer group
        transition-transform duration-200 hover:scale-105
      `}
      onClick={handleClick}
    >
      {/* Thumbnail */}
      <div
        className={`
          ${sizeClasses[size]} 
          bg-stingray-gray-500 rounded-card 
          flex items-center justify-center
          group-hover:shadow-lg transition-shadow duration-200
        `}
      >
        {channel.thumbnail ? (
          <img
            src={channel.thumbnail}
            alt={channel.name}
            className="w-full h-full object-cover rounded-card"
          />
        ) : (
          <div className="text-white text-4xl font-light opacity-50">♪</div>
        )}
      </div>

      {/* Label */}
      <div className="w-full">
        <h3
          className="
            text-stingray-gray-800 font-roboto font-normal text-2xl
            leading-tight line-clamp-2 
          "
          title={channel.name}
        >
          {channel.name}
        </h3>
      </div>
    </div>
  );
};

export default ChannelCard;
