"use client"
import Hero from "./components/Hero"
import Services from "./components/Services"
import PortfolioGrid from "./components/PortfolioGrid"
import PackagesPreview from "./components/PackagesPreview"
import AboutUs from "./components/AboutUs"
import ContactForm from "./components/ContactForm"
import Marquee from "./components/Marquee"

export default function Home() {
  return (
    <>
      <Hero />
      <PortfolioGrid />
      <PackagesPreview />
      <Services />
      <AboutUs />
      <Marquee />
      <ContactForm />
    </>
  )
}
