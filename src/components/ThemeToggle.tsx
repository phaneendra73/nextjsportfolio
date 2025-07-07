"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

export const ThemeToggle = () => {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="p-2 rounded transition hover:opacity-75 focus:outline-none hover:cursor-pointer"
      aria-label="Toggle Theme"
    >
      {resolvedTheme === "dark" ? (
        <FaSun className="h-5 w-5 text-foreground transition-transform hover:scale-110" />
      ) : (
        <FaMoon className="h-4 w-5 text-foreground transition-transform hover:scale-110" />
      )}
    </button>
  );
};
