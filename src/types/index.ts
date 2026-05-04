export type SocialLinks = {
  instagram?: string;
  x?: string;
  website?: string;
};

export type SocialLink = {
  label: string;
  url: string;
  type?: "instagram" | "x" | "website" | "other";
};

export type Performer = {
  id: string;
  name: string;
  image?: string;
  genre: string[];
  shortBio?: string;
  sns: SocialLinks;
  snsLinks?: SocialLink[];
  appearedEvents: string[];
  isPublished: boolean;
};

export type Event = {
  id: string;
  number: number;
  title: string;
  date: string;
  year: number;
  venue: string;
  venueUrl?: string;
  coverImage: string;
  shortText?: string;
  themeText?: string;
  galleryImages: string[];
  performers: string[];
  relatedLinks?: {
    label: string;
    url: string;
  }[];
  isPublished: boolean;
};

export type NextLive = {
  title: string;
  date: string;
  venue: string;
  openTime?: string;
  startTime?: string;
  price?: string;
  note?: string;
  contactUrl: string;
  instagramUrl: string;
  performers: string[];
};
