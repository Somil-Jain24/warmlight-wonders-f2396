
export interface Candle {
  id: string;
  name: string;
  type: string;
  image: string;
  description: string;
  emotionalText: string;
  scent: string;
  material: string;
  burnTime: string;
  details: string[];
  price?: number; // Added for admin dashboard
  instagramLink?: string; // Added for admin dashboard
  isLive?: boolean; // Added for admin dashboard
  isComingSoon?: boolean; // Added for admin dashboard
}
