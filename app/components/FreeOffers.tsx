"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { useLanguage } from "../contexts/LanguageContext"
import { 
  Monitor, 
  Search, 
  CheckCircle, 
  Gift,
  ArrowRight,
  Zap,
  TrendingUp
} from "lucide-react"

export default function FreeOffers() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.1 })
  const { t } = useLanguage()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.95,
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

  const offers = [
    {
      key: 'websiteAudit',
      icon: Monitor,
      gradient: 'from-blue-500 to-cyan-500',
      bgGradient: 'from-blue-50 to-cyan-50',
      borderColor: 'border-blue-200/50',
      hoverBorder: 'hover:border-blue-300/70'
    },
    {
      key: 'seoAudit', 
      icon: Search,
      gradient: 'from-green-500 to-emerald-500',
      bgGradient: 'from-green-50 to-emerald-50',
      borderColor: 'border-green-200/50',
      hoverBorder: 'hover:border-green-300/70'
    }
  ]

  return (
    <section id="free-offers" className="py-20 bg-gradient-to-b from-secondary/20 to-background relative overflow-hidden" ref={containerRef}>
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-green-500/5 rounded-full blur-3xl" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-green-500/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Gift className="w-4 h-4" />
            <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent font-semibold">
              Free Analysis
            </span>
          </motion.div>
          
          <h2 className="text-4xl font-bold text-foreground sm:text-5xl mb-4">
            {t('freeOffers.title')}
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t('freeOffers.subtitle')}
          </p>
        </motion.div>

        {/* Collapsed Preview - Show summary */}
        <motion.div
          className="max-w-2xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div
            variants={itemVariants}
            className="group relative bg-white/80 backdrop-blur-sm rounded-3xl border border-blue-200/50 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
            whileHover={{ y: -8, scale: 1.02 }}
          >
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-green-50 opacity-50 group-hover:opacity-70 transition-opacity duration-500" />
            
            {/* Content */}
            <div className="relative p-8 text-center">
              {/* Icons */}
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 text-white flex items-center justify-center shadow-lg">
                  <Monitor className="w-6 h-6" />
                </div>
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 text-white flex items-center justify-center shadow-lg">
                  <Search className="w-6 h-6" />
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-foreground mb-3">
                Free Website & SEO Audits
              </h3>
              
              <div className="flex items-center justify-center gap-2 mb-4">
                <Zap className="w-4 h-4 text-yellow-500" />
                <span className="text-sm font-semibold text-green-600 bg-green-100 px-3 py-1 rounded-full">
                  100% Free Analysis
                </span>
              </div>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed mb-6 text-base">
                Get professional insights about your website's performance and SEO opportunities
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* View All Offers Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.a
            href="/offers"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-green-500 text-white font-semibold rounded-2xl hover:shadow-xl transition-all duration-300 group text-lg"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>View All Free Offers</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </motion.a>
          <div className="inline-flex items-center gap-2 text-muted-foreground text-sm mt-3">
            <Gift className="w-4 h-4" />
            <span>No commitment • No hidden fees • Get results in 2-3 business days</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
