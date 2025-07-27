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

        <div className="relative z-10 flex flex-col md:flex-row items-center justify-center h-full px-6 md:px-16 py-10 gap-8 md:gap-12">
          {/* Left Content */}
          <div className="md:w-1/2 w-full flex flex-col items-center md:items-start justify-center space-y-6 text-center md:text-left px-2">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 leading-snug">
              Hi, I&apos;m Phaneendra
            </h1>

            <div className="flex items-center gap-2 text-xl md:text-3xl text-zinc-600 dark:text-zinc-300">
              <span>I build</span>
              <ContainerTextFlip
                words={["Secure", "Modern", "Scalable"]}
                className="text-green-600 dark:text-green-400 font-semibold"
              />
            </div>

            <p className="text-base md:text-xl text-zinc-700 dark:text-zinc-300 max-w-md">
              Web Applications that solve real-world problems with performance
              and accessibility.
            </p>
          </div>

          {/* Right Content */}
          <div className="md:w-[55%] w-full h-[350px] md:h-[500px] mt-6 md:mt-0">
            <Scene />
          </div>

             {/* Scroll action */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
            <div className="animate-bounce text-green-600 dark:text-green-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
        </div>
      </Squares>
    </section>
  );
}
