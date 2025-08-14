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
      "The hottest tracks dominating the charts right now. Featuring the biggest hits from the most popular artists across all genres, updated daily to keep you in the loop with what's trending. This channel brings you the absolute best of contemporary music, carefully curated from streaming platforms, radio play, and social media buzz. From chart-topping pop anthems to viral TikTok sensations, we've got your finger on the pulse of what's hot right now. Whether you're looking for your next favorite song or want to stay current with musical trends, this is your go-to destination for the freshest sounds. Our team of music experts works around the clock to ensure you're always hearing tomorrow's hits today, making this the perfect soundtrack for your daily life. We analyze millions of streams, social media mentions, and radio airplay data to bring you the most accurate representation of what's truly popular right now. From breakthrough artists making their first chart appearance to established superstars dropping new hits, every song on this channel has earned its place through pure popularity and cultural impact. The playlist updates multiple times throughout the day, ensuring you're always connected to the pulse of contemporary music culture.",
    tags: ["Pop", "Current Hits", "Top Charts", "Mainstream", "Popular"],
  },
  {
    id: "2",
    name: "Massive Classic Rock",
    category: "mostPopular",
    type: "music",
    description:
      "The legendary sounds that defined rock music. From iconic guitar solos to powerful vocals, experience the timeless tracks that shaped generations.",
    tags: ["Classic Rock", "Guitar", "70s", "80s", "Legends"],
  },
  {
    id: "3",
    name: "All-Time Greatest Hits",
    category: "mostPopular",
    type: "music",
    description:
      "A comprehensive collection of the most beloved songs spanning multiple decades and genres. From timeless classics that defined their eras to crossover hits that transcended musical boundaries, this channel celebrates the songs that have become part of our collective musical DNA. Whether you're reliving memories or discovering these masterpieces for the first time, every track tells a story.",
    tags: ["Classic Hits", "Timeless", "Multi-Genre", "Nostalgia", "Essential"],
  },
  {
    id: "4",
    name: "Easy Breezy",
    category: "mostPopular",
    type: "music",
    description: "Effortless listening for any mood.",
    tags: ["Easy Listening", "Relaxed", "Smooth", "Chill", "Background"],
  },
  {
    id: "5",
    name: "80s and '90s Pop Rock",
    category: "mostPopular",
    type: "music",
    description:
      "Take a nostalgic journey through two of music's most defining decades with the pop-rock anthems that dominated the airwaves and shaped a generation. From the synthesizer-driven melodies and big hair ballads of the 1980s to the grunge-influenced alternative rock that defined the 1990s, this collection captures the raw energy and emotional depth that made these eras unforgettable. Experience the evolution from new wave experimentation to the authentic rebellion of alternative rock, featuring both mainstream hits and underground gems that influenced countless artists. These are the songs that played at school dances, graduation parties, and first dates, creating the soundtrack to coming-of-age stories across two transformative decades. Whether you lived through these eras or are discovering their magic for the first time, these tracks continue to resonate with their timeless hooks, memorable lyrics, and the unmistakable spirit of musical innovation that defined the late 20th century.",
    tags: ["80s", "90s", "Pop Rock", "Alternative", "Nostalgia", "Retro"],
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
      "Healing energy through sound. Gentle melodies and soothing frequencies designed to promote relaxation, balance your chakras, and restore inner peace. This carefully curated collection of Reiki music combines traditional Japanese healing principles with modern sound therapy techniques. Each track has been specifically chosen for its ability to facilitate deep meditation, energy healing, and spiritual alignment. The frequencies used in these compositions are based on ancient knowledge of sound healing, incorporating crystal bowl tones, nature sounds, and harmonious melodies that resonate with the body's energy centers. Whether you're a Reiki practitioner, meditation enthusiast, or simply seeking a peaceful escape from daily stress, this channel provides the perfect sonic environment for inner transformation and healing.",
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
