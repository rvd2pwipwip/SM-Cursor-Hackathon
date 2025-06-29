import { useState, useEffect } from "react";
import type { ResponsiveLayout } from "../types";

const BREAKPOINTS = {
  xl: 1920,
  lg: 1600,
  md: 1200,
  sm: 768,
  xs: 480,
} as const;

const LAYOUT_CONFIGS = {
  xl: { cardsPerRow: 6, cardSize: "lg" as const },
  lg: { cardsPerRow: 5, cardSize: "md" as const },
  md: { cardsPerRow: 4, cardSize: "md" as const },
  sm: { cardsPerRow: 3, cardSize: "sm" as const },
  xs: { cardsPerRow: 2, cardSize: "sm" as const },
  xxs: { cardsPerRow: 1, cardSize: "md" as const },
} as const;

type ValidCardsPerRow = 1 | 2 | 3 | 4 | 5 | 6;

export const useResponsiveLayout = (): ResponsiveLayout & {
  containerPadding: number;
  sidebarWidth: number;
} => {
  const [layout, setLayout] = useState<ResponsiveLayout>({
    cardsPerRow: 6,
    cardSize: "lg",
    breakpoint: "xl",
  });

  useEffect(() => {
    const calculateLayout = () => {
      const width = window.innerWidth;
      const sidebarWidth = 80; // Fixed sidebar width
      const containerPadding = 40; // Horizontal padding
      const availableWidth = width - sidebarWidth - containerPadding * 2;

      let config;
      let breakpoint;

      if (width >= BREAKPOINTS.xl) {
        config = LAYOUT_CONFIGS.xl;
        breakpoint = "xl";
      } else if (width >= BREAKPOINTS.lg) {
        config = LAYOUT_CONFIGS.lg;
        breakpoint = "lg";
      } else if (width >= BREAKPOINTS.md) {
        config = LAYOUT_CONFIGS.md;
        breakpoint = "md";
      } else if (width >= BREAKPOINTS.sm) {
        config = LAYOUT_CONFIGS.sm;
        breakpoint = "sm";
      } else if (width >= BREAKPOINTS.xs) {
        config = LAYOUT_CONFIGS.xs;
        breakpoint = "xs";
      } else {
        config = LAYOUT_CONFIGS.xxs;
        breakpoint = "xxs";
      }

      // Ensure cards fit properly with gap spacing
      const cardGap = 20;
      const totalGaps = (config.cardsPerRow - 1) * cardGap;
      const cardWidth = (availableWidth - totalGaps) / config.cardsPerRow;

      // Adjust card count if cards would be too small
      let finalCardsPerRow = config.cardsPerRow;
      const minCardWidth = 140; // Minimum card width

      if (cardWidth < minCardWidth && finalCardsPerRow > 1) {
        const calculatedCards = Math.floor(
          (availableWidth + cardGap) / (minCardWidth + cardGap)
        );
        finalCardsPerRow = Math.max(
          1,
          Math.min(6, calculatedCards)
        ) as ValidCardsPerRow;
      }

      setLayout({
        cardsPerRow: finalCardsPerRow,
        cardSize: config.cardSize,
        breakpoint,
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
