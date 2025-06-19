"use client";

import Link from "next/link";
import Image from "next/image";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { FaExternalLinkAlt } from "react-icons/fa";
import { Project } from "./portfolio";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col">
      {/* Image container */}
      <div className="relative overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          width={400}
          height={240}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />

        {/* Overlay button */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button asChild size="sm" className="shadow-lg">
            <Link href={project.link} target="_blank">
              <FaExternalLinkAlt className="mr-2 h-4 w-4" />
              View Project
            </Link>
          </Button>
        </div>
      </div>

      <CardContent className="p-6 flex-1 flex flex-col">
        <div className="flex-1">
          <h3 className="text-xl font-semibold mb-3 line-clamp-2 group-hover:text-primary transition-colors duration-200">
            {project.title}
          </h3>

          <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
            {project.description}
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
      </CardContent>
    </Card>
  );
}
