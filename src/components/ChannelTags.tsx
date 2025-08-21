import React from "react";
import { Button } from "@stingray/component-library";

interface ChannelTagsProps {
  tags: string[];
  onTagClick?: (tag: string) => void;
}

export const ChannelTags: React.FC<ChannelTagsProps> = ({
  tags,
  onTagClick,
}) => {
  if (!tags || tags.length === 0) {
    return null;
  }

  const handleTagClick = (tag: string) => {
    onTagClick?.(tag);
    console.log("Clicked tag:", tag);
  };

  return (
    <div className="flex flex-wrap gap-2.5">
      {tags.map((tag, index) => (
        <Button
          key={index}
          variant="secondary"
          size="sm"
          onClick={() => handleTagClick(tag)}
        >
          {tag}
        </Button>
      ))}
    </div>
  );
};

export default ChannelTags;
