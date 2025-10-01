"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export function BodiCanvas() {
  const fontClass = "font-headline";
  const letterSpacing = 0;
  const bgColor = "#F8F8FF";

  return (
    <div
      className="relative min-h-screen w-full transition-colors duration-300"
      style={{ backgroundColor: bgColor }}
    >
      <div className="flex h-screen items-center justify-center">
        <h1
          className={cn(
            "text-8xl md:text-9xl font-bold text-foreground animate-in fade-in-0 duration-500",
            fontClass
          )}
          style={{ letterSpacing: `${letterSpacing}rem` }}
        >
          بودي
        </h1>
      </div>
    </div>
  );
}
