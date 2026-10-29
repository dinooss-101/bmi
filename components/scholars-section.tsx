"use client"

import React, { useState } from "react"
import { RefreshCw, ShieldAlert, CheckCircle2, Award, ExternalLink, Building } from "lucide-react"

type FilterType = "all" | "central" | "ner" | "merit"

interface Scholarship {
  id: string
  categories: ("central" | "ner" | "merit")[]
  status: string
  statusType: "emerald" | "blue" | "neutral"
  authority: string
  cycle: string
  title: string
  description: string
  metaLabel: string
  metaValue: string
  metaValueHighlight?: boolean
  ctaText: string
  ctaUrl: string
  ctaVariant: "primary" | "secondary"
}

const SCHOLARSHIPS: Scholarship[] = [
  {
    id: "ishan-uday",
    categories: ["central", "ner"],
    status: "Status: Open / Verified Oct 28, 2026",
    statusType: "emerald",
    authority: "UGC & Ministry of Education",
    cycle: "Statutory Cycle 2026–27",
    title: "Ishan Uday Special Scholarship for NER",
    description:
      "Direct monthly financial assistance (₹5,400 to ₹7,800/month) for general undergraduate degree and technical courses in recognized universities across India.",
    metaLabel: "Official gateway",
    metaValue: "National Scholarship Portal",
    ctaText: "Apply on official NSP",
    ctaUrl: "https://scholarships.gov.in",
    ctaVariant: "primary",
  },
  {
    id: "nec-merit",
    categories: ["ner", "merit"],
    status: "Verified Cycle: 2026–27",
    statusType: "blue",
    authority: "North Eastern Council (NEC)",
    cycle: "Technical / Professional Courses",
    title: "NEC Merit Scholarship for North Eastern Region",
    description:
      "NEC regional grant for diploma, degree, postgraduate, and M.Phil/Ph.D. technical courses. Stipend administered based on merit thresholds and regional domicile confirmation.",
    metaLabel: "Cadence",
    metaValue: "48h Automated Polling",
    metaValueHighlight: true,
    ctaText: "View official circular",
    ctaUrl: "https://scholarships.gov.in",
    ctaVariant: "secondary",
  },
  {
    id: "post-matric-obc-st",
    categories: ["ner", "central"],
    status: "State Nodal Window",
    statusType: "neutral",
    authority: "Manipur State Portal Gateway",
    cycle: "Post-Matric Coverage",
    title: "Post-Matric Scholarship for OBC/ST Students Manipur",
    description:
      "Centrally sponsored scheme administered through Manipur State Tribal Affairs & Hills / OBC Directorate for recognized post-secondary colleges.",
    metaLabel: "Verification",
    metaValue: "Institute Nodal Officer",
    ctaText: "Direct state gateway",
    ctaUrl: "https://scholarships.gov.in",
    ctaVariant: "secondary",
  },
]

