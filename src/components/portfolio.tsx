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
    <section className="px-6 py-12 md:py-16 w-full bg-muted/30" id="portfolio">
      <div className="w-full max-w-6xl mx-auto">
        <Motion
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 20,
          }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">{t("title")}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t("subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
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
