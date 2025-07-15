// components/TimeLine.tsx
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { LinkPreview } from "./ui/link-preview";
import { ImageWithHoverBorderGradient } from "./ui/ImageWithHoverBorder";

// ✅ Header Component with Consistent Styling
type HeaderGreenColorProps = {
  text: string;
};

function HeaderGreenColor({ text }: HeaderGreenColorProps) {
  return (
    <h4 className="text-2xl font-bold text-green-600 dark:text-green-400">
      {text}
    </h4>
  );
}

// ✅ Timeline Component
export function TimeLine() {
  const data = [
    {
      title: "Present",
      content: (
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2 space-y-4">
            <HeaderGreenColor text="Software Engineer I" />
            <div className="text-neutral-700 dark:text-neutral-300 text-base md:text-lg leading-relaxed">
              Currently working at{" "}
              <LinkPreview
                url="https://www.allcloud.in/"
                className="font-bold underline text-green-600 dark:text-green-400"
              >
                AllCloud
              </LinkPreview>
              , focusing on cloud-based solutions and innovative product
              development.
            </div>
          </div>
          <div className="md:w-1/2 grid grid-cols-2 gap-6">
            <ImageWithHoverBorderGradient
              src="/allcloud.png"
              alt="Gradient bordered image"
              borderRadius="1.25rem"
              duration={2}
            />
          </div>
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2 space-y-4">
            <HeaderGreenColor text="B.Tech in ECE" />
            <div className="text-neutral-700 dark:text-neutral-300 text-base md:text-lg leading-relaxed space-y-2">
              <p>
                <strong>Guru Nanak Institute of Technology (GNIT)</strong>
              </p>
              <p>
                CGPA: <strong>7.2</strong>
              </p>
            </div>
          </div>
          <div className="md:w-1/2 grid grid-cols-2 gap-6">
            <ImageWithHoverBorderGradient
              src="/GNI.png"
              alt="GNIT College"
              borderRadius="1.5rem"
              duration={2}
            />
          </div>
        </div>
      ),
    },
    {
      title: "2019",
      content: (
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2 space-y-4">
            <HeaderGreenColor text="Higher Secondary Education" />
            <div className="text-neutral-700 dark:text-neutral-300 text-base md:text-lg leading-relaxed space-y-2">
              <p>
                <strong>Sri Gayathri Junior College</strong>
              </p>
              <p>
                CGPA: <strong>8.7</strong>
              </p>
            </div>
          </div>
          <div className="md:w-1/2 grid grid-cols-2 gap-6">
            <ImageWithHoverBorderGradient
              src="/srigayatri.png"
              alt="GNIT College"
              borderRadius="1.5rem"
              duration={2}
            />
          </div>
        </div>
      ),
    },
    {
      title: "2017",
      content: (
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2 space-y-4">
            <HeaderGreenColor text="10th Grade" />
            <div className="text-neutral-700 dark:text-neutral-300 text-base md:text-lg leading-relaxed space-y-2">
              <p>
                <strong>TELANGANA STATE MODEL SCHOOL</strong>
              </p>
              <p>
                CGPA: <strong>8.3</strong>
              </p>
            </div>
          </div>
          <div className="md:w-1/2 grid grid-cols-1 gap-6"></div>
        </div>
      ),
    },
  ];

  return (
    <section className="relative w-full px-4 md:px-8 py-10">
      <Timeline data={data} />
    </section>
  );
}
