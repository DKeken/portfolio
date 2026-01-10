export interface Project {
  id: number;
  key: string; // Added key to match ProjectConfig
  title: string;
  description: string;
  image: string;
  images?: string[]; // Optional array for slider
  tags: string[];
  link: string;
  isNDA?: boolean;
}

