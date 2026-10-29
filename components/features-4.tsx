export default function Features() {
    const pillars = [
        {
            num: '01',
            title: 'Future Skills & Labs',
            body: 'Computational thinking, electronics and AI literacy in direct, non-duplicative synergy with Atal Tinkering Labs (ATL). Three progression tiers from block coding to civic data analytics.',
            href: '#future-labs',
            linkText: '3 progression tiers →',
            accent: 'text-blue-400',
        },
        {
            num: '02',
            title: 'Global Scholars & Mentoring',
            body: 'Verified guidance for Ishan Uday, NEC Merit, and post-matric scholarships — audit stamped and sourced directly from the National Scholarship Portal with no document harvesting.',
            href: '#scholarships',
            linkText: 'Verified directory →',
            accent: 'text-emerald-400',
        },
        {
            num: '03',
            title: 'Local Livelihoods & Enterprise',
            body: 'Skill development, market linkages, agro-value chains, Loktak basin wetland ecology, and youth enterprise incubation within the Mayang Imphal municipal boundary.',
            href: '#tracker',
            linkText: 'Enterprise track →',
            accent: 'text-amber-400',
        },
        {
            num: '04',
            title: 'Verified Local Development',
            body: 'Statutory GIS master-planning with a 2045 horizon under AMRUT 2.0. Audit-backed decoupled tracking of administrative stage vs. ground operational condition.',
            href: '#master-plan',
            linkText: 'AMRUT 2.0 mapping →',
            accent: 'text-indigo-400',
        },
    ]

    return (
        <section className="py-16 md:py-20" id="focus-areas">
            <div className="mx-auto max-w-7xl px-6">
                <h2 className="text-muted-foreground max-w-4xl text-balance text-4xl font-medium">
                    <span className="text-foreground">Structured areas of focus.</span>
                    <br />
                    Accountable outcomes, zero overlap.
                </h2>
                <p className="text-muted-foreground mt-4 max-w-2xl text-base">
                    Engineered to prevent duplication and deliver measurable results across STEM education, higher scholarship access, local livelihoods, and GIS master plan tracking.
                </p>
                <div className="mt-12 grid gap-px border border-border/40 md:grid-cols-2 lg:grid-cols-4">
                    {pillars.map((p) => (
                        <div
                            key={p.num}
                            className="bg-foreground/2 border-border/30 flex flex-col justify-between p-8 border-l first:border-l-0">
                            <div>
                                <span className={`text-xs font-semibold ${p.accent}`}>{p.num}</span>
                                <h3 className="text-foreground mt-3 mb-3 text-lg font-medium">{p.title}</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">{p.body}</p>
                            </div>
                            <a
                                href={p.href}
                                className={`mt-8 text-xs font-semibold ${p.accent} hover:underline focus-visible:outline-2 focus-visible:outline-offset-2`}>
                                {p.linkText}
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
