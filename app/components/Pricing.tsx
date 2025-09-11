"use client"

import { useState } from "react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { useLanguage } from "../contexts/LanguageContext"
import {
  Check,
  Star,
  Zap,
  Crown,
  Globe,
  Palette,
  Code,
  Smartphone,
  BarChart3,
  Shield,
  Rocket,
  Plus,
  ArrowRight,
  Monitor,
  Search,
  Eye
} from "lucide-react"

const packageIcons = {
  essential: Globe,
  standard: Palette,
  premium: Crown
}

const packageColors = {
  essential: "from-blue-500 to-cyan-500",
  standard: "from-purple-500 to-pink-500",
  premium: "from-yellow-500 to-orange-500"
}

const featureIcons: { [key: string]: any } = {
  "Modern UI/UX": Code,
  "Responsive design": Smartphone,
  "Hosting/Domain setup": Globe,
  "Content control": BarChart3,
  "Add/Delete features": Plus,
  "Language support": Globe,
  "Dashboard": BarChart3,
  "Analytics": BarChart3,
  "User Management": Shield,
  "Payment integration": Shield,
  "QPay integration": Shield,
  "AI Chatbot": Zap,
  "SEO (3 months free)": Rocket,
  // Mongolian translations
  "Орчин үеийн дизайн": Code,
  "Responsive": Smartphone,
  "Домэйн/Hosting тохиргоо": Globe,
  "Контент удирдах": BarChart3,
  "нэмэх/устгах": Plus,
  "Хэлний дэмжлэг": Globe,
  "Төлбөрийн систем": Shield,
  "QPay": Shield,
  "SEO (3 сар үнэгүй)": Rocket
}

