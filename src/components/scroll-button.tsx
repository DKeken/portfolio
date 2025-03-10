"use client";

import { FaChevronDown } from "react-icons/fa";
import { Motion } from "@/components/ui/motion";
import { useCallback } from "react";

interface ScrollButtonProps {
  text: string;
  id: string;
}

export function ScrollButton({ text, id }: ScrollButtonProps) {
  const scrollToVacancy = useCallback(() => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  }, [id]);

  return (
    <Motion
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 20,
        delay: 1,
      }}
      className="flex flex-col items-center justify-center absolute bottom-6 left-0 right-0 gap-1.5 cursor-pointer bg-background/10"
      onClick={scrollToVacancy}
    >
      <span className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
        {text}
      </span>
      <Motion
        animate={{
          y: [0, 6, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <FaChevronDown className="h-3.5 w-3.5 text-muted-foreground" />
      </Motion>
    </Motion>
  );
}
