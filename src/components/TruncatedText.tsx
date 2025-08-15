import { useState, useRef, useEffect } from "react";

interface TruncatedTextProps {
  text: string;
  maxLines?: number;
  className?: string;
  onShowMore?: (text: string) => void;
}

export const TruncatedText: React.FC<TruncatedTextProps> = ({
  text,
  maxLines = 3,
  className = "",
  onShowMore,
}) => {
  const [isTruncated, setIsTruncated] = useState(false);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkTruncation = () => {
      if (!textRef.current) return;

      // Check if text is actually truncated by comparing scroll height to client height
      const element = textRef.current;
      setIsTruncated(element.scrollHeight > element.clientHeight);
    };

    // Check after a small delay to ensure DOM is ready
    const timeoutId = setTimeout(checkTruncation, 10);

    // Also check on resize
    window.addEventListener("resize", checkTruncation);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("resize", checkTruncation);
    };
  }, [text, maxLines]);

  const handleClick = () => {
    if (isTruncated && onShowMore) {
      onShowMore(text);
    }
  };

  // Use explicit line-clamp classes based on maxLines
  const getLineClampClass = () => {
    switch (maxLines) {
      case 1:
        return "line-clamp-1";
      case 2:
        return "line-clamp-2";
      case 3:
        return "line-clamp-3";
      default:
        return "line-clamp-3";
    }
  };

  return (
    <div
      ref={textRef}
      className={`
        ${getLineClampClass()}
        ${className}
        ${
          isTruncated && onShowMore
            ? "cursor-pointer hover:text-black transition-colors"
            : ""
        }
      `}
      onClick={handleClick}
    >
      {text}
    </div>
  );
};

export default TruncatedText;
