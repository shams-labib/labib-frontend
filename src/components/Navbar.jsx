"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";
import { scrollToSection } from "@/components/shared/Animation";

const navLinks = [
  { name: "Overview", id: "overview" },
  { name: "Curriculum", id: "curriculum" },
  { name: "Testimonials", id: "testimonials" },
  { name: "Pricing", id: "pricing" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (id) => {
    // For smootth animation
    scrollToSection(id);
    setIsOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-neutral-200 dark:border-neutral-800 bg-background/80 backdrop-blur-md transition-all duration-300">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group shrink-0">
            <div className="size-10 rounded-full border-2 border-dashed border-neutral-400 flex items-center justify-center group-hover:rotate-45 transition-all duration-500">
              <span className="font-bold text-lg text-foreground">G</span>
            </div>
            <span className="text-xl font-bold tracking-tight text-foreground">
              PPA
            </span>
          </Link>

          {/* DESKTOP LINKS */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className="text-sm font-medium text-neutral-500 hover:text-primary-500 transition-colors duration-200 cursor-pointer"
              >
                {link.name}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Button className="hidden sm:block bg-primary-500 hover:bg-primary-600 text-white px-6 py-5 rounded-xl font-semibold transition-all active:scale-95">
              Enroll now
            </Button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-neutral-600 dark:text-neutral-300"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* MOBILE LINKS */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ${isOpen ? "max-h-96 opacity-100 pb-6" : "max-h-0 opacity-0"}`}
        >
          <div className="flex flex-col gap-4 pt-2 border-t border-neutral-100 dark:border-neutral-800">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className="text-left text-base font-medium text-neutral-600 dark:text-neutral-400 py-2"
              >
                {link.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
