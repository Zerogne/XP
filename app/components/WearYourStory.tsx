"use client"

import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { useRef } from "react"

export default function WearYourStory() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.1 })

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  return (
    <motion.section ref={containerRef} className="bg-background py-20 relative overflow-hidden" style={{ opacity }}>
      {/* Animated background elements */}
      <motion.div className="absolute inset-0 opacity-5" style={{ y }}>
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-secondary/10 rounded-full blur-2xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection className="text-center">
          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block">
              Build
            </span>{" "}
            <span className="inline-block text-gradient">
              Your
            </span>{" "}
            <span className="inline-block">
              Vision
            </span>
          </motion.h2>
          <motion.p
            className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Transform your ideas into reality with our comprehensive digital solutions
          </motion.p>
        </AnimatedSection>

        <motion.div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <motion.button
            className="apple-button inline-flex items-center group"
            onClick={() => {
              const el = document.getElementById('contact1');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Start Project</span>
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </motion.button>
          <motion.a
            href="#our-work"
            className="text-sm font-semibold leading-6 text-foreground hover:text-primary transition-colors inline-flex items-center"
            whileHover={{ x: 5 }}
          >
            View Our Work
            <span aria-hidden="true" className="ml-1">
              →
            </span>
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  )
}

function AnimatedSection({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  )
}
