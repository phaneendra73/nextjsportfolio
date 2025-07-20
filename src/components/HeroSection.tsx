'use client';
import React from 'react';
import dynamic from 'next/dynamic';
import { Spotlight } from './ui/Spotlight';
import { ContainerTextFlip } from '@/components/ui/container-text-flip';
import Squares from './ui/squares';

const Scene = dynamic(() => import('./Scene'));

export default function HeroSection() {
  return (
    <section className="relative flex h-[41rem] w-full overflow-hidden rounded-md md:items-center md:justify-center bg-gradient-to-br from-zinc-50 to-green-100 dark:from-zinc-950 dark:to-green-900">
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

        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between h-full px-6 md:px-16 py-10 gap-8">
          {/* Left Content */}
          <div className="md:w-1/2 text-center md:text-left space-y-4">
            <p className="text-3xl md:text-5xl font-bold leading-tight text-zinc-900 dark:text-zinc-100">
              Hi, I&apos;m <br/>Phaneendra
            </p>

            <p className="text-xl md:text-2xl text-zinc-700 dark:text-zinc-300">
              A Developer Dedicated to Crafting
            </p>

            <ContainerTextFlip
              words={['Secure', 'Modern', 'Scalable']}
              className="text-2xl md:text-3xl font-semibold text-green-600 dark:text-green-400"
            />

            <p className="text-xl md:text-2xl font-bold text-zinc-800 dark:text-zinc-200">
              Web Applications
            </p>
          </div>

          {/* Right Content */}
          <div className="md:w-1/1.9 w-full aspect-square md:aspect-video mt-6 md:mt-0">
            <Scene />
          </div>
        </div>
      </Squares>
    </section>
  );
}
