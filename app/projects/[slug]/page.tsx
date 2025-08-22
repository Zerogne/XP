"use client"

import { motion } from "framer-motion"
import { useLanguage } from "../../contexts/LanguageContext"
import { ArrowLeft, ExternalLink, Github, Globe, Calendar, Users, Code } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useParams, useRouter } from "next/navigation"

// Project data - you can move this to a separate file later
const projectData = {
  "xperience": {
    title: "Xperience – Digital Internship Hub",
    subtitle: "A platform connecting Mongolian students with internships, part-time jobs, and project opportunities — bridging education and work.",
    description: "Xperience is a comprehensive platform designed to bridge the gap between academic learning and real-world professional experience. Our platform connects ambitious students and young professionals with meaningful internship opportunities, mentorship programs, and skill development resources.",
    longDescription: "Built with modern web technologies, Xperience offers an intuitive user experience for both students seeking opportunities and companies looking for talented individuals. The platform features advanced search and filtering capabilities, real-time notifications, and a comprehensive dashboard for tracking applications and progress. Includes a responsive, reliable admin dashboard for long-term content management.",
    imageUrl: "/xperience.png",
    category: "Web Development",
    liveUrl: "https://xperience.mn",
    githubUrl: null,
    technologies: ["Next.js", "TypeScript", "MongoDB", "Cloudinary", "NextAuth"],
    features: [
      "Multiple login methods",
      "Internship catalog",
      "Real-time notifications",
      "Application tracking",
      "Company dashboards",
      "Responsive admin dashboard"
    ],
    challenges: [
      "Implementing complex search algorithms",
      "Real-time data synchronization",
      "Mobile-first responsive design",
      "Performance optimization for large datasets"
    ],
    solutions: [
      "Utilized Elasticsearch for efficient search",
      "Implemented WebSocket connections for real-time updates",
      "Adopted mobile-first design approach",
      "Used React Query for optimized data fetching"
    ],
    stats: {
      users: "1000+",
      companies: "50+",
      internships: "200+",
      successRate: "85%"
    },
    timeline: "3 months",
    team: "4 developers"
  },
  "han-education": {
    title: "Han Education – Language & Study Abroad Platform",
    subtitle: "A modern education site helping students explore courses, language programs, and study-abroad opportunities.",
    description: "Han Education is a specialized educational consultancy platform that connects Mongolian students with prestigious Chinese universities and scholarship opportunities. The platform provides comprehensive guidance for international education applications.",
    longDescription: "Our platform simplifies the complex process of applying to Chinese universities by providing step-by-step guidance, document preparation assistance, and direct connections with educational institutions. The platform offers guided searches, consultation booking, and multilingual content. Admins manage everything through a fast, reliable dashboard built for long-term use.",
    imageUrl: "/haneducation.png",
    category: "Web Development",
    liveUrl: "https://haneducation.mn",
    githubUrl: null,
    technologies: ["Next.js", "TypeScript", "Tailwind", "MongoDB", "Cloudinary"],
    features: [
      "Program search with filters",
      "Lead capture",
      "CMS editing",
      "Multilingual support",
      "SEO optimization",
      "Role-based admin controls"
    ],
    challenges: [
      "Complex application workflow management",
      "Multi-language content handling",
      "Document verification system",
      "Integration with university APIs"
    ],
    solutions: [
      "Built custom workflow engine",
      "Implemented i18n with next-intl",
      "Created secure document verification",
      "Developed RESTful API integrations"
    ],
    stats: {
      students: "500+",
      universities: "30+",
      successRate: "90%",
      countries: "3"
    },
    timeline: "4 months",
    team: "5 developers"
  },
  "sunrise-mongolia": {
    title: "Sunrise Mongolia – Tours & Experiences",
    subtitle: "An adventure travel website showcasing Mongolia's best tours with smooth booking requests and bold design.",
    description: "Sunrise Mongolia is an innovative travel platform designed to showcase the best tours and experiences that Mongolia has to offer. The platform provides travelers with comprehensive information about tours, booking capabilities, and a seamless user experience.",
    longDescription: "Built with modern web technologies, Sunrise Mongolia offers an intuitive user experience for travelers seeking adventure in Mongolia. The platform features tour catalogs with filters, media galleries, SEO-optimized landing pages, and booking request forms. Admins update itineraries, pricing, and promos via a responsive admin panel for long-term maintainability.",
    imageUrl: "/SunriseMongolia.png",
    category: "Web Development",
    liveUrl: null,
    githubUrl: null,
    technologies: ["Next.js", "TypeScript", "Tailwind", "MongoDB", "Cloudinary", "ReCAPTCHA"],
    features: [
      "Tour catalog with filters",
      "Media galleries",
      "SEO-optimized landing pages",
      "Booking request forms",
      "Caching",
      "Performance-focused UI"
    ],
    challenges: [
      "Implementing complex tour filtering system",
      "Media management and optimization",
      "Booking system integration",
      "Performance optimization for media-heavy content"
    ],
    solutions: [
      "Built custom tour filtering with MongoDB aggregation",
      "Implemented Cloudinary for media optimization",
      "Created secure booking system with ReCAPTCHA",
      "Used Next.js Image optimization and caching"
    ],
    stats: {
      tours: "50+",
      destinations: "20+",
      bookings: "100+",
      rating: "4.8/5"
    },
    timeline: "5 months",
    team: "3 developers"
  },
  "new-era": {
    title: "New Era – K-12 & Courses Platform",
    subtitle: "A parent-friendly school site featuring program details, admissions, announcements, and media galleries.",
    description: "New Era is a comprehensive educational platform designed to provide parents and students with easy access to school information, program details, and admission processes. The platform serves as a central hub for all school-related information and communications.",
    longDescription: "Built with modern web technologies, New Era offers an intuitive user experience for parents, students, and school staff. The platform features admissions pages with FAQs, announcements CMS, galleries, testimonials, and role-based admin with audit logs. Staff manage content, hero sections, and calendars through a robust admin dashboard designed for long-term reliability.",
    imageUrl: "/newera.png",
    category: "Web Development",
    liveUrl: "https://edunewera.mn",
    githubUrl: null,
    technologies: ["Next.js", "TypeScript", "Tailwind", "MongoDB", "Cloudinary", "NextAuth"],
    features: [
      "Admissions pages with FAQs",
      "Announcements CMS",
      "Galleries",
      "Testimonials",
      "Role-based admin with audit logs",
      "Mobile-first design"
    ],
    challenges: [
      "Complex content management system",
      "Role-based access control implementation",
      "Mobile-first responsive design",
      "Performance optimization for content-heavy pages"
    ],
    solutions: [
      "Built custom CMS with role-based permissions",
      "Implemented NextAuth for secure authentication",
      "Adopted mobile-first design approach",
      "Used Next.js optimization features for performance"
    ],
    stats: {
      students: "300+",
      programs: "25+",
      courses: "100+",
      satisfaction: "95%"
    },
    timeline: "6 months",
    team: "4 developers"
  },
  "tellu": {
    title: "TellU – Student Review Platform",
    subtitle: "A mobile-first platform empowering students to share honest reviews about schools and universities.",
    description: "TellU is a mobile-first platform that empowers students to share honest reviews about their schools and universities. It provides a safe, moderated space where learners can express opinions, rate facilities, and highlight strengths or challenges.",
    longDescription: "Built with modern web technologies, TellU offers a secure and intuitive platform for students to share their educational experiences. The platform features secure authentication, anonymous review submission with moderation tools, and comprehensive ratings categorized by facilities, teaching quality, and environment. The responsive UI/UX is specifically tailored for mobile users, while admins have access to a comprehensive dashboard for school management and content moderation.",
    imageUrl: "/TellU.png",
    category: "Web Development",
    liveUrl: null,
    githubUrl: null,
    technologies: ["Next.js", "TypeScript", "MongoDB", "Cloudinary", "NextAuth", "Tailwind CSS"],
    features: [
      "Secure authentication (Google, Facebook, Email/Password)",
      "Anonymous review submission with moderation tools",
      "Ratings and feedback categorized by facilities, teaching quality, and environment",
      "Responsive UI/UX tailored for mobile",
      "Admin dashboard for school management and content moderation"
    ],
    challenges: [
      "Implementing secure anonymous review system",
      "Building comprehensive moderation tools",
      "Creating mobile-first responsive design",
      "Ensuring data privacy and security"
    ],
    solutions: [
      "Built secure authentication with NextAuth",
      "Implemented robust moderation system with admin controls",
      "Adopted mobile-first design approach with Tailwind CSS",
      "Used MongoDB with proper data encryption and privacy controls"
    ],
    stats: {
      reviews: "500+",
      schools: "100+",
      students: "1000+"
    },
    timeline: "4 months",
    team: "3 developers"
  }
}

