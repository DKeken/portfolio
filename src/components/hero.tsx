import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Motion, MotionH1, MotionP, MotionSpan } from "@/components/ui/motion";
import { FaTelegramPlane, FaGithub } from "react-icons/fa";
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
    <section className="flex min-h-screen w-full flex-col items-center justify-center px-4 py-12 md:px-8 md:py-20 relative">
      <div className="mx-auto w-full max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6">
          <Motion
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
            }}
          >
            <Badge
              variant="default"
              className="inline-flex w-fit items-center gap-2 p-2 text-primary-foreground"
            >
              <div className="h-2 w-2 animate-pulse rounded-full bg-primary-foreground" />
              <span className="text-xs font-medium sm:text-sm">
                {t("open_to_offers")}
              </span>
            </Badge>
          </Motion>

          <Motion
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 20,
              delay: 0.2,
            }}
            className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:gap-8"
          >
            <Avatar className="h-20 w-20 rounded-lg border border-border ring-2 ring-primary/20 sm:h-24 sm:w-24">
              <AvatarImage
                src="/avatar.jpg"
                alt="Даниил's avatar"
                className="object-cover"
              />
              <AvatarFallback className="text-2xl font-medium sm:text-3xl">
                ДШ
              </AvatarFallback>
            </Avatar>

            <div className="flex flex-col gap-2">
              <MotionH1
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                  delay: 0.4,
                }}
                className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
              >
                {t("hello_name")}
                <MotionSpan
                  initial={{ rotate: 0 }}
                  animate={{ rotate: [0, -20, 10, -20, 0] }}
                  transition={{
                    delay: 1.2,
                    duration: 1.5,
                    ease: "easeInOut",
                  }}
                  className="inline-block"
                >
                  👋
                </MotionSpan>
              </MotionH1>

              <MotionP
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                  delay: 0.6,
                }}
                className="max-w-xl text-base text-muted-foreground sm:text-lg md:text-xl"
              >
                {t("developer_description")}
              </MotionP>
            </div>
          </Motion>

          <Motion
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 20,
              delay: 0.8,
            }}
            className="mt-4 flex flex-col gap-3 sm:flex-row sm:gap-4"
          >
            <Button
              asChild
              variant="default"
              size="lg"
              className={cn(
                "flex items-center justify-center gap-2",
                "w-full sm:w-auto"
              )}
            >
              <Link href="https://t.me/kekenkeken" target="_blank">
                <FaTelegramPlane className="h-4 w-4" />
                <span>{t("contact")}</span>
              </Link>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className={cn(
                "flex items-center justify-center gap-2",
                "w-full sm:w-auto"
              )}
              asChild
            >
              <Link href="https://github.com/DKeken" target="_blank">
                <FaGithub className="h-4 w-4" />
                <span>{t("learn_more")}</span>
              </Link>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className={cn(
                "flex items-center justify-center gap-2",
                "w-full sm:w-auto"
              )}
              asChild
            >
              <Link href={`/resume_${locale}.pdf`} target="_blank" download>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                <span>{t("download_resume")}</span>
              </Link>
            </Button>
          </Motion>
        </div>
      </div>
      <ScrollButton text={t("about_me")} id="additional-info" />
    </section>
  );
}
