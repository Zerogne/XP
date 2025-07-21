"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import AnimatedSection from "./AnimatedSection"

export default function WearYourStory({ language = "english" }: { language?: "english" | "mongolia" }) {
  const translations = {
    english: {
      build: "Build",
      your: "Your",
      vision: "Vision",
      subtitle: "From concept to launch, we create stunning websites and web applications that drive results. Our expert team combines cutting-edge technology with beautiful design to bring your digital vision to life.",
      startProject: "Start Your Project",
      viewWork: "View Our Work",
    },
    mongolia: {
      build: "Санаагаа",
      your: "Бодит",
      vision: "Болго",
      subtitle: "Бид таны санааг бодит болгон, үр дүнтэй, орчин үеийн вэбсайт болон веб аппликейшнүүдийг бүтээнэ. Манай мэргэшсэн баг хамгийн сүүлийн үеийн технологи, гоёмсог дизайныг хослуулан таны дижитал төсөл, зорилгыг амжилттай хэрэгжүүлнэ.",
      startProject: "Санаагаа хэрэгжүүл",
      viewWork: "View work",
    },
  }
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  return (
    <motion.section ref={containerRef} className="bg-background py-20 relative overflow-hidden" style={{ opacity }}>
      {/* Floating background elements */}
      <motion.div className="absolute inset-0 opacity-5" style={{ y }}>
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-secondary/10 rounded-full blur-2xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection className="text-center">
          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.span
              className="inline-block"
              initial={{ rotateX: 90 }}
              whileInView={{ rotateX: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {translations[language].build}
            </motion.span>{" "}
            <motion.span
              className="inline-block text-gradient"
              initial={{ rotateX: 90 }}
              whileInView={{ rotateX: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              {translations[language].your}
            </motion.span>{" "}
            <motion.span
              className="inline-block"
              initial={{ rotateX: 90 }}
              whileInView={{ rotateX: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              {translations[language].vision}
            </motion.span>
          </motion.h2>

          <AnimatedSection delay={0.4}>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              {translations[language].subtitle}
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.6}>
            <motion.div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                className="apple-button inline-flex items-center group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const el = document.getElementById('contact');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <span>{translations[language].startProject}</span>
                <motion.svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </motion.svg>
              </motion.button>

              <motion.a
                href="https://www.flowersandsaints.com.au"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold leading-6 text-foreground hover:text-primary transition-colors inline-flex items-center"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                {translations[language].viewWork}
                <span aria-hidden="true" className="ml-1">
                  →
                </span>
              </motion.a>
            </motion.div>
          </AnimatedSection>
        </AnimatedSection>
      </div>
    </motion.section>
  )
}
