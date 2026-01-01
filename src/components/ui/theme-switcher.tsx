"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useTransition } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface ThemeSwitcherProps {
  className?: string;
}

export function ThemeSwitcher({ className }: ThemeSwitcherProps) {
  const { setTheme, resolvedTheme } = useTheme();
  const [isPending, startTransition] = useTransition();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = React.useCallback(() => {
    startTransition(() => {
      const targetTheme = resolvedTheme === "dark" ? "light" : "dark";
      setTheme(targetTheme);
    });
  }, [resolvedTheme, setTheme]);

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      disabled={isPending}
      aria-label="Toggle theme"
      className={cn("w-[40px] h-[40px]  ", className)}
    >
      <div className="relative w-6 h-6 flex items-center justify-center">
        {mounted && (resolvedTheme === "light" ? (
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute"
          >
            <Sun className="h-5 w-5" strokeWidth={1.5} />
          </motion.div>
        ) : (
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute"
          >
            <Moon className="h-5 w-5" strokeWidth={1.5} />
          </motion.div>
        ))}

        {isPending && (
          <span className="absolute inset-0 flex items-center justify-center bg-background/50 rounded-full">
            <span className="h-3 w-3 animate-spin rounded-full border-2 border-primary border-t-transparent" />
          </span>
        )}
      </div>
    </Button>
  );
}
