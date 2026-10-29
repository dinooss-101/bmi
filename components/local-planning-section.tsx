import React from "react"
import { Gavel, Check, GitFork, Sliders } from "lucide-react"

export function LocalPlanningSection() {
  return (
    <section
      className="py-20 bg-surface-container-low/60 border-b border-outline-variant/30"
      id="master-plan"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-10">
          <h2 className="font-headline text-3xl font-bold text-primary mb-3">
            Mayang Imphal: Planning for the Future (2045)
          </h2>
          <p className="text-on-surface-variant text-base leading-relaxed">
            The Manipur Town Planning Department&apos;s AMRUT 2.0 RFP includes Mayang Imphal in its GIS-based master-plan formulation initiative and specifies a 2045 planning horizon. The proposed planning area (preliminary ~70 sq. km) remains subject to statutory review and final notification.
          </p>
        </div>

        {/* Statutory Notice Card */}
        <div className="bg-white p-8 rounded-xl border border-outline-variant/40 shadow-xs mb-8">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-blue-50 text-secondary flex items-center justify-center shrink-0">
              <Gavel className="size-5.5" />
            </div>
            <div>
              <h3 className="font-headline text-xl font-bold text-primary mb-2">
                Statutory Notice &amp; Legal Clarity
              </h3>
              <p className="text-sm text-on-surface-variant leading-relaxed mb-4">
                The Request for Proposal (RFP) establishes the <strong>contractual planning assignment and the 2045 temporal horizon</strong>. It does <strong className="text-error font-semibold">NOT</strong> constitute a finalized, legally binding, or gazetted master plan until draft publication, public consultation periods, and formal approval by the Manipur Town &amp; Country Planning Board have occurred.
              </p>
              <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-on-surface-variant">
                <span className="flex items-center gap-1.5">
                  <Check className="size-4 text-secondary" />
                  <span>AMRUT 2.0 GIS Master-Plan Formulation</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <Check className="size-4 text-secondary" />
                  <span>Class-III Town Delineation</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <Check className="size-4 text-secondary" />
                  <span>Horizon Year: 2045</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Two-Dimensional Matrix Explanation */}
        <div className="bg-white p-8 rounded-xl border border-outline-variant/40 shadow-xs">
          <div className="max-w-2xl mb-6">
            <h3 className="font-headline text-xl font-bold text-primary">
              Stage vs. Operational Condition Matrix
            </h3>
            <p className="text-xs sm:text-sm text-on-surface-variant mt-1">
              Conventional civic dashboards hide delays by stating nominal project stages. MAYANG RISE decouples the administrative milestone from the ground reality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-lg bg-surface-container-low border border-outline-variant/30">
              <div className="flex items-center gap-2 text-primary font-bold text-sm mb-2">
                <GitFork className="size-4.5 text-secondary" />
                <span>Dimension 1: Statutory Stage</span>
              </div>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                Reflects formal administrative milestones: <span className="font-semibold text-primary">Pre-Feasibility → RFP Formulation → Procurement → Implementation → Commissioned</span>. Documented strictly against published government gazettes.
              </p>
            </div>

            <div className="p-5 rounded-lg bg-surface-container-low border border-outline-variant/30">
              <div className="flex items-center gap-2 text-primary font-bold text-sm mb-2">
                <Sliders className="size-4.5 text-emerald-600" />
                <span>Dimension 2: Ground Operational Condition</span>
              </div>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                Reflects empirical physical reality: <span className="font-semibold text-emerald-700">On Track</span>, <span className="font-semibold text-amber-700">Pending Review</span>, or <span className="font-semibold text-error">Delayed</span>. An awarded project whose survey is physically stalled is labeled accordingly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
