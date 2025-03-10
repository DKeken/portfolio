import * as Si from "react-icons/si";
import * as Bi from "react-icons/bi";
import { FaCode } from "react-icons/fa";
import { IconType } from "react-icons";

// Define the tag style interface
export interface TagStyle {
  icon: IconType;
  color: string;
  bgColor: string;
}

// Define the technology interface
export interface Technology extends TagStyle {
  name: string;
}

// Define tag groups for organization
export type TagGroup =
  | "languages"
  | "frontend"
  | "backend"
  | "database"
  | "devops"
  | "tools"
  | "build"
  | "blockchain"
  | "validation";

// Define all available tags with their styles
export const TAG_STYLES: Record<string, TagStyle> = {
  // Languages
  TypeScript: {
    icon: Si.SiTypescript,
    color: "text-blue-600",
    bgColor: "bg-blue-100 border-blue-300",
  },
  Rust: {
    icon: Si.SiRust,
    color: "text-orange-600",
    bgColor: "bg-orange-100 border-orange-300",
  },
  Solidity: {
    icon: Si.SiSolidity,
    color: "text-gray-600",
    bgColor: "bg-gray-100 border-gray-300",
  },

  // Frontend
  React: {
    icon: Si.SiReact,
    color: "text-cyan-600",
    bgColor: "bg-cyan-100 border-cyan-300",
  },
  "Next.js": {
    icon: Si.SiNextdotjs,
    color: "text-black dark:text-white",
    bgColor: "bg-neutral-100 dark:bg-neutral-800 border-neutral-300",
  },
  "Tailwind CSS": {
    icon: Si.SiTailwindcss,
    color: "text-cyan-500",
    bgColor: "bg-cyan-100 border-cyan-300",
  },
  "Shadcn UI": {
    icon: Si.SiReact,
    color: "text-neutral-900 dark:text-neutral-100",
    bgColor: "bg-neutral-100 dark:bg-neutral-800 border-neutral-300",
  },
  "React Hook Form": {
    icon: Si.SiReacthookform,
    color: "text-pink-600",
    bgColor: "bg-pink-100 border-pink-300",
  },
  "Tanstack Query": {
    icon: Bi.BiLogoReact,
    color: "text-red-600",
    bgColor: "bg-red-100 border-red-300",
  },

  // Backend
  "Node.js": {
    icon: Si.SiNodedotjs,
    color: "text-green-600",
    bgColor: "bg-green-100 border-green-300",
  },
  NestJS: {
    icon: Si.SiNestjs,
    color: "text-red-600",
    bgColor: "bg-red-100 border-red-300",
  },
  tRPC: {
    icon: Si.SiTrpc,
    color: "text-blue-600",
    bgColor: "bg-blue-100 border-blue-300",
  },
  GraphQL: {
    icon: Si.SiGraphql,
    color: "text-pink-600",
    bgColor: "bg-pink-100 border-pink-300",
  },

  // Database
  PostgreSQL: {
    icon: Si.SiPostgresql,
    color: "text-blue-700",
    bgColor: "bg-blue-100 border-blue-300",
  },
  Prisma: {
    icon: Si.SiPrisma,
    color: "text-teal-600",
    bgColor: "bg-teal-100 border-teal-300",
  },
  MongoDB: {
    icon: Si.SiMongodb,
    color: "text-green-600",
    bgColor: "bg-green-100 border-green-300",
  },
  Redis: {
    icon: Si.SiRedis,
    color: "text-red-600",
    bgColor: "bg-red-100 border-red-300",
  },

  // DevOps
  Docker: {
    icon: Si.SiDocker,
    color: "text-blue-600",
    bgColor: "bg-blue-100 border-blue-300",
  },
  GitLab: {
    icon: Si.SiGitlab,
    color: "text-orange-600",
    bgColor: "bg-orange-100 border-orange-300",
  },
  NGINX: {
    icon: Si.SiNginx,
    color: "text-green-600",
    bgColor: "bg-green-100 border-green-300",
  },
  Vercel: {
    icon: Si.SiVercel,
    color: "text-black dark:text-white",
    bgColor: "bg-neutral-100 dark:bg-neutral-800 border-neutral-300",
  },

  // Tools
  Git: {
    icon: Si.SiGit,
    color: "text-orange-600",
    bgColor: "bg-orange-100 border-orange-300",
  },
  GitHub: {
    icon: Si.SiGithub,
    color: "text-black dark:text-white",
    bgColor: "bg-neutral-100 dark:bg-neutral-800 border-neutral-300",
  },
  Jest: {
    icon: Si.SiJest,
    color: "text-red-600",
    bgColor: "bg-red-100 border-red-300",
  },
  Cypress: {
    icon: Si.SiCypress,
    color: "text-green-600",
    bgColor: "bg-green-100 border-green-300",
  },
  Bun: {
    icon: Si.SiBun,
    color: "text-amber-600",
    bgColor: "bg-amber-100 border-amber-300",
  },

  // Build
  Webpack: {
    icon: Si.SiWebpack,
    color: "text-blue-600",
    bgColor: "bg-blue-100 border-blue-300",
  },
  Vite: {
    icon: Si.SiVite,
    color: "text-purple-600",
    bgColor: "bg-purple-100 border-purple-300",
  },
  Turborepo: {
    icon: Si.SiTurborepo,
    color: "text-neutral-900 dark:text-neutral-100",
    bgColor: "bg-neutral-100 dark:bg-neutral-800 border-neutral-300",
  },
  ESLint: {
    icon: Si.SiEslint,
    color: "text-purple-600",
    bgColor: "bg-purple-100 border-purple-300",
  },
  Prettier: {
    icon: Si.SiPrettier,
    color: "text-pink-600",
    bgColor: "bg-pink-100 border-pink-300",
  },

  // Blockchain
  Solana: {
    icon: Si.SiSolana,
    color: "text-purple-600",
    bgColor: "bg-purple-100 border-purple-300",
  },
  TON: {
    icon: Si.SiTon,
    color: "text-blue-600",
    bgColor: "bg-blue-100 border-blue-300",
  },
  EVM: {
    icon: Si.SiEthereum,
    color: "text-slate-600",
    bgColor: "bg-slate-100 border-slate-300",
  },
  Wagmi: {
    icon: Si.SiWagmi,
    color: "text-pink-600",
    bgColor: "bg-pink-100 border-pink-300",
  },
  Viem: {
    icon: Si.SiEthereum,
    color: "text-emerald-600",
    bgColor: "bg-emerald-100 border-emerald-300",
  },
  "Web3.js": {
    icon: Si.SiWeb3Dotjs,
    color: "text-orange-600",
    bgColor: "bg-orange-100 border-orange-300",
  },
  Hardhat: {
    icon: Bi.BiSolidHardHat,
    color: "text-yellow-600",
    bgColor: "bg-yellow-100 border-yellow-300",
  },

  // Validation
  Zod: {
    icon: Si.SiZod,
    color: "text-blue-600",
    bgColor: "bg-blue-100 border-blue-300",
  },

  // Default style for tags without specific mapping
  default: {
    icon: FaCode,
    color: "text-gray-600",
    bgColor: "bg-gray-100 border-gray-300",
  },
};

