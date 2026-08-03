import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SlideUp from './SlideUp'

function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: "What's your typical project timeline?",
      answer: "Most projects take 4-12 weeks depending on complexity. A simple landing page might be 2-3 weeks, while a full WebGL experience could take 8-12 weeks. I'll provide a detailed timeline during our initial consultation."
    },
    {
      question: "Do you work with agencies or only direct clients?",
      answer: "I work with both! Many agencies partner with me for specialized WebGL and interactive work. I'm comfortable being a white-label partner or working directly with your team."
    },
    {
      question: "What technologies do you specialize in?",
      answer: "My core stack is React, Three.js, Next.js, and GSAP for animations. For backends, I typically recommend modern solutions like Vercel, Supabase, or custom Node.js APIs depending on your needs."
    },
    {
      question: "Do you offer ongoing support after launch?",
      answer: "Absolutely. All projects include 1-6 months of support depending on the package. After that, I offer monthly retainers for updates, optimizations, and new features."
    },
    {
      question: "Can you help with design as well as development?",
      answer: "Yes! While I'm primarily a developer, I have a strong design sensibility and can handle both UI/UX design and implementation. For larger projects, I often collaborate with specialized designers."
    },
    {
      question: "What makes your work different?",
      answer: "I focus on the intersection of creativity and performance. Every project gets custom WebGL elements, buttery-smooth animations, and meticulous attention to detail. Plus, I write clean, maintainable code that your team can actually work with."
    }
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="min-h-screen flex flex-col justify-center py-24 px-margin_mobile md:px-margin_desktop max-w-[1440px] mx-auto" id="faq">
      <div className="mb-4 inline-block font-label-caps text-xs border border-white/20 rounded-full px-4 py-1 text-on-surface-variant bg-white/5 backdrop-blur-md">
        FAQ
      </div>
      <SlideUp>
        <h2 className="font-display-lg-mobile md:font-display-lg text-[56px] md:text-[80px] font-bold text-white mb-12 leading-none tracking-tighter">
          Got any<br/>questions?
        </h2>
      </SlideUp>

      <div className="space-y-4">
        {faqs.map((faq, idx) => (
          <div 
            key={idx}
            className="glass-panel rounded-2xl overflow-hidden"
          >
            <div className="specular-edge"></div>
            <div className="inner-glow"></div>
            <button
              onClick={() => toggleFAQ(idx)}
              className="relative w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
            >
              <h3 className="font-body-lg text-body-lg font-bold text-white pr-4">{faq.question}</h3>
              <span className={`material-symbols-outlined text-vibrant-yellow transition-transform duration-300 flex-shrink-0 ${
                openIndex === idx ? 'rotate-180' : ''
              }`}>
                expand_more
              </span>
            </button>
            <AnimatePresence initial={false}>
              {openIndex === idx && (
                <motion.div
                  initial="collapsed"
                  animate="open"
                  exit="collapsed"
                  variants={{
                    open: { opacity: 1, height: "auto" },
                    collapsed: { opacity: 0, height: 0 }
                  }}
                  transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                  className="relative overflow-hidden"
                >
                  <div className="px-6 pb-6 pt-0">
                    <p className="font-body-md text-on-surface-variant">{faq.answer}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  )
}

export default FAQSection
