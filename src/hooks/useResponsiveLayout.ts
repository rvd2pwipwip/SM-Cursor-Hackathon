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
  xl: { minCardWidth: 200, maxCardWidth: 400, minGap: 24, maxGap: 48 },
  lg: { minCardWidth: 180, maxCardWidth: 350, minGap: 22, maxGap: 44 },
  md: { minCardWidth: 160, maxCardWidth: 300, minGap: 16, maxGap: 32 },
  sm: { minCardWidth: 140, maxCardWidth: 250, minGap: 14, maxGap: 28 },
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

  // Add safety buffer to prevent overflow (account for sub-pixel rendering, margins, etc.)
  const safeAvailableWidth = availableWidth - 4;

  // Try different numbers of cards per row with size constraints
  for (let numCards = 6; numCards >= 1; numCards--) {
    const minTotalGaps = (numCards - 1) * config.minGap;
    const availableForCards = safeAvailableWidth - minTotalGaps;
    const theoreticalCardWidth = availableForCards / numCards;

    // Check if this card width fits within our min-max range
    if (
      theoreticalCardWidth >= config.minCardWidth &&
      theoreticalCardWidth <= config.maxCardWidth
    ) {
      // Use floor to ensure we don't exceed container width
      const cardWidth = Math.floor(theoreticalCardWidth);

      // Calculate remaining space and distribute as gaps
      const totalCardWidth = numCards * cardWidth;
      const remainingSpace = safeAvailableWidth - totalCardWidth;
      const gapSize = numCards > 1 ? remainingSpace / (numCards - 1) : 0;

      // Ensure gap is within bounds
      const clampedGap = Math.max(
        config.minGap,
        Math.min(config.maxGap, gapSize)
      );

      // Final verification: ensure total width doesn't exceed safe available width
      const totalWidth = totalCardWidth + (numCards - 1) * clampedGap;
      if (totalWidth <= safeAvailableWidth) {
        // Determine card size category based on width
        const cardSizeCategory =
          cardWidth >= 220 ? "lg" : cardWidth >= 180 ? "md" : "sm";

        return {
          cardsPerRow: numCards as ValidCardsPerRow,
          cardSize: cardSizeCategory,
          gapSize: Math.floor(clampedGap), // Floor to be safe
          cardWidth,
        };
      }
    }
  }

  // Fallback for ultra-wide screens: prioritize maximum card count
  // Try to fit as many cards as possible, capping card size at maxCardWidth
  for (let numCards = 6; numCards >= 2; numCards--) {
    const minTotalGaps = (numCards - 1) * config.minGap;
    const availableForCards = safeAvailableWidth - minTotalGaps;
    const theoreticalCardWidth = availableForCards / numCards;

    // If card would be too large, cap it at maxCardWidth
    if (theoreticalCardWidth > config.maxCardWidth) {
      const cardWidth = config.maxCardWidth;
      const totalCardWidth = numCards * cardWidth;
      const remainingSpace = safeAvailableWidth - totalCardWidth;

      // Check if we have enough space for minimum gaps
      const requiredGaps = (numCards - 1) * config.minGap;
      if (remainingSpace >= requiredGaps) {
        const gapSize = numCards > 1 ? remainingSpace / (numCards - 1) : 0;
        const clampedGap = Math.max(
          config.minGap,
          Math.min(config.maxGap, gapSize)
        );

        // Final verification
        const totalWidth = totalCardWidth + (numCards - 1) * clampedGap;
        if (totalWidth <= safeAvailableWidth) {
          const cardSizeCategory =
            cardWidth >= 220 ? "lg" : cardWidth >= 180 ? "md" : "sm";

          return {
            cardsPerRow: numCards as ValidCardsPerRow,
            cardSize: cardSizeCategory,
            gapSize: Math.floor(clampedGap),
            cardWidth,
          };
        }
      }
    }
  }

  // Final fallback: single card that fits within max width
  const singleCardWidth = Math.min(config.maxCardWidth, safeAvailableWidth);
  const cardSize =
    singleCardWidth >= 220 ? "lg" : singleCardWidth >= 180 ? "md" : "sm";

  return {
    cardsPerRow: 1 as ValidCardsPerRow,
    cardSize,
    gapSize: 0,
    cardWidth: Math.floor(singleCardWidth),
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
