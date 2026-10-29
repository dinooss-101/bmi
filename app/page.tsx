import React from "react"
import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { FocusAreas } from "@/components/focus-areas"
import { FutureLabsSection } from "@/components/future-labs-section"
import { ScholarsSection } from "@/components/scholars-section"
import { LocalPlanningSection } from "@/components/local-planning-section"
import { ProgressPreviewSection } from "@/components/progress-preview-section"
import { CommunityIntakeSection } from "@/components/community-intake-section"
import { SiteFooter } from "@/components/site-footer"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-surface selection:bg-secondary selection:text-white">
      <SiteHeader />
      <main className="flex-1">
        {/* Section 01: Hero with Background Image, Gradient Masking & Metrics Bar */}
        <HeroSection />

        {/* Section 02: Structured Areas of Focus (4 Pillars) */}
        <FocusAreas />

        {/* Section 03: Mayang Future Labs Interactive 3-Tier Framework & ATL Synergy */}
        <FutureLabsSection />

        {/* Section 04: Freshness-Aware Scholarship Directory & Live Filters */}
        <ScholarsSection />

        {/* Section 05: Master Plan 2045 Statutory Framework & Two-Dimensional Matrix */}
        <LocalPlanningSection />

        {/* Section 06: Verified Progress Tracker Preview with Dual-Status Decoupling */}
        <ProgressPreviewSection />

        {/* Section 07: Community Priority Intake (DPDP Aligned Demonstration Form) */}
        <CommunityIntakeSection />
      </main>
      <SiteFooter />
    </div>
  )
}
