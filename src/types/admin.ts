
// Admin dashboard related types

export interface AdminSettings {
  instagramLink: string;
  whatsappNumber?: string;
  email?: string;
  tagline: string;
  aboutText: string;
  featuredCandleId?: string;
}

export interface CandleFormData {
  id?: string;
  name: string;
  type: string;
  price: number;
  image: string;
  description: string;
  emotionalText: string;
  scent: string;
  material: string;
  burnTime: string;
  details: string[];
  instagramLink?: string;
  isLive: boolean;
  isComingSoon: boolean;
}
