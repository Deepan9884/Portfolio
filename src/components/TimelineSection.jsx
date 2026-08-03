import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import SlideUp from './SlideUp'

function TimelineSection() {
  const containerRef = useRef(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  })

  const node1Opacity = useTransform(scrollYProgress, [0.0, 0.05], [0, 1])
  const node2Opacity = useTransform(scrollYProgress, [0.20, 0.25], [0, 1])
  const node3Opacity = useTransform(scrollYProgress, [0.42, 0.47], [0, 1])
  const node4Opacity = useTransform(scrollYProgress, [0.65, 0.70], [0, 1])
  const node5Opacity = useTransform(scrollYProgress, [0.85, 0.92], [0, 1])

  const milestones = [
    {
      date: "SEP 2024",
      title: "Commenced B.Tech IT at Easwari Engg College",
      description: "Enrolled in Information Technology at Easwari Engineering College, immersing in core computer science, algorithm design, and fullstack software engineering.",
      tag: "@easwari_it",
      badge: "B.Tech Information Technology",
      icon: "school",
      position: "right",
      top: "40px"
    },
    {
      date: "2024 - 2028",
      title: "Selected for Marquee Batch 2024-2028 ⭐",
      description: "Earned selection into the elite Marquee Batch 2024-2028 cohort, a highly competitive program recognizing top technical leadership and software engineering talent.",
      tag: "@marquee_2024_2028",
      badge: "Marquee Cohort 2024-2028",
      icon: "workspace_premium",
      position: "left",
      top: "380px"
    },
    {
      date: "JUN 2025",
      title: "Appointed Fullstack Developer at SRM Research Unit",
      description: "Appointed as Fullstack Developer at SRM Research Unit, architecting research-grade web applications, interactive portals, and high-concurrency software systems.",
      tag: "@srm_research",
      badge: "Fullstack Developer & Researcher",
      icon: "science",
      position: "right",
      top: "720px"
    },
    {
      date: "MAR 2026",
      title: "1st Place Winner — Prismatic 2k26 Hackathon 🏆",
      description: "Secured top victory at Prismatic 2k26 on March 2026 by building an AI-powered distress call detection system with Tanglish NLP classification and emergency dispatcher routing.",
      tag: "@prismatic_2k26",
      badge: "1st Place Champion | March 2026",
      icon: "trophy",
      position: "left",
      top: "1060px"
    },
    {
      date: "JUL 2026",
      title: "1st Place Winner — Avanzare v19 (OpenATS) 🥇",
      description: "Claimed 1st place championship honors at Kongu Engineering College on July 2026 by designing OpenATS — a self-hosted AI Applicant Tracking System with pgvector & local LLMs.",
      tag: "@avanzare_v19",
      badge: "1st Place Champion | July 2026",
      icon: "emoji_events",
      position: "right",
      top: "1400px"
    }
  ]

  return (
    <section ref={containerRef} className="py-24 pb-48 w-full relative bg-[#050505] min-h-[2100px] z-10" id="timeline">
      {/* Executive Header */}
      <div className="flex flex-col items-center text-center mb-16 max-w-6xl mx-auto px-margin_mobile md:px-margin_desktop relative z-20">
        <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-[#ff1e4b]/15 border-2 border-[#ff1e4b]/40 backdrop-blur-xl shadow-[0_0_30px_rgba(255,30,75,0.4)] mb-8">
          <span className="w-3.5 h-3.5 rounded-full bg-[#ff1e4b] animate-ping" />
          <span className="font-label-caps text-sm sm:text-base font-black tracking-[0.2em] text-[#ff1e4b] uppercase">ENGINEERING JOURNEY & MILESTONES</span>
        </div>
        <SlideUp>
          <h2 className="text-4xl sm:text-6xl md:text-8xl lg:text-[96px] font-black text-white leading-[1.1] tracking-tighter mb-6 uppercase drop-shadow-2xl py-2">
            MY JOURNEY & <span className="liquid-text-gradient drop-shadow-[0_0_50px_rgba(255,30,75,0.7)]">KEY MILESTONES</span>
          </h2>
        </SlideUp>
        <div className="h-2 w-44 bg-gradient-to-r from-transparent via-[#ff1e4b] to-transparent rounded-full shadow-[0_0_25px_rgba(255,30,75,0.8)] my-6 mx-auto"></div>
        <p className="font-body-md text-white/80 text-base sm:text-xl max-w-2xl mx-auto leading-relaxed">
          From commencing IT studies to research appointments and double national hackathon championships.
        </p>
      </div>

      <div className="timeline-wave-container relative w-full max-w-[1440px] mx-auto px-4 md:px-8 h-auto md:h-[1750px]">
        {/* Fluid Waving Line SVG */}
        <svg className="hidden md:block absolute inset-0 w-full pointer-events-none z-0" style={{ height: '100%' }} preserveAspectRatio="none" viewBox="0 0 1000 1750">
          <defs>
            <linearGradient id="waveGradient" x1="0%" x2="100%" y1="0%" y2="0%">
              <stop offset="0%" stopColor="#ff1e4b"></stop>
              <stop offset="50%" stopColor="#ff5277"></stop>
              <stop offset="100%" stopColor="#ffffff"></stop>
            </linearGradient>
            <filter id="waveGlow">
              <feGaussianBlur result="blur" stdDeviation="5"></feGaussianBlur>
              <feMerge>
                <feMergeNode in="blur"></feMergeNode>
                <feMergeNode in="SourceGraphic"></feMergeNode>
              </feMerge>
            </filter>
          </defs>
          <motion.path 
            d="M 950,180 C 950,350 50,350 50,520 C 50,690 950,690 950,860 C 950,1030 50,1030 50,1200 C 50,1370 950,1370 950,1540" 
            fill="none" 
            filter="url(#waveGlow)" 
            stroke="url(#waveGradient)" 
            strokeWidth="5"
            style={{ pathLength: scrollYProgress }}
          ></motion.path>
          
          <motion.circle cx="950" cy="180" fill="#ff1e4b" r="14" style={{ opacity: node1Opacity }} className="shadow-[0_0_20px_#ff1e4b]"></motion.circle>
          <motion.circle cx="50" cy="520" fill="#ff1e4b" r="14" style={{ opacity: node2Opacity }} className="shadow-[0_0_20px_#ff1e4b]"></motion.circle>
          <motion.circle cx="950" cy="860" fill="#ff1e4b" r="14" style={{ opacity: node3Opacity }} className="shadow-[0_0_20px_#ff1e4b]"></motion.circle>
          <motion.circle cx="50" cy="1200" fill="#ff1e4b" r="14" style={{ opacity: node4Opacity }} className="shadow-[0_0_20px_#ff1e4b]"></motion.circle>
          <motion.circle cx="950" cy="1540" fill="#ff1e4b" r="14" style={{ opacity: node5Opacity }} className="shadow-[0_0_20px_#ff1e4b]"></motion.circle>
        </svg>

        {/* Staggered Zig-Zag Cards */}
        <div className="relative z-10 w-full space-y-8 md:space-y-0 h-auto md:h-full">
          {milestones.map((m, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.0, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`md:absolute ${
                m.position === 'right' ? 'md:right-[5%]' : 'md:left-[5%]'
              } md:w-[42%] max-w-lg glass-panel p-8 rounded-[2rem] w-full border border-white/10 hover:border-[#ff1e4b]/70 transition-all duration-500 hover:shadow-[0_0_40px_rgba(255,30,75,0.35)] group relative bg-[#09090b]/90 backdrop-blur-2xl`}
              style={{ top: window.innerWidth >= 768 ? m.top : 'auto' }}
            >
              <div className="specular-edge"></div>
              <div className="inner-glow"></div>
              <div className="relative">
                <div className="text-[#ff1e4b] font-display-lg text-3xl sm:text-4xl font-black leading-none mb-3 tracking-tight group-hover:scale-105 transition-transform origin-left drop-shadow-[0_0_15px_rgba(255,30,75,0.5)]">
                  {m.date}
                </div>
                <h3 className="font-headline-md text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-[#ff1e4b] transition-colors leading-snug">
                  {m.title}
                </h3>
                <p className="font-body-md text-white/80 text-sm leading-relaxed mb-6">
                  {m.description}
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                  <div className="w-11 h-11 rounded-2xl bg-[#ff1e4b]/20 flex items-center justify-center border border-[#ff1e4b]/40 text-[#ff1e4b] shadow-[0_0_15px_rgba(255,30,75,0.3)] group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-xl">{m.icon}</span>
                  </div>
                  <div>
                    <div className="text-xs font-mono font-bold text-[#ff1e4b] tracking-wider">{m.tag}</div>
                    <div className="text-[11px] font-mono text-white/70">{m.badge}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TimelineSection
