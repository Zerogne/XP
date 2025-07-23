"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { motion, AnimatePresence } from "framer-motion"
import { MoonIcon, SunIcon } from 'lucide-react'
import { LanguageContext } from "../../components/LanguageProvider"

export default function MobileHamburgerMenu() {
  const [mounted, setMounted] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const { language, setLanguage } = React.useContext(LanguageContext)

  useEffect(() => setMounted(true), [])

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (mobileMenuOpen && !target.closest('.mobile-menu-container')) {
        setMobileMenuOpen(false)
      }
    }
    document.addEventListener("click", handleClickOutside)
    return () => document.removeEventListener("click", handleClickOutside)
  }, [mobileMenuOpen])

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

  const navLinks = [
    { name: language === "english" ? "Service" : "Үйлчилгээ", href: "#services", external: false },
    { name: language === "english" ? "Work" : "Ажлууд", href: "#our-work", external: false },
    { name: language === "english" ? "Contact" : "Холбоо барих", href: "#contact1", external: false },
  ]

  const handleLinkClick = () => {
    setMobileMenuOpen(false)
  }

  return (
    <>
      {/* Hamburger Menu Button */}
      <button
        type="button"
        className="md:hidden ml-auto z-50 rounded-md p-2 text-foreground hover:bg-secondary/50 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50"
        onClick={(e) => {
          e.stopPropagation()
          setMobileMenuOpen(!mobileMenuOpen)
        }}
        aria-label="Toggle mobile menu"
        aria-expanded={mobileMenuOpen}
      >
        <motion.div
          animate={mobileMenuOpen ? "open" : "closed"}
          className="w-6 h-6 relative"
        >
          {/* Hamburger Lines */}
          <motion.span
            className="absolute left-0 block h-0.5 w-6 bg-current transform origin-center"
            variants={{
              closed: { rotate: 0, y: 0, opacity: 1 },
              open: { rotate: 45, y: 6, opacity: 1 }
            }}
            style={{ top: "6px" }}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            className="absolute left-0 block h-0.5 w-6 bg-current transform origin-center"
            variants={{
              closed: { opacity: 1 },
              open: { opacity: 0 }
            }}
            style={{ top: "12px" }}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            className="absolute left-0 block h-0.5 w-6 bg-current transform origin-center"
            variants={{
              closed: { rotate: 0, y: 0, opacity: 1 },
              open: { rotate: -45, y: -6, opacity: 1 }
            }}
            style={{ top: "18px" }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="md:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Mobile Menu Panel */}
            <motion.div
              className="mobile-menu-container md:hidden fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-background/95 backdrop-blur-md border-l border-border/50 shadow-2xl z-50"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Menu Header */}
              <div className="flex items-center justify-between p-6 border-b border-border/50">
                <h2 className="text-lg font-semibold text-foreground">Menu</h2>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-full p-2 hover:bg-secondary/50 transition-colors"
                  aria-label="Close menu"
                >
                  <span className="sr-only">Close menu</span>
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
              </div>

              {/* Navigation Links */}
              <div className="px-6 py-4">
                <nav className="space-y-2">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <Link
                        href={link.href}
                        target={link.external ? "_blank" : undefined}
                        rel={link.external ? "noopener noreferrer" : undefined}
                        className="flex items-center justify-between py-3 px-4 rounded-lg text-foreground hover:bg-secondary/50 hover:text-primary transition-all duration-200 group"
                        onClick={handleLinkClick}
                      >
                        <span className="font-medium">{link.name}</span>
                        {link.external && (
                          <motion.svg
                            className="w-4 h-4 opacity-50 group-hover:opacity-100"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            initial={{ x: 0 }}
                            whileHover={{ x: 2 }}
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </motion.svg>
                        )}
                      </Link>
                    </motion.div>
                  ))}
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
} 