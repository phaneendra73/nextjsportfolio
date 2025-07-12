import React from "react";
import { Timeline } from "@/components/ui/timeline";
import Image from "next/image";

export function TimeLine() {
  const data = [
    {
      title: "Present",
      content: (
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="md:w-1/2 space-y-4">
            <h4 className="text-xl font-semibold text-green-600 dark:text-green-400">Software Developer @ Allcloud</h4>
            <p className="text-neutral-700 dark:text-neutral-300 text-base md:text-lg leading-relaxed">
              Currently working at Allcloud, focusing on cloud-based solutions and innovative product development.
            </p>
          </div>
          <div className="md:w-1/2 grid grid-cols-2 gap-6">
            <Image
              src="https://assets.aceternity.com/pro/hero-sections.png"
              alt="Allcloud project"
              width={300}
              height={300}
              className="rounded-lg shadow-lg object-cover hover:scale-105 transition-transform duration-300"
            />
            <Image
              src="https://assets.aceternity.com/features-section.png"
              alt="Allcloud features"
              width={300}
              height={300}
              className="rounded-lg shadow-lg object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2023 - 2019",
      content: (
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="md:w-1/2 space-y-4">
            <h4 className="text-xl font-semibold text-blue-600 dark:text-blue-400">B.Tech & 12th Grade</h4>
            <p className="text-neutral-700 dark:text-neutral-300 text-base md:text-lg leading-relaxed">
              Completed B.Tech in Computer Science from GNIT (affiliated to JNTUH) with CGPA 7.2 in 2023.
              <br />
              Also completed 12th grade from Sri Gayathri Junior College with CGPA 8.7 in 2019.
            </p>
          </div>
          <div className="md:w-1/2 grid grid-cols-2 gap-6">
            <Image
              src="https://assets.aceternity.com/cards.png"
              alt="GNIT college"
              width={300}
              height={300}
              className="rounded-lg shadow-lg object-cover hover:scale-105 transition-transform duration-300"
            />
            <Image
              src="https://assets.aceternity.com/pro/bento-grids.png"
              alt="Sri Gayathri Junior College"
              width={300}
              height={300}
              className="rounded-lg shadow-lg object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2019 - 2017",
      content: (
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="md:w-1/2 space-y-4">
            <h4 className="text-xl font-semibold text-purple-600 dark:text-purple-400">Higher Secondary Education</h4>
            <p className="text-neutral-700 dark:text-neutral-300 text-base md:text-lg leading-relaxed">
              Studied higher secondary education at Sri Gayathri Junior College, progressing academically during this period.
            </p>
          </div>
          <div className="md:w-1/2 grid grid-cols-2 gap-6">
            <Image
              src="https://assets.aceternity.com/features-section.png"
              alt="Sri Gayathri Junior College"
              width={300}
              height={300}
              className="rounded-lg shadow-lg object-cover hover:scale-105 transition-transform duration-300"
            />
            <Image
              src="https://assets.aceternity.com/pro/hero-sections.png"
              alt="Academic progress"
              width={300}
              height={300}
              className="rounded-lg shadow-lg object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2017",
      content: (
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="md:w-1/2 space-y-4">
            <h4 className="text-xl font-semibold text-red-600 dark:text-red-400">10th Grade Completion</h4>
            <p className="text-neutral-700 dark:text-neutral-300 text-base md:text-lg leading-relaxed">
              Completed 10th grade from Telangana State Model High School with a CGPA of 8.3 in 2017.
            </p>
          </div>
          <div className="md:w-1/2 grid grid-cols-2 gap-6">
            <Image
              src="https://assets.aceternity.com/templates/startup-1.webp"
              alt="Telangana State Model High School"
              width={300}
              height={300}
              className="rounded-lg shadow-lg object-cover hover:scale-105 transition-transform duration-300"
            />
            <Image
              src="https://assets.aceternity.com/templates/startup-2.webp"
              alt="School event"
              width={500}
              height={500}
              className="rounded-lg shadow-lg object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}
