"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { useLanguage } from "../contexts/LanguageContext"
import { ChevronDown, ExternalLink, Eye } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    id: 6,
    title: {
      mn: "WinAcademy – Маркетинг, Дизайн, AI, Бодит Ур Чадвар Олгох Платформ",
      en: "WinAcademy – Marketing, Design, AI, Practical Skills Learning Platform"
    },
    description: {
      mn: "Маркетинг, дизайн, хиймэл оюун (AI)-ийн практик ур чадварыг хөгжүүлэх онлайн сургалтын платформ. WinAcademy нь \"Learn · Build · Get Hired\" зарчмаар оюутнууд болон карьерийн эхэн үеийн залууст богино хугацаанд мэдлэг олгож, бодит даалгавраар баталгаажуулж, ажилд зуучлуулахад чиглэсэн цогц платформ юм.",
      en: "Online learning platform for developing practical skills in marketing, design, and artificial intelligence (AI). WinAcademy follows the \"Learn · Build · Get Hired\" principle, providing students and early-career professionals with knowledge in a short time, validating through real projects, and connecting them to employment opportunities."
    },
    imageUrl: "/Screenshot 2025-09-05 201346.png",
    category: {
      mn: "Веб хөгжүүлэлт",
      en: "Web Development"
    },
    liveUrl: "https://winacademy.mn",
    slug: "winacademy",
    technologies: ["Next.js", "TypeScript", "Tailwind", "MongoDB", "Cloudinary", "NextAuth", "QPay"],
    stats: {
      students: "120+",
      courses: "15+",
      hired: "120+"
    },
    timeline: {
      mn: "1 сар",
      en: "1 month"
    },
    team: {
      mn: "2 хөгжүүлэгч",
      en: "2 developers"
    }
  },
  {
    id: 3,
    title: {
      mn: "Sunrise Mongolia – Аялал ба Туршлагууд",
      en: "Sunrise Mongolia – Travel & Experiences"
    },
    description: {
      mn: "Монголын шилдэг аялал, адал явдлыг танилцуулж, захиалга хийхэд хялбар болгосон орчин үеийн аяллын вэбсайт. Энэхүү платформ нь аялагчдад аяллын дэлгэрэнгүй мэдээлэл болон онцгой туршлагуудтай танилцах боломжийг олгоно.",
      en: "Modern travel website showcasing Mongolia's best tours and adventures, making booking easy. This platform provides travelers with detailed travel information and opportunities to experience unique adventures."
    },
    imageUrl: "/SunriseMongolia.png",
    category: {
      mn: "Веб хөгжүүлэлт",
      en: "Web Development"
    },
    liveUrl: "https://sunrisemongolia.com",
    slug: "sunrise-mongolia",
    technologies: ["Next.js", "TypeScript", "Tailwind", "MongoDB", "Cloudinary", "ReCAPTCHA"],
    stats: {
      tours: "50+",
      destinations: "20+",
      bookings: "100+"
    },
    timeline: {
      mn: "2 долоо хоног",
      en: "2 weeks"
    },
    team: {
      mn: "2 хөгжүүлэгч",
      en: "2 developers"
    }
  },
  {
    id: 2,
    title: {
      mn: "Han Education – Гадаадад Сурах, Хэлний Хөтөлбөрийн Платформ",
      en: "Han Education – Study Abroad & Language Program Platform"
    },
    description: {
      mn: "Сурагчдад хичээл, хэлний сургалт болон гадаадад суралцах боломжуудыг нээж өгөх орчин үеийн боловсролын веб сайт. Монголын сурагчдад нэр хүндтэй БНХАУ-ын их сургуулиуд болон тэтгэлгийн хөтөлбөрүүдтэй холбогдох боломжийг олгодог.",
      en: "Modern educational website providing students with opportunities for courses, language training, and studying abroad. Connects Mongolian students with prestigious Chinese universities and scholarship programs."
    },
    imageUrl: "/haneducation.png",
    category: {
      mn: "Веб хөгжүүлэлт",
      en: "Web Development"
    },
    liveUrl: "https://haneducation.mn",
    slug: "han-education",
    technologies: ["Next.js", "TypeScript", "Tailwind", "MongoDB", "Cloudinary"],
    stats: {
      students: "500+",
      universities: "30+",
      countries: "3"
    },
    timeline: {
      mn: "2 долоо хоног",
      en: "2 weeks"
    },
    team: {
      mn: "2 хөгжүүлэгч",
      en: "2 developers"
    }
  },
  {
    id: 4,
    title: {
      mn: "New Era – AI-ийн онлайн сургалтын платформ",
      en: "New Era – Online AI Course Platform"
    },
    description: {
      mn: "Хиймэл оюун ухаан (AI) болон орчин үеийн технологийн чиглэлээр онлайн сургалт явуулах платформ. Сурагчдад AI-ийн үндэс, машин суралцалт, дата шинжилгээ, автоматжуулалт зэрэг чиглэлээр практик мэдлэг олгох цогц сургалтын систем.",
      en: "Online learning platform for artificial intelligence (AI) and modern technology courses. A comprehensive educational system that provides students with practical knowledge in AI fundamentals, machine learning, data analysis, automation, and other cutting-edge technology fields."
    },
    imageUrl: "/newera.png",
    category: {
      mn: "Веб хөгжүүлэлт",
      en: "Web Development"
    },
    liveUrl: "https://edunewera.mn",
    slug: "new-era",
    technologies: ["Next.js", "TypeScript", "Tailwind", "MongoDB", "Cloudinary", "NextAuth", "Bunny.net", "TUS"],
    stats: {
      students: "500+",
      aiCourses: "30+",
      certifications: "15+"
    },
    timeline: {
      mn: "4 долоо хоног",
      en: "4 weeks"
    },
    team: {
      mn: "2 хөгжүүлэгч",
      en: "2 developers"
    }
  },
  {
    id: 1,
    title: {
      mn: "Xperience – Дижитал Дадлагын Төв",
      en: "Xperience – Digital Internship Hub"
    },
    description: {
      mn: "Монголын оюутан сурагчдад дадлага, цагийн ажил, төсөлд оролцох боломжуудтай холбож, боловсрол ба ажил мэргэжлийн гүүр болох платформ. Зорилготой, идэвхтэй оюутан, залуу мэргэжилтнүүдийг үнэ цэнтэй дадлага, менторшип хөтөлбөртэй холбодог.",
      en: "Platform connecting Mongolian students with internship, part-time work, and project opportunities, serving as a bridge between education and professional careers. Connects goal-oriented, active students and young professionals with valuable internships and mentorship programs."
    },
    imageUrl: "/xperience.png",
    category: {
      mn: "Төслүүд",
      en: "Projects"
    },
    liveUrl: "https://xperience.mn",
    slug: "xperience",
    technologies: ["Next.js", "TypeScript", "MongoDB", "Cloudinary", "NextAuth"],
    stats: {
      users: "1000+",
      companies: "50+",
      internships: "200+"
    },
    timeline: {
      mn: "3 сар",
      en: "3 months"
    },
    team: {
      mn: "2 хөгжүүлэгч",
      en: "2 developers"
    }
  },
  {
    id: 5,
    title: {
      mn: "TellU – Сурагчдын Сэтгэгдэл илэрхийлэх Платформ",
      en: "TellU – Student Feedback Platform"
    },
    description: {
      mn: "Сурагчдад сургууль, их сургуулийнхаа талаар шударга сэтгэгдэлээ хуваалцах боломж олгодог гар утсанд ээлтэй платформ. Сурагчид санал бодлоо илэрхийлэх, сургалтын дэд бүтцийг үнэлэх аюулгүй орон зайг бүрдүүлдэг.",
      en: "Mobile-friendly platform that allows students to share honest feedback about their schools and universities. Creates a safe space for students to express their opinions and evaluate educational infrastructure."
    },
    imageUrl: "/TellU.png",
    category: {
      mn: "Төслүүд",
      en: "Projects"
    },
    liveUrl: null,
    slug: "tellu",
    technologies: ["Next.js", "TypeScript", "MongoDB", "Cloudinary", "NextAuth", "Tailwind CSS"],
    stats: {
      reviews: "500+",
      schools: "100+",
      students: "1000+"
    },
    timeline: {
      mn: "4 сар",
      en: "4 months"
    },
    team: {
      mn: "2 хөгжүүлэгч",
      en: "2 developers"
    }
  }
]

