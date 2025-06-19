import { getTranslations } from "next-intl/server";
import { Motion } from "./ui/motion";
import { TagBadge } from "./ui/tag-badge";
import { ProjectCard } from "./project-card";

export async function Portfolio() {
  const t = await getTranslations("portfolio");

  // Project data structure
  const projects = [
    {
      id: 4,
      title: t("projects.project4.title"),
      description: t("projects.project4.description"),
      image: "/images/project4.jpg",
      tags: t("projects.project4.tags").split(","),
      link: t("projects.project4.link"),
    },
    {
      id: 5,
      title: t("projects.project5.title"),
      description: t("projects.project5.description"),
      image: "/images/project5.jpg",
      tags: t("projects.project5.tags").split(","),
      link: t("projects.project5.link"),
    },
    {
      id: 6,
      title: t("projects.project6.title"),
      description: t("projects.project6.description"),
      image: "/images/project6.jpg",
      tags: t("projects.project6.tags").split(","),
      link: t("projects.project6.link"),
    },
  ];

  return (
    <section className="py-20 px-6" id="portfolio">
      <div className="max-w-7xl mx-auto">
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

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Motion
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ProjectCard project={project} />
              </Motion>
            ))}
          </div>
        </Motion>
      </div>
    </section>
  );
}

// Define project type
export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
}

// Project tag component
export const ProjectTag = ({ tag }: { tag: string }) => {
  return <TagBadge tag={tag} />;
};
