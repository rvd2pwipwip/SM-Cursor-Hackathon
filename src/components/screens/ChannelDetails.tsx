import { useState, useRef, useEffect, useLayoutEffect } from "react";
import { useNavigation } from "../../hooks/useNavigation";
import { useResponsiveLayout } from "../../hooks/useResponsiveLayout";
import { mockChannels } from "../../data/channels";
import type { Channel, Category } from "../../types";
import BackHeader from "../BackHeader";
import ActionButtons from "../ActionButtons";
import ChannelTags from "../ChannelTags";
import CategorySwimlane from "../swimlanes/CategorySwimlane";
import TruncatedText from "../TruncatedText";
import TextModal from "../TextModal";

function ChannelDetails() {
  const { selectedChannel, navigateToChannel } = useNavigation();
  const { leftMargin, horizontalPadding } = useResponsiveLayout();
  const [headerHeight, setHeaderHeight] = useState(0);
  const [isHeaderMeasured, setIsHeaderMeasured] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ title: "", text: "" });

  // Use useLayoutEffect to measure header AFTER DOM layout but BEFORE paint
  useLayoutEffect(() => {
    const measureHeaderHeight = () => {
      if (headerRef.current) {
        // Force a reflow to ensure accurate measurement
        void headerRef.current.offsetHeight;

        // Use getBoundingClientRect for most accurate measurements
        const rect = headerRef.current.getBoundingClientRect();
        const height = Math.ceil(rect.height); // Ceil to avoid sub-pixel issues

        setHeaderHeight(height);
        setIsHeaderMeasured(true);
      }
    };

    // Measure immediately in layout effect
    measureHeaderHeight();
  }, [selectedChannel]); // Re-measure when channel changes

  // Separate effect for resize handling
  useEffect(() => {
    const updateHeaderHeight = () => {
      if (headerRef.current && isHeaderMeasured) {
        // Force reflow
        void headerRef.current.offsetHeight;

        const rect = headerRef.current.getBoundingClientRect();
        const height = Math.ceil(rect.height);

        setHeaderHeight(height);
      }
    };

    // Use ResizeObserver for dynamic height changes
    let resizeObserver: ResizeObserver | null = null;

    if (headerRef.current && isHeaderMeasured) {
      resizeObserver = new ResizeObserver((entries) => {
        for (const entry of entries) {
          const height = Math.ceil(entry.contentRect.height);
          setHeaderHeight(height);
        }
      });
      resizeObserver.observe(headerRef.current);
    }

    // Fallback for window resize
    window.addEventListener("resize", updateHeaderHeight);

    return () => {
      if (resizeObserver) {
        resizeObserver.disconnect();
      }
      window.removeEventListener("resize", updateHeaderHeight);
    };
  }, [isHeaderMeasured]); // Only set up observers after initial measurement

  // If no channel is selected, redirect to home (shouldn't happen in normal flow)
  if (!selectedChannel) {
    return (
      <div className="flex-1 flex items-center justify-center">
        <p className="text-gray-500 text-lg">No channel selected</p>
      </div>
    );
  }

  const handleChannelClick = (channel: Channel) => {
    navigateToChannel(channel);
  };

  const handleMoreClick = (category: Category) => {
    console.log("Show more for category:", category.name);
  };

  const handlePlay = (channel: Channel) => {
    console.log("Playing channel:", channel.name);
  };

  const handleLike = (channel: Channel) => {
    console.log("Liking channel:", channel.name);
    // TODO: Update favorite status
  };

  const handleShare = (channel: Channel) => {
    console.log("Sharing channel:", channel.name);
    // TODO: Implement share functionality
  };

  const handleTagClick = (tag: string) => {
    console.log("Clicked tag:", tag);
    // TODO: Filter channels by tag or navigate to tag results
  };

  const handleShowMoreDescription = (text: string) => {
    setModalContent({
      title: selectedChannel.name,
      text: text,
    });
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // Get related channels (same category, excluding current channel)
  const relatedChannels = mockChannels
    .filter(
      (channel) =>
        channel.category === selectedChannel.category &&
        channel.id !== selectedChannel.id
    )
    .slice(0, 6); // Limit to 6 related channels

  const relatedCategory: Category = {
    id: "related",
    name: "Related",
    channels: relatedChannels,
    type: selectedChannel.type,
  };

  return (
    <div className="flex-1 relative">
      {/* Fixed Back Header */}
      <div ref={headerRef} className="fixed top-0 left-0 right-0 z-50">
        <BackHeader />
      </div>

      {/* Scrollable Content */}
      <div className="h-full overflow-y-auto hide-scrollbar">
        <div
          className="space-y-10 pb-10"
          style={{
            marginLeft: `${leftMargin}px`,
            paddingLeft: `${horizontalPadding}px`,
            paddingRight: `${horizontalPadding}px`,
            paddingTop: `${headerHeight + 16}px`, // Dynamic padding with 1rem (16px) buffer
          }}
        >
          {/* Channel Info Section */}
          <div className="flex gap-10">
            {/* Large Channel Thumbnail */}
            <div
              className="bg-stingray-gray-500 rounded-3xl flex-shrink-0 flex items-center justify-center"
              style={{
                width: "260px",
                height: "260px",
              }}
            >
              {selectedChannel.thumbnail ? (
                <img
                  src={selectedChannel.thumbnail}
                  alt={selectedChannel.name}
                  className="w-full h-full object-cover rounded-3xl"
                />
              ) : (
                <span className="text-white text-4xl font-light">
                  {selectedChannel.name.charAt(0)}
                </span>
              )}
            </div>

            {/* Channel Details */}
            <div className="flex-1 space-y-5">
              {/* Channel Title */}
              <h1 className="text-4xl font-black text-stingray-gray-800 leading-tight">
                {selectedChannel.name}
              </h1>

              {/* Action Buttons */}
              <ActionButtons
                channel={selectedChannel}
                onPlay={handlePlay}
                onLike={handleLike}
                onShare={handleShare}
              />

              {/* Description */}
              {selectedChannel.description && (
                <TruncatedText
                  text={selectedChannel.description}
                  maxLines={3}
                  className="text-lg text-stingray-gray-800 leading-relaxed"
                  onShowMore={handleShowMoreDescription}
                />
              )}

              {/* Tags */}
              {selectedChannel.tags && selectedChannel.tags.length > 0 && (
                <ChannelTags
                  tags={selectedChannel.tags}
                  onTagClick={handleTagClick}
                />
              )}
            </div>
          </div>

          {/* Related Channels Section */}
          {relatedChannels.length > 0 && (
            <CategorySwimlane
              category={relatedCategory}
              onChannelClick={handleChannelClick}
              onMoreClick={handleMoreClick}
            />
          )}

          {/* Empty state for no related channels */}
          {relatedChannels.length === 0 && (
            <div className="text-center py-20">
              <p className="text-stingray-gray-700 text-xl">
                No related channels found
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Text Modal */}
      <TextModal
        isOpen={isModalOpen}
        title={modalContent.title}
        content={modalContent.text}
        onClose={handleCloseModal}
      />
    </div>
  );
}

export default ChannelDetails;
