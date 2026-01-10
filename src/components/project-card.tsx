"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { TagBadge } from "./ui/tag-badge";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import {
  FaExternalLinkAlt,
  FaLock,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { useTranslations } from "next-intl";
import { Badge } from "./ui/badge";
import { Project } from "@/types/project";
import { motion, AnimatePresence } from "framer-motion";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const t = useTranslations("portfolio");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images =
    project.images && project.images.length > 0
      ? project.images
      : [project.image];
  const hasMultipleImages = images.length > 1;

  const nextImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <Card className="group overflow-hidden h-full flex flex-col relative border border-border/40 shadow-sm bg-background/50 hover:bg-muted/30 transition-all duration-300 rounded-xl hover:shadow-md hover:border-border/80">
      {/* Image container */}
      <div className="relative overflow-hidden aspect-[16/10] w-full border-b border-border/40 bg-muted/20">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0"
          >
            <Image
              src={images[currentImageIndex]}
              alt={project.title}
              fill
              className={`object-cover transition-transform duration-500 group-hover:scale-105 ${
                project.isNDA ? "opacity-60 grayscale" : ""
              }`}
            />
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        {hasMultipleImages && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-black/30 hover:bg-black/50 text-white rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-sm z-10"
              aria-label="Previous image"
            >
              <FaChevronLeft className="h-3 w-3" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-black/30 hover:bg-black/50 text-white rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-sm z-10"
              aria-label="Next image"
            >
              <FaChevronRight className="h-3 w-3" />
            </button>

            {/* Dots Indicator */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setCurrentImageIndex(idx);
                  }}
                  className={`h-1 w-1 rounded-full transition-all duration-300 ${
                    idx === currentImageIndex
                      ? "bg-white w-3"
                      : "bg-white/50 hover:bg-white/80"
                  }`}
                  aria-label={`Go to image ${idx + 1}`}
                />
              ))}
            </div>
          </>
        )}

        {/* Overlay for NDA */}
        {project.isNDA && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-[1px] z-20 pointer-events-none">
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
          <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0 z-20">
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
