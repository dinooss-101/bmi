export default function StatsSection() {
    const stats = [
        { value: '~70 sq km', label: 'Proposed planning area under AMRUT 2.0 GIS formulation' },
        { value: '2045', label: 'Statutory planning horizon for Mayang Imphal master plan' },
        { value: '0', label: 'Unverified claims — all data sourced from official government portals' },
        { value: '100%', label: 'Audit trail coverage on all published civic records' },
    ]

    return (
        <section className="py-16 md:py-20" id="tracker">
            <div className="mx-auto max-w-7xl px-6">
                <p className="text-muted-foreground max-w-4xl text-balance text-4xl font-medium">
                    <span className="text-foreground">Verified civic metrics.</span>{' '}
                    Grounded in statutory sources, not projections.
                </p>

                <div className="mt-16 grid gap-12 md:grid-cols-2 xl:mt-24 xl:grid-cols-4">
                    {stats.map((s) => (
                        <div key={s.value} className="space-y-3 border-t border-border/50 pt-6">
                            <div className="text-foreground text-5xl font-semibold">{s.value}</div>
                            <p className="text-muted-foreground text-sm leading-relaxed">{s.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
