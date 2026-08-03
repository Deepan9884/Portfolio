import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SlideUp from './SlideUp'

function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: "As a 3rd-year B.Tech IT student, how do you manage freelance deadlines alongside academics?",
      answer: "I manage my schedule with strict discipline and agile sprint planning. As an active developer at SRM Research Unit and 2x National Hackathon Champion, I am proven at building high-quality, production-ready applications under intense 24–48 hour deadline pressure. I commit to clear milestones, weekly live progress demos, and guaranteed on-time delivery."
    },
    {
      question: "What types of freelance projects do you take on?",
      answer: "I specialize in end-to-end Fullstack Web Applications (React 19, Next.js, Node.js, Express, FastAPI, Python), Custom AI & LLM Integrations (Google Gemini, OpenAI API, RAG, pgvector semantic search, local Ollama/vLLM), Healthcare/EdTech Bots, and responsive executive web dashboards."
    },
    {
      question: "How do you price your freelance development services?",
      answer: "I offer transparent, budget-friendly fixed project pricing or milestone rates tailored for startups, small businesses, research teams, and individuals. Operating as an independent freelance engineer means zero agency markup — you get top-tier modern architecture and high quality at competitive rates."
    },
    {
      question: "Can you integrate custom AI models & LLMs into my existing web application?",
      answer: "Absolutely! AI integration is one of my core specializations. Whether it's adding RAG semantic search with vector databases (pgvector/Pinecone), local open-source LLM inference, automated resume/document triage, or building smart conversational bots (Telegram/Web APIs), I engineer fast, secure, production-grade AI pipelines."
    },
    {
      question: "Do you provide post-launch support and handoff documentation?",
      answer: "Yes! Every project includes 30 to 60 days of complimentary post-launch support, bug fixing, and cloud deployment assistance (Vercel, Render, AWS, Docker). I also hand over complete documented source code, step-by-step setup guides, and options for ongoing maintenance."
    },
    {
      question: "How do we get started on a project together?",
      answer: "Simply send me a message via the contact form, email (deepan9210@gmail.com), or phone (+91 9884932408). We'll discuss your technical requirements, scope out the system architecture, and I will deliver a detailed proposal with fixed quote and timeline within 24 hours."
    }
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="min-h-screen flex flex-col justify-center py-24 px-margin_mobile md:px-margin_desktop max-w-[1440px] mx-auto" id="faq">
      <div className="flex flex-col items-center text-center mb-16 max-w-6xl mx-auto">
        <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-[#ff1e4b]/15 border-2 border-[#ff1e4b]/40 backdrop-blur-xl shadow-[0_0_30px_rgba(255,30,75,0.4)] mb-8">
          <span className="w-3.5 h-3.5 rounded-full bg-[#ff1e4b] animate-ping" />
          <span className="font-label-caps text-sm sm:text-base font-black tracking-[0.2em] text-[#ff1e4b] uppercase">FREQUENTLY ASKED QUESTIONS</span>
        </div>
        <SlideUp>
          <h2 className="text-4xl sm:text-6xl md:text-8xl lg:text-[96px] font-black text-white leading-[1.1] tracking-tighter mb-6 uppercase drop-shadow-2xl py-2">
            GOT ANY <span className="liquid-text-gradient drop-shadow-[0_0_50px_rgba(255,30,75,0.7)]">QUESTIONS?</span>
          </h2>
        </SlideUp>
        <div className="h-2 w-44 bg-gradient-to-r from-transparent via-[#ff1e4b] to-transparent rounded-full shadow-[0_0_25px_rgba(255,30,75,0.8)] my-6 mx-auto mb-12"></div>
      </div>

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
