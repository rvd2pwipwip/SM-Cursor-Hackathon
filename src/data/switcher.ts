export interface SwitcherTab {
  id: string;
  label: string;
}

export interface SwitcherConfig {
  tabs: SwitcherTab[];
  defaultActiveTab?: string;
}

// Home page content switcher configuration
export const homeContentSwitcher: SwitcherConfig = {
  tabs: [
    { id: "all", label: "All" },
    { id: "music", label: "Music" },
    { id: "podcasts", label: "Podcasts" },
    { id: "radio", label: "Radio" },
  ],
  defaultActiveTab: "all",
};

// Example of alternative configurations for different pages
export const musicGenreSwitcher: SwitcherConfig = {
  tabs: [
    { id: "pop", label: "Pop" },
    { id: "rock", label: "Rock" },
    { id: "jazz", label: "Jazz" },
    { id: "classical", label: "Classical" },
    { id: "electronic", label: "Electronic" },
  ],
  defaultActiveTab: "pop",
};

export const podcastCategorySwitcher: SwitcherConfig = {
  tabs: [
    { id: "news", label: "News" },
    { id: "comedy", label: "Comedy" },
    { id: "education", label: "Education" },
  ],
  defaultActiveTab: "news",
};
