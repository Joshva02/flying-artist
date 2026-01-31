import type { Artwork, Exhibition, Collection, ContactInfo, ArtistBio, SiteContent } from "./types";

// ---------------------------------------------------------------------------
// Artworks
// ---------------------------------------------------------------------------

export const artworks: Artwork[] = [
  // ── River of Dreams (2024) ──────────────────────────────────────────────
  {
    id: "emerald-tributary",
    title: "Emerald Tributary",
    collection: "river-of-dreams",
    collectionName: "River of Dreams",
    aspectRatio: "4/3",
    gradient:
      "linear-gradient(170deg, #0d2137 0%, #134e4a 25%, #1a6b5a 40%, #2d8a6e 55%, #6ab08a 70%, #a7d4a0 85%, #d4e8c8 100%)",
    image: "/images/river-of-dreams/01.jpeg",
  },
  {
    id: "golden-confluence",
    title: "Golden Confluence",
    collection: "river-of-dreams",
    collectionName: "River of Dreams",
    aspectRatio: "16/9",
    gradient:
      "linear-gradient(180deg, #1a1a2e 0%, #16213e 15%, #0f3460 30%, #e94560 50%, #d4a03c 65%, #e8c36a 80%, #f5e6c8 100%)",
    image: "/images/river-of-dreams/02.jpeg",
  },
  {
    id: "morning-mist-on-the-caroni",
    title: "Morning Mist on the Caroni",
    collection: "river-of-dreams",
    collectionName: "River of Dreams",
    aspectRatio: "3/4",
    gradient:
      "radial-gradient(ellipse at 50% 80%, #2a9d8f 0%, #1a6b6a 30%, #0f4c5c 50%, #1a2242 70%, #0a0e1a 100%)",
    image: "/images/river-of-dreams/03.jpeg",
  },
  {
    id: "river-bend-at-twilight",
    title: "River Bend at Twilight",
    collection: "river-of-dreams",
    collectionName: "River of Dreams",
    aspectRatio: "5/4",
    gradient:
      "linear-gradient(160deg, #2c1810 0%, #4a2c20 20%, #7a4a30 35%, #c17825 50%, #d4a03c 60%, #1a6b6a 75%, #0f1628 100%)",
    image: "/images/river-of-dreams/04.jpeg",
  },
  {
    id: "cascade-of-light",
    title: "Cascade of Light",
    collection: "river-of-dreams",
    collectionName: "River of Dreams",
    aspectRatio: "4/5",
    gradient:
      "linear-gradient(180deg, #f5f0e8 0%, #e8c36a 20%, #d4a03c 35%, #2a9d8f 55%, #1a6b6a 70%, #0f3460 85%, #0a0e1a 100%)",
    image: "/images/river-of-dreams/05.jpeg",
  },

  // ── Dreamscapes (2021) ──────────────────────────────────────────────────
  {
    id: "floating-gardens",
    title: "Floating Gardens",
    collection: "dreamscapes",
    collectionName: "Dreamscapes",
    aspectRatio: "16/9",
    gradient:
      "linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #fbc2eb 70%, #ffecd2 100%)",
    image: "/images/dreamscapes/01.jpeg",
  },
  {
    id: "ethereal-passage",
    title: "Ethereal Passage",
    collection: "dreamscapes",
    collectionName: "Dreamscapes",
    aspectRatio: "3/4",
    gradient:
      "radial-gradient(ellipse at 30% 50%, #a18cd1 0%, #5d4e8c 30%, #2d1b4e 60%, #1a0e2e 100%)",
    image: "/images/dreamscapes/02.jpeg",
  },
  {
    id: "luminous-drift",
    title: "Luminous Drift",
    collection: "dreamscapes",
    collectionName: "Dreamscapes",
    aspectRatio: "4/3",
    gradient:
      "linear-gradient(180deg, #0c0c1d 0%, #1a1a3e 20%, #2a4a6b 40%, #4a8a9b 55%, #8ac4c4 70%, #c8e6e0 85%, #f0f4f0 100%)",
    image: "/images/dreamscapes/03.jpeg",
  },
  {
    id: "velvet-horizon",
    title: "Velvet Horizon",
    collection: "dreamscapes",
    collectionName: "Dreamscapes",
    aspectRatio: "5/3",
    gradient:
      "linear-gradient(175deg, #0d1b2a 0%, #1b2838 20%, #2a4858 35%, #c17825 55%, #e8c36a 65%, #d4a03c 75%, #2a4858 90%, #0d1b2a 100%)",
    image: "/images/dreamscapes/04.jpeg",
  },
  {
    id: "island-of-memory",
    title: "Island of Memory",
    collection: "dreamscapes",
    collectionName: "Dreamscapes",
    aspectRatio: "4/5",
    gradient:
      "radial-gradient(ellipse at 50% 60%, #2a9d8f 0%, #1a6b6a 25%, #0f4c5c 45%, #764ba2 65%, #2d1b4e 85%, #0c0c1d 100%)",
    image: "/images/dreamscapes/05.jpeg",
  },

  // ── Weathering The Storm (2020) ─────────────────────────────────────────
  {
    id: "eye-of-the-tempest",
    title: "Eye of the Tempest",
    collection: "weathering-the-storm",
    collectionName: "Weathering The Storm",
    aspectRatio: "16/9",
    gradient:
      "radial-gradient(ellipse at 50% 40%, #4a4a6a 0%, #2a2a4a 25%, #1a1a3a 45%, #0d0d2a 65%, #050510 100%)",
    image: "/images/weathering-the-storm/01.jpeg",
  },
  {
    id: "after-the-rain",
    title: "After the Rain",
    collection: "weathering-the-storm",
    collectionName: "Weathering The Storm",
    aspectRatio: "4/3",
    gradient:
      "linear-gradient(180deg, #2c3e50 0%, #3498db 30%, #5dade2 50%, #85c1e9 65%, #aed6f1 80%, #d4efdf 100%)",
    image: "/images/weathering-the-storm/02.jpeg",
  },
  {
    id: "lightning-over-maracas",
    title: "Lightning Over Maracas",
    collection: "weathering-the-storm",
    collectionName: "Weathering The Storm",
    aspectRatio: "3/4",
    gradient:
      "linear-gradient(170deg, #0a0a1a 0%, #1a1a3a 20%, #2a2a5a 35%, #e8c36a 40%, #d4a03c 45%, #2a2a5a 55%, #1a1a3a 80%, #0a0a1a 100%)",
    image: "/images/weathering-the-storm/03.jpeg",
  },
  {
    id: "resilience",
    title: "Resilience",
    collection: "weathering-the-storm",
    collectionName: "Weathering The Storm",
    aspectRatio: "5/4",
    gradient:
      "linear-gradient(155deg, #1a2a3a 0%, #2c4a5a 25%, #3a6a6a 40%, #4a8a7a 55%, #6aaa8a 70%, #8aca9a 85%, #b0e0c0 100%)",
    image: "/images/weathering-the-storm/04.jpeg",
  },

  // ── Dusk (2019) ─────────────────────────────────────────────────────────
  {
    id: "north-coast",
    title: "North Coast",
    collection: "dusk",
    collectionName: "Dusk",
    aspectRatio: "16/9",
    gradient:
      "linear-gradient(180deg, #1a0a2e 0%, #2d1b4e 15%, #6b2fa0 30%, #c0392b 50%, #e67e22 65%, #f1c40f 80%, #f9e79f 100%)",
    image: "/images/dusk/01.jpeg",
  },
  {
    id: "sunset-flash",
    title: "Sunset Flash",
    collection: "dusk",
    collectionName: "Dusk",
    aspectRatio: "4/3",
    gradient:
      "linear-gradient(180deg, #0a0e1a 0%, #1a2242 20%, #c0392b 45%, #e67e22 55%, #f39c12 65%, #f1c40f 75%, #f5e6c8 100%)",
    image: "/images/dusk/02.jpeg",
  },
  {
    id: "waves",
    title: "Waves",
    collection: "dusk",
    collectionName: "Dusk",
    aspectRatio: "5/3",
    gradient:
      "linear-gradient(175deg, #0c2340 0%, #1a3a5c 20%, #2a5a7c 35%, #3a7a9c 50%, #5a9abc 65%, #8abac8 80%, #c0dae0 100%)",
    image: "/images/dusk/03.jpeg",
  },
  {
    id: "himalayan-night-under-the-stars",
    title: "Himalayan Night Under the Stars",
    collection: "dusk",
    collectionName: "Dusk",
    aspectRatio: "3/4",
    gradient:
      "linear-gradient(180deg, #000010 0%, #0a0a2a 15%, #0d1040 30%, #1a1a5a 45%, #2a2a7a 60%, rgba(212,160,60,0.3) 70%, #0d1040 85%, #000010 100%)",
    image: "/images/dusk/04.jpeg",
  },
  {
    id: "storm",
    title: "Storm",
    collection: "dusk",
    collectionName: "Dusk",
    aspectRatio: "4/5",
    gradient:
      "radial-gradient(ellipse at 50% 30%, #3a3a5a 0%, #2a2a4a 25%, #1a1a3a 45%, #0c0c2a 65%, #040410 100%)",
    image: "/images/dusk/05.jpeg",
  },
  {
    id: "reflection",
    title: "Reflection",
    collection: "dusk",
    collectionName: "Dusk",
    aspectRatio: "16/9",
    gradient:
      "linear-gradient(180deg, #c17825 0%, #d4a03c 15%, #e8c36a 25%, #2a9d8f 40%, #1a6b6a 55%, #0f4c5c 70%, #0a2a3a 85%, #051520 100%)",
    image: "/images/dusk/06.jpeg",
  },

  // ── Chasing The Light (2017) ────────────────────────────────────────────
  {
    id: "first-light-over-the-gulf",
    title: "First Light Over the Gulf",
    collection: "chasing-the-light",
    collectionName: "Chasing The Light",
    aspectRatio: "16/9",
    gradient:
      "linear-gradient(180deg, #0d1b2a 0%, #1b3a4b 20%, #2a6a5a 40%, #6ab08a 55%, #a7d4a0 65%, #e8c36a 80%, #f5e6c8 100%)",
    image: "/images/chasing-the-light/01.jpeg",
  },
  {
    id: "golden-hour-toco",
    title: "Golden Hour, Toco",
    collection: "chasing-the-light",
    collectionName: "Chasing The Light",
    aspectRatio: "4/3",
    gradient:
      "linear-gradient(170deg, #2c1810 0%, #5a3420 20%, #8a5a30 35%, #c17825 50%, #d4a03c 60%, #e8c36a 70%, #f5e6c8 85%, #fefcf9 100%)",
    image: "/images/chasing-the-light/02.jpeg",
  },
  {
    id: "morning-on-the-savannah",
    title: "Morning on the Savannah",
    collection: "chasing-the-light",
    collectionName: "Chasing The Light",
    aspectRatio: "5/3",
    gradient:
      "linear-gradient(180deg, #f5f0e8 0%, #e0d8c8 15%, #8aca9a 30%, #4a9a6a 45%, #2a7a4a 60%, #1a5a3a 75%, #0a3a2a 100%)",
    image: "/images/chasing-the-light/03.jpeg",
  },
  {
    id: "horizon-line",
    title: "Horizon Line",
    collection: "chasing-the-light",
    collectionName: "Chasing The Light",
    aspectRatio: "3/4",
    gradient:
      "linear-gradient(180deg, #fefcf9 0%, #f5e6c8 20%, #e8c36a 35%, #d4a03c 45%, #2a9d8f 55%, #1a6b6a 65%, #0f3460 80%, #0a0e1a 100%)",
    image: "/images/chasing-the-light/04.jpeg",
  },
  {
    id: "catching-clouds",
    title: "Catching Clouds",
    collection: "chasing-the-light",
    collectionName: "Chasing The Light",
    aspectRatio: "4/5",
    gradient:
      "radial-gradient(ellipse at 50% 30%, #f5f0e8 0%, #d0d8e0 20%, #8aaac8 40%, #4a7a9a 55%, #2a5a7a 70%, #1a3a5a 85%, #0a1a3a 100%)",
    image: "/images/chasing-the-light/05.jpeg",
  },

  // ── Past Work ───────────────────────────────────────────────────────────
  {
    id: "caribbean-dawn",
    title: "Caribbean Dawn",
    collection: "past-work",
    collectionName: "Past Work",
    aspectRatio: "4/3",
    gradient:
      "linear-gradient(160deg, #0f3460 0%, #16537e 25%, #1a8a9a 45%, #2ec4b6 60%, #cbf3f0 80%, #ffffff 100%)",
    image: "/images/past-work/01.jpeg",
  },
  {
    id: "bocas-in-blue",
    title: "Bocas in Blue",
    collection: "past-work",
    collectionName: "Past Work",
    aspectRatio: "16/9",
    gradient:
      "linear-gradient(180deg, #e8f0f8 0%, #a8c8e0 20%, #5898c0 40%, #2878a0 55%, #185878 70%, #0a3858 85%, #051828 100%)",
    image: "/images/past-work/02.jpeg",
  },
  {
    id: "tropical-reverie",
    title: "Tropical Reverie",
    collection: "past-work",
    collectionName: "Past Work",
    aspectRatio: "3/4",
    gradient:
      "linear-gradient(150deg, #1a5a20 0%, #2a7a30 20%, #4a9a40 35%, #8aba60 50%, #c8da80 65%, #e8f0a0 80%, #f8f8c0 100%)",
    image: "/images/past-work/03.jpeg",
  },
  {
    id: "pitch-lake-abstraction",
    title: "Pitch Lake Abstraction",
    collection: "past-work",
    collectionName: "Past Work",
    aspectRatio: "5/4",
    gradient:
      "linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 20%, #4a4a4a 35%, #6a6a6a 50%, #8a7a6a 65%, #aa9a7a 80%, #c8b89a 100%)",
    image: "/images/past-work/04.jpeg",
  },
];

