"use client"
import Hero from "./components/Hero"
import Services from "./components/Services"
import PortfolioGrid from "./components/PortfolioGrid"
import Pricing from "./components/Pricing"
import AboutUs from "./components/AboutUs"
import ContactForm from "./components/ContactForm"
import Marquee from "./components/Marquee"

export default function Home() {
  return (
    <>
      <Hero />
      <PortfolioGrid />
      <Pricing />
      <Services />
      <AboutUs />
      <Marquee />
      <ContactForm />
    </>
  )
}
