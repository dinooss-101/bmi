'use client'

import { Award, CheckCircle2, Building, RefreshCw, type LucideIcon } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { Button } from '@/components/ui/button'

const tabs = [
    { id: 'ishan-uday', label: 'Ishan Uday' },
    { id: 'nec-merit', label: 'NEC Merit' },
    { id: 'post-matric', label: 'Post-Matric OBC/ST' },
] as const

type TabId = (typeof tabs)[number]['id']

const highlights: Record<TabId, { icon: LucideIcon; label: string }[]> = {
    'ishan-uday': [
        { icon: CheckCircle2, label: 'Status: Open / Verified Oct 28, 2026' },
        { icon: Award, label: '₹5,400–₹7,800/month stipend' },
        { icon: Building, label: 'UGC & Ministry of Education' },
    ],
    'nec-merit': [
        { icon: Award, label: 'Verified cycle 2026–27' },
        { icon: RefreshCw, label: '48h automated NSP polling' },
        { icon: Building, label: 'North Eastern Council (NEC)' },
    ],
    'post-matric': [
        { icon: CheckCircle2, label: 'State nodal window open' },
        { icon: Building, label: 'Manipur State Tribal Affairs / OBC Directorate' },
        { icon: Award, label: 'Post-secondary college coverage' },
    ],
}

const content: Record<TabId, { title: string; sub: string; body: string; cta: string; url: string }> = {
    'ishan-uday': {
        title: 'Ishan Uday special scholarship for NER',
        sub: 'Central government · Statutory cycle 2026–27',
        body: 'Direct monthly financial assistance (₹5,400 to ₹7,800/month) for general undergraduate degree and technical courses in recognized universities across India. Administered through the National Scholarship Portal with zero agent intermediaries.',
        cta: 'Apply on official NSP',
        url: 'https://scholarships.gov.in',
    },
    'nec-merit': {
        title: 'NEC Merit Scholarship for North Eastern Region',
        sub: 'NEC regional grant · Technical / Professional courses',
        body: 'NEC regional grant for diploma, degree, postgraduate, and M.Phil/Ph.D. technical courses. Stipend administered on merit thresholds and regional domicile confirmation. Monitored with 48-hour automated NSP polling.',
        cta: 'View official circular',
        url: 'https://scholarships.gov.in',
    },
    'post-matric': {
        title: 'Post-Matric Scholarship for OBC/ST students — Manipur',
        sub: 'Centrally sponsored · State nodal gateway',
        body: 'Centrally sponsored scheme administered through Manipur State Tribal Affairs & Hills / OBC Directorate for recognized post-secondary colleges. Verification through institute nodal officer. All links lead directly to official state gateways.',
        cta: 'Direct state gateway',
        url: 'https://scholarships.gov.in',
    },
}

function FeatureList({ items }: { items: { icon: LucideIcon; label: string }[] }) {
    return (
        <ul className="text-muted-foreground mt-8 divide-y *:flex *:items-center *:gap-3 *:py-3">
            {items.map(({ icon: Icon, label }) => (
                <li key={label}>
                    <Icon className="size-4" />
                    {label}
                </li>
            ))}
        </ul>
    )
}

export default function FeaturesSection() {
    const [activeId, setActiveId] = useState<TabId>('ishan-uday')
    const sectionRefs = useRef<Partial<Record<TabId, HTMLDivElement | null>>>({})

    const scrollToFeature = (id: TabId) => {
        sectionRefs.current[id]?.scrollIntoView({ behavior: 'smooth', block: 'start' })
        setActiveId(id)
    }

    useEffect(() => {
        const sections = tabs.map((t) => sectionRefs.current[t.id]).filter((s): s is HTMLDivElement => s != null)
        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)
                const nextId = visible[0]?.target.id as TabId | undefined
                if (nextId) setActiveId(nextId)
            },
            { rootMargin: '-25% 0px -55% 0px', threshold: [0.15, 0.35, 0.55, 0.75] }
        )
        sections.forEach((s) => observer.observe(s))
        return () => observer.disconnect()
    }, [])

    return (
        <section className="py-16 md:py-20" id="scholarships">
            <div className="mx-auto max-w-7xl px-6">
                <h2 className="text-muted-foreground max-w-4xl text-balance text-4xl font-medium">
                    <span className="text-foreground">Freshness-aware scholarship directory.</span>
                    <br />
                    Verified gateways, no agent intermediaries.
                </h2>
                <p className="text-muted-foreground mt-4 max-w-2xl text-base">
                    Curated, tamper-checked financial aid gateways for students from Mayang Imphal — sourced directly from official NSP and state nodal portals. Zero Aadhaar or document harvesting.
                </p>
                <div className="mt-16 grid gap-6 md:mt-32 lg:grid-cols-[auto_1fr]">
                    <div className="sticky top-24 h-fit w-56 max-lg:hidden">
                        <div className="text-muted-foreground text-sm">Scholarship</div>
                        <div className="-ml-4 mt-4 flex flex-col *:justify-start">
                            {tabs.map((tab) => (
                                <Button
                                    key={tab.id}
                                    type="button"
                                    variant="ghost"
                                    data-state={activeId === tab.id ? 'active' : undefined}
                                    onClick={() => scrollToFeature(tab.id)}
                                    className="not-data-[state=active]:text-muted-foreground hover:bg-transparent">
                                    {tab.label}
                                </Button>
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-col gap-16 md:gap-32">
                        {tabs.map((tab) => {
                            const c = content[tab.id]
                            return (
                                <div
                                    key={tab.id}
                                    ref={(el) => { sectionRefs.current[tab.id] = el }}
                                    id={tab.id}
                                    className="grid scroll-mt-32 gap-6 sm:grid-cols-2 md:grid-cols-5 lg:gap-12">
                                    <div className="flex flex-col justify-between pb-4 md:col-span-2">
                                        <div className="md:pr-6 lg:pr-0">
                                            <h3 className="text-muted-foreground mb-3 text-sm font-medium">{tab.label}</h3>
                                            <p className="text-muted-foreground text-balance text-lg font-medium">
                                                <span className="text-foreground">{c.title}.</span>{' '}
                                                {c.sub}
                                            </p>
                                        </div>
                                        <FeatureList items={highlights[tab.id]} />
                                    </div>
                                    <div className="border-border/50 bg-foreground/2 relative flex aspect-square border p-6 md:col-span-3">
                                        <div className="flex flex-col justify-between w-full">
                                            <p className="text-muted-foreground text-sm leading-relaxed">{c.body}</p>
                                            <div className="mt-6">
                                                <a
                                                    href={c.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-foreground border-border/50 bg-foreground/5 hover:bg-foreground/10 inline-flex items-center gap-2 border px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2">
                                                    {c.cta}
                                                </a>
                                                <p className="text-muted-foreground mt-4 text-xs">
                                                    NSP audit checked: Oct 28, 2026. All links go directly to official portals.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}
