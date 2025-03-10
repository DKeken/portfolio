import { getTranslations } from "next-intl/server";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import { Motion } from "./ui/motion";
import { FaGithub, FaTrophy, FaCode, FaCubes, FaRocket } from "react-icons/fa";
import Link from "next/link";

export async function AdditionalInfo() {
  const t = await getTranslations("additional_info");

  return (
    <section className="px-6 py-12 md:py-16 w-full" id="additional-info">
      <div className="w-full max-w-3xl mx-auto">
        <Motion
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 20,
          }}
        >
          <Card className="w-full shadow-lg overflow-hidden">
            <CardHeader>
              <CardTitle className="font-bold">{t("title")}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              {/* About Me Section */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">{t("about_me.title")}</h3>
                <p className="text-muted-foreground">
                  {t("about_me.description")}
                </p>

                {/* Badges */}
                <div className="flex flex-wrap gap-3 pt-2">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 text-sm font-medium">
                    <FaTrophy className="h-4 w-4" />
                    {t("about_me.badges.hackathon_winner")}
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-sm font-medium">
                    <FaCode className="h-4 w-4" />
                    {t("about_me.badges.open_source")}
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 text-sm font-medium">
                    <FaCubes className="h-4 w-4" />
                    {t("about_me.badges.blockchain")}
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-sm font-medium">
                    <FaRocket className="h-4 w-4" />
                    {t("about_me.badges.modern_stack")}
                  </div>
                </div>

                {/* Links */}
                <div className="flex flex-col gap-2 pt-4">
                  <Link
                    href="https://github.com/DKeken"
                    target="_blank"
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <FaGithub className="h-4 w-4" />
                    {t("links.github")}
                  </Link>
                  <p className="text-sm text-muted-foreground">
                    {t("links.stack")}
                  </p>
                </div>
              </div>

              {/* Work Approach Section */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">{t("approach.title")}</h3>
                <div className="grid gap-6 sm:grid-cols-1">
                  {/* Adaptability */}
                  <div className="space-y-2">
                    <h4 className="font-medium">
                      {t("approach.adaptability.title")}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {t("approach.adaptability.description")}
                    </p>
                  </div>

                  {/* Code Quality */}
                  <div className="space-y-2">
                    <h4 className="font-medium">
                      {t("approach.code_quality.title")}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {t("approach.code_quality.description")}
                    </p>
                  </div>

                  {/* Business Focus */}
                  <div className="space-y-2">
                    <h4 className="font-medium">
                      {t("approach.business_focus.title")}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {t("approach.business_focus.description")}
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </Motion>
      </div>
    </section>
  );
}
