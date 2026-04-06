"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Moon, Sun, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Overview", href: "#overview" },
    { name: "Curriculum", href: "#curriculum" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Pricing", href: "#pricing" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-neutral-800 bg-neutral-950/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center">
              {/* Replace with your actual SVG logo */}
              <div className="h-5 w-5 rounded-full border-2 border-dashed border-white" />
            </div>
            <span className="text-xl font-bold tracking-tight text-neutral-0">
              PPA
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-neutral-400 transition-colors hover:text-neutral-0"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Right Actions (Toggle & CTA) */}
          <div className="hidden md:flex items-center gap-6">
            {/* Theme Switcher Toggle */}
            <div className="flex h-10 w-20 items-center justify-between rounded-full bg-neutral-900 p-1 ring-1 ring-neutral-800">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-neutral-800 text-neutral-0 shadow-sm">
                <Moon size={18} />
              </div>
              <div className="flex h-8 w-8 items-center justify-center text-neutral-500">
                <Sun size={18} />
              </div>
            </div>

            <button className="rounded-xl bg-primary-500 px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-primary-600 active:scale-95">
              Enroll now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-neutral-400 hover:bg-neutral-800 hover:text-white focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden border-t border-neutral-800 bg-neutral-950 px-4 py-6">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-lg font-medium text-neutral-400"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <hr className="border-neutral-800" />
            <div className="flex items-center justify-between py-2">
              <span className="text-neutral-400">Theme</span>
              <div className="h-8 w-8 rounded-full bg-neutral-800 flex items-center justify-center">
                <Moon size={18} />
              </div>
            </div>
            <button className="w-full rounded-xl bg-primary-500 py-3 text-base font-semibold text-white">
              Enroll now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
