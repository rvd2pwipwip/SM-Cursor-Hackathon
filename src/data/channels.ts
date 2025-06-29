import type { Channel, Category } from "../types";

export const mockChannels: Channel[] = [
  // Most Popular
  { id: "1", name: "Today's Top 40", category: "mostPopular", type: "music" },
  {
    id: "2",
    name: "Massive Classic Rock",
    category: "mostPopular",
    type: "music",
  },
  {
    id: "3",
    name: "All-Time Greatest Hits",
    category: "mostPopular",
    type: "music",
  },
  { id: "4", name: "Easy Breezy", category: "mostPopular", type: "music" },
  {
    id: "5",
    name: "80s and '90s Pop Rock",
    category: "mostPopular",
    type: "music",
  },
  {
    id: "6",
    name: "Today's Hot Tracks: Country",
    category: "mostPopular",
    type: "music",
  },

  // Wellness
  {
    id: "7",
    name: "Powerful Day Ahead Affirmations",
    category: "wellness",
    type: "podcast",
  },
  { id: "8", name: "Reiki", category: "wellness", type: "music" },
  { id: "9", name: "Om", category: "wellness", type: "music" },
  { id: "10", name: "Peaceful Forest", category: "wellness", type: "music" },
  { id: "11", name: "Softest Piano Ever", category: "wellness", type: "music" },
  { id: "12", name: "Songbirds", category: "wellness", type: "music" },

  // New Releases
  {
    id: "13",
    name: "Holiday Favourites",
    category: "newReleases",
    type: "music",
  },
  { id: "14", name: "Franco Fêtes", category: "newReleases", type: "music" },
  { id: "15", name: "TikTok Radio", category: "newReleases", type: "radio" },
  {
    id: "16",
    name: "Today's Hot Tracks: Indie",
    category: "newReleases",
    type: "music",
  },
  {
    id: "17",
    name: "Today's Hot Tracks: Hip-Hop",
    category: "newReleases",
    type: "music",
  },
  {
    id: "18",
    name: "Today's Hot Tracks: Dance",
    category: "newReleases",
    type: "music",
  },

  // Recommendations
  { id: "19", name: "Pop Hits", category: "recommendations", type: "music" },
  { id: "20", name: "Hit List", category: "recommendations", type: "music" },
  {
    id: "21",
    name: "Remember the 80's",
    category: "recommendations",
    type: "music",
  },
  {
    id: "22",
    name: "Maximum Party",
    category: "recommendations",
    type: "music",
  },
  { id: "23", name: "UK Top 40", category: "recommendations", type: "music" },
  {
    id: "24",
    name: "Total Hits UK",
    category: "recommendations",
    type: "music",
  },

  // Popular Podcasts in Your Area
  {
    id: "25",
    name: "Weather IN Detroit MI Daily",
    category: "localPodcasts",
    type: "podcast",
  },
  {
    id: "26",
    name: "Daily Detroit",
    category: "localPodcasts",
    type: "podcast",
  },
  {
    id: "27",
    name: "Listen in, Michigan",
    category: "localPodcasts",
    type: "podcast",
  },
  {
    id: "28",
    name: "Michigan Minute",
    category: "localPodcasts",
    type: "podcast",
  },
  {
    id: "29",
    name: "Total Michigan",
    category: "localPodcasts",
    type: "podcast",
  },
  {
    id: "30",
    name: "Michigan Minds",
    category: "localPodcasts",
    type: "podcast",
  },

  // Featured Podcasts
  {
    id: "31",
    name: "Stuff You Should Know",
    category: "featuredPodcasts",
    type: "podcast",
  },
  {
    id: "32",
    name: "The Daily",
    category: "featuredPodcasts",
    type: "podcast",
  },
  {
    id: "33",
    name: "Dateline NBC",
    category: "featuredPodcasts",
    type: "podcast",
  },
  {
    id: "34",
    name: "Front Burner",
    category: "featuredPodcasts",
    type: "podcast",
  },
  {
    id: "35",
    name: "SmartLess",
    category: "featuredPodcasts",
    type: "podcast",
  },
  {
    id: "36",
    name: "This American Life",
    category: "featuredPodcasts",
    type: "podcast",
  },

  // Top Audiobooks
  {
    id: "37",
    name: "The Mountains Sing",
    category: "topAudiobooks",
    type: "audiobook",
  },
  {
    id: "38",
    name: "The Bands of Mourning: A Mistborn Novel",
    category: "topAudiobooks",
    type: "audiobook",
  },
  {
    id: "39",
    name: "The Institute",
    category: "topAudiobooks",
    type: "audiobook",
  },
  { id: "40", name: "Tom Lake", category: "topAudiobooks", type: "audiobook" },
  {
    id: "41",
    name: "All the Sinners Bleed",
    category: "topAudiobooks",
    type: "audiobook",
  },
  {
    id: "42",
    name: "The Black Prism",
    category: "topAudiobooks",
    type: "audiobook",
  },

  // New Audiobooks
  {
    id: "43",
    name: "Toxic Prey",
    category: "newAudiobooks",
    type: "audiobook",
  },
  {
    id: "44",
    name: "The Beloved",
    category: "newAudiobooks",
    type: "audiobook",
  },
  {
    id: "45",
    name: "Star Wars: The Living Force",
    category: "newAudiobooks",
    type: "audiobook",
  },
  {
    id: "46",
    name: "The Familiar",
    category: "newAudiobooks",
    type: "audiobook",
  },
  {
    id: "47",
    name: "The Book That Broke the World",
    category: "newAudiobooks",
    type: "audiobook",
  },
  {
    id: "48",
    name: "Nuclear War: A Scenario",
    category: "newAudiobooks",
    type: "audiobook",
  },
];

export const mockCategories: Category[] = [
  {
    id: "mostPopular",
    name: "Most Popular",
    channels: mockChannels.filter((c) => c.category === "mostPopular"),
    type: "music",
    featured: true,
  },
  {
    id: "wellness",
    name: "Wellness",
    channels: mockChannels.filter((c) => c.category === "wellness"),
    type: "mixed",
  },
  {
    id: "newReleases",
    name: "New Releases",
    channels: mockChannels.filter((c) => c.category === "newReleases"),
    type: "mixed",
  },
  {
    id: "recommendations",
    name: "Recommendations",
    channels: mockChannels.filter((c) => c.category === "recommendations"),
    type: "music",
  },
  {
    id: "localPodcasts",
    name: "Popular Podcasts in Your Area",
    channels: mockChannels.filter((c) => c.category === "localPodcasts"),
    type: "podcast",
  },
  {
    id: "featuredPodcasts",
    name: "Featured Podcasts",
    channels: mockChannels.filter((c) => c.category === "featuredPodcasts"),
    type: "podcast",
  },
  {
    id: "topAudiobooks",
    name: "Top Audiobooks",
    channels: mockChannels.filter((c) => c.category === "topAudiobooks"),
    type: "audiobook",
  },
  {
    id: "newAudiobooks",
    name: "New Audiobooks",
    channels: mockChannels.filter((c) => c.category === "newAudiobooks"),
    type: "audiobook",
  },
];
