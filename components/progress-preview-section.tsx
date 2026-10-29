"use client"

import React, { useState } from "react"
import { History, CheckCircle2, AlertCircle, Clock } from "lucide-react"
import { AuditLedgerDialog } from "@/components/modals/audit-ledger-dialog"

type ConditionFilter = "all" | "active" | "pending"

interface TrackerProject {
  id: string
  condition: "active" | "pending"
  category: string
  refNumber: string
  title: string
  description: string
  verificationText: string
  isPendingVerification?: boolean
  stageLabel: string
  stageValue: string
  stageNote: string
  conditionType: "emerald" | "amber"
  conditionLabel: string
  conditionValue: string
  conditionNote: string
}

const PROJECTS: TrackerProject[] = [
  {
    id: "drainage-feasibility",
    condition: "active",
    category: "Civic drainage · Flood mitigation",
    refNumber: "Ref: RFP-MI-2026/04",
    title: "Mayang Imphal Municipal Ward Drainage & Waterway Feasibility",
    description:
      "Detailed drainage alignment, runoff capacity analysis, and secondary canal desiltation survey along river outlet channels.",
    verificationText: "Editor Verified · Town Planning Technical Cell",
    stageLabel: "Statutory stage",
    stageValue: "Pre-feasibility",
    stageNote: "Technical survey drafted",
    conditionType: "emerald",
    conditionLabel: "Operational condition",
    conditionValue: "Active",
    conditionNote: "Drone elevation survey in progress",
  },
  {
    id: "stem-lab-setup",
    condition: "active",
    category: "Education · Youth tech",
    refNumber: "Ref: STEM-MI-2026/09",
    title: "District Youth STEM & Digital Lab Setup",
    description:
      "Community-accessible microcomputing lab and electronics hardware hub supplementing high school curricula.",
    verificationText: "Editor Verified · Mayang Civic Learning Consortium",
    stageLabel: "Statutory stage",
    stageValue: "Site Allocation",
    stageNote: "Premises review finalized",
    conditionType: "emerald",
    conditionLabel: "Operational condition",
    conditionValue: "On Track",
    conditionNote: "Procurement specs validated",
  },
  {
    id: "bazar-solar",
    condition: "pending",
    category: "Public utilities · Energy",
    refNumber: "Ref: MAN-SOLAR-26/18",
    title: "Bazar Market Solar Streetlighting Upgrade",
    description:
      "Solar illumination along commercial bazaar corridor and transit road crossings with centralized battery storage.",
    verificationText: "Editor Verified · Municipal Public Works Inspection",
    isPendingVerification: true,
    stageLabel: "Statutory stage",
    stageValue: "Tendering",
    stageNote: "Second call tender published",
    conditionType: "amber",
    conditionLabel: "Operational condition",
    conditionValue: "Pending Review",
    conditionNote: "Vendor query resolution pending",
  },
]

