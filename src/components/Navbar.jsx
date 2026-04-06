"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";

const navLinks = [
  { name: "Overview", href: "#overview" },
  { name: "Curriculum", href: "#curriculum" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Pricing", href: "#pricing" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-neutral-200 dark:border-neutral-800 bg-background/80 backdrop-blur-md transition-all duration-300">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-20 items-center justify-between">
          {/* --- LOGO SECTION --- */}
          <Link href="/" className="flex items-center gap-2 group shrink-0">
            <div className="size-10 rounded-full border-2 border-dashed border-neutral-400 flex items-center justify-center group-hover:rotate-45 transition-all duration-500">
              <span className="font-bold text-lg">G</span>
            </div>
            <span className="text-xl font-bold tracking-tight text-foreground">
              PPA
            </span>
          </Link>

          {/* --- DESKTOP LINKS --- */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-neutral-500 hover:text-primary-500 transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* --- ACTIONS SECTION --- */}
          <div className="flex items-center gap-3">
            <ThemeToggle />

            <div className="hidden sm:block">
              <Button className="bg-primary-500 hover:bg-primary-600 text-white px-6 rounded-xl font-semibold transition-all active:scale-95">
                Enroll now
              </Button>
            </div>

            {/* Mobile Menu Trigger */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg transition-colors"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* --- MOBILE NAVIGATION --- */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-96 opacity-100 pb-6" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col gap-4 pt-2 border-t border-neutral-100 dark:border-neutral-800">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-base font-medium text-neutral-600 dark:text-neutral-400 hover:text-primary-500 py-2 transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Button className="w-full bg-primary-500 hover:bg-primary-600 text-white rounded-xl font-semibold sm:hidden">
              Enroll now
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
