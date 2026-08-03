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
  const node2Opacity = useTransform(scrollYProgress, [0.22, 0.27], [0, 1])
  const node3Opacity = useTransform(scrollYProgress, [0.47, 0.52], [0, 1])
  const node4Opacity = useTransform(scrollYProgress, [0.72, 0.77], [0, 1])
  const node5Opacity = useTransform(scrollYProgress, [0.92, 0.98], [0, 1])

  return (
    <section ref={containerRef} className="py-24 w-full relative bg-[#050505] min-h-screen md:h-[2600px]" id="timeline">
      <div className="px-margin_mobile md:px-margin_desktop max-w-[1440px] mx-auto relative z-20 mb-12">
        <SlideUp>
          <h2 className="font-headline-md text-headline-md text-on-surface mb-2">My Journey & Milestones</h2>
        </SlideUp>
        <div className="w-12 h-1 liquid-gradient rounded-full"></div>
      </div>

      <div className="timeline-wave-container relative w-full max-w-[1440px] mx-auto px-4 md:px-8 h-auto md:h-full">
        {/* Fluid Waving Line SVG */}
        <svg className="hidden md:block absolute inset-0 w-full pointer-events-none z-0" style={{ height: '100%' }} preserveAspectRatio="none" viewBox="0 0 1000 2400">
          <defs>
            <linearGradient id="waveGradient" x1="0%" x2="100%" y1="0%" y2="0%">
              <stop offset="0%" stopColor="#ff6b00"></stop>
              <stop offset="50%" stopColor="#8e44ad"></stop>
              <stop offset="100%" stopColor="#f4ff00"></stop>
            </linearGradient>
            <filter id="waveGlow">
              <feGaussianBlur result="blur" stdDeviation="4"></feGaussianBlur>
              <feMerge>
                <feMergeNode in="blur"></feMergeNode>
                <feMergeNode in="SourceGraphic"></feMergeNode>
              </feMerge>
            </filter>
          </defs>
          {/* Waving path connects the relative centers of staggered panels */}
          <motion.path 
            d="M 950,250 C 950,450 50,450 50,650 C 50,850 950,850 950,1150 C 950,1450 50,1450 50,1650 C 50,1950 950,1950 950,2150" 
            fill="none" 
            filter="url(#waveGlow)" 
            stroke="url(#waveGradient)" 
            strokeWidth="4"
            style={{ pathLength: scrollYProgress }}
          ></motion.path>
          {/* Connection Nodes */}
          <motion.circle cx="950" cy="250" fill="#f4ff00" r="12" style={{ opacity: node1Opacity }}></motion.circle>
          <motion.circle cx="50" cy="650" fill="#f4ff00" r="12" style={{ opacity: node2Opacity }}></motion.circle>
          <motion.circle cx="950" cy="1150" fill="#f4ff00" r="12" style={{ opacity: node3Opacity }}></motion.circle>
          <motion.circle cx="50" cy="1650" fill="#f4ff00" r="12" style={{ opacity: node4Opacity }}></motion.circle>
          <motion.circle cx="950" cy="2150" fill="#f4ff00" r="12" style={{ opacity: node5Opacity }}></motion.circle>
        </svg>

        {/* Staggered Zig-Zag Cards */}
        <div className="relative z-10 w-full space-y-8 md:space-y-0 h-auto md:h-full">
          
          {/* Card 1 (Top Right): Joined Easwari */}
          <motion.div 
            initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="md:absolute md:right-[5%] md:top-[80px] md:w-[42%] max-w-md glass-panel p-8 rounded-2xl w-full border border-white/10 shadow-2xl"
          >
            <div className="specular-edge"></div>
            <div className="inner-glow"></div>
            <div className="relative">
              <div className="text-vibrant-yellow font-display-lg text-[42px] font-black leading-none mb-3">SEP 9, 2024</div>
              <h3 className="font-headline-md text-2xl font-bold text-white mb-2">Joined Easwari Engineering College</h3>
              <p className="font-body-md text-on-surface-variant mb-6">
                Commenced my B.Tech degree in Information Technology at Easwari Engineering College, immersing myself in software engineering and web technologies.
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-vibrant-yellow/20 flex items-center justify-center border border-white/20 backdrop-blur-md">
                  <span className="material-symbols-outlined text-vibrant-yellow text-sm">school</span>
                </div>
                <div>
                  <div className="text-sm font-label-caps text-on-surface">@easwari_it</div>
                  <div className="text-xs font-body-md text-on-surface-variant">B.Tech Information Technology</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 2 (Left): Won 1st Hackathon */}
          <motion.div 
            initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="md:absolute md:left-[5%] md:top-[500px] md:w-[42%] max-w-md glass-panel p-8 rounded-2xl w-full border border-white/10 shadow-2xl"
          >
            <div className="specular-edge"></div>
            <div className="inner-glow"></div>
            <div className="relative">
              <div className="text-vibrant-yellow font-display-lg text-[42px] font-black leading-none mb-3">MAR 2025</div>
              <h3 className="font-headline-md text-2xl font-bold text-white mb-2">Won First Hackathon 🎉</h3>
              <p className="font-body-md text-on-surface-variant mb-6">
                Secured 1st place in my very first competitive hackathon, building an innovative fullstack prototype under intense deadline pressure.
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-vibrant-yellow/20 flex items-center justify-center border border-white/20 backdrop-blur-md">
                  <span className="material-symbols-outlined text-vibrant-yellow text-sm">emoji_events</span>
                </div>
                <div>
                  <div className="text-sm font-label-caps text-on-surface">@hackathon</div>
                  <div className="text-xs font-body-md text-on-surface-variant">1st Place Winner</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 3 (Right): Joined SRM Research */}
          <motion.div 
            initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="md:absolute md:right-[5%] md:top-[980px] md:w-[42%] max-w-md glass-panel p-8 rounded-2xl w-full border border-white/10 shadow-2xl"
          >
            <div className="specular-edge"></div>
            <div className="inner-glow"></div>
            <div className="relative">
              <div className="text-vibrant-yellow font-display-lg text-[42px] font-black leading-none mb-3">JUN 2025</div>
              <h3 className="font-headline-md text-2xl font-bold text-white mb-2">Joined SRM Research Unit</h3>
              <p className="font-body-md text-on-surface-variant mb-6">
                Appointed as Fullstack Developer at SRM Research Unit, architecting research-grade web applications and high-performance software systems.
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary-container/20 flex items-center justify-center border border-white/20 backdrop-blur-md">
                  <span className="material-symbols-outlined text-primary text-sm">science</span>
                </div>
                <div>
                  <div className="text-sm font-label-caps text-on-surface">@srm_research</div>
                  <div className="text-xs font-body-md text-on-surface-variant">Fullstack Developer</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 4 (Left): Selected for Marquee Batch 2028 */}
          <motion.div 
            initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="md:absolute md:left-[5%] md:top-[1480px] md:w-[42%] max-w-md glass-panel p-8 rounded-2xl w-full border border-white/10 shadow-2xl"
          >
            <div className="specular-edge"></div>
            <div className="inner-glow"></div>
            <div className="relative">
              <div className="text-vibrant-yellow font-display-lg text-[42px] font-black leading-none mb-3">2025 - 2026</div>
              <h3 className="font-headline-md text-2xl font-bold text-white mb-2">Selected for Marquee Batch 2028 ⭐</h3>
              <p className="font-body-md text-on-surface-variant mb-6">
                Earned selection into the prestigious Marquee Batch 2028 cohort, a highly competitive program recognizing top-tier talent and technical leadership.
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-vibrant-yellow/20 flex items-center justify-center border border-white/20 backdrop-blur-md">
                  <span className="material-symbols-outlined text-vibrant-yellow text-sm">workspace_premium</span>
                </div>
                <div>
                  <div className="text-sm font-label-caps text-on-surface">@marquee_batch</div>
                  <div className="text-xs font-body-md text-on-surface-variant">Cohort 2028</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 5 (Right): Won 2nd Hackathon */}
          <motion.div 
            initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="md:absolute md:right-[5%] md:top-[1980px] md:w-[42%] max-w-md glass-panel p-8 rounded-2xl w-full border border-white/10 shadow-2xl"
          >
            <div className="specular-edge"></div>
            <div className="inner-glow"></div>
            <div className="relative">
              <div className="text-vibrant-yellow font-display-lg text-[42px] font-black leading-none mb-3">JUL 18, 2026</div>
              <h3 className="font-headline-md text-2xl font-bold text-white mb-2">Won Second Hackathon 🏆</h3>
              <p className="font-body-md text-on-surface-variant mb-6">
                Claimed top honors at my second major hackathon on July 18, 2026, delivering an advanced fullstack application recognized for tech excellence.
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-vibrant-yellow/20 flex items-center justify-center border border-white/20 backdrop-blur-md">
                  <span className="material-symbols-outlined text-vibrant-yellow text-sm">trophy</span>
                </div>
                <div>
                  <div className="text-sm font-label-caps text-on-surface">@hackathon_champ</div>
                  <div className="text-xs font-body-md text-on-surface-variant">Double Champion</div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default TimelineSection
