import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "./contexts/LanguageContext"
import Header from "./components/Header"
import Footer from "./components/Footer"
import ScrollProgress from "./components/ScrollProgress"
import Chatbot from "./components/Chatbot"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Xperience-Your Digital Growth Partner",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className={`${inter.className} min-h-screen bg-background text-foreground`} suppressHydrationWarning={true}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <LanguageProvider>
            <ScrollProgress />
            <Header />
            <main>{children}</main>
            <Footer />
            <Chatbot />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
