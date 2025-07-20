"use client";
import React from "react";
import dynamic from "next/dynamic";
import { Spotlight } from "./ui/Spotlight";
import { ContainerTextFlip } from "@/components/ui/container-text-flip";
import Squares from "./ui/squares";

const Scene = dynamic(() => import("./Scene"));

export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden rounded-md bg-gradient-to-br from-zinc-50 to-green-100 dark:from-zinc-950 dark:to-green-900">
      <Squares
        speed={0.3}
        squareSize={40}
        direction="diagonal"
        hoverFillColor="#22c55e"
      >
        <Spotlight
          className="-top-40 left-10 md:-top-20 md:left-60"
          fill="#22c55e"
        />

        <div className="relative z-10 flex flex-col md:flex-row items-center justify-center h-full px-6 md:px-16 py-10 gap-12">
          {/* Left Content */}
          <div className="md:w-1/2 w-full flex flex-col items-center md:items-start justify-center space-y-4 text-center md:text-left px-2">
            <h1 className="text-3xl md:text-6xl font-extrabold leading-tight tracking-tight text-zinc-900 dark:text-zinc-100">
              Hi, I&apos;m Phaneendra
            </h1>

            <p className="text-lg md:text-2xl text-zinc-600 dark:text-zinc-300 max-w-lg">
              I build
            </p>

            <ContainerTextFlip
              words={["Secure", "Modern", "Scalable"]}
              className="text-xl md:text-3xl font-semibold text-green-600 dark:text-green-400"
            />

            <p className="text-lg md:text-2xl font-bold text-zinc-800 dark:text-zinc-200 max-w-lg">
              Web Applications to solve real-world problems.
            </p>
          </div>

          {/* Right Content */}
          <div className="md:w-[55%] w-full h-[420px] md:h-[500px] mt-6 md:mt-0">
  <Scene />
</div>
        </div>
      </Squares>
    </section>
  );
}
