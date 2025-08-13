import type { MusicFilters, FilterCategory, FilterItem } from "../types";

// Genre Filters - Based on Figma design
export const genreFilters: FilterCategory = {
  id: "genre",
  name: "Genre",
  items: [
    {
      id: "pop",
      label: "Pop",
      description: "Popular music with catchy melodies",
    },
    {
      id: "rock",
      label: "Rock",
      description: "Guitar-driven rock music",
    },
    {
      id: "hip-hop",
      label: "Hip-Hop",
      description: "Rhythmic spoken lyrics over beats",
    },
    {
      id: "country-roots",
      label: "Country and Roots",
      description: "Traditional country and folk music",
    },
    {
      id: "electronic",
      label: "Electronic",
      description: "Electronic and synthesized music",
    },
    {
      id: "classical",
      label: "Classical",
      description: "Classical orchestral music",
    },
    {
      id: "indie",
      label: "Indie",
      description: "Independent and alternative music",
    },
    {
      id: "rnb-soul",
      label: "R&B/Soul",
      description: "Rhythm & Blues and soul music",
    },
    {
      id: "jazz-blues",
      label: "Jazz & Blues",
      description: "Jazz and blues music",
    },
    {
      id: "kids-teens",
      label: "Kids and Teens",
      description: "Music for younger audiences",
    },
    {
      id: "latin",
      label: "Latin",
      description: "Latin American music styles",
    },
    {
      id: "miscellaneous",
      label: "Miscellaneous",
      description: "Various other genres",
    },
    {
      id: "praise-worship",
      label: "Praise and Worship",
      description: "Religious and spiritual music",
    },
    {
      id: "singer-songwriter",
      label: "Singer-Songwriter",
      description: "Acoustic and personal storytelling",
    },
    {
      id: "caribbean",
      label: "Carribean Music",
      description: "Caribbean musical styles",
    },
    {
      id: "world",
      label: "World",
      description: "International world music",
    },
  ],
};

// Era Filters - Based on Figma design
export const eraFilters: FilterCategory = {
  id: "era",
  name: "Era",
  items: [
    {
      id: "today",
      label: "Today",
      description: "Current hits and trending music",
    },
    {
      id: "2020s",
      label: "2020s",
      description: "Music from the 2020s",
    },
    {
      id: "2010s",
      label: "2010s",
      description: "Music from the 2010s",
    },
    {
      id: "2000s",
      label: "2000s",
      description: "Music from the 2000s",
    },
    {
      id: "1990s",
      label: "1990s",
      description: "Music from the 1990s",
    },
    {
      id: "1980s",
      label: "1980s",
      description: "Music from the 1980s",
    },
    {
      id: "1970s",
      label: "1970s",
      description: "Music from the 1970s",
    },
    {
      id: "1960s",
      label: "1960s",
      description: "Music from the 1960s",
    },
    {
      id: "1950s",
      label: "1950s",
      description: "Music from the 1950s",
    },
    {
      id: "1940s",
      label: "1940s",
      description: "Music from the 1940s",
    },
  ],
};

// Mood Filters - Based on Figma design
export const moodFilters: FilterCategory = {
  id: "mood",
  name: "Mood",
  items: [
    {
      id: "adventurous",
      label: "Adventurous",
      description: "Music for exploration and discovery",
    },
    {
      id: "bold",
      label: "Bold",
      description: "Confident and assertive music",
    },
    {
      id: "cerebral",
      label: "Cerebral",
      description: "Thoughtful and intellectual music",
    },
    {
      id: "chill",
      label: "Chill",
      description: "Relaxed and laid-back vibes",
    },
    {
      id: "cute",
      label: "Cute",
      description: "Sweet and charming music",
    },
    {
      id: "defiant",
      label: "Defiant",
      description: "Rebellious and challenging music",
    },
    {
      id: "dramatic",
      label: "Dramatic",
      description: "Intense and theatrical music",
    },
    {
      id: "earthy",
      label: "Earthy",
      description: "Natural and grounded music",
    },
    {
      id: "elegant",
      label: "Elegant",
      description: "Sophisticated and refined music",
    },
    {
      id: "energetic",
      label: "Energetic",
      description: "High-energy and upbeat music",
    },
    {
      id: "festive",
      label: "Festive",
      description: "Celebratory and party music",
    },
    {
      id: "fun",
      label: "Fun",
      description: "Playful and entertaining music",
    },
    {
      id: "furious",
      label: "Furious",
      description: "Aggressive and intense music",
    },
    {
      id: "happy",
      label: "Happy",
      description: "Joyful and uplifting music",
    },
    {
      id: "melancholy",
      label: "Melancholy",
      description: "Sad and reflective music",
    },
    {
      id: "nostalgic",
      label: "Nostalgic",
      description: "Music that evokes memories",
    },
    {
      id: "powerful",
      label: "Powerful",
      description: "Strong and impactful music",
    },
    {
      id: "quirky",
      label: "Quirky",
      description: "Unusual and eccentric music",
    },
    {
      id: "romantic",
      label: "Romantic",
      description: "Love songs and romantic music",
    },
    {
      id: "sexy",
      label: "Sexy",
      description: "Sensual and alluring music",
    },
    {
      id: "silly",
      label: "Silly",
      description: "Funny and lighthearted music",
    },
    {
      id: "trendy",
      label: "Trendy",
      description: "Current and fashionable music",
    },
    {
      id: "uplifted",
      label: "Uplifted",
      description: "Inspiring and motivating music",
    },
    {
      id: "zen",
      label: "Zen",
      description: "Peaceful and meditative music",
    },
  ],
};

