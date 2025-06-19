import { getTranslations } from "next-intl/server";
import { Motion } from "./ui/motion";
import { Badge } from "./ui/badge";
import { Card } from "./ui/card";
import { technologies } from "@/constants/technologies";
import { FaCode, FaServer, FaDatabase, FaTools } from "react-icons/fa";

export async function Technologies() {
  const t = await getTranslations("technologies");

  const techCategories = [
    {
      icon: FaCode,
      title: t("categories.frontend"),
      techs: technologies.frontend,
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: FaServer,
      title: t("categories.backend"),
      techs: technologies.backend,
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: FaDatabase,
      title: t("categories.database"),
      techs: technologies.database,
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: FaTools,
      title: t("categories.tools"),
      techs: technologies.tools,
      color: "from-orange-500 to-red-500",
    },
  ];

  return (
    <section className="py-20 px-6" id="technologies">
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
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {t("subtitle")}
            </p>
            <div className="w-16 h-1 bg-primary mx-auto rounded-full mt-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {techCategories.map((category, categoryIndex) => (
              <Motion
                key={categoryIndex}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              >
                <Card className="p-6 h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center gap-3 mb-6">
                    <div
                      className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center shadow-md`}
                    >
                      <category.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold">{category.title}</h3>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {category.techs.map((tech, techIndex) => (
                      <Motion
                        key={techIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                          duration: 0.3,
                          delay: categoryIndex * 0.1 + techIndex * 0.05,
                        }}
                      >
                        <Badge
                          variant="secondary"
                          className="w-full justify-center py-2 text-xs font-medium hover:bg-primary hover:text-primary-foreground transition-colors duration-200 cursor-default"
                        >
                          {tech}
                        </Badge>
                      </Motion>
                    ))}
                  </div>
                </Card>
              </Motion>
            ))}
          </div>
        </Motion>
      </div>
    </section>
  );
}
