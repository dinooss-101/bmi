"use client"

import React, { useState } from "react"
import { Info, Send } from "lucide-react"
import { DemoConfirmationDialog } from "@/components/modals/demo-confirmation-dialog"

export function CommunityIntakeSection() {
  const [category, setCategory] = useState("infrastructure")
  const [area, setArea] = useState("ward-1")
  const [description, setDescription] = useState("")
  const [submissionMode, setSubmissionMode] = useState<"confidential" | "anonymous">("confidential")
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false)
  const [submittedData, setSubmittedData] = useState<{
    category: string
    area: string
    submissionMode: string
  } | undefined>(undefined)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const categoryLabels: Record<string, string> = {
      infrastructure: "Infrastructure and public works",
      education: "Education and STEM lab access",
      drainage: "Drainage, wetland and flood mitigation",
      health: "Public health and sanitation",
    }
    const areaLabels: Record<string, string> = {
      "ward-1": "Ward No. 1, Bazar Central Corridor",
      "ward-2": "Ward No. 2, Chabung Company Zone",
      "ward-3": "Ward No. 3, Thana Leikai Perimeter",
      "ward-4": "Ward No. 4, Kokchai Delineation",
      "ward-5": "Ward No. 5, Bengoon Spatial Cluster",
      "ward-6": "Ward No. 6, Konchak Agricultural Zone",
      other: "Peripheral Municipal Boundary Area (LGD 250326)",
    }

    // shortcut: client-side mock intake only, connect to backend API route after UI sign-off
    setSubmittedData({
      category: categoryLabels[category] || category,
      area: areaLabels[area] || area,
      submissionMode:
        submissionMode === "confidential" ? "Confidential follow-up" : "Completely anonymous",
    })
    setIsConfirmationOpen(true)
  }

  return (
    <section className="py-20 bg-surface-container-low/60" id="community-form">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Honest Preview Disclaimer Banner */}
        <div className="p-5 rounded-xl bg-blue-50 border border-blue-200 mb-8 shadow-xs">
          <div className="flex items-start gap-3">
            <Info className="size-5.5 text-secondary shrink-0 mt-0.5" />
            <div>
              <h4 className="text-xs font-semibold text-primary">
                Preview mode: Not connected to remote storage
              </h4>
              <p className="text-xs sm:text-sm text-on-surface-variant mt-1 leading-relaxed">
                This civic participation module is an interface demonstration. In strict compliance with the{" "}
                <strong className="text-primary font-semibold">
                  Digital Personal Data Protection (DPDP) Act 2025
                </strong>
                , no citizen data is collected, stored, or transferred to remote servers in Phase 1.
              </p>
            </div>
          </div>
        </div>

        {/* Form Card */}
        <div className="bg-white p-8 sm:p-10 rounded-xl border border-outline-variant/40 shadow-xs">
          <div className="mb-8">
            <h2 className="font-headline text-3xl font-bold text-primary">
              Submit a Community Priority
            </h2>
            <p className="text-sm text-on-surface-variant mt-1">
              Log verified local issues regarding public infrastructure, drainage, or youth STEM requests.
            </p>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Priority Category */}
            <div className="flex flex-col gap-2">
              <label
                className="text-xs font-semibold text-on-surface"
                htmlFor="form-category"
              >
                Civic category
              </label>
              <select
                id="form-category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-4 py-2.5 rounded-lg bg-surface text-on-surface border border-outline-variant/60 focus:outline-none focus:ring-2 focus:ring-secondary/40 text-sm"
              >
                <option value="infrastructure">Infrastructure &amp; Public Works</option>
                <option value="education">Education &amp; STEM Lab Access</option>
                <option value="drainage">Drainage, Wetland &amp; Flood Mitigation</option>
                <option value="health">Public Health &amp; Sanitation</option>
              </select>
            </div>

            {/* Ward / Spatial Area (Configurable Units) */}
            <div className="flex flex-col gap-2">
              <label
                className="text-xs font-semibold text-on-surface"
                htmlFor="form-area"
              >
                Ward and spatial reference area
              </label>
              <select
                id="form-area"
                value={area}
                onChange={(e) => setArea(e.target.value)}
                className="w-full px-4 py-2.5 rounded-lg bg-surface text-on-surface border border-outline-variant/60 focus:outline-none focus:ring-2 focus:ring-secondary/40 text-sm"
              >
                <option value="ward-1">Ward No. 1, Bazar Central Corridor</option>
                <option value="ward-2">Ward No. 2, Chabung Company Zone</option>
                <option value="ward-3">Ward No. 3, Thana Leikai Perimeter</option>
                <option value="ward-4">Ward No. 4, Kokchai Delineation</option>
                <option value="ward-5">Ward No. 5, Bengoon Spatial Cluster</option>
                <option value="ward-6">Ward No. 6, Konchak Agricultural Zone</option>
                <option value="other">Peripheral Municipal Boundary Area (LGD 250326)</option>
              </select>
              <span className="text-[11px] text-on-surface-variant">
                Configurable Local Government Directory units to prevent hardcoded ward obsolescence.
              </span>
            </div>

            {/* Description */}
            <div className="flex flex-col gap-2">
              <label
                className="text-xs font-semibold text-on-surface"
                htmlFor="form-desc"
              >
                Description and concrete context
              </label>
              <textarea
                id="form-desc"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
                rows={4}
                placeholder="Detail the exact public issue, physical landmarks, and estimated community impact..."
                className="w-full px-4 py-2.5 rounded-lg bg-surface text-on-surface border border-outline-variant/60 focus:outline-none focus:ring-2 focus:ring-secondary/40 text-sm placeholder:text-on-surface-variant/50"
              />
            </div>

            {/* Submission Privacy Type */}
            <div className="flex flex-col gap-3 pt-2">
              <span className="text-xs font-semibold text-on-surface">
                Submission mode (DPDP Act aligned)
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <label className="flex items-start gap-3 p-4 rounded-lg bg-surface-container-low border border-outline-variant/30 cursor-pointer hover:bg-surface-container transition-colors">
                  <input
                    type="radio"
                    name="submission-type"
                    value="confidential"
                    checked={submissionMode === "confidential"}
                    onChange={() => setSubmissionMode("confidential")}
                    className="mt-1 text-secondary focus:ring-secondary"
                  />
                  <div>
                    <span className="text-xs font-semibold text-primary block">Confidential follow-up</span>
                    <span className="text-[11px] text-on-surface-variant block mt-0.5">
                      Encrypted token for reviewer correspondence without public name display.
                    </span>
                  </div>
                </label>

                <label className="flex items-start gap-3 p-4 rounded-lg bg-surface-container-low border border-outline-variant/30 cursor-pointer hover:bg-surface-container transition-colors">
                  <input
                    type="radio"
                    name="submission-type"
                    value="anonymous"
                    checked={submissionMode === "anonymous"}
                    onChange={() => setSubmissionMode("anonymous")}
                    className="mt-1 text-secondary focus:ring-secondary"
                  />
                  <div>
                    <span className="text-xs font-semibold text-primary block">Completely anonymous</span>
                    <span className="text-[11px] text-on-surface-variant block mt-0.5">
                      Zero cryptographic identifier or metadata footprint preserved.
                    </span>
                  </div>
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-4 flex items-center justify-between">
              <span className="text-xs text-on-surface-variant">Evaluated in local client session</span>
              <button
                type="submit"
                className="px-6 py-3 rounded-lg bg-primary-container text-white text-xs font-semibold active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary disabled:opacity-50 hover:bg-secondary transition-colors shadow-xs flex items-center gap-2 cursor-pointer"
              >
                <span>Simulate submission</span>
                <Send className="size-4" />
              </button>
            </div>
          </form>
        </div>
      </div>

      <DemoConfirmationDialog
        open={isConfirmationOpen}
        onOpenChange={setIsConfirmationOpen}
        summaryData={submittedData}
      />
    </section>
  )
}
