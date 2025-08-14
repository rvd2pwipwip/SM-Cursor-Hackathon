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
  const [showMore, setShowMore] = useState(false);
  const [displayText, setDisplayText] = useState(text);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const calculateTruncation = () => {
      if (!textRef.current) return;

      const textContainer = textRef.current;

      // First, check if the original text needs truncation at all
      const testElement = document.createElement("div");
      testElement.style.cssText =
        window.getComputedStyle(textContainer).cssText;
      testElement.style.position = "absolute";
      testElement.style.visibility = "hidden";
      testElement.style.width = textContainer.offsetWidth + "px";
      testElement.style.height = "auto";
      testElement.style.maxHeight = "none";
      testElement.style.overflow = "visible";
      testElement.style.webkitLineClamp = "none";
      testElement.style.display = "block";
      testElement.innerHTML = text;

      document.body.appendChild(testElement);
      const naturalHeight = testElement.scrollHeight;
      document.body.removeChild(testElement);

      // Calculate line height and max height
      const computedStyle = window.getComputedStyle(textContainer);
      const lineHeight = parseFloat(computedStyle.lineHeight);
      const maxHeight = lineHeight * maxLines;

      if (naturalHeight <= maxHeight) {
        // Text fits completely, no truncation needed
        setIsTruncated(false);
        setDisplayText(text);
        return;
      }

      // Text needs truncation - use CSS line-clamp to find natural break point
      setIsTruncated(true);

      // Create element with line-clamp to see where CSS would naturally truncate
      const clampedElement = document.createElement("div");
      clampedElement.style.cssText =
        window.getComputedStyle(textContainer).cssText;
      clampedElement.style.position = "absolute";
      clampedElement.style.visibility = "hidden";
      clampedElement.style.width = textContainer.offsetWidth + "px";
      clampedElement.style.display = "-webkit-box";
      clampedElement.style.webkitBoxOrient = "vertical";
      clampedElement.style.overflow = "hidden";
      clampedElement.style.webkitLineClamp = maxLines.toString();
      clampedElement.innerHTML = text;

      document.body.appendChild(clampedElement);

      // Binary search to find where CSS would naturally truncate
      let low = 0;
      let high = text.length;
      let naturalTruncatePoint = text.length;

      while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        const testText = text.substring(0, mid);

        clampedElement.innerHTML = testText;
        const testClampedHeight = clampedElement.scrollHeight;

        if (testClampedHeight <= maxHeight) {
          naturalTruncatePoint = mid;
          low = mid + 1;
        } else {
          high = mid - 1;
        }
      }

      document.body.removeChild(clampedElement);

      // Truncate earlier to make room for "... More"
      // Just back off by a small fixed amount - about 25-35 characters for "... More" space
      const backoffChars = 30; // Simpler fixed backoff
      const safeTruncatePoint = Math.max(
        0,
        naturalTruncatePoint - backoffChars
      );

      // Use the truncate point directly - allow mid-word truncation for simplicity
      const finalText = text.substring(0, safeTruncatePoint);

      setDisplayText(finalText);

      console.log("Simple truncation:", {
        originalLength: text.length,
        naturalTruncatePoint,
        backoffChars,
        finalLength: finalText.length,
        preview: finalText.slice(-30) + "...",
      });
    };

    // Use a timeout to ensure the element is rendered
    const timeoutId = setTimeout(calculateTruncation, 100);
    window.addEventListener("resize", calculateTruncation);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("resize", calculateTruncation);
    };
  }, [text, maxLines]);

  const handleShowMore = () => {
    if (onShowMore) {
      onShowMore(text);
    } else {
      setShowMore(true);
    }
  };

  const handleMoreClick = (e: React.MouseEvent) => {
    e.preventDefault();
    handleShowMore();
  };

  return (
    <div className="relative">
      <div ref={textRef} className={className}>
        {showMore || !isTruncated ? (
          <div>{text}</div>
        ) : (
          <div className="relative">
            <div
              className={`line-clamp-${maxLines}`}
              style={{
                display: "-webkit-box",
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                paddingRight: "4.5rem", // Reserve space for More button
              }}
            >
              {displayText}...
            </div>
            <button
              onClick={handleMoreClick}
              className="absolute bottom-0 right-0 text-stingray-blue hover:text-stingray-blue/80 font-medium transition-colors cursor-pointer"
              style={{
                background:
                  "linear-gradient(to right, transparent 0%, white 30%, white 100%)",
                paddingLeft: "8px",
              }}
            >
              More
            </button>
          </div>
        )}
      </div>

      {showMore && !onShowMore && (
        <div className="mt-2">
          <button
            onClick={() => setShowMore(false)}
            className="text-sm text-stingray-blue hover:text-stingray-blue/80 font-medium transition-colors"
          >
            Less
          </button>
        </div>
      )}
    </div>
  );
};

export default TruncatedText;
