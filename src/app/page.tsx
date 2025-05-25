"use client";

import Image from "next/image";
import { Bebas_Neue } from "next/font/google";
import { useEffect, useState, useRef } from "react";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { useEffect as useThreeEffect } from 'react';
// @ts-ignore
import * as THREE from 'three';
// @ts-ignore
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

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
    <TypewriterStyled />
  </aside>
</section>


      {/* ------------------------------------------------- */}
      {/* Additional content sections */}
      {/* ------------------------------------------------- */}

      <section
        id="experience"
        className="border-t border-black py-16 lg:py-24 px-2 lg:px-0 relative"
      >
        <h2 className="mb-8 text-3xl font-semibold uppercase">Experience</h2>
        {/* GLB model absolutely positioned in front of timeline */}
       
        <div className="max-w-2xl mx-auto">
          <VerticalTimeline
            lineColor="#000"
          >
            {/* Software Developer Intern element */}
            <div className="flex flex-col lg:flex-row items-stretch w-full">
              <div className="flex-1">
                <VerticalTimelineElement
                  contentStyle={{ background: '#f2efe8', color: '#000', border: '1px solid #000' }}
                  contentArrowStyle={{ borderRight: '7px solid #000' }}
                  date="Apr 2025 – Present"
                  iconStyle={{ background: '#000', color: '#f2efe8', boxShadow: '0 0 0 4px #f2efe8' }}
                >
                  <h3 className="font-bold text-lg mb-1">Software Developer Intern</h3>
                  <h4 className="font-semibold text-base mb-2">Philer.ai</h4>
                  <ul className="list-disc pl-5 text-sm">
                    <li>Developed a voice-based intake agent using Python, LangGraph, LLMs and Twilio; streamed Q&amp;A state and output to JSON.</li>
                    <li>Built Flask microservice with async routing and REST API for outbound calls.</li>
                    <li>Automated Airtable enrichment to prefill forms; reduced call length by 35%.</li>
                    <li>Designed and developed User-Interface using HTML, CSS; Deployed containerized service on AWS.</li>
                  </ul>
                </VerticalTimelineElement>
              </div>
              
            </div>
            <div className="absolute left-1/2 top-0 -translate-x-50 translate-y-105 z-170">
              <GLBViewer modelUrl="/0a7f7cf3-bb50-40da-8610-477fc0dec503-textured.glb" />
            </div>
            {/* Analytics Engineer element */}  
            <VerticalTimelineElement
              contentStyle={{ background: '#f2efe8', color: '#000', border: '1px solid #000' }}
              contentArrowStyle={{ borderRight: '7px solid #000' }}
              date="Jan 2025 – May 2025"
              iconStyle={{ background: '#000', color: '#f2efe8', boxShadow: '0 0 0 4px #f2efe8' }}
            >
              <h3 className="font-bold text-lg mb-1">Analytics Engineer Intern</h3>
              <h4 className="font-semibold text-base mb-2">Loblaw Companies Limited</h4>
              <ul className="list-disc pl-5 text-sm">
                <li>Created PHP/JS dashboards to streamline Supply Chain reporting (Replenishment Optimization Team).</li>
                <li>Refactored SQL queries; cut dashboard latency by 70%.</li>
                <li>Built ETL pipeline (Python, SQL) for 50k+ daily DC order cuts; quantified impact of cut size on near-expiry pushes via logistic regression, attributing $1.58M in near-expiry inventory to prior cuts.</li>
              </ul>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              contentStyle={{ background: '#f2efe8', color: '#000', border: '1px solid #000' }}
              contentArrowStyle={{ borderRight: '7px solid #000' }}
              date="  May 2024 – Dec 2024"
              iconStyle={{ background: '#000', color: '#f2efe8', boxShadow: '0 0 0 4px #f2efe8' }}
            >
              <h3 className="font-bold text-lg mb-1">Finance Risk Analytics Intern</h3>
              <h4 className="font-semibold text-base mb-2">OMERS</h4>
              <ul className="list-disc pl-5 text-sm">
                <li>Built a Python script hierarchical clustering to deduplicate 5k+ counterparty names, automating canonical name mapping and eliminating manual CRM data cleanup.</li>
                <li>Engineered ETL ingesting SQL/SharePoint for daily liquidity models.</li>
    
                <li>Replaced Excel workflows with Centralized data pipelines and model outputs in Power BI; collaborated with cross-functional teams to translate analytics into dashboards for senior stakeholders and CRO.</li>
              </ul>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              contentStyle={{ background: '#f2efe8', color: '#000', border: '1px solid #000' }}
              contentArrowStyle={{ borderRight: '7px solid #000' }}
              date="Sept 2022 – July 2024"
              iconStyle={{ background: '#000', color: '#f2efe8', boxShadow: '0 0 0 4px #f2efe8' }}
            >
              <h3 className="font-bold text-lg mb-1">Research Assistant</h3>
              <h4 className="font-semibold text-base mb-2">AR Environmental Solutions</h4>
              <ul className="list-disc pl-5 text-sm">
                <li>Supported literature review on organic food and health outcomes.</li>
                <li>1st place, Sobey's Innovation Case Competition—bioethanol waste-to-fuel pitch.</li>
                <li>Ran statistical analysis on lab tests involving mineral concentrations.</li>
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
          {/* Project Card 1: UofT Course Navigator */}
          <div className="border-[3px] border-black bg-white rounded-lg overflow-hidden flex flex-col">
            <Image
              src="/project1.jpg"
              alt="UofT Course Navigator"
              width={600}
              height={400}
              className="w-full h-48 object-cover border-b-[3px] border-black"
            />
            <div className="p-5 flex-1 flex flex-col">
              <h3 className="text-xl font-bold mb-1">UofT Course Navigator</h3>
              <div className="flex flex-wrap gap-2 mb-2">
                <span className="bg-[#f2efe8] border border-black px-2 py-1 text-xs font-semibold rounded">Python</span>
                <span className="bg-[#f2efe8] border border-black px-2 py-1 text-xs font-semibold rounded">React</span>
                <span className="bg-[#f2efe8] border border-black px-2 py-1 text-xs font-semibold rounded">FastAPI</span>
                <span className="bg-[#f2efe8] border border-black px-2 py-1 text-xs font-semibold rounded">OpenAI</span>
                <span className="bg-[#f2efe8] border border-black px-2 py-1 text-xs font-semibold rounded">FAISS</span>
              </div>
              <div className="text-xs text-gray-700 mb-2">Sept 2022 – Aug 2024</div>
              <ul className="list-disc pl-5 text-sm">
                <li>Deployed a full-stack RAG assistant that answers program- and course-related queries across 3k+ courses.</li>
                <li>Python script to scrape timetable HTML into structured JSON and rendered an interactive prerequisite graph for 3K+ courses, streamlining degree-planning decisions.</li>
                <li>Delivered similar course recommendations with a hybrid semantic + node2vec embedding pipeline.</li>

              </ul>
            </div>
          </div>
          {/* Project Card 2: MedACL – MRI Analyzer */}
          <div className="border-[3px] border-black bg-white rounded-lg overflow-hidden flex flex-col">
            <Image
              src="/project2.jpg"
              alt="MedACL – MRI Analyzer"
              width={600}
              height={400}
              className="w-full h-48 object-cover border-b-[3px] border-black"
            />
            <div className="p-5 flex-1 flex flex-col">
              <h3 className="text-xl font-bold mb-1">MedACL – MRI Analyzer</h3>
              <div className="flex flex-wrap gap-2 mb-2">
                <span className="bg-[#f2efe8] border border-black px-2 py-1 text-xs font-semibold rounded">Python</span>
                <span className="bg-[#f2efe8] border border-black px-2 py-1 text-xs font-semibold rounded">Keras</span>
                <span className="bg-[#f2efe8] border border-black px-2 py-1 text-xs font-semibold rounded">PyTorch</span>
                <span className="bg-[#f2efe8] border border-black px-2 py-1 text-xs font-semibold rounded">GCP Vertex AI</span>
              </div>
              <ul className="list-disc pl-5 text-sm">
                <li>Deployed and trained U-Net model for MRI ACL-tear segmentation + CNN classification model on GCP Vertex AI.</li>
                <li>Wrapped in a FastAPI container, and served through Vertex AI Endpoints for real-time inference.</li>
              </ul>
            </div>
          </div>
          {/* Project Card 3: Research Paper Recommender */}
          <div className="border-[3px] border-black bg-white rounded-lg overflow-hidden flex flex-col">
            <Image
              src="/project3.jpg"
              alt="Research Paper Recommender"
              width={600}
              height={400}
              className="w-full h-48 object-cover border-b-[3px] border-black"
            />
            <div className="p-5 flex-1 flex flex-col">
              <h3 className="text-xl font-bold mb-1">Research Paper Recommender</h3>
              <div className="flex flex-wrap gap-2 mb-2">
                <span className="bg-[#f2efe8] border border-black px-2 py-1 text-xs font-semibold rounded">Python</span>
                <span className="bg-[#f2efe8] border border-black px-2 py-1 text-xs font-semibold rounded">PyTorch</span>
              </div>
              <ul className="list-disc pl-5 text-sm">
                <li>Built Denoising Adversarial Autoencoder to embed research paper titles.</li>
                <li>Simulated noise patterns; optimized via L2 loss.</li>
              </ul>
            </div>
          </div>
          {/* Project Card 4: Bike-Share Demand Forecasting */}
          <div className="border-[3px] border-black bg-white rounded-lg overflow-hidden flex flex-col">
            <Image
              src="/project4.jpg"
              alt="Bike-Share Demand Forecasting"
              width={600}
              height={400}
              className="w-full h-48 object-cover border-b-[3px] border-black"
            />
            <div className="p-5 flex-1 flex flex-col">
              <h3 className="text-xl font-bold mb-1">Bike-Share Demand Forecasting</h3>
              <div className="flex flex-wrap gap-2 mb-2">
                <span className="bg-[#f2efe8] border border-black px-2 py-1 text-xs font-semibold rounded">R</span>
                <span className="bg-[#f2efe8] border border-black px-2 py-1 text-xs font-semibold rounded">Shiny</span>
                <span className="bg-[#f2efe8] border border-black px-2 py-1 text-xs font-semibold rounded">Tidyverse</span>
              </div>
              <ul className="list-disc pl-5 text-sm">
                <li>Cleaned 2.3M ride logs; extracted seasonality + weather features.</li>
                <li>Trained Regression Model; validated with blocked time-series CV.</li>
                <li>Built an interactive dashboard for operations planning.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// -------------------------------------------------