// Helper function to get localized text
const getLocalizedText = (text: any, language: string) => {
  if (typeof text === 'string') return text
  if (typeof text === 'object' && text !== null) {
    if (text[language]) return text[language]
    if (text.mn) return text.mn
    if (text.en) return text.en
    return ''
  }
  return text || ''
}

const categories = ["All", "Web Development", "Projects"]

const getCategoryDisplayName = (category: string, language: string) => {
  if (category === "All") return language === "mn" ? "Бүгд" : "All"
  if (category === "Web Development") return language === "mn" ? "Веб хөгжүүлэлт" : "Web Development"
  if (category === "Projects") return language === "mn" ? "Төслүүд" : "Projects"
  return category
}

export default function PortfolioGrid() {
  const [filter, setFilter] = useState("All")
  const [showAll, setShowAll] = useState(false)
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.1 })
  const { t, language } = useLanguage()

  // Reset filter when language changes
  useEffect(() => {
    setFilter("All")
    setShowAll(false)
  }, [language])

  const filteredProjects = filter === "All" ? projects : projects.filter((project) => {
    const projectCategory = getLocalizedText(project.category, language)
    // Map filter values to their localized equivalents for comparison
    const filterMap: { [key: string]: string } = {
      "Web Development": language === "mn" ? "Веб хөгжүүлэлт" : "Web Development",
      "Projects": language === "mn" ? "Төслүүд" : "Projects"
    }
    const localizedFilter = filterMap[filter] || filter

    // Debug logging (remove in production)
    console.log(`Filter: ${filter}, Language: ${language}, Project Category: ${projectCategory}, Localized Filter: ${localizedFilter}, Match: ${projectCategory === localizedFilter}`)

    return projectCategory === localizedFilter
  })
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
              {getCategoryDisplayName(category, language)}
            </motion.button>
          ))}
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12"
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
                className="bg-background rounded-3xl shadow-lg overflow-hidden hover-lift transition-all duration-300 ease-in-out border-2 border-transparent hover:border-primary/10 group h-full flex flex-col"
                whileHover={{
                  y: -10,
                  transition: { duration: 0.3 },
                }}
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.imageUrl || "/placeholder.svg"}
                    alt={getLocalizedText(project.title, language)}
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
                          {getLocalizedText(project.category, language)}
                        </span>
                        {getLocalizedText(project.category, language) === "Projects" && (
                          <span className="text-sm font-bold text-white bg-gradient-to-r from-yellow-500 to-orange-500 px-3 py-1 rounded-full shadow-lg">
                            ⭐
                          </span>
                        )}
                        {getLocalizedText(project.category, language) === "Web Development" && (
                          <span className="text-sm font-bold text-white bg-gradient-to-r from-blue-500 to-purple-500 px-3 py-1 rounded-full shadow-lg">
                            💻
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <motion.h3
                    className="text-xl font-semibold text-foreground mb-3"
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    viewport={{ once: true }}
                  >
                    {getLocalizedText(project.title, language)}
                  </motion.h3>

                  <motion.p
                    className="text-muted-foreground mb-4 line-clamp-2"
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    {getLocalizedText(project.description, language)}
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
                        <span>{getLocalizedText(project.timeline, language)}</span>
                      </div>
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <span>👥</span>
                        <span>{getLocalizedText(project.team, language)}</span>
                      </div>
                    </div>
                  </motion.div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 mt-auto pt-4">
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
