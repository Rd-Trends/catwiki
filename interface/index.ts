export interface cat {
  name: string;
  description?: string;
  temperament?: string;
  origin?: string;
  life_span?: string;
  adaptability?: number;
  affection_level?: number;
  child_friendly?: number;
  grooming?: number;
  id?: string;
  image?: image;
  intelligence?: number;
  health_issues?: number;
  social_needs?: number;
  stranger_friendly?: number;
  wikipedia_url?: string;
}

export interface image {
  height: number;
  id: string;
  url: string;
  width: number;
}
