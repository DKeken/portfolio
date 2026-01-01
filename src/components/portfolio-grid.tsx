"use client";

import React, { useState, useMemo } from "react";
import { Motion, AnimatePresence } from "./ui/motion";
import { ProjectCard } from "./project-card";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { Project } from "@/types/project";
import { X } from "lucide-react";

interface PortfolioGridProps {
  projects: Project[];
  title: string;
  subtitle: string;
  labels: {
    all: string;
    projects: string;
    empty: string;
  };
}

export function PortfolioGrid({ projects, title, subtitle, labels }: PortfolioGridProps) {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  // Calculate tag counts to sort by popularity
  const tagStats = useMemo(() => {
    const stats: Record<string, number> = {};
    projects.forEach((p) => {
      p.tags.forEach((t) => {
        const tag = t.trim();
        stats[tag] = (stats[tag] || 0) + 1;
      });
    });
    return stats;
  }, [projects]);

  // Get unique tags sorted by popularity (frequency)
  const tags = useMemo(() => {
    return Object.keys(tagStats).sort((a, b) => {
      // Sort by count (descending)
      const countDiff = tagStats[b] - tagStats[a];
      if (countDiff !== 0) return countDiff;
      // Then alphabetically
      return a.localeCompare(b);
    });
  }, [tagStats]);

  // Filter projects based on selected tags (OR logic - match any selected tag)
  const filteredProjects = useMemo(() => {
    if (selectedTags.length === 0) return projects;
    return projects.filter((p) => 
      p.tags.some((t) => selectedTags.includes(t.trim()))
    );
  }, [projects, selectedTags]);

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) => 
      prev.includes(tag) 
        ? prev.filter((t) => t !== tag)
        : [...prev, tag]
    );
  };

  const clearFilters = () => {
    setSelectedTags([]);
  };

  return (
    <section className="py-20 px-6" id="portfolio">
      <div className="max-w-7xl mx-auto">
        <Motion
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 border-b pb-6 border-border/50">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-bold mb-3 tracking-tight">
                {title}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {subtitle}
              </p>
            </div>
            <div className="hidden md:block text-right">
              <div className="text-3xl font-bold text-muted-foreground/20">
                <AnimatePresence mode="wait">
                  <Motion
                    key={filteredProjects.length}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                  >
                    {filteredProjects.length.toString().padStart(2, "0")}
                  </Motion>
                </AnimatePresence>
              </div>
              <div className="text-xs text-muted-foreground uppercase tracking-widest font-semibold">
                {labels.projects}
              </div>
            </div>
          </div>

          {/* Filter Tags */}
          <div className="flex flex-wrap items-center gap-2 mb-8">
             <Button
                variant={selectedTags.length === 0 ? "default" : "outline"}
                size="sm"
                onClick={clearFilters}
                className={cn(
                  "rounded-full text-xs h-8 px-4 transition-all duration-300",
                  selectedTags.length === 0
                    ? "shadow-md scale-105"
                    : "bg-background/50 hover:bg-muted text-muted-foreground hover:text-foreground border-border/40"
                )}
              >
                {labels.all}
              </Button>

            {tags.slice(0, 15).map((tag) => { // Show top 15 tags to keep it clean
              const isActive = selectedTags.includes(tag);
              const count = tagStats[tag];
              
              return (
                <Button
                  key={tag}
                  variant={isActive ? "default" : "outline"}
                  size="sm"
                  onClick={() => toggleTag(tag)}
                  className={cn(
                    "rounded-full text-xs h-8 px-3 transition-all duration-300 gap-1.5",
                    isActive
                      ? "shadow-md ring-2 ring-primary/20 ring-offset-1 dark:ring-offset-background"
                      : "bg-background/50 hover:bg-muted text-muted-foreground hover:text-foreground border-border/40"
                  )}
                >
                  {tag}
                  <span className={cn("text-[10px] opacity-60 ml-0.5", isActive ? "text-primary-foreground" : "")}>
                    {count}
                  </span>
                </Button>
              );
            })}

            {/* Clear selection button if any tags selected */}
            <AnimatePresence>
              {selectedTags.length > 0 && (
                <Motion
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                >
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={clearFilters}
                    className="h-8 w-8 rounded-full ml-1 hover:bg-destructive/10 hover:text-destructive"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </Motion>
              )}
            </AnimatePresence>
          </div>
        </Motion>

        <Motion
           layout
           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 min-h-[200px]"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project) => (
                <Motion
                  layout
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <ProjectCard project={project} />
                </Motion>
              ))
            ) : (
               <Motion
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="col-span-full py-20 text-center text-muted-foreground flex flex-col items-center justify-center"
               >
                 <div className="text-4xl mb-4">🔍</div>
                 <p>{labels.empty}</p>
                 <Button 
                   variant="link" 
                   onClick={clearFilters}
                   className="mt-2 text-primary"
                 >
                   {labels.all}
                 </Button>
               </Motion>
            )}
          </AnimatePresence>
        </Motion>
      </div>
    </section>
  );
}
