import { useState, useEffect } from "react";
import type { ResponsiveLayout } from "../types";

type ValidCardsPerRow = 1 | 2 | 3 | 4 | 5 | 6;

interface BreakpointConfig {
  minCardWidth: number;
  maxCardWidth: number;
  minGap: number;
  maxGap: number;
}

const BREAKPOINT_CONFIGS: Record<string, BreakpointConfig> = {
  xl: { minCardWidth: 200, maxCardWidth: 280, minGap: 20, maxGap: 32 },
  lg: { minCardWidth: 180, maxCardWidth: 240, minGap: 18, maxGap: 28 },
  md: { minCardWidth: 160, maxCardWidth: 220, minGap: 16, maxGap: 24 },
  sm: { minCardWidth: 140, maxCardWidth: 200, minGap: 14, maxGap: 20 },
};

const calculateOptimalLayout = (
  availableWidth: number,
  breakpoint: string
): {
  cardsPerRow: ValidCardsPerRow;
  cardSize: "sm" | "md" | "lg";
  gapSize: number;
  cardWidth: number;
} => {
  const config = BREAKPOINT_CONFIGS[breakpoint] || BREAKPOINT_CONFIGS.sm;

  // Try different numbers of cards per row
  for (let numCards = 6; numCards >= 1; numCards--) {
    const totalGaps = (numCards - 1) * config.minGap;
    const availableForCards = availableWidth - totalGaps;
    const cardWidth = availableForCards / numCards;

    // Check if this card width fits within our min-max range
    if (cardWidth >= config.minCardWidth && cardWidth <= config.maxCardWidth) {
      // Calculate the actual gap we can use
      const remainingWidth = availableWidth - numCards * cardWidth;
      const actualGap = numCards > 1 ? remainingWidth / (numCards - 1) : 0;

      // Ensure gap is within bounds
      const clampedGap = Math.max(
        config.minGap,
        Math.min(config.maxGap, actualGap)
      );

      // Determine card size category based on width
      const cardSize = cardWidth >= 220 ? "lg" : cardWidth >= 180 ? "md" : "sm";

      return {
        cardsPerRow: numCards as ValidCardsPerRow,
        cardSize,
        gapSize: Math.round(clampedGap),
        cardWidth: Math.round(cardWidth),
      };
    }
  }

  // Fallback: single card that fits within max width
  const singleCardWidth = Math.min(config.maxCardWidth, availableWidth);
  const cardSize =
    singleCardWidth >= 220 ? "lg" : singleCardWidth >= 180 ? "md" : "sm";

  return {
    cardsPerRow: 1 as ValidCardsPerRow,
    cardSize,
    gapSize: 0,
    cardWidth: Math.round(singleCardWidth),
  };
};

export const useResponsiveLayout = (): ResponsiveLayout & {
  containerPadding: number;
  sidebarWidth: number;
} => {
  const [layout, setLayout] = useState<ResponsiveLayout>({
    cardsPerRow: 6,
    cardSize: "lg",
    breakpoint: "xl",
    cardWidth: 240,
    gapWidth: 24,
    useDistributedLayout: false,
  });

  useEffect(() => {
    const calculateLayout = () => {
      const width = window.innerWidth;
      const sidebarWidth = 80;
      const containerPadding = 40;
      const availableWidth = width - sidebarWidth - containerPadding * 2;

      // Determine breakpoint
      let breakpoint = "sm";
      if (width >= 1920) breakpoint = "xl";
      else if (width >= 1600) breakpoint = "lg";
      else if (width >= 1200) breakpoint = "md";
      else if (width >= 768) breakpoint = "sm";

      const optimalLayout = calculateOptimalLayout(availableWidth, breakpoint);

      setLayout({
        cardsPerRow: optimalLayout.cardsPerRow,
        cardSize: optimalLayout.cardSize,
        cardWidth: optimalLayout.cardWidth,
        gapWidth: optimalLayout.gapSize,
        breakpoint,
        useDistributedLayout: false,
      });
    };

    calculateLayout();
    window.addEventListener("resize", calculateLayout);

    return () => window.removeEventListener("resize", calculateLayout);
  }, []);

  return {
    ...layout,
    containerPadding: 40,
    sidebarWidth: 80,
  };
};
