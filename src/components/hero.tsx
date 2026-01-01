import { Motion } from "@/components/ui/motion";
import { FaTelegramPlane, FaGithub, FaArrowDown } from "react-icons/fa";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getLocale, getTranslations } from "next-intl/server";
import Link from "next/link";
import Image from "next/image";
import { SOCIAL_LINKS } from "@/constants/links";

export async function Hero() {
  const t = await getTranslations("hero");
  const locale = await getLocale();

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-16 border-b border-border/40">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]">
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary/20 opacity-20 blur-[100px]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 flex flex-col items-center text-center">
        {/* Avatar with Glow */}
        <Motion
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8 relative"
        >
          <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary/50 to-secondary/50 opacity-30 blur-lg animate-pulse" />
          <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-background shadow-2xl ring-1 ring-border/50">
            <Image
              src="/avatar.jpg"
              alt="Avatar"
              fill
              className="object-cover"
              priority
            />
          </div>
        </Motion>

        {/* Status Badge */}
        <Motion
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-8"
        >
          <Badge
            variant="outline"
            className="rounded-full px-4 py-1.5 text-sm font-medium bg-background/50 backdrop-blur-md border-border/50 shadow-sm"
          >
            <span className="relative flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            {t("open_to_offers")}
          </Badge>
        </Motion>

        {/* Main Title */}
        <Motion
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6 space-y-4"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
            <span className="block text-foreground">{t("hello_name")}</span>
            <span className="block bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent text-2xl md:text-4xl lg:text-5xl font-semibold mt-2">
              {t("role_description") || "Frontend Engineer"}
            </span>
          </h1>
        </Motion>

        {/* Description */}
        <Motion
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-2xl mb-10"
        >
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed text-pretty">
            {t("developer_description")}
          </p>
        </Motion>

        {/* Actions */}
        <Motion
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center gap-4 mb-10"
        >
          <Button
            asChild
            size="lg"
            className="h-12 px-8 rounded-full text-base font-medium min-w-[150px] shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all duration-300"
          >
            <Link href={SOCIAL_LINKS.TELEGRAM} target="_blank">
              {t("contact")}
              <FaTelegramPlane className="ml-2 h-4 w-4" />
            </Link>
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="h-12 px-8 rounded-full text-base font-medium min-w-[150px] bg-background/50 hover:bg-muted/50 border-border/50 hover:border-border transition-all duration-300"
            asChild
          >
            <Link href={SOCIAL_LINKS.GITHUB} target="_blank">
              <FaGithub className="mr-2 h-5 w-5" />
              GitHub
            </Link>
          </Button>

          <Button
            variant="ghost"
            size="lg"
            className="h-12 px-8 rounded-full text-base font-medium hover:bg-muted/50 transition-all duration-300"
            asChild
          >
            <a
              href={
                locale === "ru"
                  ? SOCIAL_LINKS.RESUME_RU
                  : SOCIAL_LINKS.RESUME_EN
              }
              target="_blank"
              download
            >
              Resume
              <FaArrowDown className="ml-2 h-3 w-3 opacity-50" />
            </a>
          </Button>
        </Motion>
      </div>
    </section>
  );
}