export default function Pricing() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.1 })
  const { t } = useLanguage()

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

  const packages = ['essential', 'standard', 'premium'] as const

  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-background to-secondary/10 relative overflow-hidden" ref={containerRef}>
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium mb-3"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Star className="w-3 h-3" />
            {t('pricing.labels.popular')}
          </motion.div>
          <h2 className="text-h2 text-foreground mb-6">
            {t('pricing.title')}
          </h2>
        </motion.div>

        {/* Collapsed Preview - Show all offers in compact format */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 max-w-7xl mx-auto mt-16 pt-8 items-stretch"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Pricing Packages */}
          {packages.map((packageKey, index) => {
            const packageData = t(`pricing.packages.${packageKey}`) as any || {}
            const IconComponent = packageIcons[packageKey]
            const isPopular = packageKey === 'standard'

            // Special design for Standard package
            if (packageKey === 'standard') {
              return (
                <motion.div
                  key={packageKey}
                  variants={itemVariants}
                  className="relative bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-lg group overflow-visible h-full flex flex-col scale-105 min-h-[480px]"
                >
                  {/* Recommended Badge */}
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-20">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-1.5 rounded-full text-xs font-semibold shadow-lg border-2 border-white whitespace-nowrap">
                      Санал болгох
                    </div>
                  </div>

                  <div className="p-8 pt-10 relative z-10 flex flex-col h-full text-center">
                    {/* Icon */}
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 text-white mb-6 shadow-lg transition-all duration-300 mx-auto">
                      <IconComponent className="w-8 h-8" />
                    </div>

                    {/* Package Name */}
                    <h3 className="text-h5 text-gray-900 mb-4">
                      {packageData.name || ''}
                    </h3>

                    {/* Price */}
                    <div className="text-3xl font-extrabold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-4">
                      {packageData.price || ''}
                    </div>

                    {/* Description */}
                    <p className="text-body-sm text-gray-600 mb-8 px-2">
                      {packageData.bestFor || ''}
                    </p>

                    {/* Features */}
                    <div className="mb-8 space-y-3 flex-grow text-left">
                      <div className="flex items-center text-body-sm text-gray-700">
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 mr-3 flex-shrink-0"></div>
                        <span>{packageData.websiteType || ''}</span>
                      </div>
                      <div className="flex items-center text-body-sm text-gray-700">
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 mr-3 flex-shrink-0"></div>
                        <span dangerouslySetInnerHTML={{ __html: packageData.pages || '' }}></span>
                      </div>
                      <div className="flex items-center text-body-sm text-gray-700">
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 mr-3 flex-shrink-0"></div>
                        <span dangerouslySetInnerHTML={{ __html: packageData.delivery || '' }}></span>
                      </div>
                    </div>

                    {/* Preview Button */}
                    <a
                      href="/offers"
                      className="w-full py-3 px-4 rounded-xl font-semibold text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group/btn relative overflow-hidden mt-auto"
                    >
                      <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-400 skew-x-12"></div>
                      <Eye className="w-4 h-4" />
                      <span>Дэлгэрэнгүй үзэх</span>
                    </a>
                  </div>
                </motion.div>
              )
            }

            // Default design for other packages
            return (
              <motion.div
                key={packageKey}
                variants={itemVariants}
                className={`relative bg-gradient-to-b from-white/90 to-white/70 backdrop-blur-lg rounded-3xl shadow-xl border transition-all duration-300 hover:shadow-lg group overflow-hidden h-full flex flex-col min-h-[480px] ${isPopular
                  ? 'border-primary/30 ring-2 ring-primary/20 scale-105 shadow-primary/10'
                  : 'border-gray-200/50 hover:border-primary/30 hover:shadow-primary/5'
                  }`}
              >
                {/* Background Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br opacity-5 group-hover:opacity-10 transition-opacity duration-300 ${packageColors[packageKey]}`} />

                {/* Popular Badge */}
                {isPopular && (
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-20">
                    <div className="bg-gradient-to-r from-primary via-purple-600 to-pink-600 text-white px-4 py-2 rounded-full text-xs font-bold shadow-xl animate-pulse border-2 border-white">
                      ⭐ Popular Choice
                    </div>
                  </div>
                )}

                <div className="p-8 relative z-10 flex flex-col h-full">
                  {/* Package Header */}
                  <div className="text-center mb-8">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${packageColors[packageKey]} text-white mb-6 shadow-lg transition-all duration-300`}>
                      <IconComponent className="w-8 h-8" />
                    </div>
                    <h3 className="text-h5 text-gray-900 mb-4">
                      {packageData.name || ''}
                    </h3>
                    <div className="text-3xl font-extrabold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-4">
                      {packageData.price || ''}
                    </div>
                    <p className="text-body-sm text-gray-600 px-2">{packageData.bestFor || ''}</p>
                  </div>

                  {/* Features Preview */}
                  <div className="mb-8 space-y-3 flex-grow">
                    <div className="flex items-center text-body-sm text-gray-700">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${packageColors[packageKey]} mr-3 flex-shrink-0`}></div>
                      <span className="font-medium">{packageData.websiteType || ''}</span>
                    </div>
                    <div className="flex items-center text-body-sm text-gray-700">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${packageColors[packageKey]} mr-3 flex-shrink-0`}></div>
                      <span>{packageData.pages || ''}</span>
                    </div>
                    <div className="flex items-center text-body-sm text-gray-700">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${packageColors[packageKey]} mr-3 flex-shrink-0`}></div>
                      <span>{packageData.delivery || ''}</span>
                    </div>
                  </div>

                  {/* Preview Button */}
                  <a
                    href="/offers"
                    className={`w-full py-3 px-4 rounded-xl font-semibold text-white bg-gradient-to-r ${packageColors[packageKey]} hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group/btn relative overflow-hidden mt-auto`}
                  >
                    <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-400 skew-x-12"></div>
                    <Eye className="w-4 h-4" />
                    <span>Дэлгэрэнгүй үзэх</span>
                  </a>
                </div>
              </motion.div>
            )
          })}

          {/* Add-on Service */}
          <motion.div
            variants={itemVariants}
            className="relative bg-gradient-to-b from-pink-50/90 to-purple-50/70 backdrop-blur-lg rounded-3xl shadow-xl border border-pink-200/50 hover:border-pink-300/70 transition-all duration-300 hover:shadow-lg group overflow-hidden h-full flex flex-col min-h-[480px]"
          >
            {/* Background Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500 to-purple-500 opacity-5 group-hover:opacity-10 transition-opacity duration-300" />

            <div className="p-8 relative z-10 flex flex-col h-full">
              {/* Add-on Header */}
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-500 text-white mb-6 shadow-lg transition-all duration-300">
                  <Rocket className="w-8 h-8" />
                </div>
                <h3 className="text-h5 text-gray-900 mb-4">
                  Social Media
                </h3>
                <div className="text-3xl font-extrabold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-4">
                  {t('pricing.addon.price')}
                </div>
                <p className="text-body-sm text-gray-600 px-2">Professional Reel + постер дизайн</p>
              </div>

              {/* Features Preview */}
              <div className="mb-8 space-y-3 flex-grow">
                <div className="flex items-center text-body-sm text-gray-700">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 mr-3 flex-shrink-0"></div>
                  <span className="font-medium">Professional Reel</span>
                </div>
                <div className="flex items-center text-body-sm text-gray-700">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 mr-3 flex-shrink-0"></div>
                  <span>Постер дизайн</span>
                </div>
                <div className="flex items-center text-body-sm text-gray-700">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 mr-3 flex-shrink-0"></div>
                  <span>Social Media контент</span>
                </div>
              </div>

              {/* Preview Button */}
              <motion.a
                href="/offers"
                className="w-full py-3 px-4 rounded-xl font-semibold text-white bg-gradient-to-r from-pink-500 to-purple-500 hover:shadow-xl transition-all duration-500 flex items-center justify-center gap-2 group/btn relative overflow-hidden mt-auto"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700 skew-x-12"></div>
                <Eye className="w-4 h-4 transition-transform group-hover/btn:scale-110" />
                <span>Дэлгэрэнгүй үзэх</span>
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

        {/* Free Offers Row */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 max-w-4xl mx-auto items-stretch"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Free Website Audit */}
          <motion.div
            variants={itemVariants}
            className="relative bg-gradient-to-b from-blue-50/90 to-cyan-50/70 backdrop-blur-lg rounded-3xl shadow-xl border border-blue-200/50 hover:border-blue-300/70 transition-all duration-300 hover:shadow-lg group overflow-hidden h-full flex flex-col"
          >
            {/* Background Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 opacity-5 group-hover:opacity-10 transition-opacity duration-300" />

            <div className="p-6 relative z-10 flex flex-col h-full">
              <div className="text-center mb-6 flex-grow">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 text-white mb-4 shadow-lg transition-all duration-300">
                  <Monitor className="w-8 h-8" />
                </div>
                <h3 className="text-h5 text-gray-900 mb-3">
                  Website Audit
                </h3>
                <div className="flex items-center justify-center gap-2 mb-3">
                  <Zap className="w-4 h-4 text-yellow-500" />
                  <span className="text-body-sm font-bold text-green-600 bg-green-100 px-3 py-1 rounded-full">
                    100% Үнэгүй
                  </span>
                </div>
                <p className="text-body-sm text-gray-600">Design, speed & mobile analysis</p>
              </div>

              <motion.a
                href="/offers"
                className="w-full py-3 px-4 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-500 to-cyan-500 hover:shadow-xl transition-all duration-500 flex items-center justify-center gap-2 group/btn relative overflow-hidden mt-auto"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700 skew-x-12"></div>
                <Eye className="w-4 h-4 transition-transform group-hover/btn:scale-110" />
                <span>Дэлгэрэнгүй үзэх</span>
              </motion.a>
            </div>
          </motion.div>

          {/* Free SEO Audit */}
          <motion.div
            variants={itemVariants}
            className="relative bg-gradient-to-b from-green-50/90 to-emerald-50/70 backdrop-blur-lg rounded-3xl shadow-xl border border-green-200/50 hover:border-green-300/70 transition-all duration-300 hover:shadow-lg group overflow-hidden h-full flex flex-col"
          >
            {/* Background Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-emerald-500 opacity-5 group-hover:opacity-10 transition-opacity duration-300" />

            <div className="p-6 relative z-10 flex flex-col h-full">
              <div className="text-center mb-6 flex-grow">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-500 text-white mb-4 shadow-lg transition-all duration-300">
                  <Search className="w-8 h-8" />
                </div>
                <h3 className="text-h5 text-gray-900 mb-3">
                  SEO Audit
                </h3>
                <div className="flex items-center justify-center gap-2 mb-3">
                  <Zap className="w-4 h-4 text-yellow-500" />
                  <span className="text-body-sm font-bold text-green-600 bg-green-100 px-3 py-1 rounded-full">
                    100% Үнэгүй
                  </span>
                </div>
                <p className="text-body-sm text-gray-600">Google ranking & optimization tips</p>
              </div>

              <motion.a
                href="/offers"
                className="w-full py-3 px-4 rounded-xl font-semibold text-white bg-gradient-to-r from-green-500 to-emerald-500 hover:shadow-xl transition-all duration-500 flex items-center justify-center gap-2 group/btn relative overflow-hidden mt-auto"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700 skew-x-12"></div>
                <Eye className="w-4 h-4 transition-transform group-hover/btn:scale-110" />
                <span>Дэлгэрэнгүй үзэх</span>
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

        {/* View All Offers Button */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.a
            href="/offers"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-purple-600 text-white font-semibold rounded-2xl hover:shadow-xl transition-all duration-300 group text-body-lg"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>View All Offers</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </motion.a>
          <p className="text-caption mt-3">
            See all packages, add-ons, and free offers in detail
          </p>
        </motion.div>
      </div>
    </section>
  )
}