// ---------------------------------------------------------------------------
// Exhibitions
// ---------------------------------------------------------------------------

export const exhibitions: Exhibition[] = [
  {
    year: "2024",
    title: "River of Dreams",
    venue: "Horizon's Art Gallery, Port of Spain, Trinidad",
    description:
      "Landscapes exploring light, nature, colour and emotion. Exhibited September 3\u201314, featuring 29 works.",
  },
  {
    year: "2021",
    title: "Dreamscapes",
    venue: "Horizon's Art Gallery, Port of Spain, Trinidad",
    description:
      "27 works. First artist in Trinidad and regionally to offer NFTs alongside a physical body of work.",
  },
  {
    year: "2020",
    title: "Weathering The Storm",
    venue: "Horizon's Art Gallery, Port of Spain, Trinidad",
    description:
      "14 powerful works exploring resilience, nature\u2019s force, and the human spirit.",
  },
  {
    year: "2019",
    title: "Dusk",
    venue: "Horizon's Art Gallery, Port of Spain, Trinidad",
    description:
      "Twenty atmospheric works capturing twilight \u2014 from Caribbean sunsets to Himalayan nights.",
  },
  {
    year: "2017",
    title: "Chasing The Light",
    venue: "Horizon's Art Gallery, Port of Spain, Trinidad",
    description:
      "Twenty-one works following light across landscapes, marking Shannon\u2019s first major solo exhibition.",
  },
];

