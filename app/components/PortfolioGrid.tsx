"use client"

import { useState } from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { useLanguage } from "../contexts/LanguageContext"
import { ChevronDown, ExternalLink, Eye } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    id: 2,
    title: "Han Education – Гадаадад Сурах, Хэлний Хөтөлбөрийн Платформ",
    description: "Сурагчдад хичээл, хэлний сургалт болон гадаадад суралцах боломжуудыг нээж өгөх орчин үеийн боловсролын веб сайт. Монголын сурагчдад нэр хүндтэй БНХАУ-ын их сургуулиуд болон тэтгэлгийн хөтөлбөрүүдтэй холбогдох боломжийг олгодог.",
    imageUrl: "/haneducation.png",
    category: "Web Development",
    liveUrl: "https://haneducation.mn",
    slug: "han-education",
    technologies: ["Next.js", "TypeScript", "Tailwind", "MongoDB", "Cloudinary"],
    stats: {
      students: "500+",
      universities: "30+",
      countries: "3"
    },
    timeline: "2 weeks",
    team: "2 developers"
  },
  {
    id: 3,
    title: "Sunrise Mongolia – Аялал ба Туршлагууд",
    description: "Монголын шилдэг аялал, адал явдлыг танилцуулж, захиалга хийхэд хялбар болгосон орчин үеийн аяллын вэбсайт. Энэхүү платформ нь аялагчдад аяллын дэлгэрэнгүй мэдээлэл болон онцгой туршлагуудтай танилцах боломжийг олгоно.",
    imageUrl: "/SunriseMongolia.png",
    category: "Web Development",
    liveUrl: "https://sunrisemongolia.com",
    slug: "sunrise-mongolia",
    technologies: ["Next.js", "TypeScript", "Tailwind", "MongoDB", "Cloudinary", "ReCAPTCHA"],
    stats: {
      tours: "50+",
      destinations: "20+",
      bookings: "100+"
    },
    timeline: "2 weeks",
    team: "2 developers"
  },
  {
    id: 4,
    title: "New Era – Ерөнхий боловсрол ба Хичээлүүдийн платформ",
    description: "Эцэг эх, сурагчдад зориулсан ээлтэй боловсролын сайт. Хөтөлбөрийн мэдээлэл, элсэлт, мэдээ зар, медиа галерей зэрэг бүх мэдээллийг нэг дор төвлөрүүлсэн цогц боловсролын платформ.",
    imageUrl: "/newera.png",
    category: "Web Development",
    liveUrl: "https://edunewera.mn",
    slug: "new-era",
    technologies: ["Next.js", "TypeScript", "Tailwind", "MongoDB", "Cloudinary", "NextAuth", "Bunny.net", "TUS"],
    stats: {
      students: "300+",
      programs: "25+",
      courses: "100+"
    },
    timeline: "4 weeks",
    team: "2 developers"
  },
  {
    id: 1,
    title: "Xperience – Дижитал Дадлагын Төв",
    description: "Монголын оюутан сурагчдад дадлага, цагийн ажил, төсөлд оролцох боломжуудтай холбож, боловсрол ба ажил мэргэжлийн гүүр болох платформ. Зорилготой, идэвхтэй оюутан, залуу мэргэжилтнүүдийг үнэ цэнтэй дадлага, менторшип хөтөлбөртэй холбодог.",
    imageUrl: "/xperience.png",
    category: "Projects",
    liveUrl: "https://xperience.mn",
    slug: "xperience",
    technologies: ["Next.js", "TypeScript", "MongoDB", "Cloudinary", "NextAuth"],
    stats: {
      users: "1000+",
      companies: "50+",
      internships: "200+"
    },
    timeline: "3 months",
    team: "2 developers"
  },
  {
    id: 5,
    title: "TellU – Сурагчдын Сэтгэгдэл илэрхийлэх Платформ",
    description: "Сурагчдад сургууль, их сургуулийнхаа талаар шударга сэтгэгдэлээ хуваалцах боломж олгодог гар утсанд ээлтэй платформ. Сурагчид санал бодлоо илэрхийлэх, сургалтын дэд бүтцийг үнэлэх аюулгүй орон зайг бүрдүүлдэг.",
    imageUrl: "/TellU.png",
    category: "Projects",
    liveUrl: null,
    slug: "tellu",
    technologies: ["Next.js", "TypeScript", "MongoDB", "Cloudinary", "NextAuth", "Tailwind CSS"],
    stats: {
      reviews: "500+",
      schools: "100+",
      students: "1000+"
    },
    timeline: "4 months",
    team: "2 developers"
  }
]

