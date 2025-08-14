import { useEffect } from "react";

interface TextModalProps {
  isOpen: boolean;
  title: string;
  content: string;
  onClose: () => void;
}

export const TextModal: React.FC<TextModalProps> = ({
  isOpen,
  title,
  content,
  onClose,
}) => {
  // Handle escape key press
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      // Prevent body scroll when modal is open
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-[80]"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-[80] flex items-center justify-center p-4">
        <div
          className="bg-white rounded-lg shadow-lg relative"
          style={{
            width: "60%",
            height: "60%",
            maxWidth: "800px",
            maxHeight: "600px",
            minWidth: "400px",
            minHeight: "300px",
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full transition-colors"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Content */}
          <div className="h-full flex flex-col p-6 pr-14">
            {/* Title */}
            <h2 className="text-2xl font-bold text-gray-800 mb-4 pr-8">
              {title}
            </h2>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto">
              <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-wrap">
                {content}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TextModal;
