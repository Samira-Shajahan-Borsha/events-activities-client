"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  const currentTheme = resolvedTheme ?? "light";

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() =>
        setTheme(currentTheme === "dark" ? "light" : "dark")
      }
      aria-label="Toggle theme"
      suppressHydrationWarning
    >
      <Sun
        suppressHydrationWarning
        className={`h-5 w-5 transition-all ${
          currentTheme === "dark"
            ? "scale-0 rotate-90"
            : "scale-100 rotate-0"
        }`}
      />
      <Moon
        suppressHydrationWarning
        className={`absolute h-5 w-5 transition-all ${
          currentTheme === "dark"
            ? "scale-100 rotate-0"
            : "scale-0 -rotate-90"
        }`}
      />
    </Button>
  );
}