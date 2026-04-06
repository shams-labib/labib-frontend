"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // Hydration error avoid korar jonno useEffect proyojon
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="p-2 h-[40px] w-[80px]" />; // Visual jump avoid korar jonno placeholder

  return (
    <div className="flex items-center bg-neutral-100 dark:bg-neutral-800 p-1 rounded-full transition-all duration-300">
      <button
        onClick={() => setTheme("dark")}
        className={`p-2 rounded-full transition-all ${
          theme === "dark"
            ? "bg-neutral-950 text-white shadow-lg"
            : "text-neutral-500 hover:text-neutral-700"
        }`}
        aria-label="Dark Mode"
      >
        <Moon size={16} />
      </button>
      <button
        onClick={() => setTheme("light")}
        className={`p-2 rounded-full transition-all ${
          theme === "light"
            ? "bg-white text-neutral-900 shadow-lg"
            : "text-neutral-500 hover:text-neutral-700"
        }`}
        aria-label="Light Mode"
      >
        <Sun size={16} />
      </button>
    </div>
  );
}
