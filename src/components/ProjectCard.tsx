"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Image from "next/image";
import GithubLink from "./ui/GithubLink";

type CompanyCardProps = {
  title: string;
  subtitle: string;
  imageUrl: string;
  githubUrl: string;
  liveUrl: string;
  techStack?: string[];
};

export function ProjectCard({
  title,
  subtitle,
  imageUrl,
  githubUrl,
  liveUrl,
  techStack = [],
}: CompanyCardProps) {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full sm:w-[22rem] h-auto rounded-xl p-6 border">
        {githubUrl && (
          <div className="absolute top-0 right-0 z-10">
            <GithubLink href={githubUrl} />
          </div>
        )}
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          {title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          {subtitle}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={imageUrl}
            alt={title}
            height={400}
            width={600}
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
          />
        </CardItem>
        {techStack.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="text-xs px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-md"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
        <div className="flex justify-end mt-6">
          <CardItem
            translateZ={20}
            as="a"
            href={liveUrl}
            target="_blank"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            Live Demo →
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}

export default function ProjectsSection() {
  const projects = [
    {
      title: "Kadha",
      subtitle:
        "A minimal markdown-powered blog platform built with React and Chakra UI.",
      imageUrl:
        "https://github.com/user-attachments/assets/e657be2a-33dd-48a5-beda-d334dd5f40b5", // Replace if image changes
      githubUrl: "https://github.com/phaneendra73/kadha",
      liveUrl: "https://phaneendra73.github.io/kadha/",
      techStack: ["React", "Chakra UI", "Hono", "Prisma"],
    },
    {
      title: "ViewMyWay",
      subtitle:
        "A simple blog writing platform using React and Prisma with markdown support.",
      imageUrl:
        "https://github.com/user-attachments/assets/50821a72-549e-46ef-90d4-44117e7e6d77",
      githubUrl: "https://github.com/phaneendra73/ViewMyWay",
      liveUrl: "https://viewmyway.onrender.com",
      techStack: ["React", "Prisma", "Markdown", "Node.js"],
    },

    {
      title: "BingeWatch",
      subtitle:
        "Netflix-like UI built with HTML, CSS, and JS. Browse & save favorites.",
      imageUrl:
        "https://user-images.githubusercontent.com/118047850/233824675-6c6423f7-4402-46a1-b8f4-71c7c74c1f93.png",
      githubUrl: "https://github.com/phaneendra73/BingeWatch",
      liveUrl: "https://phaneendra73.github.io/BingeWatch/",
      techStack: ["HTML", "CSS", "JavaScript"],
    },
    {
      title: "Match The Cards",
      subtitle:
        "A fun memory game built using JavaScript. Flip and match pairs.",
      imageUrl:
        "https://user-images.githubusercontent.com/118047850/234286712-bff67eb5-5f0b-49d5-bfb7-db558cebfa60.png",
      githubUrl: "https://github.com/phaneendra73/MatchTheCards",
      liveUrl: "https://phaneendra73.github.io/MatchTheCards/",
      techStack: ["HTML", "CSS", "JavaScript"],
    },
    {
      title: "Food Website",
      subtitle:
        "Immersive food website using HTML, CSS, jQuery. Hosted on GitHub Pages.",
      imageUrl:
        "https://user-images.githubusercontent.com/118047850/240611151-5e976b7d-85e0-42c1-9f00-7cca1fc5c4a6.png",
      githubUrl: "https://github.com/phaneendra73/foodsite",
      liveUrl: "https://phaneendra73.github.io/foodsite/",
      techStack: ["HTML", "CSS", "jQuery"],
    },
    {
      title: "Weather App",
      subtitle:
        "Responsive weather app using API & JSON. Built with JS and media queries.",
      imageUrl:
        "https://user-images.githubusercontent.com/118047850/242651552-f9e98f0c-a63e-4ce5-a4f5-2d9a1da9527d.png",
      githubUrl: "https://github.com/phaneendra73/weather-API",
      liveUrl: "https://phaneendra73.github.io/weather-API/",
      techStack: ["HTML", "CSS", "JavaScript", "API"],
    },
  ];

  return (
    <section className="py-4 px-4" id="projects">
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((proj, i) => (
          <ProjectCard key={i} {...proj} />
        ))}
      </div>
    </section>
  );
}
