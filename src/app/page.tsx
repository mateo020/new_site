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


              <div className="absolute left-1/2 top-0 -translate-x-50 -translate-y-21 z-170">
              <GLBViewer modelUrl="/6f47c788-9352-4c62-a359-8f205ce9a8d8-textured.glb" />
            </div>
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
            <div className="absolute left-1/2 top-0 -translate-x-50 translate-y-360 z-170">
              <GLBViewer modelUrl="/abc3d95b-866c-4534-9652-c996168706eb-textured.glb" />
            </div>
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
              alt="NFL Third Down Success Rate"
              width={600}
              height={400}
              className="w-full h-48 object-cover border-b-[3px] border-black"
            />
            <div className="p-5 flex-1 flex flex-col">
              <h3 className="text-xl font-bold mb-1">NFL Third Down Success Rate</h3>
              <div className="flex flex-wrap gap-2 mb-2">
                <span className="bg-[#f2efe8] border border-black px-2 py-1 text-xs font-semibold rounded">R</span>
                <span className="bg-[#f2efe8] border border-black px-2 py-1 text-xs font-semibold rounded">Shiny</span>
                <span className="bg-[#f2efe8] border border-black px-2 py-1 text-xs font-semibold rounded">Tidyverse</span>
              </div>
              <ul className="list-disc pl-5 text-sm">
                <li>Generalized Linear Mixed Model (GLMM) to analyze third-down football plays, catering to the hierarchical data structure from games to teams.</li>
                <li>Trained Regression Model</li>
                <li>The final model's adequacy was ascertained by plotting deviance residuals against predictors and calculating the AUC of the ROC curve.</li>
              </ul>
            </div>
          </div>
          {/* Project Card 5: NFL Play Prediction */}
          <div className="border-[3px] border-black bg-white rounded-lg overflow-hidden flex flex-col">
            <Image
              src="/project5.jpg"
              alt="NFL Play Prediction"
              width={600}
              height={400}
              className="w-full h-48 object-cover border-b-[3px] border-black"
            />
            <div className="p-5 flex-1 flex flex-col">
              <h3 className="text-xl font-bold mb-1">NFL Play Prediction</h3>
              <div className="flex flex-wrap gap-2 mb-2">
                <span className="bg-[#f2efe8] border border-black px-2 py-1 text-xs font-semibold rounded">Python</span>
                <span className="bg-[#f2efe8] border border-black px-2 py-1 text-xs font-semibold rounded">scikit-learn</span>
                <span className="bg-[#f2efe8] border border-black px-2 py-1 text-xs font-semibold rounded">Pandas</span>
              </div>
              <ul className="list-disc pl-5 text-sm">
                <li>Analyzed NFL play-by-play data to predict play outcomes.</li>
                <li>Trained and validated classification models for play success.</li>
                <li>Visualized feature importances and model performance.</li>
              </ul>
            </div>
          </div>
          {/* Project Card 6: Toronto Real Estate Dashboard */}
          <div className="border-[3px] border-black bg-white rounded-lg overflow-hidden flex flex-col">
            <Image
              src="/project6.jpg"
              alt="Toronto Real Estate Dashboard"
              width={600}
              height={400}
              className="w-full h-48 object-cover border-b-[3px] border-black"
            />
            <div className="p-5 flex-1 flex flex-col">
              <h3 className="text-xl font-bold mb-1">Toronto Real Estate Dashboard</h3>
              <div className="flex flex-wrap gap-2 mb-2">
                <span className="bg-[#f2efe8] border border-black px-2 py-1 text-xs font-semibold rounded">R</span>
                <span className="bg-[#f2efe8] border border-black px-2 py-1 text-xs font-semibold rounded">Shiny</span>
                <span className="bg-[#f2efe8] border border-black px-2 py-1 text-xs font-semibold rounded">Leaflet</span>
              </div>
              <ul className="list-disc pl-5 text-sm">
                <li>Aggregated Toronto real estate sales data from multiple sources.</li>
                <li>Built an interactive dashboard for price trends and mapping.</li>
                <li>Enabled filtering by neighborhood, property type, and time period.</li>
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
// -------------------------------------------------
//  Typewriter with new summary text
// -------------------------------------------------
function TypewriterStyled() {
  const speed = 25;

  /* ---------- 1. Content ---------- */
  const headline =
    'Hi there — welcome to my portfolio!';
  const body = `
I'm a fourth-year Statistics × Computer Science student at the University of Toronto. Over the last few years I've:

• Analyzed operational data, turning ad-hoc SQL, Python notebooks, and R scripts into automated ETL pipelines and Power BI dashboards that guide supply-chain and finance decisions.

• Engineered full-stack ML features — from a Retrieval-Augmented-Generation course-advisor bot to Twilio-powered voice agents — deploying them with FastAPI, Docker, and cloud services (AWS, GCP Vertex AI).

• Researched machine-learning methods, from U-Net medical-image segmentation to adversarial auto-encoders for paper recommendation, and translated the findings into production code.
  `;

  const fullText = `${headline}${body}`;

  /* ---------- 2. Typewriter state ---------- */
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (count < fullText.length) {
      const id = setTimeout(() => setCount(count + 1), speed);
      return () => clearTimeout(id);
    }
  }, [count, fullText.length]);

  /* ---------- 3. Render spans with same structure ---------- */
  const renderText = () => {
    const shown = fullText.slice(0, count);
    const out = [];

    // headline span
    const headlineEnd = headline.length;
    if (shown.length) {
      out.push(
        <span
          key="headline"
          className="font-bold text-black text-2xl md:text-3xl"
        >
          {shown.slice(0, Math.min(headlineEnd, shown.length))}
        </span>
      );
    }

    // body span(s)
    if (shown.length > headlineEnd) {
      out.push(
        <span
          key="body"
          className="text-lg md:text-xl"
        >
          {shown.slice(headlineEnd)}
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

    // Lighting (brighter)
    const ambient = new THREE.AmbientLight(0xffffff, 3.5);
    scene.add(ambient);
    const directional = new THREE.DirectionalLight(0xffffff, 3);
    directional.position.set(2, 5, 5);
    scene.add(directional);
    const hemi = new THREE.HemisphereLight(0xffffff, 0x444444, 2.2);
    hemi.position.set(0, 20, 0);
    scene.add(hemi);

    // Tone mapping for brighter look
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.5;

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