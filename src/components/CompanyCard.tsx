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

export function CompanyCard({
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
        {/* GitHub corner badge */}
        {githubUrl && (
          <div className="absolute top-0 right-0 z-10">
            <GithubLink href={githubUrl} />
          </div>
        )}
        {/* Title */}
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          {title}
        </CardItem>

        {/* Subtitle */}
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          {subtitle}
        </CardItem>

        {/* Image */}
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={imageUrl}
            alt={title}
            height={400}
            width={600}
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
          />
        </CardItem>

        {/* Tech stack (if any) */}
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

        {/* CTA Buttons */}
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
      title: "Aceternity UI",
      subtitle: "A modern 3D UI experience for tech portfolios.",
      imageUrl:
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80",
      githubUrl: "https://github.com/yourusername/aceternity-ui",
      liveUrl: "https://aceternity-ui.vercel.app",
      techStack: ["React", "Next.js", "Framer Motion", "TailwindCSS"],
    },
    {
      title: "PortfolioX",
      subtitle: "Next-gen developer portfolio template.",
      imageUrl: "https://images.unsplash.com/photo-1556761175-4b46a572b786",
      githubUrl: "https://github.com/yourusername/portfoliox",
      liveUrl: "https://portfoliox.vercel.app",
      techStack: ["Next.js", "TypeScript", "TailwindCSS"],
    },
    {
      title: "Blogify",
      subtitle: "Markdown blog engine built with Next.js.",
      imageUrl: "https://images.unsplash.com/photo-1556761175-4b46a572b786",
      githubUrl: "https://github.com/yourusername/blogify",
      liveUrl: "https://blogify.vercel.app",
      techStack: ["Next.js", "MDX", "Tailwind", "Vercel"],
    },
    {
      title: "Aceternity UI",
      subtitle: "A modern 3D UI experience for tech portfolios.",
      imageUrl:
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80",
      githubUrl: "https://github.com/yourusername/aceternity-ui",
      liveUrl: "https://aceternity-ui.vercel.app",
      techStack: ["React", "Next.js", "Framer Motion", "TailwindCSS"],
    },
    {
      title: "PortfolioX",
      subtitle: "Next-gen developer portfolio template.",
      imageUrl: "https://images.unsplash.com/photo-1556761175-4b46a572b786",
      githubUrl: "https://github.com/yourusername/portfoliox",
      liveUrl: "https://portfoliox.vercel.app",
      techStack: ["Next.js", "TypeScript", "TailwindCSS"],
    },
    {
      title: "Blogify",
      subtitle: "Markdown blog engine built with Next.js.",
      imageUrl: "https://images.unsplash.com/photo-1556761175-4b46a572b786",
      githubUrl: "https://github.com/yourusername/blogify",
      liveUrl: "https://blogify.vercel.app",
      techStack: ["Next.js", "MDX", "Tailwind", "Vercel"],
    },
  ];

  return (
    <section className="py-4 px-4">
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((proj, i) => (
          <CompanyCard key={i} {...proj} />
        ))}
      </div>
    </section>
  );
}
