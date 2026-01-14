"use client";

import { Activity } from "lucide-react";
import clsx from "clsx";

interface PulseLoaderProps {
  text?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
  showIcon?: boolean;
}

const SIZE_MAP = {
  sm: "h-16 w-16",
  md: "h-24 w-24",
  lg: "h-32 w-32",
};

export default function PulseLoader({
  text = "Loading...",
  size = "md",
  className,
  showIcon = true,
}: PulseLoaderProps) {
  return (
    <div
      className={clsx(
        "flex min-h-screen flex-col items-center justify-center gap-4 bg-background",
        className
      )}
    >
      {/* Loader */}
      <div className={clsx("relative", SIZE_MAP[size])}>
        {/* Ping ring */}
        <span className="absolute inset-0 rounded-full bg-primary/20 animate-ping" />

        {/* Static ring */}
        <span className="absolute inset-0 rounded-full border-2 border-primary/40" />

        {/* Center */}
        <div className="absolute inset-2 flex items-center justify-center rounded-full bg-background shadow-sm">
          {showIcon && (
            <Activity className="h-6 w-6 text-primary animate-pulse" />
          )}
        </div>
      </div>

      {/* Text */}
      {text && (
        <p className="text-sm font-medium text-muted-foreground animate-pulse">
          {text}
        </p>
      )}
    </div>
  );
}
