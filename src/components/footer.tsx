import { FaGithub, FaTelegramPlane, FaLinkedinIn } from "react-icons/fa";
import { getTranslations } from "next-intl/server";
import Link from "next/link";

export async function Footer() {
  const t = await getTranslations("footer");

  return (
    <footer className="w-full bg-background py-8 border-t">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Daniil Shovkunov
            </p>
            <p className="text-xs text-muted-foreground mt-1">{t("rights")}</p>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="https://github.com/Dkeken"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <FaGithub className="h-5 w-5" />
            </Link>
            <Link
              href="https://t.me/KekenKeken"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Telegram"
            >
              <FaTelegramPlane className="h-5 w-5" />
            </Link>
            <Link
              href="https://linkedin.com/in/daniil-shovkunov-4135a2330/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