// ---------------------------------------------------------------------------
// Collections (gallery filter tabs)
// ---------------------------------------------------------------------------

export const collections: Collection[] = [
  { slug: "all", label: "All Works" },
  { slug: "river-of-dreams", label: "River of Dreams" },
  { slug: "dreamscapes", label: "Dreamscapes" },
  { slug: "weathering-the-storm", label: "Weathering The Storm" },
  { slug: "dusk", label: "Dusk" },
  { slug: "chasing-the-light", label: "Chasing The Light" },
  { slug: "past-work", label: "Past Work" },
];

// ---------------------------------------------------------------------------
// Contact Information
// ---------------------------------------------------------------------------

export const contactInfo: ContactInfo = {
  email: "shannonmariehutchinson@gmail.com",
  gallery: "Horizons Art Gallery",
  address: "37 Mucurapo Rd., Port of Spain, Trinidad",
  phone: "(868) 628-9769",
  galleryEmail: "horizonsag@gmail.com",
  instagram: "https://instagram.com/artistshannon/",
  facebook: "https://facebook.com/Artistshannon/",
};

// ---------------------------------------------------------------------------
// Artist Bio
// ---------------------------------------------------------------------------

export const artistBio: ArtistBio = {
  paragraphs: [
    "Shannon Hutchinson is an acclaimed Trinidadian artist and Boeing 787 airline pilot \u2014 a Renaissance woman whose dual expertise as both artist and aviator brings a unique aerial perspective to her canvases. Born and raised in Trinidad, she explores the relationship between earth and sky, creating evocative works that blur the boundaries of landscape and atmosphere.",
    "A graduate of OCAD University in Toronto with a Bachelor of Fine Arts, Shannon specialized in Art History and Advanced Visual Studies, earning prestigious awards for her thesis work conducted in Florence, Italy. She has trained under master painter Peter Doig and holds both FAA and Canadian Airline Transport Pilot licenses. Her work appears in the National Gallery of Trinidad and Tobago, Hart House Permanent Collection, and private collections worldwide.",
  ],
  stats: [
    { value: "20+", label: "Years of Art" },
    { value: "14+", label: "Years Aviation" },
    { value: "6", label: "Solo Exhibitions" },
  ],
};

