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
  <h2 className="mb-8 -opacity-50 bg-gradient-to-b from-black to-neutral-600 dark:from-neutral-50 dark:to-neutral-400 bg-clip-text text-center text-4xl font-bold text-transparent md:text-7xl">
    Crafting Code <br/>
    Building Ideas<br/>
    Ideas
  </h2>
  <p className="mx-auto mt-4 max-w-lg text-center text-base font-normal text-black/70 dark:text-muted-foreground">
    I'm a passionate developer who loves turning complex problems into elegant solutions.
     Whether it's building seamless user interfaces or writing clean backend logic, I focus on performance, clarity, and impact.
</p>
</div>

    </div>
  );
}

export default HeroSection;
