"use client";
import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";
import { useTheme } from "next-themes";

type Direction = "TOP" | "LEFT" | "BOTTOM" | "RIGHT";

export function ImageWithHoverBorderGradient({
  src,
  alt = "",
  className,
  containerClassName,
  duration = 1,
  clockwise = true,
  borderRadius = "1rem",
  ...props
}: {
  src: StaticImageData | string;
  alt?: string;
  className?: string;
  containerClassName?: string;
  duration?: number;
  clockwise?: boolean;
  borderRadius?: string;
  [key: string]: any;
}) {
  const [hovered, setHovered] = useState(false);
  const [direction, setDirection] = useState<Direction>("TOP");
  const { theme } = useTheme();

  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true); // Ensures theme is accessible after hydration
  }, []);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const rotateDirection = (currentDirection: Direction): Direction => {
    const directions: Direction[] = ["TOP", "LEFT", "BOTTOM", "RIGHT"];
    const currentIndex = directions.indexOf(currentDirection);
    const nextIndex = clockwise
      ? (currentIndex - 1 + directions.length) % directions.length
      : (currentIndex + 1) % directions.length;
    return directions[nextIndex];
  };

  const movingMap: Record<Direction, string> = {
    TOP: "radial-gradient(20.7% 50% at 50% 0%, #39FF14 0%, rgba(57, 255, 20, 0) 100%)",
    LEFT: "radial-gradient(16.6% 43.1% at 0% 50%, #39FF14 0%, rgba(57, 255, 20, 0) 100%)",
    BOTTOM: "radial-gradient(20.7% 50% at 50% 100%, #39FF14 0%, rgba(57, 255, 20, 0) 100%)",
    RIGHT: "radial-gradient(16.2% 41.2% at 100% 50%, #39FF14 0%, rgba(57, 255, 20, 0) 100%)",
  };

  const highlight =
    "radial-gradient(75% 181% at 50% 50%, #39FF14 0%, rgba(57, 255, 20, 0) 100%)";

  useEffect(() => {
    if (!hovered) {
      const interval = setInterval(() => {
        setDirection((prev) => rotateDirection(prev));
      }, duration * 1000);
      return () => clearInterval(interval);
    }
  }, [hovered, duration, rotateDirection]);

  // ⚠️ Avoid hydration mismatch by checking hasMounted
  const backgroundColor =
    hasMounted && theme === "dark" ? "#000000" : "#ffffff";

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={cn(
        "relative inline-block overflow-hidden p-px transition duration-500",
        containerClassName
      )}
      style={{ borderRadius }}
    >
      {/* Neon green animated border */}
      <motion.div
        className="absolute inset-0 z-0 rounded-[inherit] pointer-events-none"
        style={{
          filter: "blur(5px)",
          opacity: 0.8,
          borderRadius,
        }}
        initial={{ background: movingMap[direction] }}
        animate={{
          background: hovered
            ? [movingMap[direction], highlight]
            : movingMap[direction],
        }}
        transition={{ ease: "linear", duration }}
      />

      {/* Theme-based background behind transparent image */}
      <div
        className="absolute inset-[2px] z-[1]"
        style={{
          backgroundColor,
          borderRadius: `calc(${borderRadius} - 2px)`,
        }}
      />

      {/* Actual image */}
      <Image
        src={src}
        alt={alt}
        className={cn(
          "relative z-[2] block w-full h-full object-contain",
          className
        )}
        style={{ borderRadius: `calc(${borderRadius} - 4px)` }}
        {...props}
      />
    </div>
  );
}
