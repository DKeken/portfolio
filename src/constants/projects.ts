export interface ProjectConfig {
  id: number;
  key: string;
  image: string;
  images?: string[];
  link: string;
  isNDA: boolean;
}

export const PROJECTS: ProjectConfig[] = [
  {
    id: 11,
    key: "project11",
    image: "/images/project11.png",
    link: "https://project11.com", // This will be replaced by translation if link is localized, but usually links are static or in data
    // Wait, the original code had `link: t("projects.project11.link")`. This implies links might be localized or just stored in messages.
    // If links are in messages, we should keep using t for links.
    // I will store the structure here.
    isNDA: false,
  },
  {
    id: 12,
    key: "project12",
    image: "/images/images12.png",
    images: ["/images/images12.png", "/images/project12-1.png"],
    link: "https://github.com/DKeken/ai-bet-platform",
    isNDA: false,
  },
  {
    id: 10,
    key: "project10",
    image: "/images/project10.png",
    link: "",
    isNDA: false,
  },
  {
    id: 9,
    key: "project9",
    image: "/images/project9.png",
    link: "",
    isNDA: true,
  },
  {
    id: 8,
    key: "project8",
    image: "/images/project8.png",
    link: "",
    isNDA: false,
  },
  {
    id: 7,
    key: "project7",
    image: "/images/project7.png",
    link: "",
    isNDA: false,
  },
  {
    id: 6,
    key: "project6",
    image: "/images/project6.jpg",
    link: "",
    isNDA: false,
  },
  {
    id: 4,
    key: "project4",
    image: "/images/project4.jpg",
    link: "",
    isNDA: true,
  },
  {
    id: 5,
    key: "project5",
    image: "/images/project5.jpg",
    link: "",
    isNDA: true,
  },
];
