import React from "react"
import Image from "next/image"
import { Map, Megaphone } from "lucide-react"

export function HeroSection() {
  return (
    <section
      className="relative w-full bg-brand-navy border-b border-white/10 overflow-hidden py-12 lg:py-20"
      id="hero"
    >
      {/* Subtle Atmospheric Grid Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-hero-dark via-brand-navy to-brand-navy -z-10 opacity-70" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Civic Editorial & CTAs (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {/* Status Label (Sentence case, strictly rectilinear) */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-none bg-white/10 border border-white/20 text-white text-xs font-medium w-fit">
              <span className="size-1.5 rounded-none bg-secondary-container" />
              <span>Civic tech and local progress initiative · Mayang Imphal</span>
            </div>

            {/* Hero Headline */}
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.15]">
              Mayang Imphal Master Plan, STEM &amp; Action
            </h1>

            {/* Hero Subtitle (< 13 words for Gate 58) */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-2xl">
              Tracking municipal master plan milestones and verified scholarships with transparent cryptographic provenance.
            </p>

            {/* Primary CTAs (Sentence case per Gate 67, strictly rectilinear) */}
            <div className="flex flex-wrap items-center gap-4 pt-1">
              <a
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-none bg-secondary text-white font-semibold text-xs hover:bg-secondary/90 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-colors"
                href="#master-plan"
              >
                <Map className="size-4" />
                <span>Explore Master Plan 2045</span>
              </a>
              <a
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-none bg-white/10 hover:bg-white/20 active:scale-[0.98] text-white border border-white/25 font-semibold text-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-colors"
                href="#community-form"
              >
                <Megaphone className="size-4" />
                <span>Submit community priority</span>
              </a>
            </div>

            {/* Key Metrics Bar inside Hero */}
            <div className="mt-4 pt-6 border-t border-white/15 grid grid-cols-2 sm:grid-cols-4 gap-4 text-white">
              <div>
                <div className="text-2xl font-bold font-heading text-white">
                  ~70 <span className="text-xs font-normal text-slate-300">sq. km</span>
                </div>
                <div className="text-[12px] text-slate-300 font-medium mt-0.5">Planning Area (AMRUT 2.0)</div>
              </div>
              <div>
                <div className="text-2xl font-bold font-heading text-secondary-container">2045</div>
                <div className="text-[12px] text-slate-300 font-medium mt-0.5">Master Plan Horizon</div>
              </div>
              <div>
                <div className="text-2xl font-bold font-heading text-emerald-400">100%</div>
                <div className="text-[12px] text-slate-300 font-medium mt-0.5">Append-Only Audit</div>
              </div>
              <div>
                <div className="text-2xl font-bold font-heading text-white">0</div>
                <div className="text-[12px] text-slate-300 font-medium mt-0.5">Unverified Claims</div>
              </div>
            </div>
          </div>

          {/* Right Column: Architectural Image Showcase (5 cols) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[440px] aspect-square rounded-none border border-white/20 bg-white/5 p-2">
              {/* Corner Accents */}
              <span className="absolute -top-1 -left-1 size-2.5 bg-secondary rounded-none" />
              <span className="absolute -top-1 -right-1 size-2.5 bg-secondary rounded-none" />
              <span className="absolute -bottom-1 -left-1 size-2.5 bg-secondary rounded-none" />
              <span className="absolute -bottom-1 -right-1 size-2.5 bg-secondary rounded-none" />

              {/* Contained 1:1 Image: Zero Cropping, Zero Forced Zoom */}
              <div className="relative w-full h-full overflow-hidden rounded-none">
                <Image
                  src="/image/hero-section.png"
                  alt="Mayang Imphal 2027 · Vote for Change"
                  fill
                  loading="eager"
                  sizes="(max-width: 1024px) 100vw, 440px"
                  className="object-contain"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
