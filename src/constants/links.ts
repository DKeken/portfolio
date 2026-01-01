export const SOCIAL_LINKS = {
  TELEGRAM: "https://t.me/kekenkeken",
  GITHUB: "https://github.com/DKeken",
  RESUME_RU: "/resume_ru.pdf",
  RESUME_EN: "/resume_en.pdf",
} as const;

export const SITE_CONFIG = {
  BASE_URL: process.env.NEXT_PUBLIC_BASE_URL || "https://daniilschovkunov.dev",
  SCREENSHOT_PATH: "/images/screenshot.png",
} as const;
