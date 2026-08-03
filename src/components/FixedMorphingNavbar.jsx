import React, { useState, useEffect } from 'react'
import { motion, useTransform, useScroll } from 'framer-motion'

const NAV_ITEMS = [
  // Left Group in Hero (left of portrait)
  { id: 'home', label: 'HOME', icon: 'home', startLeft: '5%', endTop: 260, hasPipe: true },
  { id: 'timeline', label: 'ABOUT ME', icon: 'person', startLeft: '12%', endTop: 298, hasPipe: true },
  { id: 'projects', label: 'PROJECTS', icon: 'layers', startLeft: '20%', endTop: 336, hasPipe: false },
  
  // Right Group in Hero (right of portrait)
  { id: 'capabilities', label: 'SKILLS', icon: 'redeem', startLeft: '67%', endTop: 374, hasPipe: true },
  { id: 'services', label: 'ROLES', icon: 'bolt', startLeft: '78%', endTop: 412, hasPipe: true },
  { id: 'cta', label: 'ACHIEVEMENTS', icon: 'groups', startLeft: '86%', endTop: 450, hasPipe: true },
  { id: 'faq', label: 'FAQ', icon: 'help', startLeft: '93%', endTop: 488, hasPipe: false },
]

function FixedMorphingNavbar({ scrollY, progress: propProgress }) {
  const [activeSection, setActiveSection] = useState('home')
  const [copied, setCopied] = useState(false)

  const { scrollY: defaultScrollY } = useScroll()
  const fallbackProgress = useTransform(scrollY || defaultScrollY, [0, 250], [0, 1])
  const progress = propProgress || fallbackProgress

  useEffect(() => {
    const sectionIds = NAV_ITEMS.map(item => item.id)
    const observers = []

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id)
          }
        },
        { rootMargin: '-40% 0px -40% 0px', threshold: 0 }
      )
      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach(obs => obs.disconnect())
  }, [])

  // Sidebar background panel container transforms
  const sidebarOpacity = useTransform(progress, [0.2, 1], [0, 1])
  const sidebarX = useTransform(progress, [0.2, 1], [-320, 0])

  // Pipe separator & icon opacities
  const pipeOpacity = useTransform(progress, [0, 0.35], [0.4, 0])
  const iconOpacity = useTransform(progress, [0.35, 1], [0, 1])

  const copyEmail = () => {
    navigator.clipboard.writeText("deepan.d@easwari.ac.in")
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-40">
      
      {/* === 1. DOCKED SIDEBAR PANEL CONTAINER === */}
      <motion.aside
        className="absolute top-0 left-0 h-screen w-[310px] bg-[#0a0a0a]/95 backdrop-blur-3xl border-r border-white/10 pointer-events-auto shadow-2xl z-35 p-4 flex flex-col justify-between overflow-y-auto hide-scroll"
        style={{ opacity: sidebarOpacity, x: sidebarX }}
      >
        <div className="flex flex-col gap-3 pt-1">
          
          {/* Card 1: Logo & Socials Header */}
          <div className="glass-panel p-4 rounded-2xl border border-white/10 flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <div className="bg-vibrant-yellow text-black font-display-lg font-black text-sm px-3.5 py-1.5 rounded-xl tracking-tight flex items-center gap-1 shadow-[0_0_15px_rgba(244,255,0,0.3)]">
                DEEPAN D<span className="text-black font-black">®</span>
              </div>
              <div className="flex items-center gap-2">
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="w-8 h-8 rounded-xl bg-white/5 border border-white/10 hover:bg-white/15 text-white flex items-center justify-center text-xs transition-colors"
                >
                  <span className="material-symbols-outlined text-sm">code</span>
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="w-8 h-8 rounded-xl bg-white/5 border border-white/10 hover:bg-white/15 text-white flex items-center justify-center text-xs transition-colors font-bold"
                >
                  in
                </a>
              </div>
            </div>
            <p className="text-xs text-white/70 font-body-md leading-relaxed">
              3rd Year B.Tech IT Student at Easwari Engineering College & Fullstack Developer at SRM Research Unit.
            </p>
          </div>

          {/* Card 2: Stats Card */}
          <div className="glass-panel p-3.5 rounded-2xl border border-white/10 flex items-center justify-around text-center">
            <div className="flex flex-col items-center">
              <div className="text-vibrant-yellow font-display-lg text-xl font-black mb-0.5">2x</div>
              <div className="font-label-caps text-[10px] text-white/80 font-bold tracking-wider">Hackathons</div>
            </div>
            <div className="w-[1px] h-8 bg-white/15"></div>
            <div className="flex flex-col items-center">
              <div className="text-vibrant-yellow font-display-lg text-xl font-black mb-0.5">Marquee</div>
              <div className="font-label-caps text-[10px] text-white/80 font-bold tracking-wider">Batch 2028</div>
            </div>
          </div>

          {/* Card 3: Navigation Menu Slot Placeholder Box (Nav items morph into this container) */}
          <div className="glass-panel p-2.5 rounded-2xl border border-white/10 flex flex-col gap-1.5 min-h-[268px]">
            {/* The morphing items animate smoothly into these rows */}
          </div>

          {/* Card 4: Institution Badges */}
          <div className="glass-panel p-2.5 rounded-xl border border-white/10 flex items-center justify-around text-[10px] font-bold text-white/50 tracking-wider">
            <span>EASWARI IT</span>
            <span>SRM RESEARCH</span>
          </div>

          {/* Card 5: Copyable Email Box */}
          <div 
            onClick={copyEmail}
            className="glass-panel px-3.5 py-2.5 rounded-xl border border-white/10 flex items-center justify-between text-xs text-white/80 hover:border-vibrant-yellow/40 cursor-pointer transition-colors group"
          >
            <span className="font-mono text-[11px] tracking-tight">{copied ? "Copied to Clipboard!" : "deepan.d@easwari.ac.in"}</span>
            <span className="material-symbols-outlined text-sm text-vibrant-yellow group-hover:scale-110 transition-transform">
              {copied ? "done" : "content_copy"}
            </span>
          </div>

        </div>

        {/* Card 6: Full-Width Yellow CTA Button */}
        <a
          href="#contact"
          className="w-full py-3.5 rounded-xl bg-vibrant-yellow text-black font-label-caps text-xs font-black tracking-wider uppercase flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-transform shadow-[0_0_25px_rgba(244,255,0,0.4)] mt-3"
        >
          Get In Touch
        </a>

      </motion.aside>

      {/* === 2. DYNAMIC MORPHING NAV BUTTONS (Glide 2D from top hero position into sidebar slots) === */}
      {NAV_ITEMS.map((item, idx) => (
        <NavWordMorph
          key={item.id}
          item={item}
          index={idx}
          progress={progress}
          pipeOpacity={pipeOpacity}
          iconOpacity={iconOpacity}
          active={activeSection === item.id}
        />
      ))}
    </div>
  )
}

