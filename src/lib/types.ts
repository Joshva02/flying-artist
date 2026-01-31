export interface Artwork {
  id: string;
  title: string;
  collection: string;
  collectionName: string;
  aspectRatio: string;
  gradient: string;
  image?: string;
}

export interface Exhibition {
  year: string;
  title: string;
  venue: string;
  description: string;
}

export interface Collection {
  slug: string;
  label: string;
}

export interface ContactInfo {
  email: string;
  gallery: string;
  address: string;
  phone: string;
  galleryEmail: string;
  instagram: string;
  facebook: string;
}

export interface ArtistBio {
  paragraphs: string[];
  stats: { value: string; label: string }[];
}

export interface NavLink {
  label: string;
  href: string;
}

export interface SiteContent {
  name: string;
  tagline: string;
  navigation: NavLink[];
  hero: {
    overline: string;
    title: string;
    titleAccent: string;
    subtitle: string;
    cta: string;
  };
  gallery: { overline: string; title: string; titleAccent: string };
  about: { overline: string; title: string; titleAccent: string };
  exhibitions: { overline: string; title: string; titleAccent: string };
  contact: { overline: string; title: string; titleAccent: string };
  footer: { tagline: string; copyright: string; };
}
