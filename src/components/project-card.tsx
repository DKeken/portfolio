"use client";

import { useState } from "react";
import Image from "next/image";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import { Motion } from "./ui/motion";
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "./ui/dialog";
import { Project, ProjectTag } from "./portfolio";
export function ProjectCard({ project }: { project: Project }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Motion
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 20,
        delay: project.id * 0.1,
      }}
    >
      <Card className="flex flex-col h-full overflow-hidden transition-all duration-300 hover:shadow-xl group">
        <div className="relative h-48 w-full overflow-hidden">
          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
              <div className="cursor-pointer w-full h-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-contain transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </DialogTrigger>
            <DialogContent className="max-w-3xl p-0 overflow-hidden bg-transparent border-none">
              <DialogTitle className="sr-only">
                {project.title} Image Preview
              </DialogTitle>
              <div className="relative w-full h-[80vh]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-contain"
                />
              </div>
            </DialogContent>
          </Dialog>
        </div>
        <div className="flex flex-col flex-grow">
          <CardHeader className="pb-2">
            <CardTitle className="font-bold text-xl">{project.title}</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col flex-grow">
            <p className="text-muted-foreground mb-4 flex-grow">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tags.map((tag, index) => (
                <ProjectTag key={index} tag={tag} />
              ))}
            </div>
          </CardContent>
        </div>
      </Card>
    </Motion>
  );
}
