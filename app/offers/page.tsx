"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { useLanguage } from "../contexts/LanguageContext"
import TierToggle from "../components/TierToggle"
import OfferGrid from "../components/OfferGrid"
import AddonsSection from "../components/AddonsSection"
import FAQSection from "../components/FAQSection"
import { ArrowLeft, Sparkles } from "lucide-react"

export default function OffersPage() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.1 })
  const { language } = useLanguage()

  return (
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
              <span>{language === 'mn' ? 'Нүүр хуудас руу буцах' : 'Back to Home'}</span>
            </a>
          </motion.div>

          {/* Language & Theme Toggle */}
          <motion.div
            className="flex justify-center mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <TierToggle />
          </motion.div>

          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-purple-500/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Sparkles className="w-4 h-4" />
            <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent font-semibold">
              {language === 'mn' ? 'Бүх Саналууд' : 'All Offers'}
            </span>
          </motion.div>

          {/* Main Title */}
          <h1 className="text-4xl font-bold text-foreground sm:text-6xl mb-6">
            {language === 'mn' ? 'Бүрэн саналын тойм' : 'Complete Offers Overview'}
          </h1>

          {/* Subtitle */}
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {language === 'mn'
              ? 'Манай бүх багц, нэмэлт үйлчилгээ болон үнэгүй үйлчилгээнүүдийг нэг дороос цогцоор нь танилцуулж байна'
              : 'Explore all our packages, add-ons, and free services in one comprehensive view'
            }
          </p>
        </motion.div>

        {/* Pricing Packages Section */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              {language === 'mn' ? 'Вэбсайт хөгжүүлэлтийн багцууд' : 'Website Development Packages'}
            </h2>
            <p className="text-lg text-muted-foreground">
              {language === 'mn' ? 'Таны бизнесэд хамгийн тохиромжтой шийдлийг сонгоорой' : 'Choose the perfect solution for your business'}
            </p>
          </div>

          <OfferGrid language={language} />
        </motion.section>

        {/* Add-ons Section */}
        <AddonsSection language={language} />

        {/* FAQ Section */}
        <FAQSection language={language} />

        {/* CTA Section */}
        <motion.section
          className="text-center py-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              {language === 'mn' ? 'Төслөө эхлүүлэхэд бэлэн үү?' : 'Ready to start your project?'}
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              {language === 'mn'
                ? 'Бидэнтэй холбогдож, таны бизнест тохирох төгс шийдлийг олцгооё'
                : 'Get in touch with us and let\'s find the perfect solution for your business'
              }
            </p>
            <motion.a
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-purple-600 text-white font-semibold rounded-2xl hover:shadow-xl transition-all duration-300 group text-lg"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>{language === 'mn' ? 'Холбоо барих' : 'Get in Touch'}</span>
            </motion.a>
          </div>
        </motion.section>
      </div>
    </div>
  )
}