function NavWordMorph({ item, index, progress, pipeOpacity, iconOpacity, active }) {
  // 2D Morph Interpolation: Top section (35%) -> Sidebar slot (endTop)
  const top = useTransform(progress, p => `calc((1 - ${p}) * 35% + ${p} * ${item.endTop}px)`)
  const left = useTransform(progress, p => `calc((1 - ${p}) * ${item.startLeft} + ${p} * 28px)`)
  
  // Background pill morphs as it docks into the sidebar
  const bgOpacity = useTransform(progress, [0.3, 1], [0, 1])

  return (
    <motion.a
      href={`#${item.id}`}
      className={`absolute flex items-center gap-2.5 px-3 py-1.5 rounded-xl font-label-caps text-xs sm:text-sm font-extrabold tracking-wider pointer-events-auto transition-colors duration-200 z-50 ${
        active 
          ? 'text-vibrant-yellow font-black' 
          : 'text-white/80 hover:text-white'
      }`}
      style={{ top, left }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.0, delay: 4.5 + (index * 0.12), ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ scale: 1.06 }}
    >
      {/* Background Pill highlighted in sidebar when docked */}
      <motion.div
        className={`absolute inset-0 rounded-xl pointer-events-none -z-10 transition-colors ${
          active 
            ? 'bg-vibrant-yellow shadow-[0_0_15px_rgba(244,255,0,0.4)]' 
            : 'bg-white/5 border border-white/10'
        }`}
        style={{ opacity: bgOpacity }}
      />

      {/* Icon fades in next to label as it enters the sidebar */}
      <motion.span
        className={`material-symbols-outlined text-base ${active ? 'text-black' : 'text-vibrant-yellow'}`}
        style={{ opacity: iconOpacity }}
      >
        {item.icon}
      </motion.span>
      
      <span className={active ? 'text-black font-black' : ''}>{item.label}</span>

      {/* Hero Pipe Separator (fades out on scroll) */}
      {item.hasPipe && (
        <motion.span 
          className="ml-2 text-white/40 font-normal pointer-events-none"
          style={{ opacity: pipeOpacity }}
        >
          |
        </motion.span>
      )}
    </motion.a>
  )
}

export default FixedMorphingNavbar
