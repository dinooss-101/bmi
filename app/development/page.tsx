"use client"

import React, { useState } from "react"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ImagePlaceholder } from "@/components/ui/image-placeholder"
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu"
import {
  ArrowLeft,
  ExternalLink,
  FileText,
  ArrowRight,
  Map,
  Layers,
  ChevronDown,
  Check,
  Droplets,
} from "lucide-react"

export default function DevelopmentPage() {
  const rfpUrl =
    "https://www.tpmanipur.mn.gov.in/media/filer_public/9d/ca/9dca6f40-e750-4a2d-af92-62afb313ad85/rfp_gis_based_master_plan_-_amrut_20_manipur.pdf"

  const [activeLayer, setActiveLayer] = useState("DRAINAGE")

  const layers: Record<
    string,
    { title: string; subtitle: string; description: string; rfpClause: string }
  > = {
    DRAINAGE: {
      title: "Hydrological Contours & Drainage Outfalls",
      subtitle: "Mitigating monsoon waterlogging in low-lying agricultural depressions",
      description:
        "Field contour mapping identifies natural gravity discharge routes toward outfall canals. Essential to prevent construction across natural flood detention sinks.",
      rfpClause: "RFP Clause 4.3.4(b) - Topographic & Hydrological Analysis",
    },
    ROADS: {
      title: "Road Network Hierarchy & Right-of-Way (RoW)",
      subtitle: "Planned arterial corridors for school bus and emergency access",
      description:
        "Demarcates minimum carriageway widths and right-of-way reservations before uncoordinated building settlement creates permanent traffic bottlenecks.",
      rfpClause: "RFP Clause 4.3.4(c) - Circulation & Transport Network",
    },
    LAND_USE: {
      title: "Existing Land Use (ELU) & Cadastral Parcels",
      subtitle: "Georeferenced revenue village parcel overlays",
      description:
        "Satellite stereo imagery combined with ground-truthing to verify current residential, commercial, agricultural, and wetland boundaries.",
      rfpClause: "RFP Clause 4.3.2 - Base Map & ELU Formulation",
    },
    BOUNDARY: {
      title: "Municipal Extent & Contiguous Planning Zones",
      subtitle: "Delineating the preliminary ~70 sq. km planning scope",
      description:
        "Encompassing Mayang Imphal Municipal Council wards and peripheral contiguous habitations requiring coordinated civic sanitation and planning controls.",
      rfpClause: "RFP Clause 4.1 - Delineation of Planning Area",
    },
  }

  return (
    <div className="flex min-h-screen flex-col bg-background selection:bg-brand-blue selection:text-white">
      <SiteHeader />

      <main className="flex-1">
        {/* Page Hero */}
        <div className="bg-brand-navy text-white py-16 md:py-20 border-b border-border/20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7 flex flex-col gap-4">
                <Link
                  href="/"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-300 hover:text-white active:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-colors w-fit"
                >
                  <ArrowLeft className="size-3.5" /> Back to Overview
                </Link>

                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="border-brand-blue/40 bg-brand-blue/10 text-brand-blue text-xs font-medium">
                    AMRUT 2.0 Sub-Scheme
                  </Badge>
                  <span className="text-xs text-slate-300">Town Planning Department, Manipur</span>
                </div>

                <h1 className="font-heading text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
                  Mayang Imphal: Planning for the Future
                </h1>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  An authoritative civic analysis of the GIS-based Master Plan formulation for Mayang Imphal under the Atal Mission for Rejuvenation and Urban Transformation (AMRUT 2.0).
                </p>

                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <a
                    href={rfpUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-md bg-brand-blue px-4 py-2 text-xs sm:text-sm font-medium text-white hover:bg-brand-blue/90 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white disabled:opacity-50 transition-colors"
                  >
                    <span>Download Official RFP Document</span>
                    <ExternalLink className="size-3.5" />
                  </a>
                  <Link
                    href="/progress"
                    className="inline-flex items-center gap-1.5 text-xs text-slate-300 hover:text-white active:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white py-2 px-3 border border-white/20 rounded-md transition-colors"
                  >
                    <span>Track Municipal Works</span>
                    <ArrowRight className="size-3" />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5">
                <ImagePlaceholder
                  aspectRatio="video"
                  theme="forest"
                  icon={Map}
                  badge="AMRUT 2.0 Spatial Model"
                  title="GIS Cadastral Base Map"
                  subtitle="High-resolution satellite stereo imagery and ground control survey for Mayang Imphal town."
                  className="shadow-md border-white/20"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Core Statutory Parameters (Fact Check Grid) */}
        <section className="py-12 bg-brand-mist/40 dark:bg-muted/10 border-b border-border/60">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="rounded-lg border border-border/80 bg-card p-5 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-semibold text-brand-blue">
                    Statutory Horizon
                  </span>
                  <div className="font-heading text-3xl font-bold text-foreground mt-1 mb-2">
                    2045
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Explicitly specified in <strong>Clause 4.3.4(a)</strong> of the RFP. Unofficial public mentions of &ldquo;2046&rdquo; were unverified.
                  </p>
                </div>
                <div className="text-[11px] font-medium text-muted-foreground mt-3 pt-2 border-t border-border/40">
                  RFP Clause 4.3.4(a)
                </div>
              </div>

              <div className="rounded-lg border border-border/80 bg-card p-5 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-semibold text-brand-forest">
                    Preliminary Area
                  </span>
                  <div className="font-heading text-3xl font-bold text-foreground mt-1 mb-2">
                    ~70 sq. km
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Preliminary planning boundary encompassing Mayang Imphal Municipal Council and contiguous peripheral development nodes.
                  </p>
                </div>
                <div className="text-[11px] font-medium text-muted-foreground mt-3 pt-2 border-t border-border/40">
                  RFP Clause 4.1
                </div>
              </div>

              <div className="rounded-lg border border-border/80 bg-card p-5 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-semibold text-indigo-600 dark:text-indigo-400">
                    Lead Authority
                  </span>
                  <div className="font-heading text-xl font-bold text-foreground mt-1 mb-2">
                    Town Planning Dept
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Government of Manipur is the statutory commissioning agency under AMRUT 2.0. BETTER MAYANG IMPHAL provides civic analysis only.
                  </p>
                </div>
                <div className="text-[11px] font-medium text-muted-foreground mt-3 pt-2 border-t border-border/40">
                  State Directorate
                </div>
              </div>

              <div className="rounded-lg border border-border/80 bg-card p-5 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-semibold text-amber-600">
                    Workshop Milestone
                  </span>
                  <div className="font-heading text-xl font-bold text-foreground mt-1 mb-2">
                    Consultation
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    September 2026 workshop highlighted low-lying depression flood management and inter-ward connectivity as primary concerns.
                  </p>
                </div>
                <div className="text-[11px] font-medium text-muted-foreground mt-3 pt-2 border-t border-border/40">
                  Stakeholder Review
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive GIS Spatial Layers (Dropdown Menu Data Explorer) */}
        <section className="py-14 bg-background border-b border-border/60">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl border border-border/80 bg-card p-6 sm:p-8 shadow-xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-border/60">
                <div>
                  <h3 className="font-heading text-xl font-bold text-foreground mt-0.5">
                    Explore Master Plan Spatial Layers
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1">
                    Select a spatial thematic layer to inspect its planning function and statutory specifications.
                  </p>
                </div>

                <DropdownMenu>
                  <DropdownMenuTrigger
                    render={
                      <Button variant="outline" size="sm" className="h-9 gap-2 text-xs border-border bg-background active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary disabled:opacity-50">
                        <Layers className="size-3.5 text-brand-blue" />
                        <span>{layers[activeLayer]?.title.split("&")[0]}</span>
                        <ChevronDown className="size-3.5 opacity-60" />
                      </Button>
                    }
                  />
                  <DropdownMenuContent className="w-72 p-1 bg-popover border border-border/80 shadow-md rounded-lg">
                    <DropdownMenuLabel className="text-xs font-semibold text-muted-foreground">
                      Choose planning layer
                    </DropdownMenuLabel>
                    {Object.entries(layers).map(([key, item]) => (
                      <DropdownMenuItem
                        key={key}
                        onClick={() => setActiveLayer(key)}
                        className="flex items-center justify-between text-xs py-2 px-2.5 rounded cursor-pointer active:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
                      >
                        <span className="truncate">{item.title}</span>
                        {activeLayer === key && <Check className="size-3.5 text-brand-blue shrink-0" />}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              {/* Active Layer Detail Display */}
              <div className="pt-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 flex flex-col gap-3">
                  <Badge variant="outline" className="w-fit text-xs text-brand-forest border-brand-forest/30">
                    {layers[activeLayer]?.rfpClause}
                  </Badge>
                  <h4 className="font-heading text-2xl font-bold text-foreground">
                    {layers[activeLayer]?.title}
                  </h4>
                  <p className="text-xs font-semibold text-muted-foreground">
                    {layers[activeLayer]?.subtitle}
                  </p>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed pt-1">
                    {layers[activeLayer]?.description}
                  </p>
                </div>

                <div className="lg:col-span-5">
                  <ImagePlaceholder
                    aspectRatio="video"
                    theme="navy"
                    icon={activeLayer === "DRAINAGE" ? Droplets : Map}
                    badge={activeLayer}
                    title={layers[activeLayer]?.title}
                    subtitle={layers[activeLayer]?.rfpClause}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Master Plan Formulation Stages */}
        <section className="py-16 bg-brand-mist/40 dark:bg-muted/10 border-b border-border/60">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-12">
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mt-1">
                The Master Plan Formulation Process
              </h2>
              <p className="text-xs sm:text-sm text-muted-foreground mt-2 leading-relaxed">
                Formulating a legal master plan follows a rigorous statutory sequence under the Manipur Town and Country Planning framework:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="border-border/80 bg-card">
                <CardHeader className="pb-2">
                  <div className="text-xs font-semibold text-brand-blue">Stage 01</div>
                  <CardTitle className="font-heading text-base font-bold text-foreground">
                    GIS Base Map & Cadastral Overlay
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-xs text-muted-foreground leading-relaxed">
                  Procuring high-resolution stereo satellite imagery, conducting ground control point (GCP) surveys, and georeferencing revenue cadastral village maps onto an accurate spatial grid.
                </CardContent>
              </Card>

              <Card className="border-border/80 bg-card">
                <CardHeader className="pb-2">
                  <div className="text-xs font-semibold text-brand-forest">Stage 02</div>
                  <CardTitle className="font-heading text-base font-bold text-foreground">
                    Existing Land Use (ELU) Survey
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-xs text-muted-foreground leading-relaxed">
                  Field surveyors map residential, commercial, agricultural, and wetland plots. Waterlogging depressions and drainage outfall bottlenecks are cataloged.
                </CardContent>
              </Card>

              <Card className="border-border/80 bg-card">
                <CardHeader className="pb-2">
                  <div className="text-xs font-semibold text-indigo-600 dark:text-indigo-400">Stage 03</div>
                  <CardTitle className="font-heading text-base font-bold text-foreground">
                    Consultative Workshops
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-xs text-muted-foreground leading-relaxed">
                  Engaging municipal councilors, community leaders, women&apos;s groups, and business associations to record local priorities (conducted in September 2026).
                </CardContent>
              </Card>

              <Card className="border-border/80 bg-card">
                <CardHeader className="pb-2">
                  <div className="text-xs font-semibold text-amber-600">Stage 04</div>
                  <CardTitle className="font-heading text-base font-bold text-foreground">
                    Draft Master Plan & Zoning Regulations
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-xs text-muted-foreground leading-relaxed">
                  Defining proposed land use zones, road hierarchy reservations, environmental buffer zones, and development control regulations (DCR) for the 2045 horizon.
                </CardContent>
              </Card>

              <Card className="border-border/80 bg-card">
                <CardHeader className="pb-2">
                  <div className="text-xs font-semibold text-rose-600 dark:text-rose-400">Stage 05</div>
                  <CardTitle className="font-heading text-base font-bold text-foreground">
                    Public Objections & Hearing
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-xs text-muted-foreground leading-relaxed">
                  Statutory 60-day window during which residents, landowners, and civil society can inspect maps at the Municipal Office and submit written objections.
                </CardContent>
              </Card>

              <Card className="border-border/80 bg-card">
                <CardHeader className="pb-2">
                  <div className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">Stage 06</div>
                  <CardTitle className="font-heading text-base font-bold text-foreground">
                    Town Planning Board & Gazette Notification
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-xs text-muted-foreground leading-relaxed">
                  The Manipur Town & Country Planning Board reviews objections and accords formal approval. The plan becomes statutory law upon publication in the Manipur State Gazette.
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Municipal Jurisdiction vs State Departments Table */}
        <section className="py-16 bg-background border-b border-border/60">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-10">
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mt-1">
                Understanding Who Does What in Mayang Imphal
              </h2>
              <p className="text-xs sm:text-sm text-muted-foreground mt-2 leading-relaxed">
                Clear civic accountability prevents shifting responsibility. Below is the constitutional demarcation of powers across municipal, state, and legislative authorities:
              </p>
            </div>

            <div className="overflow-x-auto rounded-xl border border-border/80 bg-card shadow-xs">
              <table className="w-full text-left text-xs">
                <thead className="bg-muted/60 text-foreground font-semibold border-b border-border/80">
                  <tr>
                    <th className="p-4">Jurisdictional Body</th>
                    <th className="p-4">Key Responsibilities</th>
                    <th className="p-4">What They Do NOT Control</th>
                    <th className="p-4">Citizen Interface</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/60 text-muted-foreground">
                  <tr className="hover:bg-muted/20">
                    <td className="p-4 font-semibold text-foreground">
                      Mayang Imphal Municipal Council (MIMC)
                      <span className="block text-[11px] font-medium text-muted-foreground">Local Urban Body</span>
                    </td>
                    <td className="p-4">
                      Internal ward drains, daily market maintenance, sanitation & solid waste collection, street lighting, local trade licenses.
                    </td>
                    <td className="p-4">
                      State highway resurfacing, major river outfall dredging, statutory town master plan approval.
                    </td>
                    <td className="p-4">
                      Ward Councilors & Municipal Executive Officer.
                    </td>
                  </tr>

                  <tr className="hover:bg-muted/20">
                    <td className="p-4 font-semibold text-foreground">
                      Public Works Department (PWD)
                      <span className="block text-[11px] font-medium text-muted-foreground">State Department</span>
                    </td>
                    <td className="p-4">
                      Major district roads (MDRs), inter-constituency bridge construction, bituminous surfacing of arterial corridors.
                    </td>
                    <td className="p-4">
                      Internal ward alley drainage, municipal property tax collection.
                    </td>
                    <td className="p-4">
                      Executive Engineer, Division II (Imphal West).
                    </td>
                  </tr>

                  <tr className="hover:bg-muted/20">
                    <td className="p-4 font-semibold text-foreground">
                      Water Resources Department (WRD)
                      <span className="block text-[11px] font-medium text-muted-foreground">State Department</span>
                    </td>
                    <td className="p-4">
                      Primary outfall canals, river embankment strengthening, flood control dykes, and major culvert installations.
                    </td>
                    <td className="p-4">
                      Domestic water supply piping (PHED responsibility), municipal waste sorting.
                    </td>
                    <td className="p-4">
                      Chief Engineer, WRD Manipur.
                    </td>
                  </tr>

                  <tr className="hover:bg-muted/20">
                    <td className="p-4 font-semibold text-foreground">
                      Town Planning Department
                      <span className="block text-[11px] font-medium text-muted-foreground">State Directorate</span>
                    </td>
                    <td className="p-4">
                      Formulation of GIS Master Plan 2045, statutory zoning guidelines, regional spatial development coordination.
                    </td>
                    <td className="p-4">
                      Direct execution of civil construction tenders; daily ward sanitation.
                    </td>
                    <td className="p-4">
                      Chief Town Planner, North A.O.C, Imphal.
                    </td>
                  </tr>

                  <tr className="hover:bg-muted/20">
                    <td className="p-4 font-semibold text-foreground">
                      MLA / Constituency Office
                      <span className="block text-[11px] font-medium text-muted-foreground">Legislative Representation</span>
                    </td>
                    <td className="p-4">
                      Legislative advocacy in the Assembly, proposing development schemes, monitoring department execution, MLA LAD fund allocation.
                    </td>
                    <td className="p-4">
                      Administrative sanction or tender award for state departments; judicial land boundary dispute resolution.
                    </td>
                    <td className="p-4">
                      Constituency representations and public assembly forums.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Primary Source Document Callout */}
        <section className="py-14 bg-brand-mist/40 dark:bg-muted/10">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-xl border border-brand-blue/30 bg-brand-blue/5 p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="flex flex-col gap-2">
                <h3 className="font-heading text-lg font-bold text-foreground flex items-center gap-2">
                  <FileText className="size-5 text-brand-blue shrink-0" />
                  <span>Official Document Citation: GIS Master Plan RFP</span>
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed max-w-2xl">
                  RFP for Formulation of GIS Based Master Plan for Class-III Towns of Manipur under AMRUT 2.0 published by Town Planning Department, Government of Manipur (March 2024). Verifies Mayang Imphal as one of five statutory Class-III towns, establishing the 2045 horizon year and ~70 sq. km planning scope.
                </p>
              </div>

              <a
                href={rfpUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 items-center justify-center gap-1.5 rounded-md bg-brand-navy hover:bg-brand-navy/90 text-white dark:bg-brand-blue dark:hover:bg-brand-blue/90 px-5 py-3 text-xs font-semibold shadow-xs active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary disabled:opacity-50 transition-colors"
              >
                <span>Read Full RFP PDF</span>
                <ExternalLink className="size-4" />
              </a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
