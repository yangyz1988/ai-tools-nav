export interface AITool {
  slug: string;
  name: string;
  description: string;
  category: string;
  tags: string[];
  url: string;
  pricing: 'Free' | 'Freemium' | 'Paid' | 'Open Source';
  features: string[];
  logo?: string;
}
