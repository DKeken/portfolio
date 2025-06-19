import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Motion } from "@/components/ui/motion";
import { FaTelegramPlane, FaGithub, FaDownload } from "react-icons/fa";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getLocale, getTranslations } from "next-intl/server";
import Link from "next/link";
import { ScrollButton } from "@/components/scroll-button";

export async function Hero() {
  const t = await getTranslations("hero");
  const locale = await getLocale();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/30 to-background" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 py-20">
        <div className="text-center space-y-8">
          {/* Status badge */}
          <Motion
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <Badge
              variant="secondary"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium"
            >
              <div className="h-2 w-2 bg-green-500 rounded-full animate-pulse" />
              {t("open_to_offers")}
            </Badge>
          </Motion>

          {/* Avatar */}
          <Motion
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            <div className="flex justify-center mb-6">
              <Avatar className="h-32 w-32 border-4 border-background shadow-xl">
                <AvatarImage
                  src="/avatar.jpg"
                  alt="Даниил's avatar"
                  className="object-cover"
                />
                <AvatarFallback className="text-3xl font-bold bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
                  ДШ
                </AvatarFallback>
              </Avatar>
            </div>
          </Motion>

          {/* Main content */}
          <Motion
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                {t("hello_name")}
                <span className="inline-block ml-2 animate-bounce">👋</span>
              </h1>

              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                {t("developer_description")}
              </p>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
              <Button
                asChild
                size="lg"
                className="h-12 px-8 text-base font-medium min-w-[160px]"
              >
                <Link href="https://t.me/kekenkeken" target="_blank">
                  <FaTelegramPlane className="mr-2 h-5 w-5" />
                  {t("contact")}
                </Link>
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="h-12 px-8 text-base font-medium min-w-[160px]"
                asChild
              >
                <Link href="https://github.com/DKeken" target="_blank">
                  <FaGithub className="mr-2 h-5 w-5" />
                  {t("learn_more")}
                </Link>
              </Button>

              <Button
                variant="ghost"
                size="lg"
                className="h-12 px-8 text-base font-medium min-w-[160px] border border-dashed border-border hover:border-solid"
                asChild
              >
                <Link href={`/resume_${locale}.pdf`} target="_blank" download>
                  <FaDownload className="mr-2 h-4 w-4" />
                  {t("download_resume")}
                </Link>
              </Button>
            </div>
          </Motion>
        </div>
      </div>

      {/* Scroll indicator */}
      <Motion
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-16"
      >
        <ScrollButton text={t("about_me")} id="additional-info" />
      </Motion>
    </section>
  );
}
