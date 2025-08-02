"use client"

import { useState } from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { useLanguage } from "../contexts/LanguageContext"

const projects = [
  {
    id: 1,
    title: "Xperience",
    description: "Connecting students and young professionals with real-world internships and learning opportunities.",
    imageUrl: "/placeholder.svg?height=600&width=800",
    category: "Web Development",
    link: "https://www.xperience.mn/" // <-- your project link here
  },
  {
    id: 2,
    title: "Han Education",
    description: "HAN Education offers you the opportunity to study in China with a scholarship.",
    imageUrl: "/placeholder.svg?height=800&width=600",
    category: "Web Development",
    link: "https://www.haneducation.mn/" // <-- your project link here
  },
  {
    id: 3,
    title: "TellU",
    description: "TellU is a mobile app where students can anonymously share honest feedback about their school experience to help improve education through open communication.",
    imageUrl: "/placeholder.svg?height=600&width=800",
    category: "Mobile App",
  },
]

const categories = ["All", ...new Set(projects.map((project) => project.category))]

export default function PortfolioGrid() {
  const [filter, setFilter] = useState("All")
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.1 })
  const { t } = useLanguage()

  const filteredProjects = filter === "All" ? projects : projects.filter((project) => project.category === filter)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  }

  return (
    <section id="our-work" className="py-20 bg-background relative" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">{t('portfolio.title')}</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {t('portfolio.subtitle')}
          </p>
        </motion.div>

        <motion.div
          className="flex justify-center space-x-4 mb-8 flex-wrap gap-2"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
            {categories.map((category, index) => (
              <motion.button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="bg-background rounded-3xl shadow-lg overflow-hidden hover-lift transition-all duration-300 ease-in-out border-2 border-transparent hover:border-primary/10 group"
                whileHover={{
                  y: -10,
                  transition: { duration: 0.3 },
                }}
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.imageUrl || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    style={{ objectFit: "cover" }}
                    className="transition-transform duration-500 ease-in-out group-hover:scale-110"
                  />
                  <div
                    className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <p
                      className="text-white text-center px-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                    >
                      {project.description}
                    </p>
                  </div>
                </div>
                <div className="p-6">
                  <motion.div
                    className="text-sm font-medium text-primary mb-1"
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    viewport={{ once: true }}
                  >
                    {project.category}
                  </motion.div>
                  <motion.h3
                    className="text-xl font-semibold text-foreground mb-2"
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    {project.title}
                  </motion.h3>
                  {project.link ? (
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline inline-flex items-center group"
                      initial={{ x: -20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.4, delay: 0.3 }}
                      viewport={{ once: true }}
                      whileHover={{ x: 5 }}
                    >
                      {t('portfolio.viewProject')}
                      <motion.svg
                        className="w-4 h-4 ml-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        initial={{ x: 0 }}
                        whileHover={{ x: 3 }}
                        transition={{ duration: 0.2 }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </motion.svg>
                    </motion.a>
                  ) : (
                    <motion.span
                      className="text-muted-foreground inline-flex items-center"
                      initial={{ x: -20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.4, delay: 0.3 }}
                      viewport={{ once: true }}
                    >
                      {t('portfolio.comingSoon')}
                    </motion.span>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
