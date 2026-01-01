import { getTranslations } from "next-intl/server";
import { FaGithub, FaTelegramPlane } from "react-icons/fa";
import Link from "next/link";
import { Button } from "./ui/button";
import { SOCIAL_LINKS } from "@/constants/links";

export async function Footer() {
  const t = await getTranslations("footer");
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2 text-sm text-muted-foreground font-medium">
          © {currentYear} Daniil Schovkunov
        </div>

        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full hover:bg-muted"
            asChild
          >
            <Link href={SOCIAL_LINKS.GITHUB} target="_blank">
              <FaGithub className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full hover:bg-muted"
            asChild
          >
            <Link href={SOCIAL_LINKS.TELEGRAM} target="_blank">
              <FaTelegramPlane className="h-5 w-5" />
              <span className="sr-only">Telegram</span>
            </Link>
          </Button>
        </div>
      </div>
    </footer>
  );
}