const categories = ["All", ...new Set(projects.map((project) => project.category))]

export default function PortfolioGrid() {
  const [filter, setFilter] = useState("All")
  const [showAll, setShowAll] = useState(false)
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.1 })
  const { t } = useLanguage()

  const filteredProjects = filter === "All" ? projects : projects.filter((project) => project.category === filter)
  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 3)
  const hasMoreProjects = filteredProjects.length > 3

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

  const toggleShowAll = () => {
    setShowAll(!showAll)
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
          className="flex justify-center space-x-4 mb-12 flex-wrap gap-2"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${filter === category
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <AnimatePresence mode="wait">
            {displayedProjects.map((project, index) => (
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
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80" />

                  {/* Project Stats Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex gap-2">
                        <span className="text-sm font-medium text-primary-foreground bg-primary/20 px-2 py-1 rounded-full">
                          {project.category}
                        </span>
                        {project.category === "Projects" && (
                          <span className="text-sm font-bold text-white bg-gradient-to-r from-yellow-500 to-orange-500 px-3 py-1 rounded-full shadow-lg">
                            ⭐
                          </span>
                        )}
                        {project.category === "Web Development" && (
                          <span className="text-sm font-bold text-white bg-gradient-to-r from-blue-500 to-purple-500 px-3 py-1 rounded-full shadow-lg">
                            💻
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <motion.h3
                    className="text-xl font-semibold text-foreground mb-3"
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    viewport={{ once: true }}
                  >
                    {project.title}
                  </motion.h3>

                  <motion.p
                    className="text-muted-foreground mb-4 line-clamp-2"
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    {project.description}
                  </motion.p>

                  {/* Technologies */}
                  <motion.div
                    className="flex flex-wrap gap-2 mb-4"
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-full">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </motion.div>

                  {/* Timeline & Team Info */}
                  <motion.div
                    className="mb-4 p-3 bg-secondary/20 rounded-lg"
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex justify-between items-center text-sm">
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <span>⏱️</span>
                        <span>{project.timeline}</span>
                      </div>
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <span>👥</span>
                        <span>{project.team}</span>
                      </div>
                    </div>
                  </motion.div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-sm font-medium whitespace-nowrap min-w-0"
                    >
                      <Eye className="w-4 h-4 flex-shrink-0" />
                      <span className="truncate">Project Details</span>
                    </Link>

                    {project.liveUrl ? (
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-colors text-sm font-medium whitespace-nowrap min-w-0"
                        initial={{ x: -20, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.4, delay: 0.4 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <ExternalLink className="w-4 h-4 flex-shrink-0" />
                        <span className="truncate">Preview</span>
                      </motion.a>
                    ) : (
                      <motion.button
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-colors text-sm font-medium cursor-not-allowed whitespace-nowrap min-w-0"
                        initial={{ x: -20, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.4, delay: 0.4 }}
                        viewport={{ once: true }}
                      >
                        <ExternalLink className="w-4 h-4 flex-shrink-0" />
                        <span className="truncate">Coming Soon</span>
                      </motion.button>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View More Button */}
        {hasMoreProjects && (
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.button
              onClick={toggleShowAll}
              className="group relative px-8 py-4 bg-gradient-to-r from-primary to-purple-600 text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center gap-2">
                {showAll ? (
                  <>
                    Show Less
                    <motion.div
                      animate={{ rotate: 180 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="w-5 h-5" />
                    </motion.div>
                  </>
                ) : (
                  <>
                    Explore More ({filteredProjects.length - 3} more projects)
                    <motion.div
                      animate={{ rotate: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="w-5 h-5" />
                    </motion.div>
                  </>
                )}
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-600 to-primary rounded-full"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  )
}
