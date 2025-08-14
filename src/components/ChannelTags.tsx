import React from "react";

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
        <button
          key={index}
          onClick={() => handleTagClick(tag)}
          className="px-4 py-3 text-sm font-medium text-gray-700 bg-transparent border border-gray-300 rounded-full hover:border-gray-400 hover:bg-gray-50 transition-colors"
        >
          {tag}
        </button>
      ))}
    </div>
  );
};

export default ChannelTags;
