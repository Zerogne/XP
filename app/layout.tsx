import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "../components/theme-provider"
import Header from "./components/Header"
import Footer from "./components/Footer"
import ScrollProgress from "./components/ScrollProgress"
import type React from "react"
import { LanguageProvider } from "../components/LanguageProvider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "XP-Your Digital Growth Partner",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className={`${inter.className} min-h-screen bg-background text-foreground`}>
        <LanguageProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <ScrollProgress />
            <Header />
            <main>{children}</main>
            <Footer />
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  )
}