// Activity Filters - Based on Figma design
export const activityFilters: FilterCategory = {
  id: "activity",
  name: "Activity",
  items: [
    {
      id: "around-house",
      label: "Around the House",
      description: "Music for household activities",
    },
    {
      id: "driving-commuting",
      label: "Driving/Commuting",
      description: "Music for travel and commutes",
    },
    {
      id: "entertaining",
      label: "Entertaining",
      description: "Music for hosting and socializing",
    },
    {
      id: "exercise",
      label: "Exercise",
      description: "Music for workouts and fitness",
    },
    {
      id: "family-time",
      label: "Family Time",
      description: "Music for family activities",
    },
    {
      id: "focus",
      label: "Focus",
      description: "Music for concentration and work",
    },
    {
      id: "party",
      label: "Party!",
      description: "Music for parties and celebrations",
    },
    {
      id: "relaxation",
      label: "Relaxation",
      description: "Music for unwinding and rest",
    },
    {
      id: "romance",
      label: "Romance",
      description: "Music for romantic moments",
    },
  ],
};

// Theme Filters - Based on Figma design
export const themeFilters: FilterCategory = {
  id: "theme",
  name: "Theme",
  items: [
    {
      id: "africa",
      label: "Africa",
      description: "African music and influences",
    },
    {
      id: "artist-channel",
      label: "Artist Channel",
      description: "Dedicated artist channels",
    },
    {
      id: "asia",
      label: "Asia",
      description: "Asian music and influences",
    },
    {
      id: "best-lists",
      label: "Best of Lists",
      description: "Curated best-of collections",
    },
    {
      id: "caribbean",
      label: "Caribbean",
      description: "Caribbean music and culture",
    },
    {
      id: "europe",
      label: "Europe",
      description: "European music and influences",
    },
    {
      id: "francophonie",
      label: "Francophonie",
      description: "French-speaking world music",
    },
    {
      id: "instrumental",
      label: "Instrumental",
      description: "Music without vocals",
    },
    {
      id: "latin-america",
      label: "Latin America",
      description: "Latin American music and culture",
    },
    {
      id: "middle-east",
      label: "Middle East",
      description: "Middle Eastern music and influences",
    },
    {
      id: "north-america",
      label: "North America",
      description: "North American music and culture",
    },
    {
      id: "special-curator",
      label: "Special Curator",
      description: "Specially curated collections",
    },
    {
      id: "special-occasions",
      label: "Special Occasions",
      description: "Music for special events",
    },
    {
      id: "holidays-christmas",
      label: "The Holidays / Christmas",
      description: "Holiday and Christmas music",
    },
    {
      id: "vocal",
      label: "Vocal",
      description: "Music featuring vocals",
    },
  ],
};

// Complete Music Filters object
export const musicFilters: MusicFilters = {
  genre: genreFilters,
  era: eraFilters,
  mood: moodFilters,
  activity: activityFilters,
  theme: themeFilters,
};

// Helper function to get all filter items
export const getAllFilterItems = () => {
  return Object.values(musicFilters).flatMap((category) => category.items);
};

// Helper function to get filter items by category
export const getFilterItemsByCategory = (categoryId: string) => {
  return musicFilters[categoryId as keyof MusicFilters]?.items || [];
};

// Helper function to get selected filters
export const getSelectedFilters = () => {
  return getAllFilterItems().filter((item) => item.isSelected);
};

// Helper function to reset all filters
export const resetAllFilters = () => {
  Object.values(musicFilters).forEach((category) => {
    category.items.forEach((item: FilterItem) => {
      item.isSelected = false;
    });
  });
};