// Typewriter with styled spans for headline and UofT
// -------------------------------------------------
function TypewriterStyled() {
  const speed = 25;
  // Split into styled parts
  const headline = 'Hi! Welcome to my portfolio!';
  const beforeUofT = '\n\nI am a Statistics and Computer Science student with experience in data analytics and software development.';
  const uoft = 'UofT';
  const afterUofT = ' with experience in data analytics and software development.\n\nMy experience spans statistical and data analysis, research methods, and leveraging these skills to drive meaningful insights.\n\nI am passionate about machine learning and data science, and I am eager to apply my expertise to solve complex problems.';

  // Compose the full text with markers for styled spans
  const fullText = `${headline}${beforeUofT.replace('student', 'student at <UofT>')}${afterUofT}`;

  // Remove <UofT> for typewriter effect, but track where to style
  const displayText = fullText.replace('<UofT>', uoft);
  const uoftIndex = displayText.indexOf(uoft);
  const headlineEnd = headline.length;
  const uoftEnd = uoftIndex + uoft.length;

  const [count, setCount] = useState(0);
  useEffect(() => {
    if (count < displayText.length) {
      const timeout = setTimeout(() => setCount(count + 1), speed);
      return () => clearTimeout(timeout);
    }
  }, [count, displayText.length]);

  // Render with styled spans
  const renderText = () => {
    const chars = displayText.slice(0, count);
    let out = [];
    let i = 0;
    // Headline
    if (count > 0) {
      const end = Math.min(headlineEnd, count);
      if (end > 0) {
        out.push(
          <span key="headline" className="font-bold text-black text-2xl md:text-3xl">
            {chars.slice(0, end)}
          </span>
        );
        i = end;
      }
    }
    // Body before UofT
    if (i < uoftIndex && count > i) {
      const end = Math.min(uoftIndex, count);
      out.push(
        <span key="body1" className="text-lg md:text-xl">
          {chars.slice(i, end)}
        </span>
      );
      i = end;
    }
    // UofT styled
    if (count > uoftIndex) {
      const end = Math.min(uoftEnd, count);
      if (end > uoftIndex) {
        out.push(
          <span key="uoft" className="font-bold text-black">
            {chars.slice(uoftIndex, end)}
          </span>
        );
        i = end;
      }
    }
    // Rest of body
    if (count > i) {
      out.push(
        <span key="body2" className="text-lg md:text-xl">
          {chars.slice(i)}
        </span>
      );
    }
    return out;
  };

  return (
    <p className="whitespace-pre-line leading-relaxed">
      {renderText()}
      <span className="animate-pulse">|</span>
    </p>
  );
}

