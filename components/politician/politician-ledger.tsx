import React from "react"
import { ImagePlaceholder } from "@/components/ui/image-placeholder"
import { CheckCircle2, GitFork, Sliders } from "lucide-react"

export function PoliticianLedger() {
  const metrics = [
    { value: "~70 sq km", label: "Proposed planning area under AMRUT 2.0" },
    { value: "2045", label: "Statutory municipal planning horizon" },
    { value: "0", label: "Unverified claims — all gazetted" },
    { value: "100%", label: "Public audit trail on civic allocations" },
  ]

  return (
    <section className="border-b border-border bg-background py-20 sm:py-28 lg:py-32" id="ledger">
      <div className="mx-auto max-w-5xl px-6 sm:px-8 lg:px-10">
        <div className="max-w-2xl mb-14">
          <h2 className="font-headline text-3xl sm:text-4xl font-semibold text-foreground tracking-tight">
            Decoupled tracking: ground reality over paperwork.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
            Conventional politics celebrates tenders on paper. We track physical execution on the ground across Mayang Imphal.
          </p>
        </div>

        {/* 4 Oversized Metrics with Generous Negative Space */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 pb-12 border-b border-border">
          {metrics.map((m) => (
            <div key={m.label} className="space-y-2">
              <div className="font-headline text-3xl sm:text-4xl font-bold text-foreground">
                {m.value}
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {m.label}
              </p>
            </div>
          ))}
        </div>

        {/* Clean, Non-Crowded Decoupled Showcase */}
        <div className="mt-14 grid gap-10 lg:grid-cols-12 lg:gap-14 items-center">
          <div className="lg:col-span-6">
            <div className="border border-border bg-card p-2.5 shadow-xs">
              <ImagePlaceholder
                aspectRatio="16/9"
                category="Field Verification"
                location="Ward 1 to 4 Outlets"
                title="Elevation drone survey mapping drainage choke points along river channels"
                hint="1200 × 675 · 16:9 Survey Photo"
              />
            </div>
          </div>

          <div className="flex flex-col justify-center lg:col-span-6 space-y-4">
            <div className="border border-border/80 bg-card p-4 space-y-1.5">
              <div className="flex items-center gap-2 text-xs font-semibold text-foreground">
                <GitFork className="size-3.5 text-secondary" />
                <span>Statutory Administrative Stage</span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Tracks formal milestones from published government gazettes: Pre-Feasibility &rarr; RFP &rarr; Procurement &rarr; Commissioned.
              </p>
            </div>

            <div className="border border-border/80 bg-card p-4 space-y-1.5">
              <div className="flex items-center gap-2 text-xs font-semibold text-foreground">
                <Sliders className="size-3.5 text-secondary" />
                <span>Ground Operational Condition</span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Tracks physical ground reality honestly: Active, On Track, or Delayed. If a contractor is stalled, it is flagged Delayed on our portal.
              </p>
            </div>

            <div className="flex items-center gap-2 text-xs font-medium text-secondary pt-1">
              <CheckCircle2 className="size-3.5" />
              <span>Full append-only ledger accessible to every citizen</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
