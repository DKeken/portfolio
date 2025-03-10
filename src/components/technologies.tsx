import { getTranslations } from "next-intl/server";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import { Motion } from "./ui/motion";
import { TECHNOLOGY_GROUPS } from "@/constants/tags";
import { TagBadgeWithStyle } from "./ui/tag-badge";

export async function Technologies() {
  const t = await getTranslations("technologies");

  return (
    <section className="px-6 py-12 md:py-16 w-full" id="technologies">
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
            <CardContent>
              <div className="flex flex-col gap-6">
                {Object.entries(TECHNOLOGY_GROUPS).map(
                  ([group, technologies]) => (
                    <div key={group} className="space-y-2">
                      <h4 className="text-sm font-medium text-muted-foreground capitalize">
                        {t(`groups.${group}`)}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {technologies.map((tech) => (
                          <TagBadgeWithStyle
                            key={tech.name}
                            tagName={tech.name}
                            icon={tech.icon}
                            color={tech.color}
                            bgColor={tech.bgColor}
                          />
                        ))}
                      </div>
                    </div>
                  )
                )}
              </div>
            </CardContent>
          </Card>
        </Motion>
      </div>
    </section>
  );
}