// Three.js GLB model viewer component
function GLBViewer({ modelUrl }: { modelUrl: string }) {
  const mountRef = useRef<HTMLDivElement>(null);

  useThreeEffect(() => {
    if (!mountRef.current) return;
    // Clean up previous renders
    while (mountRef.current.firstChild) {
      mountRef.current.removeChild(mountRef.current.firstChild);
    }
    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 1000);
    camera.position.set(2, 2, 3);
    camera.lookAt(0, 0, 0);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setClearColor(0xf2efe8, 0); // transparent
    renderer.setSize(300, 300);
    mountRef.current.appendChild(renderer.domElement);

    // Lighting
    const ambient = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambient);
    const directional = new THREE.DirectionalLight(0xffffff, 0.8);
    directional.position.set(2, 5, 5);
    scene.add(directional);

    // Load model
    const loader = new GLTFLoader();
    let model: THREE.Group;
    loader.load(
      modelUrl,
      (gltf: any) => {
        model = gltf.scene;
        scene.add(model);
        animate();
      },
      undefined,
      (error: any) => {
        // eslint-disable-next-line no-console
        console.error('Error loading GLB model:', error);
      }
    );

    // Animation loop
    let frameId: number;
    function animate() {
      if (model) model.rotation.y += 0.01;
      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    }

    // Cleanup
    return () => {
      cancelAnimationFrame(frameId);
      renderer.dispose();
      if (model) scene.remove(model);
      while (mountRef.current && mountRef.current.firstChild) {
        mountRef.current.removeChild(mountRef.current.firstChild);
      }
    };
  }, [modelUrl]);

  return <div ref={mountRef} className="w-[300px] h-[300px]" />;
}