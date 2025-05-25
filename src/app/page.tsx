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
      <section className="grid gap-4 lg:grid-cols-[360px_1fr]">
  {/* Main feature image */}
  <div className="bg-white">
    <Image
      src="/img_0337.jpg"
      alt="CN Tower Toronto"
      width={1000}
      height={1500}
      className="h-auto w-full object-cover"
      priority
    />
  </div>

  {/* Sidebar with intro typewriter message */}
  <aside className="bg-[#f2efe8] flex items-center justify-center p-6">
    <Typewriter
      text={`Hi! Welcome to my portfolio!\n\nI am a Statistics and Computer Science student with experience in data analytics and software development.\n\nMy experience spans statistical and data analysis, research methods, and leveraging these skills to drive meaningful insights.\n\nI am passionate about machine learning and data science, and I am eager to apply my expertise to solve complex problems.`}
      speed={25}
    />
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

// -------------------------------------------------
// Simple Typewriter component
// -------------------------------------------------
function Typewriter({ text, speed = 40 }: { text: string; speed?: number }) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, index + 1));
      index += 1;
      if (index === text.length) {
        clearInterval(interval);
      }
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <p className="whitespace-pre-line text-lg leading-relaxed md:text-xl">
      {displayed}
      <span className="animate-pulse">|</span>
    </p>
  );
}
