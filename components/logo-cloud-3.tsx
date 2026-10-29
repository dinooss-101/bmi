import React from "react"

export default function LogoCloud() {
  const trustMarkers = [
    { label: "LGD 250326", sub: "Local Govt Directory" },
    { label: "AMRUT 2.0", sub: "Town Planning Cell" },
    { label: "DPDP Act 2025", sub: "Data Privacy" },
    { label: "ATL Framework", sub: "NITI Aayog" },
    { label: "NSP Gateway", sub: "National Scholarships" },
    { label: "NEC Merit", sub: "NER Council" },
  ]

  return (
    <section className="border-b border-border bg-card py-10 sm:py-12" aria-label="Statutory and institutional frameworks">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <p className="text-muted-foreground mb-6 text-center text-xs">
          Statutory frameworks, central ministries &amp; municipal directories underpinning our mandate
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {trustMarkers.map((m) => (
            <div
              key={m.label}
              className="border border-border/70 bg-background/50 px-3.5 py-3 text-center flex flex-col justify-center"
            >
              <span className="font-headline text-xs font-semibold text-foreground">
                {m.label}
              </span>
              <span className="text-muted-foreground mt-0.5 text-[11px] font-medium leading-tight">
                {m.sub}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
