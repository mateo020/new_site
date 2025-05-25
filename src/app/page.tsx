"use client";

import Image from "next/image";
import { Bebas_Neue } from "next/font/google";
import { useEffect, useState } from "react";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

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
        <div className="max-w-2xl mx-auto">
          <VerticalTimeline
            lineColor="#000"
          >
            <VerticalTimelineElement
              contentStyle={{ background: '#f2efe8', color: '#000', border: '1px solid #000' }}
              contentArrowStyle={{ borderRight: '7px solid #000' }}
              date="2023 - Present"
              iconStyle={{ background: '#000', color: '#f2efe8', boxShadow: '0 0 0 4px #f2efe8' }}
            >
              <h3 className="font-bold text-lg mb-1">Data Analyst Intern</h3>
              <h4 className="font-semibold text-base mb-2">Finance Company</h4>
              <ul className="list-disc pl-5 text-sm">
                <li>Analyzed large datasets to extract actionable insights.</li>
                <li>Automated reporting processes using Python and SQL.</li>
              </ul>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              contentStyle={{ background: '#f2efe8', color: '#000', border: '1px solid #000' }}
              contentArrowStyle={{ borderRight: '7px solid #000' }}
              date="2022 - 2023"
              iconStyle={{ background: '#000', color: '#f2efe8', boxShadow: '0 0 0 4px #f2efe8' }}
            >
              <h3 className="font-bold text-lg mb-1">Software Developer</h3>
              <h4 className="font-semibold text-base mb-2">Tech Startup</h4>
              <ul className="list-disc pl-5 text-sm">
                <li>Developed web applications with React and Node.js.</li>
                <li>Collaborated with cross-functional teams to deliver features.</li>
              </ul>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              contentStyle={{ background: '#f2efe8', color: '#000', border: '1px solid #000' }}
              contentArrowStyle={{ borderRight: '7px solid #000' }}
              date="2021 - 2022"
              iconStyle={{ background: '#000', color: '#f2efe8', boxShadow: '0 0 0 4px #f2efe8' }}
            >
              <h3 className="font-bold text-lg mb-1">Research Assistant</h3>
              <h4 className="font-semibold text-base mb-2">University of Toronto</h4>
              <ul className="list-disc pl-5 text-sm">
                <li>Conducted statistical analysis for academic research projects.</li>
                <li>Presented findings at departmental meetings.</li>
              </ul>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Project Card 1 */}
          <div className="border-[3px] border-black bg-white rounded-lg overflow-hidden flex flex-col">
            <Image
              src="/project1.jpg"
              alt="Project 1"
              width={600}
              height={400}
              className="w-full h-48 object-cover border-b-[3px] border-black"
            />
            <div className="p-5 flex-1 flex flex-col">
              <h3 className="text-xl font-bold mb-2">DataViz Dashboard</h3>
              <div className="flex flex-wrap gap-2 mt-auto">
                <span className="bg-[#f2efe8] border border-black px-2 py-1 text-xs font-semibold rounded">Python</span>
                <span className="bg-[#f2efe8] border border-black px-2 py-1 text-xs font-semibold rounded">Dash</span>
                <span className="bg-[#f2efe8] border border-black px-2 py-1 text-xs font-semibold rounded">Plotly</span>
              </div>
            </div>
          </div>
          {/* Project Card 2 */}
          <div className="border-[3px] border-black bg-white rounded-lg overflow-hidden flex flex-col">
            <Image
              src="/project2.jpg"
              alt="Project 2"
              width={600}
              height={400}
              className="w-full h-48 object-cover border-b-[3px] border-black"
            />
            <div className="p-5 flex-1 flex flex-col">
              <h3 className="text-xl font-bold mb-2">Supply Chain Optimizer</h3>
              <div className="flex flex-wrap gap-2 mt-auto">
                <span className="bg-[#f2efe8] border border-black px-2 py-1 text-xs font-semibold rounded">Python</span>
                <span className="bg-[#f2efe8] border border-black px-2 py-1 text-xs font-semibold rounded">Pandas</span>
                <span className="bg-[#f2efe8] border border-black px-2 py-1 text-xs font-semibold rounded">NumPy</span>
              </div>
            </div>
          </div>
          {/* Project Card 3 */}
          <div className="border-[3px] border-black bg-white rounded-lg overflow-hidden flex flex-col">
            <Image
              src="/project3.jpg"
              alt="Project 3"
              width={600}
              height={400}
              className="w-full h-48 object-cover border-b-[3px] border-black"
            />
            <div className="p-5 flex-1 flex flex-col">
              <h3 className="text-xl font-bold mb-2">ML Stock Predictor</h3>
              <div className="flex flex-wrap gap-2 mt-auto">
                <span className="bg-[#f2efe8] border border-black px-2 py-1 text-xs font-semibold rounded">Python</span>
                <span className="bg-[#f2efe8] border border-black px-2 py-1 text-xs font-semibold rounded">scikit-learn</span>
                <span className="bg-[#f2efe8] border border-black px-2 py-1 text-xs font-semibold rounded">TensorFlow</span>
              </div>
            </div>
          </div>
          {/* Project Card 4 */}
          <div className="border-[3px] border-black bg-white rounded-lg overflow-hidden flex flex-col">
            <Image
              src="/project4.jpg"
              alt="Project 4"
              width={600}
              height={400}
              className="w-full h-48 object-cover border-b-[3px] border-black"
            />
            <div className="p-5 flex-1 flex flex-col">
              <h3 className="text-xl font-bold mb-2">Personal Portfolio Site</h3>
              <div className="flex flex-wrap gap-2 mt-auto">
                <span className="bg-[#f2efe8] border border-black px-2 py-1 text-xs font-semibold rounded">TypeScript</span>
                <span className="bg-[#f2efe8] border border-black px-2 py-1 text-xs font-semibold rounded">React</span>
                <span className="bg-[#f2efe8] border border-black px-2 py-1 text-xs font-semibold rounded">Next.js</span>
              </div>
            </div>
          </div>
        </div>
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
