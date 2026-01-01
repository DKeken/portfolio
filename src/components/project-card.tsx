"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { TagBadge } from "./ui/tag-badge";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { FaExternalLinkAlt, FaLock } from "react-icons/fa";
import { useTranslations } from "next-intl";
import { Badge } from "./ui/badge";
import { Project } from "@/types/project";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const t = useTranslations("portfolio");

  return (
    <Card className="group overflow-hidden h-full flex flex-col relative border border-border/40 shadow-sm bg-background/50 hover:bg-muted/30 transition-all duration-300 rounded-xl hover:shadow-md hover:border-border/80">
      {/* Image container */}
      <div className="relative overflow-hidden aspect-[16/10] w-full border-b border-border/40">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className={`object-cover transition-transform duration-500 group-hover:scale-105 ${
            project.isNDA ? "opacity-60 grayscale" : ""
          }`}
        />

        {/* Overlay for NDA */}
        {project.isNDA && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-[1px]">
            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-background/90 backdrop-blur-md rounded-full shadow-lg border border-border/50">
              <FaLock className="h-3 w-3 text-muted-foreground" />
              <span className="text-xs font-medium text-foreground">
                {t("nda_restricted")}
              </span>
            </div>
          </div>
        )}

        {/* Action Button (only if not NDA) */}
        {!project.isNDA && (
          <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
            <Button
              asChild
              size="icon"
              className="rounded-full h-8 w-8 bg-background/80 backdrop-blur-md hover:bg-background text-foreground border border-border/50 shadow-sm"
            >
              <Link href={project.link} target="_blank">
                <FaExternalLinkAlt className="h-3.5 w-3.5" />
              </Link>
            </Button>
          </div>
        )}
      </div>

      <CardContent className="p-5 flex-1 flex flex-col space-y-3">
        <div>
          <h3 className="text-lg font-bold tracking-tight mb-2 group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed line-clamp-4">
            {project.description}
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mt-auto pt-4 border-t border-border/30">
          {project.tags.slice(0, 4).map((tag, index) => (
            <TagBadge
              key={index}
              tag={tag}
              className="text-[10px] px-2 py-0.5 h-6"
            />
          ))}
          {project.tags.length > 4 && (
            <Badge
              variant="secondary"
              className="text-[10px] px-1.5 h-6 bg-muted/50 text-muted-foreground hover:bg-muted/80"
            >
              +{project.tags.length - 4}
            </Badge>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
