"use client"

import React, { useState } from "react"
import { Network, CheckCircle2 } from "lucide-react"

type LabTier = "junior" | "inter" | "senior"

export function FutureLabsSection() {
  const [activeTier, setActiveTier] = useState<LabTier>("junior")

  return (
    <section
      className="py-20 bg-surface-container-low/60 border-b border-outline-variant/30"
      id="future-labs"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <h2 className="font-headline text-3xl font-bold text-primary">
              Mayang Imphal Future Labs
            </h2>
            <p className="text-on-surface-variant text-base mt-2 max-w-2xl">
              A competency-based modular technical framework designed for students across Mayang Imphal, moving from visual logic to community-grounded environmental telemetry.
            </p>
          </div>

          {/* Interactive Tabs */}
          <div className="flex items-center gap-1.5 p-1.5 bg-surface-container rounded-lg shrink-0">
            <button
              onClick={() => setActiveTier("junior")}
              className={`px-4 py-2 rounded text-xs font-semibold active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary disabled:opacity-50 transition-colors ${
                activeTier === "junior"
                  ? "bg-white text-primary shadow-xs"
                  : "text-on-surface-variant hover:text-on-surface"
              }`}
            >
              Junior (08–10)
            </button>
            <button
              onClick={() => setActiveTier("inter")}
              className={`px-4 py-2 rounded text-xs font-semibold active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary disabled:opacity-50 transition-colors ${
                activeTier === "inter"
                  ? "bg-white text-primary shadow-xs"
                  : "text-on-surface-variant hover:text-on-surface"
              }`}
            >
              Intermediate (11–14)
            </button>
            <button
              onClick={() => setActiveTier("senior")}
              className={`px-4 py-2 rounded text-xs font-semibold active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary disabled:opacity-50 transition-colors ${
                activeTier === "senior"
                  ? "bg-white text-primary shadow-xs"
                  : "text-on-surface-variant hover:text-on-surface"
              }`}
            >
              Senior (15–18)
            </button>
          </div>
        </div>

        {/* Curriculum Tier Panels */}

        {/* Junior Tier */}
        {activeTier === "junior" && (
          <div className="bg-white p-8 rounded-xl border border-outline-variant/40 shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-8 items-center motion-safe:animate-in motion-safe:fade-in-50 motion-reduce:animate-none duration-200">
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2.5 py-0.5 rounded bg-surface-container text-on-surface-variant text-xs font-semibold">
                    Tier I
                  </span>
                  <span className="text-xs font-medium text-secondary">
                    Ages 08 to 10 · Logic &amp; Sequences
                  </span>
                </div>
                <h3 className="font-headline text-2xl font-bold text-primary mb-3">
                  Computational Foundations &amp; Block Coding
                </h3>
                <p className="text-sm text-on-surface-variant leading-relaxed mb-6">
                  Introduces problem decomposition, visual algorithm assembly (Blockly/Scratch), and machine logic without cognitive fatigue. Students grasp input-output chains and digital safety basics.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg bg-surface-container-low border border-outline-variant/20">
                    <span className="text-xs font-semibold text-primary block mb-1">
                      Core Competency 01
                    </span>
                    <span className="text-xs text-on-surface-variant">
                      Stepwise task breakdown (decomposition) using unplugged algorithmic cards.
                    </span>
                  </div>
                  <div className="p-4 rounded-lg bg-surface-container-low border border-outline-variant/20">
                    <span className="text-xs font-semibold text-primary block mb-1">
                      Core Competency 02
                    </span>
                    <span className="text-xs text-on-surface-variant">
                      Iterative logic loops and conditional statements authored in block editors.
                    </span>
                  </div>
                </div>
              </div>
              <div className="pt-6 mt-6 border-t border-outline-variant/20 flex flex-wrap items-center justify-between gap-2 text-xs text-on-surface-variant">
                <span>Prerequisites: Foundational reading literacy</span>
                <span className="font-semibold text-primary">
                  Demonstrated Assessment: Interactive logic maze &amp; Loktak story script
                </span>
              </div>
            </div>

            <div className="lg:col-span-5 bg-surface-container-low p-6 rounded-xl border border-outline-variant/30 flex flex-col justify-between">
              <div className="w-full h-44 rounded-lg bg-primary-container text-white p-5 flex flex-col justify-between mb-4 relative overflow-hidden">
                <div className="relative z-10">
                  <span className="text-[11px] font-medium text-secondary-container">
                    Interactive sandbox
                  </span>
                  <h4 className="font-headline text-lg font-bold text-white mt-1">
                    Block Logic Simulator
                  </h4>
                </div>
                <div className="relative z-10 flex items-center gap-2 text-xs text-slate-300">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span>Active Sandbox Module: Condition Loops</span>
                </div>
                <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-secondary/20 rounded-full blur-xl" />
              </div>
              <div className="space-y-1">
                <span className="text-xs font-semibold text-primary block">
                  Lab deliverable
                </span>
                <p className="text-xs text-on-surface-variant">
                  Author a working animated simulation demonstrating seasonal water-level thresholds using visual rules.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Intermediate Tier */}
        {activeTier === "inter" && (
          <div className="bg-white p-8 rounded-xl border border-outline-variant/40 shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-8 items-center motion-safe:animate-in motion-safe:fade-in-50 motion-reduce:animate-none duration-200">
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2.5 py-0.5 rounded bg-surface-container text-on-surface-variant text-xs font-semibold">
                    Tier II
                  </span>
                  <span className="text-xs font-medium text-secondary">
                    Ages 11 to 14 · Microcontrollers &amp; Sensors
                  </span>
                </div>
                <h3 className="font-headline text-2xl font-bold text-primary mb-3">
                  Microcontrollers &amp; Sensor Prototyping
                </h3>
                <p className="text-sm text-on-surface-variant leading-relaxed mb-6">
                  Hands-on circuits, breadboard wiring, Arduino and ESP32 programming. Students assemble working telemetry tools for local agrarian contexts such as soil moisture monitoring and culvert water alerts.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg bg-surface-container-low border border-outline-variant/20">
                    <span className="text-xs font-semibold text-primary block mb-1">
                      Local Application 01
                    </span>
                    <span className="text-xs text-on-surface-variant">
                      Capacitive soil moisture sensing for precision irrigation in local paddy fields.
                    </span>
                  </div>
                  <div className="p-4 rounded-lg bg-surface-container-low border border-outline-variant/20">
                    <span className="text-xs font-semibold text-primary block mb-1">
                      Local Application 02
                    </span>
                    <span className="text-xs text-on-surface-variant">
                      Ultrasonic water-level alerting prototype for ward culverts before monsoon peak.
                    </span>
                  </div>
                </div>
              </div>
              <div className="pt-6 mt-6 border-t border-outline-variant/20 flex flex-wrap items-center justify-between gap-2 text-xs text-on-surface-variant">
                <span>Prerequisites: Tier I or basic algebraic literacy</span>
                <span className="font-semibold text-primary">
                  Demonstrated Assessment: Operable breadboard circuit without schematic errors
                </span>
              </div>
            </div>

            <div className="lg:col-span-5 bg-surface-container-low p-6 rounded-xl border border-outline-variant/30 flex flex-col justify-between">
              <div className="w-full h-44 rounded-lg bg-primary-container text-white p-5 flex flex-col justify-between mb-4 relative overflow-hidden">
                <div className="relative z-10">
                  <span className="text-[11px] font-medium text-emerald-400">
                    Hardware telemetry
                  </span>
                  <h4 className="font-headline text-lg font-bold text-white mt-1">
                    ESP32 &amp; Sensor Array Rig
                  </h4>
                </div>
                <div className="relative z-10 flex items-center gap-2 text-xs text-slate-300">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span>Active Firmware: C++ Analog Read</span>
                </div>
                <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-emerald-500/20 rounded-full blur-xl" />
              </div>
              <div className="space-y-1">
                <span className="text-xs font-semibold text-primary block">
                  Lab deliverable
                </span>
                <p className="text-xs text-on-surface-variant">
                  Operational flood warning circuit with active acoustic and LED indicators tested under lab flow conditions.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Senior Tier */}
        {activeTier === "senior" && (
          <div className="bg-white p-8 rounded-xl border border-outline-variant/40 shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-8 items-center motion-safe:animate-in motion-safe:fade-in-50 motion-reduce:animate-none duration-200">
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2.5 py-0.5 rounded bg-surface-container text-on-surface-variant text-xs font-semibold">
                    Tier III
                  </span>
                  <span className="text-xs font-medium text-secondary">
                    Ages 15 to 18 · Applied Data &amp; Edge AI
                  </span>
                </div>
                <h3 className="font-headline text-2xl font-bold text-primary mb-3">
                  Applied Data, Open GIS &amp; Edge AI Literacy
                </h3>
                <p className="text-sm text-on-surface-variant leading-relaxed mb-6">
                  Translating municipal datasets and satellite telemetry into civic intelligence. High schoolers learn Python, spatial data tables, and ethical guardrails under India&apos;s DPDP Act 2025.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg bg-surface-container-low border border-outline-variant/20">
                    <span className="text-xs font-semibold text-primary block mb-1">
                      Analytical Track
                    </span>
                    <span className="text-xs text-on-surface-variant">
                      Mapping open municipal spatial polygons and ward population densities.
                    </span>
                  </div>
                  <div className="p-4 rounded-lg bg-surface-container-low border border-outline-variant/20">
                    <span className="text-xs font-semibold text-primary block mb-1">
                      Ethical Framework
                    </span>
                    <span className="text-xs text-on-surface-variant">
                      Auditing automated models for algorithmic bias and public data integrity.
                    </span>
                  </div>
                </div>
              </div>
              <div className="pt-6 mt-6 border-t border-outline-variant/20 flex flex-wrap items-center justify-between gap-2 text-xs text-on-surface-variant">
                <span>Prerequisites: Tier II or Python foundations</span>
                <span className="font-semibold text-primary">
                  Demonstrated Assessment: Public GitHub civic data notebook submission
                </span>
              </div>
            </div>

            <div className="lg:col-span-5 bg-surface-container-low p-6 rounded-xl border border-outline-variant/30 flex flex-col justify-between">
              <div className="w-full h-44 rounded-lg bg-primary-container text-white p-5 flex flex-col justify-between mb-4 relative overflow-hidden">
                <div className="relative z-10">
                  <span className="text-[11px] font-medium text-secondary-container">
                    Civic data analytics
                  </span>
                  <h4 className="font-headline text-lg font-bold text-white mt-1">
                    Jupyter &amp; GIS Analytics
                  </h4>
                </div>
                <div className="relative z-10 flex items-center gap-2 text-xs text-slate-300">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span>Dataset: AMRUT 2.0 GIS Spatial Base</span>
                </div>
                <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-secondary/20 rounded-full blur-xl" />
              </div>
              <div className="space-y-1">
                <span className="text-xs font-semibold text-primary block">
                  Lab deliverable
                </span>
                <p className="text-xs text-on-surface-variant">
                  Interactive Jupyter notebook analyzing historical rainfall variations across Mayang Imphal drainage corridors.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* ATL Synergy & Feasibility Framework */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-xl bg-white border border-outline-variant/40 shadow-xs flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-blue-50 text-secondary flex items-center justify-center shrink-0">
              <Network className="size-5" />
            </div>
            <div>
              <h4 className="font-headline text-lg font-bold text-primary mb-1">
                Atal Tinkering Labs (ATL) Synergy
              </h4>
              <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                Designed to supplement, not duplicate, existing NITI Aayog ATL infrastructure in Manipur schools. Provides community cohort access for non-ATL enrolled students and after-school curriculum extension.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-xl bg-white border border-outline-variant/40 shadow-xs flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
              <CheckCircle2 className="size-5" />
            </div>
            <div>
              <h4 className="font-headline text-lg font-bold text-primary mb-1">
                Verifiable Outcome Indicators
              </h4>
              <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                Evaluated strictly on reproducible competency rather than mere classroom seat attendance. Every module ends with an operable hardware prototype or audited code repository.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