export function ScholarsSection() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("all")

  const filteredScholarships = SCHOLARSHIPS.filter((sch) => {
    if (activeFilter === "all") return true
    return sch.categories.includes(activeFilter)
  })

  return (
    <section className="py-20 bg-surface border-b border-outline-variant/30" id="scholarships">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <h2 className="font-headline text-3xl font-bold text-primary">
              Freshness-Aware Scholarship Directory
            </h2>
            <p className="text-on-surface-variant text-base mt-2 max-w-2xl">
              Curated, tamper-checked financial aid gateways for students from Mayang Imphal. We monitor statutory notification portals to safeguard families against unverified agents.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="px-3 py-1.5 rounded-lg bg-surface-container text-on-surface-variant text-xs font-semibold flex items-center gap-1.5 border border-outline-variant/30">
              <RefreshCw className="size-3.5 text-emerald-600 motion-safe:animate-spin-slow motion-reduce:animate-none" />
              <span>NSP audit checked: Oct 28, 2026</span>
            </span>
          </div>
        </div>

        {/* Privacy & Anti-Harvesting Notice */}
        <div className="mb-8 p-4 rounded-xl bg-blue-50/70 border border-blue-200/60 flex items-start sm:items-center gap-3">
          <ShieldAlert className="size-5 text-secondary shrink-0 mt-0.5 sm:mt-0" />
          <p className="text-xs sm:text-sm text-primary">
            <strong className="font-bold">Zero Aadhaar or document harvesting:</strong> MAYANG RISE never collects student identity papers, income proofs, or banking credentials. All links lead directly to official national scholarship portals (NSP) and state nodal gateways.
          </p>
        </div>

        {/* Live Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-6" id="scholarship-filters">
          <button
            onClick={() => setActiveFilter("all")}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary disabled:opacity-50 transition-colors ${
              activeFilter === "all"
                ? "bg-primary text-white shadow-xs"
                : "bg-surface-container text-on-surface-variant hover:text-on-surface"
            }`}
          >
            All schemes
          </button>
          <button
            onClick={() => setActiveFilter("central")}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary disabled:opacity-50 transition-colors ${
              activeFilter === "central"
                ? "bg-primary text-white shadow-xs"
                : "bg-surface-container text-on-surface-variant hover:text-on-surface"
            }`}
          >
            Central government
          </button>
          <button
            onClick={() => setActiveFilter("ner")}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary disabled:opacity-50 transition-colors ${
              activeFilter === "ner"
                ? "bg-primary text-white shadow-xs"
                : "bg-surface-container text-on-surface-variant hover:text-on-surface"
            }`}
          >
            State &amp; NER
          </button>
          <button
            onClick={() => setActiveFilter("merit")}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary disabled:opacity-50 transition-colors ${
              activeFilter === "merit"
                ? "bg-primary text-white shadow-xs"
                : "bg-surface-container text-on-surface-variant hover:text-on-surface"
            }`}
          >
            Merit-cum-means
          </button>
        </div>

        {/* Scholarship Cards */}
        <div className="space-y-4">
          {filteredScholarships.map((sch) => (
            <div
              key={sch.id}
              className="bg-white p-6 rounded-xl border border-outline-variant/40 shadow-xs flex flex-col lg:flex-row lg:items-center justify-between gap-6 hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col gap-2 max-w-3xl">
                <div className="flex flex-wrap items-center gap-2">
                  {sch.statusType === "emerald" && (
                    <span className="px-2.5 py-0.5 rounded bg-emerald-100 text-emerald-800 text-xs font-semibold flex items-center gap-1">
                      <CheckCircle2 className="size-3.5" />
                      <span>{sch.status}</span>
                    </span>
                  )}
                  {sch.statusType === "blue" && (
                    <span className="px-2.5 py-0.5 rounded bg-blue-100 text-blue-800 text-xs font-semibold flex items-center gap-1">
                      <Award className="size-3.5" />
                      <span>{sch.status}</span>
                    </span>
                  )}
                  {sch.statusType === "neutral" && (
                    <span className="px-2.5 py-0.5 rounded bg-surface-container text-on-surface-variant text-xs font-semibold flex items-center gap-1">
                      <Building className="size-3.5" />
                      <span>{sch.status}</span>
                    </span>
                  )}
                  <span className="px-2.5 py-0.5 rounded bg-surface-container text-on-surface-variant text-xs">
                    {sch.authority}
                  </span>
                  <span className="text-xs text-on-surface-variant">{sch.cycle}</span>
                </div>

                <h3 className="font-headline text-xl font-bold text-primary">
                  {sch.title}
                </h3>
                <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                  {sch.description}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row lg:flex-col items-start lg:items-end justify-between gap-3 shrink-0">
                <div className="text-left lg:text-right">
                  <span className="text-[11px] text-on-surface-variant block">
                    {sch.metaLabel}
                  </span>
                  <span
                    className={`text-xs font-semibold ${
                      sch.metaValueHighlight ? "text-secondary" : "text-primary"
                    }`}
                  >
                    {sch.metaValue}
                  </span>
                </div>

                <a
                  className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary transition-colors ${
                    sch.ctaVariant === "primary"
                      ? "bg-primary-container text-white hover:bg-secondary"
                      : "bg-surface-container-high text-on-surface hover:bg-surface-container"
                  }`}
                  href={sch.ctaUrl}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span>{sch.ctaText}</span>
                  <ExternalLink className="size-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
