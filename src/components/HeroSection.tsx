'use client'
import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { ContainerTextFlip } from "@/components/ui/container-text-flip";
import Squares from "./ui/squares";


function HeroSection() {
  return (
    <div className="relative flex h-[41rem] w-full overflow-hidden rounded-md md:items-center md:justify-center">
<Squares
  speed={0.3}
  squareSize={40}
  direction="diagonal"
  hoverFillColor="#39FF14"
>
        <Spotlight
          className="-top-50 left-0 md:-top-20 md:left-60"
          fill="#39FF14"
        />

        <div className="relative z-10 mx-auto w-full max-w-4xl px-6 pt-28 md:pt-32 text-white text-center">
  <h3 className="mb-6 text-4xl md:text-6xl font-extrabold leading-tight tracking-tight bg-gradient-to-b from-neutral-950 to-neutral-800 dark:from-neutral-50 dark:to-neutral-300 bg-clip-text text-transparent">
    I’m{"  "}
    <ContainerTextFlip
      words={["Phaneendra", "Full-Stack Dev", "Problem Solver", "Tech Explorer"]}
    />
  </h3> 

<div className="mt-6 max-w-2xl mx-auto p-5 text-base md:text-lg leading-relaxed font-serif italic text-black bg-white/10 dark:bg-white/10 dark:text-white backdrop-blur-[1.5px] rounded-lg shadow-md border-l-4 border-green-500">
  A passionate full-stack developer with 2 years of experience in both frontend and backend technologies.
  I specialize in building robust web applications using tools like React, ASP.NET, SQL, and PostgreSQL.
  Currently working at ALLCLOUD as a Software Engineer - I, constantly learning and evolving.
</div>
</div>

      </Squares>
    </div>
  );
}

export default HeroSection;
