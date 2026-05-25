// Type definitions for the profile, news and publications data structures.
// These types are used across the site for type safety and autocompletion.

export interface Affiliation {
  role: string;
  org: string;
  current?: boolean;
}

export interface Profile {
  name: string;
  title: string;
  institution: string;
  affiliations: Affiliation[];
  photo: string;
  initials: string;
  about: string[];
  researchInterests: string[];
  emails: string[];
  links: {
    googleScholar?: string;
    linkedin?: string;
    oldSite?: string;
    cv?: string;
    [key: string]: string | undefined; // for any additional links
  };
}

export interface NewsItem {
  date: string;
  title: string;
  description?: string;
  link?: {
    label: string;
    url: string;
  };
}

export interface Publication {
  title: string;
  authors: string;
  venue: string;
  venueShort: string; // e.g. "CVPR" instead of "IEEE Conference on Computer Vision and Pattern Recognition"
  year: number;
  category: PublicationCategory;
  image?: string; // optional field for publication thumbnail
  links: {
    [key: string]: string; // e.g. { arXiv: "url", PDF: "url" }
  };
}

// Publication category as enum for better type safety in filtering and display.
export enum PublicationCategory {
  VisionLanguage = "Vision-Language Models",
  GenerativeAI = "Generative AI",
  MultimodalLearning = "Multimodal Learning",
  ComputerVision = "Computer Vision",
  MachineLearning = "Machine Learning",
  Other = "Other",
}

export type PerYearStats = {
  year: number;
  value: number;
};

export type PerYearCount = {
  year: number;
  count: number;
};

export type CitationTotals = {
  citations: number;
  citationsSince: PerYearStats;
  hIndex: number;
  hIndexSince: PerYearStats;
  i10Index: number;
  i10IndexSince: PerYearStats;
};

export interface Scholar {
  profileUrl: string;
  totals: CitationTotals;
  perYear: PerYearCount[];
}

export type Stats = { key: keyof CitationTotals; label: string };

export type Notice = {
  id: string;
  title: string;
  message: string;
  color: string;
  startDate: string;
  endDate: string;
  pinned: boolean;
};