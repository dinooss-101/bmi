"use client"

import React, { useState } from "react"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import Footer from "@/components/footer-2"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import { RegisterInterestDialog } from "@/components/modals/register-interest-dialog"
import { futureLabsTracks, launchMilestones } from "@/lib/data/initiatives"
import {
  ArrowLeft,
  ArrowRight,
  Cpu,
  CheckCircle2,
  HardDrive,
  School,
} from "lucide-react"

export default function FutureLabsPage() {
  const [activeTab, setActiveTab] = useState(futureLabsTracks[0].id)

  return (
    <div className="flex min-h-screen flex-col bg-background selection:bg-brand-blue selection:text-white">
      <SiteHeader />

      <main className="flex-1">
        {/* Page Hero */}
        <div className="bg-brand-navy text-white py-16 md:py-20 border-b border-border/20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-4 max-w-3xl">
              <Link
                href="/"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-300 hover:text-white active:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-colors w-fit"
              >
                <ArrowLeft className="size-3.5" /> Back to Overview
              </Link>

              <div className="flex items-center gap-2">
                <Badge variant="outline" className="border-amber-400/40 bg-amber-400/10 text-amber-300 text-xs font-medium">
                  Proposed initiative · In assessment
                </Badge>
                <span className="text-xs text-slate-300">Phase 1 Feasibility Study</span>
              </div>

              <h1 className="font-heading text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
                Mayang Imphal Future Labs
              </h1>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                A community-centered STEM, physical robotics, and responsible AI learning initiative designed to equip Mayang Imphal students with practical digital capabilities grounded in real local challenges.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <RegisterInterestDialog initialProgramType="FUTURE_LABS">
                  <Button className="bg-brand-blue hover:bg-brand-blue/90 text-white text-xs sm:text-sm font-medium active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary disabled:opacity-50">
                    Register Interest (Student / Teacher / Mentor)
                  </Button>
                </RegisterInterestDialog>
                <a
                  href="#roadmap"
                  className="inline-flex items-center gap-1.5 text-xs text-slate-300 hover:text-white active:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white py-2 px-3 border border-white/20 rounded-md transition-colors"
                >
                  <span>View 5-Stage Roadmap</span>
                  <ArrowRight className="size-3" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Global Trend vs Local Reality Context */}
        <section className="py-12 bg-brand-mist/40 dark:bg-muted/10 border-b border-border/60">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="rounded-lg border border-border/80 bg-card p-5 flex flex-col gap-2">
                <h3 className="font-heading font-semibold text-base text-foreground">
                  WEF 2025 Future of Jobs
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  AI, big data, network engineering, and applied technological literacy represent the fastest-growing job skill domains through 2030 globally.
                </p>
              </div>

              <div className="rounded-lg border border-border/80 bg-card p-5 flex flex-col gap-2">
                <h3 className="font-heading font-semibold text-base text-foreground">
                  Practical Hardware Access
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Many local students study computing purely as theoretical bookwork. Hands-on coding and circuit wiring require low-cost, resilient physical kits.
                </p>
              </div>

              <div className="rounded-lg border border-border/80 bg-card p-5 flex flex-col gap-2">
                <h3 className="font-heading font-semibold text-base text-foreground">
                  Offline-First Learning
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Curricula and software bundles are architected to run reliably on standard PCs without dependent constant broadband connections.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Full Curriculum Deep Dive */}
        <section className="py-16 bg-background border-b border-border/60">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-10">
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground">
                Three Progressive Age Tracks
              </h2>
              <p className="text-xs sm:text-sm text-muted-foreground mt-2 leading-relaxed">
                Structured to build capability sequentially: from block-based algorithmic patterns to physical microcontroller sensors and exploratory data science.
              </p>
            </div>

            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="bg-muted p-1 rounded-xl mb-8 flex flex-wrap sm:flex-nowrap sm:overflow-x-auto gap-1">
                {futureLabsTracks.map((t) => (
                  <TabsTrigger key={t.id} value={t.id} className="text-xs sm:text-sm px-4 py-2">
                    {t.title}
                  </TabsTrigger>
                ))}
              </TabsList>

              {futureLabsTracks.map((t) => (
                <TabsContent key={t.id} value={t.id} className="focus-visible:outline-none">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    <Card className="lg:col-span-8 border-border/80 bg-card">
                      <CardHeader className="gap-2">
                        <div className="flex items-center justify-between">
                          <Badge variant="outline" className="text-xs font-semibold text-brand-blue border-brand-blue/30">
                            {t.ageGroup}
                          </Badge>
                          <span className="text-xs text-muted-foreground">Term Length: 12 Weeks</span>
                        </div>
                        <CardTitle className="font-heading text-2xl font-bold text-foreground">
                          {t.title}
                        </CardTitle>
                        <CardDescription className="text-xs text-muted-foreground">
                          <strong>Prerequisites:</strong> {t.prerequisites}
                        </CardDescription>
                      </CardHeader>

                      <CardContent className="flex flex-col gap-6">
                        <div>
                          <h4 className="text-xs font-semibold text-muted-foreground mb-3">
                            Core Modules
                          </h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {t.coreTopics.map((topic, i) => (
                              <div key={i} className="flex items-start gap-2.5 rounded-lg border border-border/60 bg-muted/30 p-3 text-xs">
                                <CheckCircle2 className="size-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                                <span className="font-medium text-foreground">{topic}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="rounded-xl border border-brand-blue/30 bg-brand-blue/5 p-5 flex flex-col gap-3">
                          <span className="text-xs font-semibold text-brand-blue flex items-center gap-1.5">
                            <Cpu className="size-4" /> Capstone Project Brief
                          </span>
                          <h5 className="font-heading text-lg font-bold text-foreground">
                            {t.handsOnProject.title}
                          </h5>
                          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                            {t.handsOnProject.description}
                          </p>
                          <div className="rounded-md bg-background/80 border border-border/60 p-3 text-xs text-muted-foreground">
                            <strong>Hardware Feasibility &amp; Offline Note:</strong> {t.handsOnProject.feasibilityNote}
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <div className="lg:col-span-4 flex flex-col gap-5">
                      <Card className="border-border/80 bg-muted/20">
                        <CardHeader className="pb-3">
                          <CardTitle className="text-sm font-semibold text-foreground flex items-center gap-2">
                            <School className="size-4 text-brand-forest" />
                            School Partnership Model
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="flex flex-col gap-3 text-xs text-muted-foreground leading-relaxed">
                          <p>
                            Participating secondary schools in Mayang Imphal nominate student cohorts and participating science/IT instructors.
                          </p>
                          <p>
                            Educators receive teaching stipends, structured lesson guides, and diagnostic support from external volunteer specialists.
                          </p>
                        </CardContent>
                        <CardFooter className="pt-2 border-t border-border/50">
                          <RegisterInterestDialog initialProgramType="FUTURE_LABS">
                            <Button size="sm" variant="outline" className="w-full text-xs active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary disabled:opacity-50">
                              Inquire for Your School
                            </Button>
                          </RegisterInterestDialog>
                        </CardFooter>
                      </Card>

                      <div className="rounded-lg border border-border/80 bg-card p-4 text-xs text-muted-foreground flex flex-col gap-2">
                        <span className="font-semibold text-foreground flex items-center gap-1.5">
                          <HardDrive className="size-3.5 text-brand-blue" />
                          Zero Personal Device Barrier
                        </span>
                        <p className="leading-relaxed">
                          Students do not need personal laptops. All project exercises are designed to run during scheduled computer periods in shared school labs.
                        </p>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        {/* 5-Stage Implementation Roadmap */}
        <section id="roadmap" className="py-16 bg-brand-mist/40 dark:bg-muted/10 border-b border-border/60">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-12">
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground">
                Five-Stage Implementation Roadmap
              </h2>
              <p className="text-xs sm:text-sm text-muted-foreground mt-2 leading-relaxed">
                We believe in staged accountability. No program is scaled before its baseline audit is finished and its pilot outcomes are verified.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              {launchMilestones.map((m, index) => {
                const isCurrent = m.status === "CURRENT_ASSESSMENT"
                return (
                  <div
                    key={m.phase}
                    className={`rounded-xl border p-6 transition-shadow transition-colors ${
                      isCurrent
                        ? "border-brand-blue bg-card shadow-md"
                        : "border-border/80 bg-card/70 opacity-90"
                    }`}
                  >
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4 pb-4 border-b border-border/60">
                      <div className="flex items-center gap-3">
                        <div
                          className={`flex size-10 items-center justify-center rounded-lg font-mono text-sm font-bold ${
                            isCurrent
                              ? "bg-brand-blue text-white"
                              : "bg-muted text-muted-foreground"
                          }`}
                        >
                          0{index + 1}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-semibold text-muted-foreground">
                              {m.phase}
                            </span>
                            {isCurrent && (
                              <Badge variant="outline" className="border-brand-blue/40 bg-brand-blue/10 text-brand-blue text-[11px]">
                                CURRENT ASSESSMENT
                              </Badge>
                            )}
                          </div>
                          <h3 className="font-heading text-lg font-bold text-foreground mt-0.5">
                            {m.title}
                          </h3>
                        </div>
                      </div>

                      <div className="text-xs text-muted-foreground">
                        {isCurrent ? "Status: Active Community Consultations" : "Status: Staged Post-Pilot"}
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-4">
                      {m.description}
                    </p>

                    <div className="rounded-lg bg-muted/30 border border-border/50 p-4">
                      <span className="text-xs font-semibold text-foreground block mb-2">
                        Key Milestones &amp; Verification Deliverables:
                      </span>
                      <ul className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs text-muted-foreground">
                        {m.deliverables.map((del, dIdx) => (
                          <li key={dIdx} className="flex items-start gap-2">
                            <span className="text-brand-blue font-bold">•</span>
                            <span>{del}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Public Disclosures & FAQ */}
        <section className="py-16 bg-background">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-6 text-center">
              Frequently Asked Questions
            </h2>

            <Accordion className="w-full">
              <AccordionItem value="faq-1">
                <AccordionTrigger className="text-sm font-semibold">
                  Is Mayang Imphal Future Labs an official Government scheme?
                </AccordionTrigger>
                <AccordionContent className="text-xs text-muted-foreground leading-relaxed">
                  No. Mayang Imphal Future Labs is currently a proposed civic initiative in pre-pilot assessment. It is not an approved Government of Manipur or Central Government scheme. It seeks to coordinate community and philanthropic support to assist local schools.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-2">
                <AccordionTrigger className="text-sm font-semibold">
                  How are student participants selected?
                </AccordionTrigger>
                <AccordionContent className="text-xs text-muted-foreground leading-relaxed">
                  Selection protocols will be established in partnership with participating school principals, prioritizing student curiosity, attendance, and balanced gender participation across local wards.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-3">
                <AccordionTrigger className="text-sm font-semibold">
                  How can local teachers or diaspora mentors get involved?
                </AccordionTrigger>
                <AccordionContent className="text-xs text-muted-foreground leading-relaxed">
                  Educators and technical professionals can register interest using the interest form. Volunteer mentors undergo identity screening and adhere to student safeguarding policies.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