// ---------------------------------------------------------------------------
// Site Content (centralized strings)
// ---------------------------------------------------------------------------

export const siteContent: SiteContent = {
  name: "Shannon Hutchinson",
  tagline: "The Flying Artist",
  navigation: [
    { label: "Gallery", href: "gallery" },
    { label: "About", href: "about" },
    { label: "Exhibitions", href: "exhibitions" },
    { label: "Contact", href: "contact" },
  ],
  hero: {
    overline: "Fine Art \u00b7 Trinidad \u00b7 The World",
    title: "Shannon",
    titleAccent: "Hutchinson",
    subtitle: "Where Aviation Meets Art",
    cta: "View Collection",
  },
  gallery: { overline: "Selected Works", title: "The ", titleAccent: "Collection" },
  about: { overline: "About the Artist", title: "A ", titleAccent: "Renaissance Woman" },
  exhibitions: { overline: "Journey Through Time", title: "Solo ", titleAccent: "Exhibitions" },
  contact: { overline: "Get In Touch", title: "Let's ", titleAccent: "Connect" },
  footer: {
    tagline: "Trinidadian artist and Boeing 787 pilot exploring the relationship between earth and sky through evocative landscape painting.",
    copyright: `\u00a9 ${new Date().getFullYear()} Shannon Hutchinson. All rights reserved.`,
  },
};
