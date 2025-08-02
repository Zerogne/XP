"use client"

import { motion } from "framer-motion"
import { useLanguage } from "../contexts/LanguageContext"

export default function Hero() {
  const { t } = useLanguage()

  return (
    <div className="relative isolate overflow-hidden bg-background">
      {/* Mobile-only blurred logo overlay */}
      <img
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/creative-SW6QDQbcVuwPgb6a2CYtYmRbsJa4k1.png"
        alt="XP Logo Overlay"
        className="absolute left-1/2 top-16 -translate-x-1/2 z-0 w-2/3 max-w-xs opacity-40 blur-lg block lg:hidden pointer-events-none select-none"
        style={{ filter: 'blur(6px)' }}
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 flex flex-col-reverse lg:flex-row items-center gap-y-12 lg:gap-x-10 lg:px-8">
        <div className="w-full max-w-2xl lg:mx-0 lg:max-w-lg lg:flex-shrink-0 flex flex-col items-center lg:items-start text-center lg:text-left">
          <motion.h1
            className="mt-10 text-4xl font-bold tracking-tight text-foreground sm:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gradient">{t('hero.title')}</span>
          </motion.h1>
          <motion.p
            className="mt-6 text-lg leading-8 text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {t('hero.subtitle')}
          </motion.p>
          <motion.div
            className="mt-10 flex items-center gap-x-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <button
              className="apple-button"
              onClick={() => {
                const el = document.getElementById('our-work');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              {t('hero.exploreButton')}
            </button>
            <a
              href="https://www.facebook.com/profile.php?id=61578833769304"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold leading-6 text-foreground"
            >
              {t('hero.learnMore')} <span aria-hidden="true">→</span>
            </a>
          </motion.div>
        </div>
        <motion.div
          className="hidden lg:flex w-full justify-end mb-8 lg:mb-0"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/creative-SW6QDQbcVuwPgb6a2CYtYmRbsJa4k1.png"
              alt="XP Logo"
              width={600}
              height={600}
              className="w-full h-auto rounded-2xl"
            />
          </div>
        </motion.div>
      </div>
    </div>
  )
}
