import { Check, GitFork, Sliders } from 'lucide-react'

export default function ContentSection() {
    return (
        <section className="py-16 md:py-20" id="master-plan">
            <div className="mx-auto max-w-7xl px-6">
                <div className="grid gap-4 md:grid-cols-2 md:gap-12">
                    <div>
                        <h2 className="max-w-md text-balance text-4xl font-medium">
                            Mayang Imphal: planning for the future (2045).
                        </h2>
                        <p className="text-muted-foreground mt-6 text-base leading-relaxed">
                            The Manipur Town Planning Department&apos;s AMRUT 2.0 RFP includes Mayang Imphal in its GIS-based master-plan formulation initiative with a 2045 planning horizon. The proposed area (~70 sq km) remains subject to statutory review and final notification.
                        </p>
                        <div className="mt-8 space-y-3">
                            {[
                                'AMRUT 2.0 GIS master-plan formulation',
                                'Class-III town delineation',
                                'Horizon year: 2045',
                            ].map((item) => (
                                <div key={item} className="flex items-center gap-2 text-sm">
                                    <Check className="text-emerald-400 size-4 shrink-0" />
                                    <span className="text-muted-foreground">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div className="border-border/50 bg-foreground/2 p-6 border">
                            <div className="text-foreground mb-3 flex items-center gap-2 text-sm font-medium">
                                <GitFork className="text-blue-400 size-4" />
                                Dimension 1: Statutory stage
                            </div>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                Formal administrative milestones tracked strictly against published government gazettes:{' '}
                                <span className="text-foreground font-medium">Pre-feasibility → RFP formulation → Procurement → Implementation → Commissioned.</span>
                            </p>
                        </div>

                        <div className="border-border/50 bg-foreground/2 p-6 border">
                            <div className="text-foreground mb-3 flex items-center gap-2 text-sm font-medium">
                                <Sliders className="text-emerald-400 size-4" />
                                Dimension 2: Ground operational condition
                            </div>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                Empirical physical reality, decoupled from nominal stage:{' '}
                                <span className="text-emerald-400 font-medium">On track</span>,{' '}
                                <span className="text-amber-400 font-medium">Pending review</span>, or{' '}
                                <span className="text-red-400 font-medium">Delayed</span>. An awarded project whose survey is stalled is labeled accordingly.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
