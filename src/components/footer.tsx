import { getTranslations } from "next-intl/server";
import { FaGithub, FaTelegramPlane, FaHeart } from "react-icons/fa";
import Link from "next/link";
import { Button } from "./ui/button";

export async function Footer() {
  const t = await getTranslations("footer");
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Left section - Links */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <h3 className="text-lg font-semibold">{t("connect")}</h3>
            <div className="flex gap-3">
              <Button variant="ghost" size="sm" asChild>
                <Link
                  href="https://github.com/DKeken"
                  target="_blank"
                  className="flex items-center gap-2"
                >
                  <FaGithub className="h-4 w-4" />
                  GitHub
                </Link>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <Link
                  href="https://t.me/kekenkeken"
                  target="_blank"
                  className="flex items-center gap-2"
                >
                  <FaTelegramPlane className="h-4 w-4" />
                  Telegram
                </Link>
              </Button>
            </div>
          </div>

          {/* Center section - Made with love */}
          <div className="text-center">
            <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
              {t("made_with")}
              <FaHeart className="h-3 w-3 text-red-500 animate-pulse" />
              {t("by_me")}
            </p>
          </div>

          {/* Right section - Copyright */}
          <div className="text-center md:text-right">
            <p className="text-sm text-muted-foreground">
              © {currentYear} {t("copyright")}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