// Group technologies by category for the technologies section
export const TECHNOLOGY_GROUPS: Record<TagGroup, Technology[]> = {
  languages: [
    { name: "TypeScript", ...TAG_STYLES.TypeScript },
    { name: "Rust", ...TAG_STYLES.Rust },
    { name: "Solidity", ...TAG_STYLES.Solidity },
  ],
  frontend: [
    { name: "React", ...TAG_STYLES.React },
    { name: "Next.js", ...TAG_STYLES["Next.js"] },
    { name: "Tailwind CSS", ...TAG_STYLES["Tailwind CSS"] },
    { name: "Shadcn UI", ...TAG_STYLES["Shadcn UI"] },
    { name: "React Hook Form", ...TAG_STYLES["React Hook Form"] },
    { name: "Tanstack Query", ...TAG_STYLES["Tanstack Query"] },
  ],
  backend: [
    { name: "Node.js", ...TAG_STYLES["Node.js"] },
    { name: "NestJS", ...TAG_STYLES.NestJS },
    { name: "tRPC", ...TAG_STYLES.tRPC },
    { name: "GraphQL", ...TAG_STYLES.GraphQL },
  ],
  database: [
    { name: "PostgreSQL", ...TAG_STYLES.PostgreSQL },
    { name: "Prisma", ...TAG_STYLES.Prisma },
    { name: "MongoDB", ...TAG_STYLES.MongoDB },
    { name: "Redis", ...TAG_STYLES.Redis },
  ],
  devops: [
    { name: "Docker", ...TAG_STYLES.Docker },
    { name: "GitLab", ...TAG_STYLES.GitLab },
    { name: "NGINX", ...TAG_STYLES.NGINX },
    { name: "Vercel", ...TAG_STYLES.Vercel },
  ],
  tools: [
    { name: "Git", ...TAG_STYLES.Git },
    { name: "GitHub", ...TAG_STYLES.GitHub },
    { name: "GitLab", ...TAG_STYLES.GitLab },
    { name: "Jest", ...TAG_STYLES.Jest },
    { name: "Cypress", ...TAG_STYLES.Cypress },
    { name: "Bun", ...TAG_STYLES.Bun },
  ],
  build: [
    { name: "Webpack", ...TAG_STYLES.Webpack },
    { name: "Vite", ...TAG_STYLES.Vite },
    { name: "Turborepo", ...TAG_STYLES.Turborepo },
    { name: "ESLint", ...TAG_STYLES.ESLint },
    { name: "Prettier", ...TAG_STYLES.Prettier },
  ],
  blockchain: [
    { name: "Solana", ...TAG_STYLES.Solana },
    { name: "TON", ...TAG_STYLES.TON },
    { name: "EVM", ...TAG_STYLES.EVM },
    { name: "Wagmi", ...TAG_STYLES.Wagmi },
    { name: "Viem", ...TAG_STYLES.Viem },
    { name: "Web3.js", ...TAG_STYLES["Web3.js"] },
    { name: "Hardhat", ...TAG_STYLES.Hardhat },
  ],
  validation: [{ name: "Zod", ...TAG_STYLES.Zod }],
};

// Helper function to get tag style
export const getTagStyle = (tagName: string): TagStyle => {
  return TAG_STYLES[tagName] || TAG_STYLES.default;
};

// Create a reusable tag component
export const createTagBadge = (
  tagName: string,
  Icon: IconType,
  color: string,
  bgColor: string
) => {
  return {
    name: tagName,
    icon: Icon,
    color,
    bgColor,
  };
};
