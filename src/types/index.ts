export interface Channel {
  id: string;
  name: string;
  thumbnail?: string;
  category: string;
  type: "music" | "podcast" | "radio" | "audiobook";
  description?: string;
  featured?: boolean;
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
