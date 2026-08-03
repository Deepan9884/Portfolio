import React, { useEffect, useRef } from 'react'
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion'
import SlideUp from './SlideUp'

function Counter({ from = 0, to, duration = 2, suffix = "", prefix = "" }) {
  const nodeRef = useRef(null)
  const inView = useInView(nodeRef, { once: true, amount: 0.5 })
  const count = useMotionValue(from)
  const rounded = useTransform(count, (latest) => prefix + Math.round(latest) + suffix)

  useEffect(() => {
    if (inView) {
      animate(count, to, { duration: duration, ease: "easeOut" })
    }
  }, [inView, count, to, duration])

  return <motion.span ref={nodeRef}>{rounded}</motion.span>
}

function CTASection() {
  return (
    <section className="min-h-screen flex flex-col justify-center py-24 px-margin_mobile md:px-margin_desktop max-w-[1440px] mx-auto text-center relative" id="cta">
      <SlideUp>
        <h2 className="font-display-lg-mobile md:font-display-lg text-[56px] md:text-[96px] font-bold text-white mb-6 leading-[1.1] tracking-tighter">
          Building Future-Ready<br/>
          <span className="liquid-text-gradient">Fullstack Innovations</span>
        </h2>
      </SlideUp>
      <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-12">
        Whether it's fullstack research projects, hackathon innovations, or high-performance web applications — let's build something extraordinary.
      </p>
      
      <div className="flex flex-wrap gap-4 justify-center mb-16">
        <a 
          href="#contact" 
          className="px-10 py-5 rounded-xl bg-vibrant-yellow text-black font-label-caps text-label-caps font-bold hover:shadow-[0_0_30px_rgba(244,255,0,0.5)] transition-all duration-300 flex items-center gap-2"
        >
          <span>Get In Touch</span>
          <span className="material-symbols-outlined">arrow_forward</span>
        </a>
        <a 
          href="#timeline" 
          className="px-10 py-5 rounded-xl bg-white/5 border border-white/20 text-white font-label-caps text-label-caps font-bold hover:bg-white/10 transition-all duration-300"
        >
          Explore Journey
        </a>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
        <div className="text-center">
          <div className="font-display-lg text-[48px] font-bold text-vibrant-yellow mb-2"><Counter to={2} suffix="x" /></div>
          <div className="font-label-caps text-on-surface-variant">Hackathon Winner</div>
        </div>
        <div className="text-center">
          <div className="font-display-lg text-[48px] font-bold text-vibrant-yellow mb-2"><Counter to={2028} prefix="#" /></div>
          <div className="font-label-caps text-on-surface-variant">Marquee Batch</div>
        </div>
        <div className="text-center">
          <div className="font-display-lg text-[48px] font-bold text-vibrant-yellow mb-2"><Counter to={3} suffix="rd" /></div>
          <div className="font-label-caps text-on-surface-variant">Year IT Student</div>
        </div>
        <div className="text-center">
          <div className="font-display-lg text-[48px] font-bold text-vibrant-yellow mb-2"><Counter to={100} suffix="%" /></div>
          <div className="font-label-caps text-on-surface-variant">Commitment & Innovation</div>
        </div>
      </div>
    </section>
  )
}

export default CTASection
