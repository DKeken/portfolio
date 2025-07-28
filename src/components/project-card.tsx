"use client";

import Link from "next/link";
import Image from "next/image";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { FaExternalLinkAlt, FaLock } from "react-icons/fa";
import { Project } from "./portfolio";
import { useTranslations } from "next-intl";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const t = useTranslations("portfolio");

  return (
    <Card className="group overflow-hidden h-full flex flex-col relative">
      {/* NDA Badge */}
      {project.isNDA && (
        <div className="absolute top-4 right-4 z-10">
          <Badge variant="destructive" className="font-medium">
            NDA
          </Badge>
        </div>
      )}

      {/* Image container */}
      <div className="relative overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          width={400}
          height={240}
          className={`w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105 ${
            project.isNDA ? "filter blur-sm" : ""
          }`}
        />

        {/* Overlay button */}
        {!project.isNDA && (
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20">
            <Button asChild size="sm">
              <Link href={project.link} target="_blank">
                <FaExternalLinkAlt className="mr-2 h-4 w-4" />
                {t("view_project")}
              </Link>
            </Button>
          </div>
        )}

        {project.isNDA && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/30">
            <div className="flex flex-col items-center space-y-2 text-white">
              <FaLock className="h-6 w-6" />
              <span className="text-sm font-medium">{t("nda_restricted")}</span>
            </div>
          </div>
        )}
      </div>

      <CardContent className="p-6 flex-1 flex flex-col">
        <div className="flex-1">
          <h3 className="text-xl font-semibold mb-3 line-clamp-2">
            {project.title}
          </h3>

          <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
            {project.description}
            {project.isNDA && (
              <span className="block mt-2 text-xs text-destructive font-medium">
                {t("nda_disclaimer")}
              </span>
            )}
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 pt-4 border-t">
          {project.tags.slice(0, 3).map((tag, index) => (
            <Badge
              key={index}
              variant="secondary"
              className="text-xs px-2 py-1"
            >
              {tag.trim()}
            </Badge>
          ))}
          {project.tags.length > 3 && (
            <Badge variant="outline" className="text-xs px-2 py-1">
              +{project.tags.length - 3}
            </Badge>
          )}
        </div>

        {/* Action button for NDA projects */}
        {project.isNDA && (
          <div className="mt-4 pt-4 border-t">
            <Button disabled size="sm" variant="outline" className="w-full">
              <FaLock className="mr-2 h-3 w-3" />
              {t("confidential_project")}
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
