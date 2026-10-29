import React from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import TypewriterTitle from "@/components/ui/typewriter-title"

export default function HeroSection() {
  return (
    <section className="border-b border-border bg-background pt-12 pb-10 sm:pt-16 sm:pb-12 lg:pt-20 lg:pb-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Left Column: Vision & Mandate */}
          <div className="flex flex-col items-start lg:col-span-7">
            <div className="mb-5 flex flex-wrap items-center gap-2.5">
              <Badge variant="outline" className="border-border/80 px-2.5 py-0.5 text-xs text-muted-foreground">
                Mayang Imphal, AC-23
              </Badge>
              <span className="text-xs font-medium text-secondary">
                Civic Mandate 2027
              </span>
            </div>

            <h1 className="font-headline text-2xl sm:text-4xl lg:text-4xl xl:text-5xl font-semibold tracking-tight text-foreground leading-[1.14]">
              <span className="block">Accountable leadership</span>
              <span className="block min-h-[1.15em] text-secondary">
                <TypewriterTitle
                  as="span"
                  className="justify-start inline-flex font-headline text-secondary tracking-tight"
                  textClassName="font-headline text-2xl sm:text-4xl lg:text-4xl xl:text-5xl leading-[1.14] text-secondary"
                  sequences={[
                    { text: "for Mayang Imphal.", deleteAfter: true },
                    { text: "for youth & STEM.", deleteAfter: true },
                    { text: "for statutory planning.", deleteAfter: true },
                    { text: "for transparent works.", deleteAfter: true },
                    { text: "for every household.", deleteAfter: false },
                  ]}
                  autoLoop={true}
                  typingSpeed={55}
                  deleteSpeed={30}
                  pauseBeforeDelete={1400}
                  loopDelay={1200}
                />
              </span>
            </h1>

            <p className="mt-5 text-sm sm:text-base text-muted-foreground leading-relaxed max-w-lg font-normal">
              A dedicated civic leadership for Mayang Imphal, focused on modern urban planning, youth STEM labs, and an open door for every family.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
              <Link
                href="#mandate"
                className="inline-flex items-center justify-center gap-2 bg-primary px-6 py-3 min-h-[44px] text-xs font-semibold text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
              >
                <span>Read the civic mandate</span>
                <ArrowRight className="size-3.5" />
              </Link>
              <Link
                href="#constituent-desk"
                className="inline-flex items-center justify-center gap-2 border border-border bg-background px-6 py-3 min-h-[44px] text-xs font-semibold text-foreground transition-colors hover:bg-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
              >
                <span>Direct constituent desk</span>
              </Link>
            </div>

            {/* Three Airy Value Pillars */}
            <div className="mt-8 flex flex-wrap items-center gap-6 border-t border-border/60 pt-6 text-xs text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="size-3.5 text-secondary shrink-0" />
                <span className="text-foreground font-medium">100% public audit trail</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="size-3.5 text-secondary shrink-0" />
                <span className="text-foreground font-medium">AMRUT 2.0 GIS planning</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="size-3.5 text-secondary shrink-0" />
                <span className="text-foreground font-medium">Weekly open office hours</span>
              </div>
            </div>
          </div>

          {/* Right Column: Properly Sized Campaign Poster Frame */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-[280px] sm:max-w-sm border border-border bg-card p-3 shadow-xs">
              <span className="pointer-events-none absolute -top-1 -left-1 size-2 border-t-2 border-l-2 border-primary" />
              <span className="pointer-events-none absolute -top-1 -right-1 size-2 border-t-2 border-r-2 border-primary" />
              <span className="pointer-events-none absolute -bottom-1 -left-1 size-2 border-b-2 border-l-2 border-primary" />
              <span className="pointer-events-none absolute -bottom-1 -right-1 size-2 border-b-2 border-r-2 border-primary" />

              <div className="relative aspect-square w-full overflow-hidden bg-muted/20">
                <Image
                  src="/image/hero-section.png"
                  alt="Mayang Imphal 2027 · Vote for Change Civic Campaign Poster"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 384px"
                  className="object-contain"
                />
              </div>

              <div className="mt-2.5 flex items-center justify-between border-t border-border/40 pt-2 text-[11px] text-muted-foreground">
                <span>Official Campaign Publication</span>
                <span>Mayang Imphal 2027</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
