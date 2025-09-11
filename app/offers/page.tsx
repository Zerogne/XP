"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { useLanguage } from "../contexts/LanguageContext"
import Header from "../components/Header"
import {
  Monitor,
  Search,
  CheckCircle,
  Gift,
  ArrowRight,
  Zap,
  TrendingUp,
  Star,
  Crown,
  Globe,
  Palette,
  Code,
  Smartphone,
  BarChart3,
  Shield,
  Rocket,
  Plus,
  Check,
  ArrowLeft,
  Package,
  Sparkles
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

export default function OffersPage() {
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

  const packages = ['essential', 'standard', 'premium'] as const

  const freeOffers = [
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
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-b from-background to-secondary/10 relative overflow-hidden" ref={containerRef}>
        {/* Background Elements */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-16">
          {/* Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
          >
            {/* Back Button */}
            <motion.div
              className="flex justify-start mb-8"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6 }}
            >
              <a
                href="/"
                className="inline-flex items-center gap-2 px-4 py-2 text-muted-foreground hover:text-primary transition-colors duration-300 group"
              >
                <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                <span>{t('offers.backToHome')}</span>
              </a>
            </motion.div>

            <motion.div
              className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-purple-500/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Sparkles className="w-4 h-4" />
              <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent font-semibold">
                {t('offers.allOffers')}
              </span>
            </motion.div>

            <h1 className="text-4xl font-bold text-foreground sm:text-6xl mb-4">
              {t('offers.completeOverview')}
            </h1>

            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {t('offers.overviewSubtitle')}
            </p>
          </motion.div>

          {/* Free Offers Section */}
          <motion.section
            className="mb-20"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">{t('offers.freeAnalysisTitle')}</h2>
              <p className="text-lg text-muted-foreground">{t('offers.freeAnalysisSubtitle')}</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              {freeOffers.map((offer, index) => {
                const IconComponent = offer.icon
                const offerData = t(`freeOffers.${offer.key}`) as any

                return (
                  <motion.div
                    key={offer.key}
                    variants={itemVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className={`group relative bg-card/90 backdrop-blur-sm rounded-3xl border ${offer.borderColor} ${offer.hoverBorder} shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden`}
                    whileHover={{ y: -8, scale: 1.02 }}
                  >
                    {/* Background Gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${offer.bgGradient} opacity-30 group-hover:opacity-50 transition-opacity duration-500`} />

                    {/* Content */}
                    <div className="relative p-8">
                      {/* Icon & Title */}
                      <div className="flex items-start gap-4 mb-6">
                        <div className={`flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-r ${offer.gradient} text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                          <IconComponent className="w-8 h-8" />
                        </div>

                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                            {offerData.title}
                          </h3>

                          <div className="flex items-center gap-2">
                            <Zap className="w-4 h-4 text-yellow-500" />
                            <span className="text-sm font-semibold text-green-600 bg-green-100 px-2 py-1 rounded-full">
                              100% Free
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-foreground/90 leading-relaxed mb-6 text-base">
                        {offerData.description}
                      </p>

                      {/* Features */}
                      <div className="mb-8">
                        <h4 className="text-sm font-semibold text-foreground mb-4 flex items-center gap-2">
                          <TrendingUp className="w-4 h-4" />
                          {t('offers.whatYouGet')}
                        </h4>
                        <ul className="grid grid-cols-2 gap-2">
                          {(offerData.features || []).map((feature: string, featureIndex: number) => (
                            <li key={featureIndex} className="flex items-center gap-2 text-sm">
                              <CheckCircle className={`w-4 h-4 text-gradient bg-gradient-to-r ${offer.gradient} rounded-full flex-shrink-0`} style={{
                                background: `linear-gradient(135deg, var(--tw-gradient-stops))`,
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent'
                              }} />
                              <span className="text-foreground/90">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>


                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                      <IconComponent className="w-24 h-24 text-current" />
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.section>

          {/* Pricing Packages Table */}
          <motion.section
            className="mb-20"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">{t('offers.packagesTitle')}</h2>
              <p className="text-lg text-muted-foreground">{t('offers.packagesSubtitle')}</p>
            </div>

            {/* Desktop Table View */}
            <div className="hidden lg:block overflow-x-auto mt-12 pt-4">
              <div className="bg-card/90 backdrop-blur-sm rounded-3xl border border-border/20 overflow-visible relative" style={{ marginTop: '1rem' }}>
                <table className="w-full min-w-[1000px]">
                  <thead>
                    <tr className="bg-gradient-to-r from-primary/10 to-purple-500/10 border-b border-gray-400/30 dark:border-border/10">
                      <th className="text-left p-6 pt-8 text-sm font-semibold text-muted-foreground uppercase tracking-wider" style={{ width: '20%' }}>
                        {t('offers.packageDetails')}
                      </th>
                      {packages.map((packageKey) => {
                        const packageData = t(`pricing.packages.${packageKey}`) as any || {}
                        const IconComponent = packageIcons[packageKey]
                        const isPopular = packageKey === 'standard'

                        return (
                          <th key={packageKey} className={`text-center relative ${isPopular ? 'bg-primary/20' : 'bg-card/50'} pt-6 pb-6 px-6`} style={{ width: '26.67%' }}>
                            {packageKey === 'essential' && (
                              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-30">
                                <div className={`bg-gradient-to-r ${packageColors[packageKey]} text-white px-4 py-2 rounded-full text-sm font-semibold shadow-xl whitespace-nowrap border-4 border-white`}>
                                  {t('offers.basic')}
                                </div>
                              </div>
                            )}
                            {isPopular && (
                              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-30">
                                <div className="bg-gradient-to-r from-primary to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-xl whitespace-nowrap border-4 border-white">
                                  {t('offers.recommended')}
                                </div>
                              </div>
                            )}
                            {packageKey === 'premium' && (
                              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-30">
                                <div className={`bg-gradient-to-r ${packageColors[packageKey]} text-white px-4 py-2 rounded-full text-sm font-semibold shadow-xl whitespace-nowrap border-4 border-white`}>
                                  {t('offers.advanced')}
                                </div>
                              </div>
                            )}
                            <div className={`inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-r ${packageColors[packageKey]} text-white mb-3 shadow-lg mx-auto`}>
                              <IconComponent className="w-5 h-5" />
                            </div>
                            <div className="text-lg font-bold text-foreground mb-1">
                              {packageData.name || ''}
                            </div>
                            <div className="text-2xl font-bold text-foreground">
                              {packageData.price || ''}
                            </div>
                          </th>
                        )
                      })}
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-400/20 dark:border-border/5">
                      <td className="p-6 font-medium text-foreground" style={{ width: '20%' }}>Сайтуудын төрлүүд</td>
                      {packages.map((packageKey) => {
                        const packageData = t(`pricing.packages.${packageKey}`) as any || {}
                        return (
                          <td key={packageKey} className="p-6 text-center text-sm text-foreground" style={{ width: '26.67%' }}>
                            {packageData.websiteType || ''}
                          </td>
                        )
                      })}
                    </tr>
                    <tr className="border-b border-gray-400/20 dark:border-border/5 bg-secondary/30">
                      <td className="p-6 font-medium text-foreground" style={{ width: '20%' }}>Зориулалт</td>
                      {packages.map((packageKey) => {
                        const packageData = t(`pricing.packages.${packageKey}`) as any || {}
                        return (
                          <td key={packageKey} className="p-6 text-center text-sm text-foreground" style={{ width: '26.67%' }}>
                            {packageData.bestFor || ''}
                          </td>
                        )
                      })}
                    </tr>
                    <tr className="border-b border-gray-400/20 dark:border-border/5">
                      <td className="p-6 font-medium text-foreground" style={{ width: '20%' }}>Нүүр хуудсуудын тоо</td>
                      {packages.map((packageKey) => {
                        const packageData = t(`pricing.packages.${packageKey}`) as any || {}
                        return (
                          <td key={packageKey} className="p-6 text-center text-sm text-foreground" style={{ width: '26.67%' }}>
                            {packageData.pages || ''}
                          </td>
                        )
                      })}
                    </tr>
                    <tr className="border-b border-gray-400/20 dark:border-border/5 bg-secondary/30">
                      <td className="p-6 font-medium text-foreground" style={{ width: '20%' }}>Дизайн</td>
                      {packages.map((packageKey) => {
                        const packageData = t(`pricing.packages.${packageKey}`) as any || {}
                        return (
                          <td key={packageKey} className="p-6 text-center text-sm text-foreground" style={{ width: '26.67%' }}>
                            {packageData.design || ''}
                          </td>
                        )
                      })}
                    </tr>
                    <tr className="border-b border-gray-400/20 dark:border-border/5">
                      <td className="p-6 font-medium text-foreground" style={{ width: '20%' }}>Онцлог шинжүүд</td>
                      {packages.map((packageKey) => {
                        const packageData = t(`pricing.packages.${packageKey}`) as any || {}
                        return (
                          <td key={packageKey} className="p-6" style={{ width: '26.67%' }}>
                            <ul className="space-y-2">
                              {(packageData.features || []).map((feature: string, featureIndex: number) => {
                                const FeatureIcon = featureIcons[feature] || Check
                                return (
                                  <li key={featureIndex} className="flex items-center gap-2 text-sm">
                                    <div className={`flex-shrink-0 w-4 h-4 rounded-full bg-gradient-to-r ${packageColors[packageKey]} flex items-center justify-center`}>
                                      <FeatureIcon className="w-2.5 h-2.5 text-white" />
                                    </div>
                                    <span className="text-foreground">{feature}</span>
                                  </li>
                                )
                              })}
                            </ul>
                          </td>
                        )
                      })}
                    </tr>
                    <tr className="border-b border-gray-400/20 dark:border-border/5 bg-secondary/30">
                      <td className="p-6 font-medium text-foreground" style={{ width: '20%' }}>Гүйцэтгэх хугацаа</td>
                      {packages.map((packageKey) => {
                        const packageData = t(`pricing.packages.${packageKey}`) as any || {}
                        return (
                          <td key={packageKey} className="p-6 text-center text-sm text-foreground" style={{ width: '26.67%' }}>
                            <span dangerouslySetInnerHTML={{ __html: packageData.delivery || '' }} />
                          </td>
                        )
                      })}
                    </tr>
                    <tr className="border-b border-gray-400/20 dark:border-border/5">
                      <td className="p-6 font-medium text-foreground" style={{ width: '20%' }}>Admin Access</td>
                      {packages.map((packageKey) => {
                        const packageData = t(`pricing.packages.${packageKey}`) as any || {}
                        return (
                          <td key={packageKey} className="p-6 text-center text-sm text-foreground" style={{ width: '26.67%' }}>
                            {packageData.adminAccess || ''}
                          </td>
                        )
                      })}
                    </tr>
                    <tr className="border-b border-gray-400/20 dark:border-border/5 bg-secondary/30">
                      <td className="p-6 font-medium text-foreground" style={{ width: '20%' }}>Rush Delivery</td>
                      {packages.map((packageKey) => {
                        const packageData = t(`pricing.packages.${packageKey}`) as any || {}
                        return (
                          <td key={packageKey} className="p-6 text-center text-sm text-foreground" style={{ width: '26.67%' }}>
                            {packageData.rushDelivery || ''}
                          </td>
                        )
                      })}
                    </tr>
                    <tr className="border-b border-gray-400/20 dark:border-border/5">
                      <td className="p-6 font-medium text-foreground" style={{ width: '20%' }}>Maintenance Support + SEO</td>
                      {packages.map((packageKey) => {
                        const packageData = t(`pricing.packages.${packageKey}`) as any || {}
                        return (
                          <td key={packageKey} className="p-6 text-center text-sm text-foreground" style={{ width: '26.67%' }}>
                            {packageData.maintenance || ''}
                          </td>
                        )
                      })}
                    </tr>
                    <tr className="border-b border-gray-400/20 dark:border-border/5 bg-secondary/30">
                      <td className="p-6 font-medium text-foreground" style={{ width: '20%' }}>Additional Feature</td>
                      {packages.map((packageKey) => {
                        const packageData = t(`pricing.packages.${packageKey}`) as any || {}
                        return (
                          <td key={packageKey} className="p-6 text-center text-sm text-foreground" style={{ width: '26.67%' }}>
                            {packageData.additionalFeature || ''}
                          </td>
                        )
                      })}
                    </tr>
                    <tr className="border-b border-gray-400/20 dark:border-border/5">
                      <td className="p-6 font-medium text-foreground" style={{ width: '20%' }}>Support</td>
                      {packages.map((packageKey) => {
                        const packageData = t(`pricing.packages.${packageKey}`) as any || {}
                        return (
                          <td key={packageKey} className="p-6 text-center text-sm text-foreground" style={{ width: '26.67%' }}>
                            {packageData.support || ''}
                          </td>
                        )
                      })}
                    </tr>
                    <tr className="border-b border-gray-400/20 dark:border-border/5 bg-secondary/30">
                      <td className="p-6 font-medium text-foreground" style={{ width: '20%' }}>Meetings and Staff Support</td>
                      {packages.map((packageKey) => {
                        const packageData = t(`pricing.packages.${packageKey}`) as any || {}
                        return (
                          <td key={packageKey} className="p-6 text-center text-sm text-foreground" style={{ width: '26.67%' }}>
                            {packageData.meetings || ''}
                          </td>
                        )
                      })}
                    </tr>
                    <tr className="border-b border-gray-400/20 dark:border-border/5">
                      <td className="p-6 font-medium text-foreground" style={{ width: '20%' }}>Domain Name Service</td>
                      {packages.map((packageKey) => {
                        const packageData = t(`pricing.packages.${packageKey}`) as any || {}
                        return (
                          <td key={packageKey} className="p-6 text-center text-sm text-foreground" style={{ width: '26.67%' }}>
                            {packageData.domainService || ''}
                          </td>
                        )
                      })}
                    </tr>
                    <tr className="border-b border-gray-400/20 dark:border-border/5 bg-secondary/30">
                      <td className="p-6 font-medium text-foreground" style={{ width: '20%' }}>НОАТ-ийн баримт</td>
                      {packages.map((packageKey) => {
                        const packageData = t(`pricing.packages.${packageKey}`) as any || {}
                        return (
                          <td key={packageKey} className="p-6 text-center text-sm text-foreground" style={{ width: '26.67%' }}>
                            {packageData.noat || ''}
                          </td>
                        )
                      })}
                    </tr>

                  </tbody>
                </table>
              </div>
            </div>

            {/* Mobile Card View */}
            <div className="lg:hidden grid grid-cols-1 gap-6">
              {packages.map((packageKey, index) => {
                const packageData = t(`pricing.packages.${packageKey}`) as any || {}
                const IconComponent = packageIcons[packageKey]
                const isPopular = packageKey === 'standard'

                return (
                  <motion.div
                    key={packageKey}
                    variants={itemVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className={`relative bg-card/90 backdrop-blur-sm rounded-3xl border transition-all duration-500 hover:scale-105 ${isPopular
                      ? 'border-primary/50 ring-2 ring-primary/20'
                      : 'border-border/50 hover:border-primary/20'
                      }`}
                    whileHover={{ y: -5 }}
                  >
                    {/* Popular Badge */}
                    {isPopular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <div className="bg-gradient-to-r from-primary to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                          {t('pricing.labels.recommended')}
                        </div>
                      </div>
                    )}

                    <div className="p-6">
                      {/* Package Header */}
                      <div className="text-center mb-6">
                        <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${packageColors[packageKey]} text-white mb-3 shadow-lg`}>
                          <IconComponent className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-foreground mb-2">
                          {packageData.name || ''}
                        </h3>
                        <div className="mb-3">
                          <span className="text-xs text-muted-foreground">{packageData.priceNote || ''}</span>
                          <div className="text-3xl font-bold text-foreground">
                            {packageData.price || ''}
                          </div>
                        </div>
                      </div>

                      {/* Package Details */}
                      <div className="space-y-3 mb-6">
                        <div>
                          <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                            {t('pricing.labels.websiteType')}
                          </span>
                          <p className="text-sm text-foreground font-medium">{packageData.websiteType || ''}</p>
                        </div>

                        <div>
                          <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                            {t('pricing.labels.bestFor')}
                          </span>
                          <p className="text-sm text-foreground">{packageData.bestFor || ''}</p>
                        </div>

                        <div>
                          <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                            {t('pricing.labels.pages')}
                          </span>
                          <p className="text-sm text-foreground font-medium">{packageData.pages || ''}</p>
                        </div>

                        <div>
                          <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                            {t('pricing.labels.design')}
                          </span>
                          <p className="text-sm text-foreground font-medium">{packageData.design || ''}</p>
                        </div>
                      </div>

                      {/* Features */}
                      <div className="mb-6">
                        <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                          {t('pricing.labels.features')}
                        </h4>
                        <ul className="space-y-2">
                          {(packageData.features || []).map((feature: string, featureIndex: number) => {
                            const FeatureIcon = featureIcons[feature] || Check
                            return (
                              <li key={featureIndex} className="flex items-center gap-2">
                                <div className={`flex-shrink-0 w-4 h-4 rounded-full bg-gradient-to-r ${packageColors[packageKey]} flex items-center justify-center`}>
                                  <FeatureIcon className="w-2.5 h-2.5 text-white" />
                                </div>
                                <span className="text-sm text-foreground">{feature}</span>
                              </li>
                            )
                          })}
                        </ul>
                      </div>

                      {/* Delivery & Maintenance & NOAT */}
                      <div className="space-y-2 mb-6 p-3 bg-secondary/40 rounded-lg">
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-muted-foreground">{t('pricing.labels.delivery')}</span>
                          <span
                            className="text-xs font-medium text-foreground text-right"
                            dangerouslySetInnerHTML={{ __html: packageData.delivery || '' }}
                          />
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-muted-foreground">{t('pricing.labels.maintenance')}</span>
                          <span className="text-xs font-medium text-foreground">{packageData.maintenance || ''}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-muted-foreground">НОАТ-ийн баримт</span>
                          <span className="text-xs font-medium text-foreground">{packageData.noat || ''}</span>
                        </div>
                      </div>


                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.section>

          {/* Add-on Section */}
          <motion.section
            className="mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">{t('offers.addonTitle')}</h2>
              <p className="text-lg text-muted-foreground">{t('offers.addonSubtitle')}</p>
            </div>

            <div className="max-w-3xl mx-auto">
              <div className="bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-2xl border border-pink-200/30 p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r from-pink-500 to-purple-500 text-white mb-6 shadow-lg">
                  <Rocket className="w-8 h-8" />
                </div>

                <h3 className="text-2xl font-bold text-foreground mb-3">
                  {t('pricing.addon.title')}
                </h3>

                <p className="text-lg text-muted-foreground mb-4">
                  Professional Reel + Постер дизайн
                </p>

                <div className="text-3xl font-bold text-foreground mb-4">
                  {t('pricing.addon.price')}
                </div>

                <p className="text-sm text-muted-foreground mb-3">
                  {t('pricing.addon.details')}
                </p>

                <p className="text-lg text-foreground font-medium mb-6">
                  {t('pricing.addon.benefit')}
                </p>


              </div>
            </div>
          </motion.section>


        </div>
      </div>
    </>
  )
}
