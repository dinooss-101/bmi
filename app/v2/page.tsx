import React from "react"
import { SiteHeader } from "@/components/site-header"
import HeroSection from "@/components/hero-section-8"
import LogoCloud from "@/components/logo-cloud-3"
import { PoliticianStatement } from "@/components/politician/politician-statement"
import { PoliticianGallery } from "@/components/politician/politician-gallery"
import { PoliticianPillars } from "@/components/politician/politician-pillars"
import { PoliticianLedger } from "@/components/politician/politician-ledger"
import { PoliticianVoices } from "@/components/politician/politician-voices"
import { PoliticianIntake } from "@/components/politician/politician-intake"
import FAQs from "@/components/faqs-1"
import Footer from "@/components/footer-2"

export const metadata = {
  title: "Better Mayang Imphal · Civic Leadership Platform (2027)",
  description:
    "Official constituent platform for Mayang Imphal: transparent governance, statutory GIS Master Plan 2045, STEM future labs, and decoupled public accountability.",
}

export default function VersionTwoLandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-secondary selection:text-secondary-foreground">
      <SiteHeader />
      <main>
        {/* 1. Politician Hero: Spacious, Visual & Clear Mandate */}
        <HeroSection />

        {/* 2. Statutory Frameworks & Institutional Alignment */}
        <LogoCloud />

        {/* 3. The Mandate: Personal Statement & Portrait */}
        <PoliticianStatement />

        {/* 4. In the Community: Tabbed Photojournalism Field Journal */}
        <PoliticianGallery />

        {/* 5. Three Core Pillars: Flagship Policies with Large Photo Placeholders */}
        <PoliticianPillars />

        {/* 6. Decoupled Accountability: Bold Metrics & Ground Verification */}
        <PoliticianLedger />

        {/* 7. Community Voices: Spacious Constituent Endorsements */}
        <PoliticianVoices />

        {/* 8. Direct Answers to Common Questions */}
        <FAQs />

        {/* 9. Direct Constituent Desk: Citizen Priority Intake */}
        <PoliticianIntake />
      </main>
      <Footer />
    </div>
  )
}
