"use client";

import Image from "next/image";
import { Bebas_Neue } from "next/font/google";
import { useEffect, useState } from "react";

// Font for site title
const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="mx-auto max-w-screen-2xl">
      {/* ------------------------------------------------- */}
      {/* Jumbo header that shrinks on scroll */}
      {/* ------------------------------------------------- */}
      <header
        className={`sticky top-0 z-20 border-b border-black bg-[#f2efe8] transition-all duration-300 ${
          scrolled ? "py-3" : "py-12"
        }`}
      >
        <div className="mx-auto flex flex-col gap-6 px-6">
          {/* Navigation */}
          <div className="flex items-center justify-between text-xs uppercase tracking-wider">
            <nav className="flex gap-7">
              <a href="#experience">Experience</a>
              <a href="#education">Education</a>
              <a href="#projects">Projects</a>
            </nav>

            <div className="flex items-center gap-7">
              <a href="#subscribe" className="font-semibold">
                Subscribe
              </a>
              <button aria-label="Search" className="leading-none">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              </button>
            </div>
          </div>

          {/* Site title */}
          <h1
            className={`${bebas.className} text-black leading-[0.9] transition-all duration-300 ${
              scrolled ? "text-4xl" : "[font-size:clamp(4rem,10vw+1rem,9rem)]"
            }`}
          >
            Mateo Arcos
          </h1>
        </div>
      </header>

      {/* Spacer to offset header height */}
      <div className="h-4" />

      {/* Hero grid */}
      <section className="grid gap-6 lg:grid-cols-[1fr_380px]">
        {/* Main feature image */}
        <div className="border border-black bg-white">
        </div>

        {/* Sidebar */}
        <aside className="flex flex-col gap-6">
          {/* First card */}
          <article className="border border-black bg-white flex flex-col">
            <div className="p-4">
              <span className="mb-1 block text-[0.6rem] font-semibold uppercase tracking-wider text-gray-600">
                Guide
              </span>
              <h2 className="mb-3 text-base font-semibold leading-tight">
                5 Must-Have Spring-Summer Dining Essentials from VdeV Maison
              </h2>
              <div className="flex flex-wrap gap-1 text-[0.55rem] uppercase tracking-wider">
                <span className="bg-[#eae7df] px-2 py-0.5">Editors Picks</span>
                <span className="bg-[#eae7df] px-2 py-0.5">Furniture</span>
              </div>
            </div>
          </article>

          {/* Second placeholder card */}
          <article className="flex flex-col justify-center border border-black bg-white p-4">
            <h2 className="mb-3 text-base font-semibold leading-tight">
              The Future of Handmade at 100% Silk Shop
            </h2>
            <div className="flex flex-wrap gap-1 text-[0.55rem] uppercase tracking-wider">
              <span className="bg-[#eae7df] px-2 py-0.5">Profiles</span>
              <span className="bg-[#eae7df] px-2 py-0.5">City Living</span>
            </div>
          </article>
        </aside>
      </section>

      {/* ------------------------------------------------- */}
      {/* Additional content sections */}
      {/* ------------------------------------------------- */}

      <section
        id="experience"
        className="border-t border-black py-16 lg:py-24 px-2 lg:px-0"
      >
        <h2 className="mb-8 text-3xl font-semibold uppercase">Experience</h2>
        <p className="max-w-prose text-lg leading-relaxed">
          {/* Placeholder experience details */}
          Coming soon: a timeline of roles, responsibilities, and design
          achievements.
        </p>
      </section>

      <section
        id="education"
        className="border-t border-black py-16 lg:py-24 px-2 lg:px-0"
      >
        <h2 className="mb-8 text-3xl font-semibold uppercase">Education</h2>
        <p className="max-w-prose text-lg leading-relaxed">
          {/* Placeholder education details */}
          Coming soon: degrees, certifications, and continuing education
          coursework.
        </p>
      </section>

      <section
        id="projects"
        className="border-t border-black py-16 lg:py-24 px-2 lg:px-0"
      >
        <h2 className="mb-8 text-3xl font-semibold uppercase">Projects</h2>
        <p className="max-w-prose text-lg leading-relaxed">
          {/* Placeholder projects details */}
          Showcase of selected works, case studies, and collaborative
          initiatives.
        </p>
      </section>
    </div>
  );
}
