import { Network, CheckCircle2 } from 'lucide-react'

const tiers = [
    {
        tier: 'Tier I',
        age: 'Ages 8–10',
        title: 'Computational foundations & block coding',
        body: 'Introduces problem decomposition, visual algorithm assembly (Blockly/Scratch), and machine logic without cognitive fatigue. Students grasp input-output chains and digital safety basics.',
        competencies: [
            { label: 'Core competency 01', detail: 'Stepwise task breakdown using unplugged algorithmic cards.' },
            { label: 'Core competency 02', detail: 'Iterative logic loops and conditional statements in block editors.' },
        ],
        deliverable: 'Working animated simulation of seasonal water-level thresholds using visual rules.',
        accentBg: 'bg-blue-500/10',
        accentText: 'text-blue-400',
    },
    {
        tier: 'Tier II',
        age: 'Ages 11–14',
        title: 'Microcontrollers & sensor prototyping',
        body: 'Hands-on circuits, breadboard wiring, Arduino and ESP32 programming. Students assemble working telemetry tools for local agrarian contexts — soil moisture monitoring and culvert water alerts.',
        competencies: [
            { label: 'Local application 01', detail: 'Capacitive soil moisture sensing for precision irrigation in local paddy fields.' },
            { label: 'Local application 02', detail: 'Ultrasonic water-level alerting prototype for ward culverts before monsoon peak.' },
        ],
        deliverable: 'Operational flood warning circuit with active acoustic and LED indicators tested under lab flow conditions.',
        accentBg: 'bg-emerald-500/10',
        accentText: 'text-emerald-400',
    },
    {
        tier: 'Tier III',
        age: 'Ages 15–18',
        title: 'Applied data, open GIS & edge AI literacy',
        body: "Translating municipal datasets and satellite telemetry into civic intelligence. High schoolers learn Python, spatial data tables, and ethical guardrails under India's DPDP Act 2025.",
        competencies: [
            { label: 'Analytical track', detail: 'Mapping open municipal spatial polygons and ward population densities.' },
            { label: 'Ethical framework', detail: 'Auditing automated models for algorithmic bias and public data integrity.' },
        ],
        deliverable: 'Interactive Jupyter notebook analyzing historical rainfall variations across Mayang Imphal drainage corridors.',
        accentBg: 'bg-indigo-500/10',
        accentText: 'text-indigo-400',
    },
]

export default function Features() {
    return (
        <section className="py-16 md:py-20" id="future-labs">
            <div className="mx-auto max-w-7xl px-6">
                <h2 className="text-muted-foreground max-w-4xl text-balance text-4xl font-medium">
                    <span className="text-foreground">Mayang Future Labs.</span>
                    <br />
                    Competency-based STEM in three progression tiers.
                </h2>
                <p className="text-muted-foreground mt-4 max-w-2xl text-base">
                    A modular technical framework designed for students across Mayang Imphal — from visual logic to community-grounded environmental telemetry.
                </p>

                <div className="mt-12 grid gap-6 md:mt-16 md:grid-cols-3">
                    {tiers.map((t) => (
                        <div
                            key={t.tier}
                            className="border-border/50 bg-foreground/2 flex flex-col gap-6 border p-8">
                            <div>
                                <div className="flex items-center gap-2 mb-4">
                                    <span className={`text-xs font-semibold px-2 py-0.5 ${t.accentBg} ${t.accentText}`}>{t.tier}</span>
                                    <span className={`text-xs ${t.accentText}`}>{t.age}</span>
                                </div>
                                <h3 className="text-foreground mb-3 text-lg font-medium">{t.title}</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">{t.body}</p>
                            </div>

                            <div className="space-y-3">
                                {t.competencies.map((c) => (
                                    <div key={c.label} className="border-border/30 bg-foreground/2 border p-3">
                                        <span className="text-foreground text-xs font-medium block mb-1">{c.label}</span>
                                        <span className="text-muted-foreground text-xs">{c.detail}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="border-t border-border/30 pt-4 mt-auto">
                                <span className="text-foreground text-xs font-medium block mb-1">Lab deliverable</span>
                                <p className="text-muted-foreground text-xs leading-relaxed">{t.deliverable}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-6 grid gap-4 md:grid-cols-2">
                    <div className="border-border/50 bg-foreground/2 flex items-start gap-4 border p-6">
                        <Network className="text-blue-400 mt-0.5 size-5 shrink-0" />
                        <div>
                            <h4 className="text-foreground mb-1 font-medium">Atal Tinkering Labs (ATL) synergy</h4>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                Designed to supplement, not duplicate, existing NITI Aayog ATL infrastructure in Manipur schools. Provides community cohort access for non-ATL enrolled students and after-school curriculum extension.
                            </p>
                        </div>
                    </div>

                    <div className="border-border/50 bg-foreground/2 flex items-start gap-4 border p-6">
                        <CheckCircle2 className="text-emerald-400 mt-0.5 size-5 shrink-0" />
                        <div>
                            <h4 className="text-foreground mb-1 font-medium">Verifiable outcome indicators</h4>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                Evaluated on reproducible competency, not classroom seat attendance. Every module ends with an operable hardware prototype or audited code repository.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
