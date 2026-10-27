import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SlideUp from './SlideUp'
import MagneticCard from './MagneticCard'

function HackathonsSection() {
  const [activeHackathon, setActiveHackathon] = useState(null)
  const [selectedView, setSelectedView] = useState('award') // 'award', 'demo', or 'both'

  const hackathons = [
    {
      id: 'infosys',
      title: "Infosys Project Day — “Campus to Career”",
      shortTitle: "Infosys project day",
      panelName: "Infosys project day",
      award: "Best Project Award | Sept 2026 🏆",
      subtitle: "Infosys Academia Day, Dept of AI & ML, Easwari Engineering College",
      date: "September 2026",
      image: "/infosys_day_1.jpg",
      awardImage: "/infosys_day_1.jpg",
      demoImage: "/infosys_day_2.jpg",
      hasDualPhotos: true,
      awardTabLabel: "🏆 Stage Award Ceremony",
      demoTabLabel: "🥇 Official Gold Trophy",
      awardCaption: "Official Award Ceremony with Infosys Dignitaries, HOD & Mentors 🏆",
      demoCaption: "Official Best Project Award Trophy & Commendation Plaque 🥇",
      mentors: [
        { name: "Sundar Kanagaraj", role: "Project Mentor", url: "https://www.linkedin.com/in/sundarkanagaraj/" },
        { name: "Dr. Ananthi N", role: "HOD, Dept of AI & ML", url: "https://www.linkedin.com/in/ananthi-n-69412491/" }
      ],
      bullets: [
        "Received the prestigious Best Project Award for “Campus to Career” at Infosys Academia Day, organized by the Department of Artificial Intelligence & Machine Learning, Easwari Engineering College.",
        "Engineered an innovative career guidance and skill intelligence platform designed to map student capabilities to industry requirements through applied ML.",
        "Developed under the continuous guidance and mentorship of Sundar Kanagaraj (Project Mentor) and Dr. Ananthi N (HOD, AI & ML), refining architectural design and deployment readiness.",
        "Presented live project demonstrations before esteemed academic faculties and Infosys industry leadership, receiving commendations for technical excellence and impact."
      ],
      quote: "This award is not just a recognition of our project, but also a reminder of how much can be achieved through continuous learning, teamwork, mentorship, and the willingness to improve.",
      metrics: ["Best Project Award 2026", "Campus to Career", "Easwari AI & ML", "Infosys Academia"],
      tags: ["Infosys Academia", "Campus to Career", "AI / ML", "Mentored Project", "Award Winner"]
    },
    {
      id: 'prismatic',
      title: "Prismatic 2k26 — AI Distress Call Detection",
      shortTitle: "Prismatic 2k26",
      panelName: "Prismatic 2k26",
      award: "1st Place Winner | March 2026 🏆",
      subtitle: "Hackathon Winner, Prismatic 2k26 | March 2026",
      date: "March 2026",
      image: "/prismatic.jpg",
      awardImage: "/prismatic.jpg",
      demoImage: "/prismatic_ai.png",
      hasDualPhotos: false,
      awardTabLabel: "🏆 Award Winning Photo",
      demoTabLabel: "💻 Project System Demo",
      awardCaption: "Official Hackathon Victory & Award Ceremony Photo 🏆",
      demoCaption: "System Architecture & Live Application Screenshot 💻",
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
      title: "OpenATS — AI-Powered ATS Platform",
      shortTitle: "OpenATS (Avanzare v19)",
      panelName: "OpenATS (Avanzare v19)",
      award: "Avanzare v19 Winner | July 2026 🥇",
      subtitle: "Avanzare v19 Hackathon Winner, Kongu Engineering College | July 2026",
      date: "July 2026",
      image: "/Avenzare.jpg",
      awardImage: "/Avenzare.jpg",
      demoImage: "/openats_ai.png",
      hasDualPhotos: false,
      awardTabLabel: "🏆 Award Winning Photo",
      demoTabLabel: "💻 Project System Demo",
      awardCaption: "Official Hackathon Victory & Award Ceremony Photo 🏆",
      demoCaption: "System Architecture & Live Application Screenshot 💻",
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

  const handleCardOpen = (hackathon) => {
    setActiveHackathon(hackathon)
    setSelectedView('award')
  }

  return (
    <section className="py-24 px-margin_mobile md:px-margin_desktop max-w-[1440px] mx-auto min-h-screen flex flex-col justify-center relative" id="hackathons">
      {/* Glowing Executive Badge */}
      <div className="flex flex-col items-center text-center mb-16 max-w-6xl mx-auto">
        <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-[#ff1e4b]/15 border-2 border-[#ff1e4b]/40 backdrop-blur-xl shadow-[0_0_30px_rgba(255,30,75,0.4)] mb-8">
          <span className="w-3.5 h-3.5 rounded-full bg-[#ff1e4b] animate-ping" />
          <span className="font-label-caps text-sm sm:text-base font-black tracking-[0.2em] text-[#ff1e4b] uppercase">AWARDS & ACHIEVEMENTS</span>
        </div>
        <SlideUp>
          <h2 className="text-4xl sm:text-6xl md:text-8xl lg:text-[92px] font-black text-white leading-[1.1] tracking-tighter mb-6 uppercase drop-shadow-2xl py-2">
            KEY <span className="liquid-text-gradient drop-shadow-[0_0_50px_rgba(255,30,75,0.7)]">ACHIEVEMENTS & AWARDS</span>
          </h2>
        </SlideUp>
        <div className="h-2 w-44 bg-gradient-to-r from-transparent via-[#ff1e4b] to-transparent rounded-full shadow-[0_0_25px_rgba(255,30,75,0.8)] my-6 mx-auto"></div>
        <p className="font-body-lg text-white/90 text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed font-medium">
          Championship victories, corporate innovation awards, and rapid technical prototyping under pressure. Click or hover any card to inspect full photos, mentorship, and breakdowns.
        </p>
      </div>

      {/* 3 Main Panels Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {hackathons.map((h) => (
          <motion.div 
            key={h.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onMouseEnter={() => handleCardOpen(h)}
            onClick={() => handleCardOpen(h)}
            className="group cursor-pointer"
          >
            <MagneticCard className="glass-panel p-7 sm:p-8 rounded-[2.5rem] h-full flex flex-col justify-between border border-white/10 group-hover:border-[#ff1e4b]/70 transition-all duration-500 group-hover:shadow-[0_0_50px_rgba(255,30,75,0.35)] relative overflow-hidden">
              <div className="specular-edge"></div>
              <div className="inner-glow"></div>

              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between mb-5 gap-2">
                  <span className="px-3.5 py-1.5 rounded-full bg-[#ff1e4b] text-white font-label-caps text-[11px] font-black tracking-wider uppercase shadow-[0_0_15px_rgba(255,30,75,0.5)] truncate">
                    {h.award}
                  </span>
                  <span className="font-mono text-xs text-white/70 bg-white/5 px-2.5 py-1 rounded-full border border-white/10 shrink-0">
                    {h.date}
                  </span>
                </div>

                <h3 className="font-headline-md text-xl sm:text-2xl font-extrabold text-white mb-2 leading-snug group-hover:text-[#ff1e4b] transition-colors">
                  {h.title}
                </h3>
                <div className="text-xs font-mono text-white/60 mb-5 line-clamp-2 italic">{h.subtitle}</div>

                {/* Photo Thumbnail Preview (Dual photos if available) */}
                <div className="relative h-60 sm:h-64 rounded-2xl overflow-hidden mb-6 border border-white/10 group-hover:border-[#ff1e4b]/60 transition-all bg-black/40">
                  {h.hasDualPhotos ? (
                    <div className="w-full h-full flex">
                      <div className="w-[62%] h-full relative overflow-hidden">
                        <img 
                          src={h.awardImage} 
                          alt={`${h.title} Stage Ceremony`}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute top-2 left-2 px-2 py-0.5 rounded-md bg-black/75 backdrop-blur-md text-[10px] font-mono text-white/90 border border-white/10">
                          Ceremony
                        </div>
                      </div>
                      <div className="w-[38%] h-full relative overflow-hidden border-l border-white/20">
                        <img 
                          src={h.demoImage} 
                          alt={`${h.title} Trophy`}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute top-2 right-2 px-2 py-0.5 rounded-md bg-black/75 backdrop-blur-md text-[10px] font-mono text-white/90 border border-white/10">
                          Trophy
                        </div>
                      </div>
                    </div>
                  ) : (
                    <img 
                      src={h.awardImage} 
                      alt={`${h.title} Award Winning Photo`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent pointer-events-none"></div>
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                    <span className="text-[11px] font-label-caps font-bold text-white bg-[#ff1e4b]/90 px-2.5 py-1 rounded-full backdrop-blur-md shadow-[0_0_15px_rgba(255,30,75,0.6)] flex items-center gap-1">
                      <span className="material-symbols-outlined text-xs text-yellow-300">emoji_events</span>
                      {h.hasDualPhotos ? 'Dual Photos' : 'Official Photo'}
                    </span>
                    <span className="text-[11px] font-mono text-white/90 bg-black/70 px-2.5 py-1 rounded-full backdrop-blur-md border border-white/20 group-hover:bg-[#ff1e4b] transition-colors">
                      Expand ↗
                    </span>
                  </div>
                </div>

                {/* Key Bullet Points List */}
                <ul className="space-y-2.5 mb-6">
                  {h.bullets.slice(0, 2).map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-white/80 leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ff1e4b] mt-1.5 flex-shrink-0" />
                      <span className="line-clamp-2">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/10">
                  {h.tags.slice(0, 4).map((tag, idx) => (
                    <span key={idx} className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-mono text-white/80">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </MagneticCard>
          </motion.div>
        ))}
      </div>

      {/* Expanded Popout Modal */}
      <AnimatePresence>
        {activeHackathon && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setActiveHackathon(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-6 md:p-10 pointer-events-auto"
          >
            <motion.div 
              initial={{ scale: 0.94, y: 20, opacity: 0, filter: "blur(10px)" }}
              animate={{ scale: 1, y: 0, opacity: 1, filter: "blur(0px)" }}
              exit={{ scale: 0.94, y: 20, opacity: 0, filter: "blur(10px)" }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="glass-panel max-w-5xl w-full max-h-[90vh] overflow-y-auto rounded-[3rem] p-6 sm:p-10 md:p-12 border-2 border-[#ff1e4b]/60 shadow-[0_0_100px_rgba(255,30,75,0.5)] relative bg-[#09090b]"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveHackathon(null)}
                className="absolute top-6 right-6 w-11 h-11 rounded-full bg-white/10 hover:bg-[#ff1e4b] border border-white/20 flex items-center justify-center text-white text-xl z-30 transition-all shadow-lg active:scale-95"
                aria-label="Close modal"
              >
                ✕
              </button>

              {/* Award Tag & Event Date */}
              <div className="flex flex-wrap items-center gap-3 mb-5 pr-12">
                <span className="px-4 py-1.5 rounded-full bg-[#ff1e4b] text-white font-label-caps text-xs sm:text-sm font-black tracking-widest uppercase shadow-[0_0_25px_rgba(255,30,75,0.6)]">
                  {activeHackathon.award}
                </span>
                <span className="font-mono text-xs sm:text-sm text-white/70 bg-white/10 px-3.5 py-1.5 rounded-full border border-white/10">
                  {activeHackathon.subtitle}
                </span>
              </div>

              {/* Title */}
              <h2 className="font-display-lg text-2xl sm:text-4xl md:text-5xl font-black text-white mb-6 leading-[1.15] tracking-tight">
                {activeHackathon.title}
              </h2>

              {/* Image Switcher Tabs */}
              <div className="flex flex-wrap items-center gap-2.5 mb-6 bg-white/5 p-1.5 rounded-2xl border border-white/10 w-fit">
                <button
                  onClick={() => setSelectedView('award')}
                  className={`px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-label-caps font-bold tracking-wider transition-all flex items-center gap-2 ${
                    selectedView === 'award'
                      ? 'bg-[#ff1e4b] text-white shadow-[0_0_20px_rgba(255,30,75,0.5)]'
                      : 'text-white/70 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span className="material-symbols-outlined text-sm">emoji_events</span>
                  {activeHackathon.awardTabLabel || '🏆 Award Photo'}
                </button>
                <button
                  onClick={() => setSelectedView('demo')}
                  className={`px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-label-caps font-bold tracking-wider transition-all flex items-center gap-2 ${
                    selectedView === 'demo'
                      ? 'bg-[#ff1e4b] text-white shadow-[0_0_20px_rgba(255,30,75,0.5)]'
                      : 'text-white/70 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span className="material-symbols-outlined text-sm">
                    {activeHackathon.hasDualPhotos ? 'workspace_premium' : 'laptop_mac'}
                  </span>
                  {activeHackathon.demoTabLabel || '💻 System Demo'}
                </button>
                {activeHackathon.hasDualPhotos && (
                  <button
                    onClick={() => setSelectedView('both')}
                    className={`px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-label-caps font-bold tracking-wider transition-all flex items-center gap-2 ${
                      selectedView === 'both'
                        ? 'bg-[#ff1e4b] text-white shadow-[0_0_20px_rgba(255,30,75,0.5)]'
                        : 'text-white/70 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <span className="material-symbols-outlined text-sm">view_carousel</span>
                    🖼️ Side-by-Side View
                  </button>
                )}
              </div>

              {/* Photo Display */}
              <div className="relative rounded-[2rem] overflow-hidden mb-8 border-2 border-[#ff1e4b]/40 shadow-[0_0_50px_rgba(255,30,75,0.35)] group bg-black/60">
                {selectedView === 'both' ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 p-2">
                    <div className="relative rounded-2xl overflow-hidden bg-black/40">
                      <img 
                        src={activeHackathon.awardImage} 
                        alt="Stage Ceremony Photo" 
                        className="w-full h-full max-h-[460px] object-cover"
                      />
                      <div className="absolute bottom-3 left-3 bg-black/80 px-3 py-1 rounded-lg text-xs font-label-caps text-white">
                        Stage Ceremony
                      </div>
                    </div>
                    <div className="relative rounded-2xl overflow-hidden bg-black/40">
                      <img 
                        src={activeHackathon.demoImage} 
                        alt="Trophy Photo" 
                        className="w-full h-full max-h-[460px] object-cover"
                      />
                      <div className="absolute bottom-3 left-3 bg-black/80 px-3 py-1 rounded-lg text-xs font-label-caps text-white">
                        Official Trophy Plaque
                      </div>
                    </div>
                  </div>
                ) : (
                  <>
                    <img 
                      src={selectedView === 'award' ? activeHackathon.awardImage : activeHackathon.demoImage} 
                      alt={activeHackathon.title}
                      className="w-full max-h-[500px] object-contain md:object-cover mx-auto"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none"></div>
                    <div className="absolute bottom-5 left-5 right-5 bg-black/85 backdrop-blur-xl px-5 py-3 rounded-2xl border border-white/20 flex items-center gap-3 shadow-2xl">
                      <span className="material-symbols-outlined text-yellow-400 text-xl sm:text-2xl">
                        {selectedView === 'award' ? 'emoji_events' : (activeHackathon.hasDualPhotos ? 'workspace_premium' : 'terminal')}
                      </span>
                      <span className="text-xs sm:text-sm font-label-caps font-extrabold text-white tracking-wide truncate">
                        {selectedView === 'award' ? activeHackathon.awardCaption : activeHackathon.demoCaption}
                      </span>
                    </div>
                  </>
                )}
              </div>

              {/* Special Mentorship & Guidance Section if present */}
              {activeHackathon.mentors && (
                <div className="mb-8 p-5 sm:p-6 rounded-2xl bg-white/[0.04] border border-white/10 shadow-lg">
                  <div className="text-xs font-label-caps font-bold text-white/70 uppercase tracking-widest mb-3.5 flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#ff1e4b] text-base">supervisor_account</span>
                    Special Thanks & Mentorship Guidance
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {activeHackathon.mentors.map((mentor, mIdx) => (
                      <a
                        key={mIdx}
                        href={mentor.url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-[#ff1e4b]/20 border border-white/15 hover:border-[#ff1e4b]/50 text-white text-xs sm:text-sm font-semibold transition-all group/mentor shadow-md"
                      >
                        <span className="w-5 h-5 rounded-md bg-[#0077b5] flex items-center justify-center text-[11px] text-white font-bold">in</span>
                        <span>{mentor.name}</span>
                        <span className="text-[11px] text-white/50 font-normal">({mentor.role})</span>
                        <span className="material-symbols-outlined text-xs group-hover/mentor:translate-x-0.5 transition-transform text-[#ff1e4b]">open_in_new</span>
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {/* Quote Reflection if present */}
              {activeHackathon.quote && (
                <div className="mb-8 p-5 rounded-2xl bg-[#ff1e4b]/10 border-l-4 border-l-[#ff1e4b] border-y border-r border-white/10 text-white/90 text-sm sm:text-base leading-relaxed italic shadow-md">
                  “{activeHackathon.quote}”
                </div>
              )}

              {/* Architectural Breakdown & Accomplishments */}
              <div className="mb-10">
                <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-[#ff1e4b]/10 border border-[#ff1e4b]/30 mb-5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ff1e4b] animate-pulse" />
                  <h4 className="font-label-caps text-xs sm:text-sm font-black tracking-widest text-[#ff1e4b] uppercase">
                    Full Architectural Breakdown & Accomplishments
                  </h4>
                </div>

                <div className="space-y-3.5">
                  {activeHackathon.bullets.map((bullet, idx) => (
                    <div 
                      key={idx} 
                      className="flex items-start gap-4 p-4 sm:p-5 rounded-2xl bg-white/[0.04] hover:bg-white/[0.07] border border-white/10 transition-colors shadow-lg"
                    >
                      <span className="w-7 h-7 rounded-xl bg-[#ff1e4b]/20 border border-[#ff1e4b]/40 flex items-center justify-center text-[#ff1e4b] text-xs font-black flex-shrink-0 mt-0.5 shadow-[0_0_15px_rgba(255,30,75,0.3)]">
                        {idx + 1}
                      </span>
                      <p className="text-xs sm:text-sm md:text-base text-white/90 leading-relaxed font-normal">
                        {bullet}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Championship Metrics & Tech Stack */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-white/10">
                <div>
                  <h5 className="text-xs font-label-caps font-bold text-white/60 mb-3.5 uppercase tracking-widest">
                    Championship Honors & Metrics
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {activeHackathon.metrics.map((m, idx) => (
                      <span key={idx} className="px-3.5 py-1.5 rounded-xl bg-[#ff1e4b]/15 border border-[#ff1e4b]/30 text-xs font-label-caps text-white font-bold tracking-wider shadow-[0_0_15px_rgba(255,30,75,0.2)]">
                        {m}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h5 className="text-xs font-label-caps font-bold text-white/60 mb-3.5 uppercase tracking-widest">
                    Technology & Focus Areas
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {activeHackathon.tags.map((t, idx) => (
                      <span key={idx} className="px-3 py-1 rounded-xl bg-white/10 border border-white/20 text-xs font-mono text-white font-semibold">
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
