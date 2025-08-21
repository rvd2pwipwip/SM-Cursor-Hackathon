import React from "react";
import { Button } from "@stingray/component-library";
import { PlayPlayer, Like, RemoveFromLiked, Share } from "stingray-icons";
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
    console.log(
      channel.isFavorite ? "Unliking channel:" : "Liking channel:",
      channel.name
    );
  };

  const handleShare = () => {
    onShare?.(channel);
    console.log("Sharing channel:", channel.name);
  };

  return (
    <div className="flex gap-2.5">
      {/* Play Button - Primary variant */}
      <Button
        variant="primary"
        size="md"
        startIcon={<PlayPlayer />}
        onClick={handlePlay}
      >
        Play
      </Button>

      {/* Like Button - Always secondary variant, changes icon and label based on favorite status */}
      <Button
        variant="secondary"
        size="md"
        startIcon={channel.isFavorite ? <RemoveFromLiked /> : <Like />}
        onClick={handleLike}
      >
        {channel.isFavorite ? "Unlike" : "Like"}
      </Button>

      {/* Share Button - Secondary variant */}
      <Button
        variant="secondary"
        size="md"
        startIcon={<Share />}
        onClick={handleShare}
      >
        Share
      </Button>
    </div>
  );
};

export default ActionButtons;
