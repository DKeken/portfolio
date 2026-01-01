import { getTranslations } from "next-intl/server";
import { Motion } from "./ui/motion";
import { TECHNOLOGY_GROUPS } from "@/constants/tags";
import { TagBadgeWithStyle } from "./ui/tag-badge";
import { FaCode, FaServer, FaDatabase, FaTools, FaCloud } from "react-icons/fa";

export async function Technologies() {
  const t = await getTranslations("technologies");

  const techCategories = [
    {
      icon: FaCode,
      title: t("categories.frontend"),
      techs: TECHNOLOGY_GROUPS.frontend,
      description: t("descriptions.frontend"),
    },
    {
      icon: FaServer,
      title: t("categories.backend"),
      techs: TECHNOLOGY_GROUPS.backend,
      description: t("descriptions.backend"),
    },
    {
      icon: FaDatabase,
      title: t("categories.database"),
      techs: TECHNOLOGY_GROUPS.database,
      description: t("descriptions.database"),
    },
    {
      icon: FaCloud,
      title: t("categories.devops"),
      techs: TECHNOLOGY_GROUPS.devops,
      description: t("descriptions.devops"),
    },
    {
      icon: FaTools,
      title: t("categories.tools"),
      techs: TECHNOLOGY_GROUPS.tools,
      description: t("descriptions.tools"),
    },
    {
      icon: FaCode,
      title: t("categories.blockchain"),
      techs: TECHNOLOGY_GROUPS.blockchain,
      description: t("descriptions.blockchain"),
    },
  ];

  return (
    <section className="py-20 px-6" id="technologies">
      <div className="max-w-7xl mx-auto">
        <Motion
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
            {t("title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {t("subtitle")}
          </p>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full mt-6" />
        </Motion>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techCategories.map((category, categoryIndex) => (
            <Motion
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="h-full"
            >
              <div className="h-full p-6 rounded-xl border border-border/40 bg-background/50 backdrop-blur-sm hover:border-primary/20 hover:bg-muted/30 transition-all duration-300 group shadow-sm hover:shadow-md">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-primary/5 text-primary group-hover:bg-primary/10 transition-colors">
                    <category.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold tracking-tight">
                    {category.title}
                  </h3>
                </div>

                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                  {category.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {category.techs.map((tech, techIndex) => (
                    <Motion
                      key={techIndex}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.3,
                        delay: categoryIndex * 0.1 + techIndex * 0.05,
                      }}
                    >
                      <TagBadgeWithStyle
                        tagName={tech.name}
                        icon={tech.icon}
                        color={tech.color}
                        bgColor={tech.bgColor}
                        className="cursor-default py-1 px-2.5 text-xs border border-transparent hover:border-border/50"
                      />
                    </Motion>
                  ))}
                </div>
              </div>
            </Motion>
          ))}
        </div>
      </div>
    </section>
  );
}
