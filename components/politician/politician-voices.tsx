import React from "react"
import { Badge } from "@/components/ui/badge"

export function PoliticianVoices() {
  const voices = [
    {
      name: "M. Tomba Singh",
      initials: "TS",
      role: "Paddy Cultivator",
      ward: "Ward No. 6, Konchak",
      quote:
        "He brought an engineer and elevation maps to our fields before the monsoon, rather than making hollow promises when our seedlings are already submerged.",
    },
    {
      name: "Leimapokpam Romita Devi",
      initials: "RD",
      role: "Handloom Cooperative President",
      ward: "Ward No. 5, Bengoon",
      quote:
        "He organized an open guidance session for our handloom subsidies and helped our daughters verify their Ishan Uday scholarships without agents.",
    },
  ]

  return (
    <section className="border-b border-border bg-background py-20 sm:py-28 lg:py-32" id="voices">
      <div className="mx-auto max-w-5xl px-6 sm:px-8 lg:px-10">
        <div className="max-w-2xl mb-12">
          <h2 className="font-headline text-3xl sm:text-4xl font-semibold text-foreground tracking-tight">
            Heard from the wards.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
            Real perspectives from farmers and artisan cooperatives across Mayang Imphal.
          </p>
        </div>

        {/* 2 Clean, Non-Overlapping Testimonial Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {voices.map((v) => (
            <div
              key={v.name}
              className="flex flex-col justify-between border border-border bg-card p-6 sm:p-8"
            >
              <div>
                <div className="flex items-center gap-3.5 mb-5">
                  <div className="relative size-12 shrink-0 border border-border/80 bg-muted/40 flex items-center justify-center font-headline font-semibold text-xs text-foreground">
                    {v.initials}
                  </div>
                  <div>
                    <h3 className="font-headline text-base font-semibold text-foreground">
                      {v.name}
                    </h3>
                    <div className="text-xs text-muted-foreground">{v.role}</div>
                    <Badge variant="outline" className="mt-1 text-[11px] font-medium px-2 py-0 border-border/70">
                      {v.ward}
                    </Badge>
                  </div>
                </div>

                <blockquote className="font-headline text-base sm:text-lg text-foreground italic leading-relaxed">
                  &ldquo;{v.quote}&rdquo;
                </blockquote>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
