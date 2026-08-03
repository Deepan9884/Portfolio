import React, { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import SlideUp from './SlideUp'
import HoverGlowCard from './HoverGlowCard'

function ProjectsSection() {
  const targetRef = useRef(null)
  const carouselRef = useRef(null)
  const trackRef = useRef(null)
  const [scrollRange, setScrollRange] = useState(0)
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
  })

  useEffect(() => {
    const updateRange = () => {
      if (trackRef.current && carouselRef.current) {
        const range = trackRef.current.scrollWidth - carouselRef.current.clientWidth
        setScrollRange(range > 0 ? range : 0)
      }
    }
    updateRange()
    window.addEventListener("resize", updateRange)
    return () => window.removeEventListener("resize", updateRange)
  }, [])

  // Move the container exactly the difference between its total width and the viewport width
  const x = useTransform(scrollYProgress, [0, 1], [0, -scrollRange])

  const projects = [
    {
      id: 1,
      title: "OpenATS — AI Applicant Tracking System",
      category: "Avanzare v19 Hackathon Winner, Kongu Eng. College | July 2026",
      description: "Self-hosted ATS platform featuring real-time resume screening, pgvector semantic search, vLLM/Ollama local LLM inference, dark ops console UI with live candidate triage, BullMQ async job queues, and 5-stage Server-Sent Events (SSE) streaming.",
      image: "/openats_ai.png",
      tags: ["Next.js", "TypeScript", "TailwindCSS", "Python", "pgvector", "vLLM / Ollama", "BullMQ", "SSE Streams"]
    },
    {
      id: 2,
      title: "Prismatic 2k26 — AI Distress Call Detection",
      category: "1st Place Winner, Prismatic 2k26 | March 2026 🏆",
      description: "Emergency distress call detection & classification system powered by custom ML models trained on Hugging Face & proprietary distress datasets. Features Tanglish (Tamil+English) NLP support, MERN full-stack dashboard, and geolocation alert routing.",
      image: "/prismatic_ai.png",
      tags: ["React", "Node.js", "Express", "MongoDB", "Python", "NLP", "Hugging Face", "MERN Stack"]
    },
    {
      id: 3,
      title: "CareerForge AI",
      category: "AI Career Development Platform",
      description: "AI-powered platform for students. Analyzes resumes, conducts mock interviews, evaluates GitHub profiles, identifies skill gaps, and generates personalized learning roadmaps using Google Gemini.",
      image: "/careerforge_ai.png",
      tags: ["React 19", "TanStack Start", "Node.js", "Express", "MongoDB", "Google Gemini", "JWT Dual-Token"]
    },
    {
      id: 4,
      title: "Telegram MedBot",
      category: "AI Healthcare Bot",
      description: "Deployed medical bot running in Telegram. Features real-time medical query resolution, automated health guidance, and AI-powered symptom triaging.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1000&h=700&fit=crop",
      tags: ["Python", "OpenAI API", "Telegram API", "Deployed", "FastAPI"]
    },
    {
      id: 5,
      title: "AI Personal Study Assistant",
      category: "AI Learning Workspace",
      description: "Intelligent study workspace combining the synthesis powers of NotebookLM & ChatGPT. Multi-document research, smart note-taking, and interactive AI tutoring.",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1000&h=700&fit=crop",
      tags: ["React 19", "TanStack Start", "Node.js", "Express", "MongoDB", "LLM Synthesis"]
    }
  ]

  return (
    <section ref={targetRef} className="relative h-[350vh] z-20 bg-[#050505]" id="projects">
      <div ref={carouselRef} className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        
        <div className="flex flex-col items-center text-center mb-10 px-margin_mobile md:px-margin_desktop">
          <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-[#ff1e4b]/15 border-2 border-[#ff1e4b]/40 backdrop-blur-xl shadow-[0_0_30px_rgba(255,30,75,0.4)] mb-6">
            <span className="w-3.5 h-3.5 rounded-full bg-[#ff1e4b] animate-ping" />
            <span className="font-label-caps text-sm sm:text-base font-black tracking-[0.2em] text-[#ff1e4b] uppercase">PORTFOLIO & WORK</span>
          </div>
          <SlideUp>
            <h2 className="text-4xl sm:text-6xl md:text-8xl lg:text-[92px] font-black text-white leading-[1.1] tracking-tighter mb-4 uppercase drop-shadow-2xl py-2">
              FEATURED <span className="liquid-text-gradient drop-shadow-[0_0_50px_rgba(255,30,75,0.7)]">PROJECTS</span>
            </h2>
          </SlideUp>
          <div className="h-2 w-44 bg-gradient-to-r from-transparent via-[#ff1e4b] to-transparent rounded-full shadow-[0_0_25px_rgba(255,30,75,0.8)] my-4 mx-auto"></div>
        </div>

        <motion.div 
          ref={trackRef}
          style={{ x }}
          className="flex gap-6 pb-8 pl-margin_mobile md:pl-margin_desktop pr-margin_mobile md:pr-margin_desktop w-max"
        >
          {projects.map((project) => (
            <HoverGlowCard 
              key={project.id}
              className="glass-panel rounded-[2rem] overflow-hidden flex-shrink-0 w-[85vw] md:w-[620px] lg:w-[820px] group cursor-pointer border border-white/10 hover:border-vibrant-yellow/40 transition-colors"
            >
              <div className="specular-edge"></div>
              <div className="inner-glow"></div>
              <div className="relative h-[38vh] md:h-[380px] lg:h-[460px] overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
              </div>
              <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 lg:p-10 flex flex-col justify-end">
                <div className="font-label-caps text-xs md:text-sm text-vibrant-yellow mb-2 tracking-wider font-bold uppercase">{project.category}</div>
                <h3 className="font-display-lg text-2xl md:text-3xl lg:text-4xl font-extrabold text-white mb-3 drop-shadow-lg">{project.title}</h3>
                <p className="font-body-md text-white/80 text-xs md:text-sm mb-5 max-w-2xl leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2.5">
                  {project.tags.map((tag, idx) => (
                    <span 
                      key={idx}
                      className="px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[11px] md:text-xs font-label-caps text-white font-semibold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </HoverGlowCard>
          ))}
        </motion.div>
        
      </div>
    </section>
  )
}

export default ProjectsSection
