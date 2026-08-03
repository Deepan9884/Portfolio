import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SlideUp from './SlideUp'
import MagneticCard from './MagneticCard'

function HackathonsSection() {
  const [activeHackathon, setActiveHackathon] = useState(null)

  const hackathons = [
    {
      id: 'prismatic',
      title: "Prismatic 2k26 — AI-Powered Distress Call Detection System",
      shortTitle: "Prismatic 2k26",
      award: "1st Place Winner | March 2026 🏆",
      subtitle: "Hackathon Winner, Prismatic 2k26 | March 2026",
      date: "March 2026",
      image: "/prismatic_ai.png",
      bullets: [
        "Engineered end-to-end custom ML model trained on Hugging Face datasets combined with proprietary distress call dataset to achieve high-accuracy emergency detection and classification.",
        "Implemented advanced Tanglish (Tamil+English code-mixed language) support using NLP techniques and language detection pipeline for real-world emergency scenarios across India.",
        "Developed full-stack MERN application: React frontend for dashboard and alerts, Node.js/Express backend API, MongoDB for persistent call logging and analytics, real-time audio processing pipeline.",
        "Built intelligent alert routing system that classifies emergency severity levels and triggers appropriate notifications to emergency responders with geolocation data."
      ],
      metrics: ["1st Place Winner 2026", "Tanglish NLP Pipeline", "Custom ML Model", "MERN Stack"],
      tags: ["React", "Node.js", "Express", "MongoDB", "Python", "NLP", "Hugging Face"]
    },
    {
      id: 'openats',
      title: "OpenATS — AI-Powered Applicant Tracking System",
      shortTitle: "OpenATS (Avanzare v19)",
      award: "Avanzare v19 Hackathon Winner | July 2026 🥇",
      subtitle: "Avanzare v19 Hackathon Winner, Kongu Engineering College | July 2026",
      date: "July 2026",
      image: "/openats_ai.png",
      bullets: [
        "Designed and implemented full-stack self-hosted ATS platform with real-time resume screening, semantic search using pgvector embeddings, and intelligent candidate matching algorithms.",
        "Built sophisticated Frontend: Next.js + TypeScript + TailwindCSS with dark ops console aesthetic, animated pipeline rail showing live resume processing stages, kanban board for candidate triage, detailed comparison views.",
        "Engineered Backend: Python workers handling PDF extraction and processing, vLLM/Ollama for local LLM inference, pgvector for semantic embeddings, BullMQ for async job queue management.",
        "Implemented real-time SSE (Server-Sent Events) streams for live visualization of resume processing pipeline with 5-stage progression tracking and immutable audit trails for compliance."
      ],
      metrics: ["1st Place Winner", "Avanzare v19", "pgvector Search", "Real-Time SSE"],
      tags: ["Next.js", "TypeScript", "TailwindCSS", "Python", "pgvector", "vLLM / Ollama", "BullMQ", "SSE"]
    }
  ]

  return (
    <section className="py-24 px-margin_mobile md:px-margin_desktop max-w-[1440px] mx-auto min-h-screen flex flex-col justify-center relative" id="hackathons">
      {/* Glowing Executive Badge - Centered & MASSIVE */}
      <div className="flex flex-col items-center text-center mb-16 max-w-6xl mx-auto">
        <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-[#ff1e4b]/15 border-2 border-[#ff1e4b]/40 backdrop-blur-xl shadow-[0_0_30px_rgba(255,30,75,0.4)] mb-8">
          <span className="w-3.5 h-3.5 rounded-full bg-[#ff1e4b] animate-ping" />
          <span className="font-label-caps text-sm sm:text-base font-black tracking-[0.2em] text-[#ff1e4b] uppercase">HACKATHONS & VICTORIES</span>
        </div>
        <SlideUp>
          <h2 className="text-4xl sm:text-6xl md:text-8xl lg:text-[96px] font-black text-white leading-[1.1] tracking-tighter mb-6 uppercase drop-shadow-2xl py-2">
            HACKATHON <span className="liquid-text-gradient drop-shadow-[0_0_50px_rgba(255,30,75,0.7)]">VICTORIES & AWARDS</span>
          </h2>
        </SlideUp>
        <div className="h-2 w-44 bg-gradient-to-r from-transparent via-[#ff1e4b] to-transparent rounded-full shadow-[0_0_25px_rgba(255,30,75,0.8)] my-6 mx-auto"></div>
        <p className="font-body-lg text-white/90 text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed font-medium">
          High-speed rapid prototyping under intense deadline pressure. Hover your cursor over any card to pop up winning photos & architectural breakdown (automatically fades when cursor moves away).
        </p>
      </div>

      {/* 2 Main Hackathon Panels Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {hackathons.map((h) => (
          <motion.div 
            key={h.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onMouseEnter={() => setActiveHackathon(h)}
            onMouseLeave={() => setActiveHackathon(null)}
            className="group cursor-pointer"
          >
            <MagneticCard className="glass-panel p-8 rounded-[2.5rem] h-full flex flex-col justify-between border border-white/10 group-hover:border-[#ff1e4b]/70 transition-all duration-500 group-hover:shadow-[0_0_50px_rgba(255,30,75,0.35)] relative overflow-hidden">
              <div className="specular-edge"></div>
              <div className="inner-glow"></div>

              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between mb-6">
                  <span className="px-4 py-1.5 rounded-full bg-[#ff1e4b] text-white font-label-caps text-xs font-black tracking-wider uppercase shadow-[0_0_15px_rgba(255,30,75,0.5)]">
                    {h.award}
                  </span>
                  <span className="font-mono text-xs text-white/70 bg-white/5 px-3 py-1 rounded-full border border-white/10">
                    {h.date}
                  </span>
                </div>

                <h3 className="font-headline-md text-2xl md:text-3xl font-extrabold text-white mb-2 leading-tight group-hover:text-[#ff1e4b] transition-colors">
                  {h.title}
                </h3>
                <div className="text-xs font-mono text-white/60 mb-6 italic">{h.subtitle}</div>

                {/* Winning Photo Thumbnail Preview */}
                <div className="relative h-64 md:h-72 rounded-2xl overflow-hidden mb-6 border border-white/10 group-hover:border-[#ff1e4b]/60 transition-all">
                  <img 
                    src={h.image} 
                    alt={h.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                    <span className="text-xs font-label-caps font-bold text-white bg-[#ff1e4b]/80 px-3 py-1 rounded-full backdrop-blur-md">
                      Official Winning Photo 🏆
                    </span>
                    <span className="text-xs font-mono text-white/90 bg-black/60 px-3 py-1 rounded-full backdrop-blur-md border border-white/20 group-hover:bg-[#ff1e4b] transition-colors">
                      Hover Cursor to Pop Up ↗
                    </span>
                  </div>
                </div>

                {/* Key Bullet Points List */}
                <ul className="space-y-3 mb-6">
                  {h.bullets.slice(0, 2).map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm text-white/80 leading-relaxed">
                      <span className="w-2 h-2 rounded-full bg-[#ff1e4b] mt-1.5 flex-shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                  {h.tags.map((tag, idx) => (
                    <span key={idx} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-white/80">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </MagneticCard>
          </motion.div>
        ))}
      </div>

      {/* HUGE Pure Hover Popout Box (Pops up on hover, FADES OUT automatically on cursor leave!) */}
      <AnimatePresence>
        {activeHackathon && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onMouseEnter={() => setActiveHackathon(activeHackathon)}
            onMouseLeave={() => setActiveHackathon(null)}
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-6 md:p-10 pointer-events-auto"
          >
            <motion.div 
              initial={{ scale: 0.94, y: 20, opacity: 0, filter: "blur(10px)" }}
              animate={{ scale: 1, y: 0, opacity: 1, filter: "blur(0px)" }}
              exit={{ scale: 0.94, y: 20, opacity: 0, filter: "blur(10px)" }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              onMouseEnter={() => setActiveHackathon(activeHackathon)}
              onMouseLeave={() => setActiveHackathon(null)}
              className="glass-panel max-w-5xl w-full max-h-[88vh] overflow-y-auto rounded-[3rem] p-8 sm:p-10 md:p-14 border-2 border-[#ff1e4b]/60 shadow-[0_0_100px_rgba(255,30,75,0.5)] relative bg-[#09090b]"
            >
              {/* Award Tag & Event Date */}
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="px-5 py-2 rounded-full bg-[#ff1e4b] text-white font-label-caps text-xs sm:text-sm font-black tracking-widest uppercase shadow-[0_0_25px_rgba(255,30,75,0.6)]">
                  {activeHackathon.award}
                </span>
                <span className="font-mono text-xs sm:text-sm text-white/70 bg-white/10 px-4 py-1.5 rounded-full border border-white/10">
                  {activeHackathon.subtitle}
                </span>
              </div>

              {/* Title */}
              <h2 className="font-display-lg text-3xl sm:text-4xl md:text-5xl font-black text-white mb-8 leading-[1.15] tracking-tight">
                {activeHackathon.title}
              </h2>

              {/* HUGE Winning Photo Display */}
              <div className="relative rounded-[2rem] overflow-hidden mb-12 border-2 border-[#ff1e4b]/40 shadow-[0_0_50px_rgba(255,30,75,0.35)] group">
                <img 
                  src={activeHackathon.image} 
                  alt={activeHackathon.title}
                  className="w-full max-h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 bg-black/85 backdrop-blur-xl px-6 py-3 rounded-2xl border border-white/20 flex items-center gap-3 shadow-2xl">
                  <span className="material-symbols-outlined text-yellow-400 text-2xl">emoji_events</span>
                  <span className="text-sm md:text-base font-label-caps font-extrabold text-white tracking-wide">
                    Official Award Ceremony Winning Photo
                  </span>
                </div>
              </div>

              {/* Architectural Breakdown & Accomplishments */}
              <div className="mb-12">
                <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-[#ff1e4b]/10 border border-[#ff1e4b]/30 mb-6">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ff1e4b] animate-pulse" />
                  <h4 className="font-label-caps text-xs sm:text-sm font-black tracking-widest text-[#ff1e4b] uppercase">
                    Full Architectural Breakdown & Accomplishments
                  </h4>
                </div>

                <div className="space-y-4">
                  {activeHackathon.bullets.map((bullet, idx) => (
                    <div 
                      key={idx} 
                      className="flex items-start gap-4 p-5 sm:p-6 rounded-2xl bg-white/[0.04] hover:bg-white/[0.07] border border-white/10 transition-colors shadow-lg"
                    >
                      <span className="w-8 h-8 rounded-xl bg-[#ff1e4b]/20 border border-[#ff1e4b]/40 flex items-center justify-center text-[#ff1e4b] text-sm font-black flex-shrink-0 mt-0.5 shadow-[0_0_15px_rgba(255,30,75,0.3)]">
                        {idx + 1}
                      </span>
                      <p className="text-sm sm:text-base md:text-lg text-white/90 leading-relaxed font-normal">
                        {bullet}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Championship Metrics & Tech Stack */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-white/10">
                <div>
                  <h5 className="text-xs font-label-caps font-bold text-white/60 mb-4 uppercase tracking-widest">
                    Championship Honors & Metrics
                  </h5>
                  <div className="flex flex-wrap gap-2.5">
                    {activeHackathon.metrics.map((m, idx) => (
                      <span key={idx} className="px-4 py-2 rounded-xl bg-[#ff1e4b]/15 border border-[#ff1e4b]/30 text-xs sm:text-sm font-label-caps text-white font-bold tracking-wider shadow-[0_0_15px_rgba(255,30,75,0.2)]">
                        {m}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h5 className="text-xs font-label-caps font-bold text-white/60 mb-4 uppercase tracking-widest">
                    Technology & Framework Stack
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {activeHackathon.tags.map((t, idx) => (
                      <span key={idx} className="px-3.5 py-1.5 rounded-xl bg-white/10 border border-white/20 text-xs font-mono text-white font-semibold">
                        #{t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default HackathonsSection
