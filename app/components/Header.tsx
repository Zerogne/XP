"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { motion, AnimatePresence } from "framer-motion"
import { MoonIcon, SunIcon, Menu, X, Globe } from "lucide-react"
import { useLanguage } from "../contexts/LanguageContext"

export default function Header() {
  const [mounted, setMounted] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const { language, setLanguage, t } = useLanguage()

  useEffect(() => setMounted(true), [])

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [mobileMenuOpen])

  // Add effect to close mobile menu when clicking outside
  useEffect(() => {
    if (!mobileMenuOpen) return;
    const handleClickOutside = () => setMobileMenuOpen(false);
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [mobileMenuOpen]);

  const toggleLanguage = () => {
    setLanguage(language === 'mn' ? 'en' : 'mn')
  }

  return (
    <motion.header
      className="sticky top-0 z-50 bg-background/80 backdrop-blur-md"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <nav className="mx-auto max-w-7xl flex items-center p-6 lg:px-8 relative" aria-label="Global">
        {/* Logo: always left */}
        <div className="flex items-center flex-shrink-0">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">XP</span>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-blue-600 bg-clip-text text-transparent">XP</span>
          </Link>
        </div>
        {/* Spacer: same width as right controls */}
        <div className="hidden md:block" style={{ width: '56px' }}></div>
        {/* Nav links: perfectly centered */}
        <div className="hidden md:flex gap-x-6 mx-auto justify-center ">
          <Link href="#services" className="text-sm font-semibold leading-6 text-foreground hover:text-primary transition-colors">{t('navigation.services')}</Link>
          <Link href="/offers" className="text-sm font-semibold leading-6 text-foreground hover:text-primary transition-colors">Offers</Link>
          <Link href="#our-work" className="text-sm font-semibold leading-6 text-foreground hover:text-primary transition-colors">{t('navigation.work')}</Link>
          <Link href="#team" className="text-sm font-semibold leading-6 text-foreground hover:text-primary transition-colors">{t('navigation.team')}</Link>
          <Link href="#contact1" className="text-sm font-semibold leading-6 text-foreground hover:text-primary transition-colors">{t('navigation.contact')}</Link>
        </div>
        {/* Hamburger menu: absolute top right on mobile only */}
        <div className="md:hidden">
          <button
            onClick={(e) => {
              e.stopPropagation()
              setMobileMenuOpen(!mobileMenuOpen)
            }}
            className="absolute top-6 right-6 z-20 inline-flex items-center justify-center p-2 rounded-md text-foreground hover:bg-primary/10 focus:outline-none"
            aria-label="Toggle mobile menu"
            style={{ position: 'absolute', top: 24, right: 24 }}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        {/* Right controls */}
        <div className="flex flex-1 justify-end z-10">
          {mounted && (
            <div className="hidden md:flex items-center gap-2">
              <button
                onClick={toggleLanguage}
                className="rounded-full p-2 bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                aria-label="Toggle language"
              >
                <Globe className="h-5 w-5" />
              </button>
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="rounded-full p-2 bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
              </button>
            </div>
          )}
        </div>
      </nav>
      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="lg:hidden fixed inset-x-0 top-[73px] sm:top-[89px] bg-background/95 backdrop-blur-md border-b border-border/50 shadow-lg z-50"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            onClick={e => e.stopPropagation()}
          >
            <div className="px-4 py-6">
              {/* Navigation Links */}
              <div className="flex flex-col space-y-4 mb-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  <Link
                    href="#services"
                    className="block text-base font-semibold text-foreground hover:text-primary transition-colors py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {t('navigation.services')}
                  </Link>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.15 }}
                >
                  <Link
                    href="/offers"
                    className="block text-base font-semibold text-foreground hover:text-primary transition-colors py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Offers
                  </Link>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                >
                  <Link
                    href="#our-work"
                    className="block text-base font-semibold text-foreground hover:text-primary transition-colors py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {t('navigation.work')}
                  </Link>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.25 }}
                >
                  <Link
                    href="#contact1"
                    className="block text-base font-semibold text-foreground hover:text-primary transition-colors py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {t('navigation.contact')}
                  </Link>
                </motion.div>
              </div>
              {/* Mobile Theme Controls */}
              {mounted && (
                <motion.div
                  className="flex items-center justify-between pt-4 border-t border-border/50"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                >
                  <span className="text-sm font-medium text-muted-foreground">Preferences</span>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={toggleLanguage}
                      className="flex items-center gap-2 rounded-full px-3 py-2 bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                      aria-label="Toggle language"
                    >
                      <Globe className="h-4 w-4" />
                      <span className="text-xs font-medium">{language === 'mn' ? 'EN' : 'МН'}</span>
                    </button>
                    <button
                      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                      className="flex items-center gap-2 rounded-full px-3 py-2 bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                      aria-label="Toggle theme"
                    >
                      {theme === "dark" ? <SunIcon className="h-4 w-4" /> : <MoonIcon className="h-4 w-4" />}
                      <span className="text-xs font-medium">{theme === "dark" ? "Light" : "Dark"}</span>
                    </button>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
