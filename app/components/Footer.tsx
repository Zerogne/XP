"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Facebook, Instagram, Mail, Phone, Github, ArrowUp, MapPin } from "lucide-react"
import { useLanguage } from "../contexts/LanguageContext"

export default function Footer() {
  const { t } = useLanguage()

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <footer className="bg-background border-t border-border/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <img
                className="h-8 w-auto mr-3"
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/creative-SW6QDQbcVuwPgb6a2CYtYmRbsJa4k1.png"
                alt="XP Logo"
              />
              <span className="text-2xl font-bold text-foreground">XP</span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md leading-relaxed">
              {t('hero.subtitle')}
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="https://www.facebook.com/profile.php?id=61578833769304"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Facebook className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://www.instagram.com/xp.digital.dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Instagram className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="mailto:xpdigital.dev@gmail.com"
                className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Mail className="w-5 h-5" />
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">{t('navigation.services')}</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#services" className="text-muted-foreground hover:text-primary transition-colors">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-muted-foreground hover:text-primary transition-colors">
                  Mobile Apps
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-muted-foreground hover:text-primary transition-colors">
                  UI/UX Design
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">{t('navigation.contact')}</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-muted-foreground">
                <Phone className="w-4 h-4 mr-2" />
                <span>+976 80296007</span>
              </li>
              <li className="flex items-center text-muted-foreground">
                <Mail className="w-4 h-4 mr-2" />
                <span>xpdigital.dev@gmail.com</span>
              </li>
              <li className="flex items-center text-muted-foreground">
                <MapPin className="w-4 h-4 mr-2" />
                <span>Ulaanbaatar, Mongolia</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-border/50 py-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 sm:mb-0">
            © 2025 XP Digital. {t('navigation.contact') === 'Contact' ? 'All rights reserved.' : 'Бүх эрх хуулиар хамгаалагдсан.'}
          </p>
          
          {/* Back to top button */}
          
        </div>
      </div>
    </footer>
  )
}
