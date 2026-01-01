export interface Project {
  id: number;
  key: string; // Added key to match ProjectConfig
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
  isNDA?: boolean;
}