export default function ProjectDetails() {
  const { slug } = useParams()
  const router = useRouter()
  const { t } = useLanguage()

  const project = projectData[slug as keyof typeof projectData]

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Project not found</h1>
          <Link href="/" className="text-primary hover:underline">Go back home</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <motion.header
        className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <motion.button
              onClick={() => router.back()}
              className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
              whileHover={{ x: -5 }}
            >
              <ArrowLeft className="w-5 h-5" />
              Back
            </motion.button>

            <div className="flex items-center gap-4">
              {project.liveUrl && (
                <motion.a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Globe className="w-4 h-4" />
                  Live Demo
                </motion.a>
              )}
              {project.githubUrl && (
                <motion.a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-secondary text-secondary-foreground rounded-full hover:bg-secondary/80 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github className="w-4 h-4" />
                  Code
                </motion.a>
              )}
            </div>
          </div>
        </div>
      </motion.header>

      {/* Hero Section */}
      <motion.section
        className="py-20 relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.div
                className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {project.category}
              </motion.div>

              <motion.h1
                className="text-4xl lg:text-6xl font-bold text-foreground mb-6 leading-tight"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                {project.title}
              </motion.h1>

              <motion.p
                className="text-xl text-muted-foreground mb-8 leading-relaxed"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                {project.subtitle}
              </motion.p>

              <motion.p
                className="text-lg text-foreground leading-relaxed"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                {project.description}
              </motion.p>
            </motion.div>

            {/* Image */}
            <motion.div
              className="relative"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-3xl p-8 shadow-2xl">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-2xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>



      {/* Details Section */}
      <motion.section
        className="py-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left Column */}
            <div className="space-y-12">
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-foreground mb-6">Project Overview</h3>
                <p className="text-muted-foreground leading-relaxed">{project.longDescription}</p>
              </motion.div>

              <motion.div
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-foreground mb-6">Key Features</h3>
                <ul className="space-y-3">
                  {project.features.map((feature, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start gap-3"
                      initial={{ x: -20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Right Column */}
            <div className="space-y-12">
              <motion.div
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-foreground mb-6">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <motion.span
                      key={index}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-foreground mb-6">Project Details</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-primary" />
                    <span className="text-muted-foreground">Timeline: {project.timeline}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-primary" />
                    <span className="text-muted-foreground">Team: {project.team}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Code className="w-5 h-5 text-primary" />
                    <span className="text-muted-foreground">Category: {project.category}</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-foreground mb-6">Challenges & Solutions</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Challenges:</h4>
                    <ul className="space-y-2">
                      {project.challenges.map((challenge, index) => (
                        <li key={index} className="text-muted-foreground text-sm">• {challenge}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Solutions:</h4>
                    <ul className="space-y-2">
                      {project.solutions.map((solution, index) => (
                        <li key={index} className="text-muted-foreground text-sm">• {solution}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  )
}
