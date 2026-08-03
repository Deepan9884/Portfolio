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
      title: "CareerForge AI",
      category: "AI Career Development Platform",
      description: "AI-powered platform for students. Analyzes resumes, conducts mock interviews, evaluates GitHub profiles, identifies skill gaps, and generates personalized learning roadmaps using Google Gemini.",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1000&h=700&fit=crop",
      tags: ["React 19", "TanStack Start", "Node.js", "Express", "MongoDB", "Google Gemini", "JWT Dual-Token"]
    },
    {
      id: 2,
      title: "AI Personal Study Assistant",
      category: "AI Learning Workspace",
      description: "Intelligent study workspace combining the synthesis powers of NotebookLM & ChatGPT. Multi-document research, smart note-taking, and interactive AI tutoring.",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1000&h=700&fit=crop",
      tags: ["React 19", "TanStack Start", "Node.js", "Express", "MongoDB", "LLM Synthesis"]
    },
    {
      id: 3,
      title: "Telegram MedBot",
      category: "AI Healthcare Bot",
      description: "Deployed medical bot running in Telegram. Features real-time medical query resolution, automated health guidance, and AI-powered symptom triaging.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1000&h=700&fit=crop",
      tags: ["Python", "OpenAI API", "Telegram API", "Deployed", "FastAPI"]
    }
  ]

  return (
    <section ref={targetRef} className="relative h-[250vh]" id="projects">
      <div ref={carouselRef} className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        
        <div className="mb-6 pl-margin_mobile md:pl-margin_desktop">
          <SlideUp>
            <h2 className="font-headline-md text-headline-md text-on-surface mb-2">Featured Projects</h2>
          </SlideUp>
          <div className="w-12 h-1 liquid-gradient rounded-full"></div>
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
