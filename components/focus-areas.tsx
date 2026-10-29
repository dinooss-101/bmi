import React from "react"
import { Cpu, GraduationCap, Sprout, Building2, ArrowRight } from "lucide-react"

export function FocusAreas() {
  const pillars = [
    {
      pillarNumber: "1",
      title: "Future Skills & Labs",
      description:
        "Computational thinking, electronics & AI literacy mapped in direct non-duplicative synergy with Atal Tinkering Labs (ATL).",
      link: "#future-labs",
      linkText: "3 progression tiers",
      icon: Cpu,
      iconBg: "bg-blue-50 text-secondary",
    },
    {
      pillarNumber: "2",
      title: "Global Scholars & Mentoring",
      description:
        "Direct guidance for Ishan Uday, NEC Merit, and higher studies with audit stamps and verified statutory gateways.",
      link: "#scholarships",
      linkText: "Verified directory",
      icon: GraduationCap,
      iconBg: "bg-emerald-50 text-emerald-700",
    },
    {
      pillarNumber: "3",
      title: "Local Livelihoods & Enterprise",
      description:
        "Skill development, market linkages, agro-value chains, Loktak basin wetland ecology, and youth enterprise incubation.",
      link: "#tracker",
      linkText: "Enterprise track",
      icon: Sprout,
      iconBg: "bg-amber-50 text-amber-800",
    },
    {
      pillarNumber: "4",
      title: "Verified Local Development",
      description:
        "Statutory GIS master-planning (2045 horizon) with audit-backed stage and operational condition tracking.",
      link: "#master-plan",
      linkText: "AMRUT 2.0 mapping",
      icon: Building2,
      iconBg: "bg-indigo-50 text-indigo-700",
    },
  ]

  return (
    <section className="py-20 bg-surface border-b border-outline-variant/30" id="focus-areas">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <h2 className="font-headline text-3xl font-bold text-primary mb-3">
            Structured Areas of Focus
          </h2>
          <p className="text-on-surface-variant text-base">
            Engineered to prevent overlap and deliver accountable outcomes across STEM education, higher scholarship access, local livelihoods, and GIS master plan tracking.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((p) => {
            const Icon = p.icon
            return (
              <div
                key={p.pillarNumber}
                className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/40 shadow-xs flex flex-col justify-between hover:shadow-md hover:border-secondary/40 transition-shadow transition-colors"
              >
                <div>
                  <div className={`w-12 h-12 rounded-lg ${p.iconBg} flex items-center justify-center mb-4`}>
                    <Icon className="size-6.5" />
                  </div>
                  <h3 className="font-headline text-xl font-bold text-primary mb-2">
                    <span className="text-secondary font-sans text-sm font-semibold mr-1.5">
                      0{p.pillarNumber}.
                    </span>
                    {p.title}
                  </h3>
                  <p className="text-sm text-on-surface-variant leading-relaxed">
                    {p.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-outline-variant/20 mt-6">
                  <a
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-secondary hover:underline active:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
                    href={p.link}
                  >
                    <span>{p.linkText}</span>
                    <ArrowRight className="size-3.5" />
                  </a>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
