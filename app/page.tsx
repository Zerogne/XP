"use client"
import Hero from "./components/Hero"
import Services from "./components/Services"
import PortfolioGrid from "./components/PortfolioGrid"
import AboutUs from "./components/AboutUs"
import ContactForm from "./components/ContactForm"
import FloatingActionButton from "./components/FloatingActionButton"
import Marquee from "./components/Marquee"

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <PortfolioGrid />
      <AboutUs />
      <Marquee />
      <ContactForm />
      <FloatingActionButton />
    </>
  )
}