export function ProgressPreviewSection() {
  const [conditionFilter, setConditionFilter] = useState<ConditionFilter>("all")
  const [isLedgerOpen, setIsLedgerOpen] = useState(false)

  const filteredProjects = PROJECTS.filter((proj) => {
    if (conditionFilter === "all") return true
    return proj.condition === conditionFilter
  })

  return (
    <section className="py-20 bg-surface border-b border-outline-variant/30" id="tracker">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <h2 className="font-headline text-3xl font-bold text-primary">
              Verified Progress Tracker Preview
            </h2>
            <p className="text-on-surface-variant text-base mt-2 max-w-2xl">
              Append-only municipal and local development records with full provenance hashes and editor-verified source documents.
            </p>
          </div>

          <button
            onClick={() => setIsLedgerOpen(true)}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-surface-container-high hover:bg-surface-container text-on-surface text-xs font-semibold whitespace-nowrap active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary disabled:opacity-50 transition-colors cursor-pointer"
          >
            <History className="size-4.5 text-secondary" />
            <span className="whitespace-nowrap">View audit trail</span>
          </button>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <span className="text-xs font-medium text-on-surface-variant">
            Filter condition:
          </span>
          <button
            onClick={() => setConditionFilter("all")}
            className={`px-3 py-1 rounded text-xs font-semibold active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary disabled:opacity-50 transition-colors cursor-pointer ${
              conditionFilter === "all"
                ? "bg-primary text-white shadow-xs"
                : "bg-surface-container text-on-surface-variant hover:text-on-surface"
            }`}
          >
            All records
          </button>
          <button
            onClick={() => setConditionFilter("active")}
            className={`px-3 py-1 rounded text-xs font-semibold active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary disabled:opacity-50 transition-colors cursor-pointer ${
              conditionFilter === "active"
                ? "bg-primary text-white shadow-xs"
                : "bg-surface-container text-on-surface-variant hover:text-on-surface"
            }`}
          >
            Active and on track
          </button>
          <button
            onClick={() => setConditionFilter("pending")}
            className={`px-3 py-1 rounded text-xs font-semibold active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary disabled:opacity-50 transition-colors cursor-pointer ${
              conditionFilter === "pending"
                ? "bg-primary text-white shadow-xs"
                : "bg-surface-container text-on-surface-variant hover:text-on-surface"
            }`}
          >
            Pending review
          </button>
        </div>

        {/* Tracker Records */}
        <div className="space-y-4">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white p-6 rounded-xl border border-outline-variant/40 shadow-xs hover:shadow-md transition-shadow"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                <div className="lg:col-span-6 flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-semibold text-secondary">
                      {project.category}
                    </span>
                    <span className="px-2 py-0.5 rounded text-[11px] bg-surface-container text-on-surface-variant font-mono">
                      {project.refNumber}
                    </span>
                  </div>
                  <h3 className="font-headline text-lg font-bold text-primary">
                    {project.title}
                  </h3>
                  <p className="text-xs text-on-surface-variant leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex items-center gap-2 text-[11px] text-on-surface-variant mt-1">
                    {project.isPendingVerification ? (
                      <Clock className="size-3.5 text-amber-600" />
                    ) : (
                      <CheckCircle2 className="size-3.5 text-emerald-600" />
                    )}
                    <span>{project.verificationText}</span>
                  </div>
                </div>

                <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-3.5 rounded-lg bg-surface-container-low border border-outline-variant/20">
                    <span className="text-[11px] font-semibold text-on-surface-variant block">
                      {project.stageLabel}
                    </span>
                    <span className="text-sm font-bold text-primary mt-1 block">
                      {project.stageValue}
                    </span>
                    <span className="text-[11px] text-on-surface-variant">
                      {project.stageNote}
                    </span>
                  </div>

                  {project.conditionType === "emerald" ? (
                    <div className="p-3.5 rounded-lg bg-emerald-50 border border-emerald-200">
                      <span className="text-[11px] font-semibold text-emerald-800 block">
                        {project.conditionLabel}
                      </span>
                      <span className="text-sm font-bold text-emerald-800 mt-1 block flex items-center gap-1">
                        <CheckCircle2 className="size-4" />
                        <span>{project.conditionValue}</span>
                      </span>
                      <span className="text-[11px] text-emerald-700">
                        {project.conditionNote}
                      </span>
                    </div>
                  ) : (
                    <div className="p-3.5 rounded-lg bg-amber-50 border border-amber-200">
                      <span className="text-[11px] font-semibold text-amber-800 block">
                        {project.conditionLabel}
                      </span>
                      <span className="text-sm font-bold text-amber-800 mt-1 block flex items-center gap-1">
                        <AlertCircle className="size-4" />
                        <span>{project.conditionValue}</span>
                      </span>
                      <span className="text-[11px] text-amber-700">
                        {project.conditionNote}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <AuditLedgerDialog open={isLedgerOpen} onOpenChange={setIsLedgerOpen} />
    </section>
  )
}
