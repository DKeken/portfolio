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
  Playwright: {
    icon: FaCode,
    color: "text-green-600",
    bgColor: "bg-green-100 border-green-300",
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
  Kafka: {
    icon: Si.SiApachekafka,
    color: "text-red-600",
    bgColor: "bg-red-100 border-red-300",
  },
  RabbitMQ: {
    icon: Si.SiRabbitmq,
    color: "text-orange-600",
    bgColor: "bg-orange-100 border-orange-300",
  },
  gRPC: {
    icon: Si.SiSocketdotio,
    color: "text-cyan-600",
    bgColor: "bg-cyan-100 border-cyan-300",
  },
  Protobuf: {
    icon: FaCode,
    color: "text-blue-600",
    bgColor: "bg-blue-100 border-blue-300",
  },
  S3: {
    icon: Si.SiAmazons3,
    color: "text-orange-600",
    bgColor: "bg-orange-100 border-orange-300",
  },
  MinIO: {
    icon: Si.SiMinio,
    color: "text-red-600",
    bgColor: "bg-red-100 border-red-300",
  },
  Kubernetes: {
    icon: Si.SiKubernetes,
    color: "text-blue-600",
    bgColor: "bg-blue-100 border-blue-300",
  },
  Terraform: {
    icon: Si.SiTerraform,
    color: "text-purple-600",
    bgColor: "bg-purple-100 border-purple-300",
  },
  Grafana: {
    icon: Si.SiGrafana,
    color: "text-orange-600",
    bgColor: "bg-orange-100 border-orange-300",
  },
  Prometheus: {
    icon: Si.SiPrometheus,
    color: "text-orange-600",
    bgColor: "bg-orange-100 border-orange-300",
  },
  ClickHouse: {
    icon: Si.SiClickhouse,
    color: "text-yellow-500",
    bgColor: "bg-yellow-100 border-yellow-300",
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

  // State Management
  Zustand: {
    icon: Si.SiReact, // Using generic react icon or bear if available, usually not in si
    color: "text-orange-600",
    bgColor: "bg-orange-100 border-orange-300",
  },

  // Backend Frameworks/Libs
  Express: {
    icon: Si.SiExpress,
    color: "text-neutral-600",
    bgColor: "bg-neutral-100 border-neutral-300",
  },
  "REST API": {
    icon: FaCode,
    color: "text-blue-600",
    bgColor: "bg-blue-100 border-blue-300",
  },
  WebSocket: {
    icon: FaCode,
    color: "text-green-600",
    bgColor: "bg-green-100 border-green-300",
  },
  Microservices: {
    icon: FaCode,
    color: "text-purple-600",
    bgColor: "bg-purple-100 border-purple-300",
  },

  // Database/Baas
  Supabase: {
    icon: Si.SiSupabase,
    color: "text-emerald-600",
    bgColor: "bg-emerald-100 border-emerald-300",
  },

  // Architecture
  SaaS: {
    icon: FaCode,
    color: "text-purple-600",
    bgColor: "bg-purple-100 border-purple-300",
  },
  Microfrontends: {
    icon: Si.SiReact,
    color: "text-cyan-600",
    bgColor: "bg-cyan-100 border-cyan-300",
  },
  "Multi-tenant": {
    icon: FaCode,
    color: "text-blue-600",
    bgColor: "bg-blue-100 border-blue-300",
  },
  "BFF": {
    icon: FaCode,
    color: "text-green-600",
    bgColor: "bg-green-100 border-green-300",
  },

  // Integrations & Domains
  Stripe: {
    icon: Si.SiStripe,
    color: "text-indigo-600",
    bgColor: "bg-indigo-100 border-indigo-300",
  },
  Firebase: {
    icon: Si.SiFirebase,
    color: "text-yellow-600",
    bgColor: "bg-yellow-100 border-yellow-300",
  },
  "AI/ML": {
    icon: Si.SiOpenai,
    color: "text-emerald-600",
    bgColor: "bg-emerald-100 border-emerald-300",
  },
  "Smart Contracts": {
    icon: Si.SiSolidity,
    color: "text-gray-600",
    bgColor: "bg-gray-100 border-gray-300",
  },
  DeFi: {
    icon: FaCode,
    color: "text-green-600",
    bgColor: "bg-green-100 border-green-300",
  },
  "BNB Chain": {
    icon: Si.SiBinance,
    color: "text-yellow-600",
    bgColor: "bg-yellow-100 border-yellow-300",
  },
  "T-Bank API": {
    icon: FaCode,
    color: "text-yellow-600",
    bgColor: "bg-yellow-100 border-yellow-300",
  },
  "Telegram API": {
    icon: Si.SiTelegram,
    color: "text-blue-500",
    bgColor: "bg-blue-100 border-blue-300",
  },
  "D3.js": {
    icon: Si.SiD3Dotjs,
    color: "text-orange-600",
    bgColor: "bg-orange-100 border-orange-300",
  },
  NFT: {
    icon: FaCode,
    color: "text-purple-600",
    bgColor: "bg-purple-100 border-purple-300",
  },
  Analytics: {
    icon: Si.SiGoogleanalytics,
    color: "text-orange-600",
    bgColor: "bg-orange-100 border-orange-300",
  },

  // CI/CD
  "GitHub Actions": {
    icon: Si.SiGithubactions,
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
    { name: "TypeScript", ...TAG_STYLES.TypeScript },
    { name: "Tailwind CSS", ...TAG_STYLES["Tailwind CSS"] },
    { name: "Tanstack Query", ...TAG_STYLES["Tanstack Query"] },
    { name: "Zustand", ...TAG_STYLES.Zustand },
    { name: "Shadcn UI", ...TAG_STYLES["Shadcn UI"] },
  ],
  backend: [
    { name: "Node.js", ...TAG_STYLES["Node.js"] },
    { name: "NestJS", ...TAG_STYLES.NestJS },
    { name: "Express", ...TAG_STYLES.Express },
    { name: "GraphQL", ...TAG_STYLES.GraphQL },
    { name: "REST API", ...TAG_STYLES["REST API"] },
    { name: "gRPC", ...TAG_STYLES.gRPC },
    { name: "Protobuf", ...TAG_STYLES.Protobuf },
    { name: "WebSocket", ...TAG_STYLES.WebSocket },
    { name: "Microservices", ...TAG_STYLES.Microservices },
    { name: "Kafka", ...TAG_STYLES.Kafka },
    { name: "RabbitMQ", ...TAG_STYLES.RabbitMQ },
  ],
  database: [
    { name: "PostgreSQL", ...TAG_STYLES.PostgreSQL },
    { name: "Redis", ...TAG_STYLES.Redis },
    { name: "ClickHouse", ...TAG_STYLES.ClickHouse },
    { name: "S3", ...TAG_STYLES.S3 },
    { name: "MinIO", ...TAG_STYLES.MinIO },
    { name: "Prisma", ...TAG_STYLES.Prisma },
    { name: "Supabase", ...TAG_STYLES.Supabase },
    { name: "MongoDB", ...TAG_STYLES.MongoDB },
  ],
  devops: [
    { name: "Docker", ...TAG_STYLES.Docker },
    { name: "Kubernetes", ...TAG_STYLES.Kubernetes },
    { name: "GitLab", ...TAG_STYLES.GitLab },
    { name: "NGINX", ...TAG_STYLES.NGINX },
    { name: "Terraform", ...TAG_STYLES.Terraform },
    { name: "Grafana", ...TAG_STYLES.Grafana },
    { name: "Prometheus", ...TAG_STYLES.Prometheus },
    { name: "Vercel", ...TAG_STYLES.Vercel },
  ],
  tools: [
    { name: "Git", ...TAG_STYLES.Git },
    { name: "Docker", ...TAG_STYLES.Docker },
    { name: "Bun", ...TAG_STYLES.Bun },
    { name: "GitHub Actions", ...TAG_STYLES["GitHub Actions"] },
    { name: "Playwright", ...TAG_STYLES.Playwright },
    { name: "Vercel", ...TAG_STYLES.Vercel },
    { name: "Turborepo", ...TAG_STYLES.Turborepo },
    { name: "ESLint", ...TAG_STYLES.ESLint },
    { name: "Prettier", ...TAG_STYLES.Prettier },
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
