import * as Si from "react-icons/si";
import * as Bi from "react-icons/bi";

export const TECHNOLOGY_GROUPS = {
  languages: [
    {
      name: "TypeScript",
      icon: Si.SiTypescript,
      color: "text-blue-600",
      bgColor: "bg-blue-100 border-blue-300",
    },
    {
      name: "Rust",
      icon: Si.SiRust,
      color: "text-orange-600",
      bgColor: "bg-orange-100 border-orange-300",
    },
    {
      name: "Solidity",
      icon: Si.SiSolidity,
      color: "text-gray-600",
      bgColor: "bg-gray-100 border-gray-300",
    },
  ],
  frontend: [
    {
      name: "React",
      icon: Si.SiReact,
      color: "text-cyan-600",
      bgColor: "bg-cyan-100 border-cyan-300",
    },
    {
      name: "Next.js",
      icon: Si.SiNextdotjs,
      color: "text-black dark:text-white",
      bgColor: "bg-neutral-100 dark:bg-neutral-800 border-neutral-300",
    },
    {
      name: "Tailwind CSS",
      icon: Si.SiTailwindcss,
      color: "text-cyan-500",
      bgColor: "bg-cyan-100 border-cyan-300",
    },
    {
      name: "Shadcn UI",
      icon: Si.SiReact,
      color: "text-neutral-900 dark:text-neutral-100",
      bgColor: "bg-neutral-100 dark:bg-neutral-800 border-neutral-300",
    },
    {
      name: "React Hook Form",
      icon: Si.SiReacthookform,
      color: "text-pink-600",
      bgColor: "bg-pink-100 border-pink-300",
    },
    {
      name: "Tanstack Query",
      icon: Bi.BiLogoReact,
      color: "text-red-600",
      bgColor: "bg-red-100 border-red-300",
    },
  ],
  backend: [
    {
      name: "Node.js",
      icon: Si.SiNodedotjs,
      color: "text-green-600",
      bgColor: "bg-green-100 border-green-300",
    },
    {
      name: "NestJS",
      icon: Si.SiNestjs,
      color: "text-red-600",
      bgColor: "bg-red-100 border-red-300",
    },
    {
      name: "tRPC",
      icon: Si.SiTrpc,
      color: "text-blue-600",
      bgColor: "bg-blue-100 border-blue-300",
    },
    {
      name: "GraphQL",
      icon: Si.SiGraphql,
      color: "text-pink-600",
      bgColor: "bg-pink-100 border-pink-300",
    },
  ],
  database: [
    {
      name: "PostgreSQL",
      icon: Si.SiPostgresql,
      color: "text-blue-700",
      bgColor: "bg-blue-100 border-blue-300",
    },
    {
      name: "Prisma",
      icon: Si.SiPrisma,
      color: "text-teal-600",
      bgColor: "bg-teal-100 border-teal-300",
    },
    {
      name: "MongoDB",
      icon: Si.SiMongodb,
      color: "text-green-600",
      bgColor: "bg-green-100 border-green-300",
    },
    {
      name: "Redis",
      icon: Si.SiRedis,
      color: "text-red-600",
      bgColor: "bg-red-100 border-red-300",
    },
  ],
  devops: [
    {
      name: "Docker",
      icon: Si.SiDocker,
      color: "text-blue-600",
      bgColor: "bg-blue-100 border-blue-300",
    },
    {
      name: "GitLab",
      icon: Si.SiGitlab,
      color: "text-orange-600",
      bgColor: "bg-orange-100 border-orange-300",
    },
    {
      name: "NGINX",
      icon: Si.SiNginx,
      color: "text-green-600",
      bgColor: "bg-green-100 border-green-300",
    },
    {
      name: "Vercel",
      icon: Si.SiVercel,
      color: "text-black dark:text-white",
      bgColor: "bg-neutral-100 dark:bg-neutral-800 border-neutral-300",
    },
  ],
  tools: [
    {
      name: "Git",
      icon: Si.SiGit,
      color: "text-orange-600",
      bgColor: "bg-orange-100 border-orange-300",
    },
    {
      name: "GitHub",
      icon: Si.SiGithub,
      color: "text-black dark:text-white",
      bgColor: "bg-neutral-100 dark:bg-neutral-800 border-neutral-300",
    },
    {
      name: "GitLab",
      icon: Si.SiGitlab,
      color: "text-orange-600",
      bgColor: "bg-orange-100 border-orange-300",
    },
    {
      name: "Jest",
      icon: Si.SiJest,
      color: "text-red-600",
      bgColor: "bg-red-100 border-red-300",
    },
    {
      name: "Cypress",
      icon: Si.SiCypress,
      color: "text-green-600",
      bgColor: "bg-green-100 border-green-300",
    },
    {
      name: "Bun",
      icon: Si.SiBun,
      color: "text-amber-600",
      bgColor: "bg-amber-100 border-amber-300",
    },
  ],
  build: [
    {
      name: "Webpack",
      icon: Si.SiWebpack,
      color: "text-blue-600",
      bgColor: "bg-blue-100 border-blue-300",
    },
    {
      name: "Vite",
      icon: Si.SiVite,
      color: "text-purple-600",
      bgColor: "bg-purple-100 border-purple-300",
    },
    {
      name: "Turborepo",
      icon: Si.SiTurborepo,
      color: "text-neutral-900 dark:text-neutral-100",
      bgColor: "bg-neutral-100 dark:bg-neutral-800 border-neutral-300",
    },
    {
      name: "ESLint",
      icon: Si.SiEslint,
      color: "text-purple-600",
      bgColor: "bg-purple-100 border-purple-300",
    },
    {
      name: "Prettier",
      icon: Si.SiPrettier,
      color: "text-pink-600",
      bgColor: "bg-pink-100 border-pink-300",
    },
  ],
  blockchain: [
    {
      name: "Solana",
      icon: Si.SiSolana,
      color: "text-purple-600",
      bgColor: "bg-purple-100 border-purple-300",
    },
    {
      name: "TON",
      icon: Si.SiTon,
      color: "text-blue-600",
      bgColor: "bg-blue-100 border-blue-300",
    },
    {
      name: "EVM",
      icon: Si.SiEthereum,
      color: "text-slate-600",
      bgColor: "bg-slate-100 border-slate-300",
    },
    {
      name: "Wagmi",
      icon: Si.SiWagmi,
      color: "text-pink-600",
      bgColor: "bg-pink-100 border-pink-300",
    },
    {
      name: "Viem",
      icon: Si.SiEthereum,
      color: "text-emerald-600",
      bgColor: "bg-emerald-100 border-emerald-300",
    },
    {
      name: "Web3.js",
      icon: Si.SiWeb3Dotjs,
      color: "text-orange-600",
      bgColor: "bg-orange-100 border-orange-300",
    },
    {
      name: "Hardhat",
      icon: Bi.BiSolidHardHat,
      color: "text-yellow-600",
      bgColor: "bg-yellow-100 border-yellow-300",
    },
  ],
  validation: [
    {
      name: "Zod",
      icon: Si.SiZod,
      color: "text-blue-600",
      bgColor: "bg-blue-100 border-blue-300",
    },
  ],
};

export const technologies = {
  frontend: [
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Tanstack Query",
    "Zustand",
    "Shadcn/ui",
  ],
  backend: [
    "Node.js",
    "NestJS",
    "Express",
    "GraphQL",
    "REST API",
    "WebSocket",
    "Microservices",
  ],
  database: ["PostgreSQL", "Redis", "Prisma", "Supabase"],
  tools: [
    "Git",
    "Docker",
    "GitHub Actions",
    "Vercel",
    "Turborepo",
    "ESLint",
    "Prettier",
  ],
};
