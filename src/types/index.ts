export interface Channel {
  id: string;
  name: string;
  thumbnail?: string;
  category: string;
  type: "music" | "podcast" | "radio" | "audiobook";
  description?: string;
  featured?: boolean;
  isFavorite?: boolean;
}

export interface Category {
  id: string;
  name: string;
  channels: Channel[];
  type: "music" | "podcast" | "radio" | "audiobook" | "mixed";
  featured?: boolean;
}

export interface ContentFilter {
  id: "all" | "music" | "podcasts" | "radio";
  label: string;
  active: boolean;
}

export interface ResponsiveLayout {
  cardsPerRow: 1 | 2 | 3 | 4 | 5 | 6;
  cardSize: "sm" | "md" | "lg";
  breakpoint: string;
  cardWidth: number;
  gapWidth: number;
  useDistributedLayout: boolean;
  favoriteCardsPerRow: number;
  favoriteCardWidth: number;
}

export interface NavigationItem {
  id: string;
  label: string;
  icon: string;
  active: boolean;
  path: string;
}

export interface AppState {
  currentView: "swimlanes" | "category" | "search";
  selectedCategory?: string;
  contentFilter: ContentFilter["id"];
  categories: Category[];
  isLoading: boolean;
  error?: string;
}

export interface ModalState {
  isOpen: boolean;
  category?: Category;
  onClose: () => void;
}

// Music Filter Types
export interface FilterItem {
  id: string;
  label: string;
  description?: string;
  color?: string;
  isSelected?: boolean;
}

export interface FilterCategory {
  id: string;
  name: string;
  items: FilterItem[];
}

export type FilterType = "genre" | "era" | "mood" | "activity" | "theme";

export interface MusicFilters {
  genre: FilterCategory;
  era: FilterCategory;
  mood: FilterCategory;
  activity: FilterCategory;
  theme: FilterCategory;
}
