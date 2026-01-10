import { getTranslations } from "next-intl/server";
import { PROJECTS } from "@/constants/projects";
import { PortfolioGrid } from "./portfolio-grid";
import { Project } from "@/types/project";

export async function Portfolio() {
  const t = await getTranslations("portfolio");

  // Project data structure
  const projects: Project[] = PROJECTS.map((project) => ({
    ...project,
    title: t(`projects.${project.key}.title`),
    description: t(`projects.${project.key}.description`),
    tags: t(`projects.${project.key}.tags`).split(","),
    link: t(`projects.${project.key}.link`),
    // Ensure images array exists if defined in config, or fallback to single image
    images: project.images || [project.image],
  }));

  const labels = {
    all: t("categories.all"),
    projects: "Projects", // Or t("projects_count_label") if you add it
    empty: t("empty"),
  };

  return (
    <PortfolioGrid
      projects={projects}
      title={t("title")}
      subtitle={t("subtitle")}
      labels={labels}
    />
  );
}

// Project tag component - keeping it exported just in case other components use it
import { TagBadge } from "./ui/tag-badge";
export const ProjectTag = ({ tag }: { tag: string }) => {
  return <TagBadge tag={tag} />;
};
