import { getTranslations } from "next-intl/server";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import { Motion } from "./ui/motion";
import {
  FaGithub,
  FaTrophy,
  FaCode,
  FaCubes,
  FaRocket,
  FaHeart,
  FaBullseye,
  FaLightbulb,
} from "react-icons/fa";
import Link from "next/link";

export async function AdditionalInfo() {
  const t = await getTranslations("additional_info");

  const workApproaches = [
    {
      icon: FaLightbulb,
      title: t("approach.adaptability.title"),
      description: t("approach.adaptability.description"),
    },
    {
      icon: FaHeart,
      title: t("approach.code_quality.title"),
      description: t("approach.code_quality.description"),
    },
    {
      icon: FaBullseye,
      title: t("approach.business_focus.title"),
      description: t("approach.business_focus.description"),
    },
  ];

  return (
    <section className="py-20 px-6" id="additional-info">
      <div className="max-w-6xl mx-auto">
        <Motion
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t("title")}
            </h2>
            <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* About Me Section */}
            <Card className="h-full border-0 shadow-lg">
              <CardHeader className="pb-6">
                <CardTitle className="text-xl font-semibold flex items-center gap-2">
                  <FaCode className="h-5 w-5 text-primary" />
                  {t("about_me.title")}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  {t("about_me.description")}
                </p>

                {/* Achievement badges */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-center gap-2 p-3 rounded-lg bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800">
                    <FaTrophy className="h-4 w-4 text-amber-600 dark:text-amber-400" />
                    <span className="text-xs font-medium text-amber-700 dark:text-amber-300">
                      {t("about_me.badges.hackathon_winner")}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 p-3 rounded-lg bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800">
                    <FaCode className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                    <span className="text-xs font-medium text-blue-700 dark:text-blue-300">
                      {t("about_me.badges.open_source")}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 p-3 rounded-lg bg-purple-50 dark:bg-purple-950/20 border border-purple-200 dark:border-purple-800">
                    <FaCubes className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                    <span className="text-xs font-medium text-purple-700 dark:text-purple-300">
                      {t("about_me.badges.blockchain")}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 p-3 rounded-lg bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800">
                    <FaRocket className="h-4 w-4 text-green-600 dark:text-green-400" />
                    <span className="text-xs font-medium text-green-700 dark:text-green-300">
                      {t("about_me.badges.modern_stack")}
                    </span>
                  </div>
                </div>

                {/* Links */}
                <div className="pt-4 space-y-2">
                  <Link
                    href="https://github.com/DKeken"
                    target="_blank"
                    className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    <FaGithub className="h-4 w-4" />
                    {t("links.github")}
                  </Link>
                  <p className="text-sm text-muted-foreground">
                    {t("links.stack")}
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Work Approach Section */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-8">
                {t("approach.title")}
              </h3>

              <div className="space-y-6">
                {workApproaches.map((approach, index) => (
                  <Motion
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="flex gap-4 p-6 rounded-xl bg-card border hover:shadow-md transition-shadow duration-200">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                          <approach.icon className="h-6 w-6 text-primary" />
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">{approach.title}</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {approach.description}
                        </p>
                      </div>
                    </div>
                  </Motion>
                ))}
              </div>
            </div>
          </div>
        </Motion>
      </div>
    </section>
  );
}
