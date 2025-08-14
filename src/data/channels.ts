import type { Channel, Category } from "../types";

export const mockChannels: Channel[] = [
  // Most Popular
  {
    id: "1",
    name: "Today's Top 40",
    category: "mostPopular",
    type: "music",
    isFavorite: true,
    thumbnail: "https://picsum.photos/400/400?random=1",
    description:
      "The hottest tracks dominating the charts right now. Featuring the biggest hits from the most popular artists across all genres, updated daily to keep you in the loop with what's trending.",
    tags: ["Pop", "Current Hits", "Top Charts", "Mainstream", "Popular"],
  },
  {
    id: "2",
    name: "Massive Classic Rock",
    category: "mostPopular",
    type: "music",
    description:
      "The legendary sounds that defined rock music. From iconic guitar solos to powerful vocals, experience the timeless tracks that shaped generations of music lovers.",
    tags: ["Classic Rock", "Guitar", "70s", "80s", "Legends"],
  },
  {
    id: "3",
    name: "All-Time Greatest Hits",
    category: "mostPopular",
    type: "music",
  },
  {
    id: "4",
    name: "Easy Breezy",
    category: "mostPopular",
    type: "music",
  },
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
  {
    id: "49",
    name: "Ultimate Rock Anthems",
    category: "mostPopular",
    type: "music",
    description:
      "The most powerful rock anthems that get your adrenaline pumping. Perfect for workouts, road trips, or whenever you need that extra boost of energy.",
    tags: ["Rock", "Anthems", "High Energy", "Motivation", "Classic"],
  },
  {
    id: "50",
    name: "Billboard Hot 100",
    category: "mostPopular",
    type: "music",
    description:
      "The official Billboard Hot 100 chart featuring the most popular songs across all genres.",
    tags: ["Billboard", "Charts", "Current", "Popular", "Hot 100"],
  },
  {
    id: "51",
    name: "Global Top 50",
    category: "mostPopular",
    type: "music",
    description:
      "The most streamed songs worldwide right now. A global perspective on what's trending.",
    tags: ["Global", "Worldwide", "Streaming", "International", "Top 50"],
  },

  // Wellness
  {
    id: "7",
    name: "Powerful Day Ahead Affirmations",
    category: "wellness",
    type: "podcast",
  },
  {
    id: "8",
    name: "Reiki",
    category: "wellness",
    type: "music",
    description:
      "Healing energy through sound. Gentle melodies and soothing frequencies designed to promote relaxation, balance your chakras, and restore inner peace.",
    tags: ["Reiki", "Healing", "Meditation", "Relaxation", "Spiritual"],
  },
  { id: "9", name: "Om", category: "wellness", type: "music" },
  { id: "10", name: "Peaceful Forest", category: "wellness", type: "music" },
  { id: "11", name: "Softest Piano Ever", category: "wellness", type: "music" },
  { id: "12", name: "Songbirds", category: "wellness", type: "music" },
  {
    id: "52",
    name: "Deep Sleep Meditation",
    category: "wellness",
    type: "music",
    description:
      "Soothing sounds designed to help you fall into deep, restful sleep.",
    tags: ["Sleep", "Meditation", "Deep Rest", "Relaxation", "Nighttime"],
  },
  {
    id: "53",
    name: "Chakra Balancing",
    category: "wellness",
    type: "music",
    description:
      "Frequencies and tones to align and balance your seven chakras.",
    tags: ["Chakra", "Healing", "Balance", "Energy", "Spiritual"],
  },
  {
    id: "54",
    name: "Mindfulness Bell",
    category: "wellness",
    type: "music",
    description: "Gentle bell sounds for meditation and mindfulness practice.",
    tags: ["Mindfulness", "Bell", "Meditation", "Focus", "Practice"],
  },
  {
    id: "55",
    name: "Yoga Flow",
    category: "wellness",
    type: "music",
    description:
      "Perfect background music for your yoga practice and stretching.",
    tags: ["Yoga", "Flow", "Stretching", "Movement", "Calm"],
  },

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
  {
    id: "56",
    name: "Indie Alternative",
    category: "recommendations",
    type: "music",
    description: "Fresh alternative and indie tracks for the modern listener.",
    tags: ["Indie", "Alternative", "Modern", "Fresh", "Underground"],
  },
  {
    id: "57",
    name: "Summer Vibes",
    category: "recommendations",
    type: "music",
    description: "Feel-good tracks perfect for sunny days and good times.",
    tags: ["Summer", "Vibes", "Feel Good", "Sunny", "Upbeat"],
  },
  {
    id: "58",
    name: "Road Trip Classics",
    category: "recommendations",
    type: "music",
    description: "The perfect soundtrack for your next adventure on the road.",
    tags: ["Road Trip", "Adventure", "Classic", "Travel", "Journey"],
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
