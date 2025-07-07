'use client'
import React from "react";
import { cn } from "@/lib/utils";
import { Spotlight } from "./ui/Spotlight";

function HeroSection() {
  return (
    <div className="relative flex h-[40rem] w-full overflow-hidden rounded-md bg-background antialiased md:items-center md:justify-center">
      <div
        className={cn(
          "pointer-events-none absolute inset-0 [background-size:40px_40px] select-none",
          "[background-image:linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)]"
        )}
      />

      <Spotlight
        className="-top-50 left-0 md:-top-20 md:left-60"
        fill="#39FF14" // Neon Green
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl p-4 pt-20 md:pt-0">
  <h2 className="bg-opacity-50 bg-gradient-to-b from-black to-neutral-600 dark:from-neutral-50 dark:to-neutral-400 bg-clip-text text-center text-4xl font-bold text-transparent md:text-7xl">
    Spotlight <br /> is the new trend.
  </h2>
  <p className="mx-auto mt-4 max-w-lg text-center text-base font-normal text-black/70 dark:text-muted-foreground">
    Spotlight effect is a great way to draw attention to a specific part
    of the page. Here, we are drawing the attention towards the text
    section of the page. I don't know why but I'm running out of copy.
  </p>
</div>

    </div>
  );
}

export default HeroSection;
