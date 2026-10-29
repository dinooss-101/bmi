import React from "react"
import { ImagePlaceholder } from "@/components/ui/image-placeholder"
import { Calendar, Clock, MapPin } from "lucide-react"

export function PoliticianCalendar() {
  const events = [
    {
      date: "Saturday, Nov 07, 2026",
      time: "08:30 AM – 12:30 PM",
      location: "Constituency Public Office, Central Mayang Imphal",
      title: "Weekly Open Door Grievance Redressal Session",
      summary: "Direct one-on-one constituent meetings without party intermediaries or administrative gatekeepers.",
      category: "Constituent Service",
    },
    {
      date: "Tuesday, Nov 10, 2026",
      time: "02:00 PM – 05:00 PM",
      location: "Chabung Company Community Hall, Ward 2",
      title: "Ward 2 Drainage & Master Plan Town Hall",
      summary: "Presenting the preliminary AMRUT 2.0 GIS contour findings and receiving citizen feedback on culvert blockage points.",
      category: "Public Consultation",
    },
    {
      date: "Friday, Nov 13, 2026",
      time: "10:00 AM – 01:00 PM",
      location: "Bengoon Weavers Cooperative Centre, Ward 5",
      title: "Women Entrepreneurs & Handloom Subsidies Assembly",
      summary: "Facilitating direct state portal applications and financial literacy for registered SHG member weavers.",
      category: "Livelihoods Desk",
    },
  ]

  return (
    <section className="border-b border-border bg-background py-16 md:py-24" id="calendar">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 items-start">
          {/* Left Column: Events Schedule */}
          <div className="lg:col-span-7">
            <span className="text-xs font-semibold text-secondary block mb-2">
              Public access &amp; open doors
            </span>
            <h2 className="font-headline text-3xl sm:text-4xl font-semibold text-foreground tracking-tight">
              Constituency calendar: open sessions &amp; ward town halls.
            </h2>
            <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed mb-8">
              A public representative must be accessible in person, not isolated behind security. Join our weekly public assemblies across Mayang Imphal.
            </p>

            <div className="space-y-4">
              {events.map((ev) => (
                <div
                  key={ev.title}
                  className="border border-border bg-card p-6 transition-colors hover:border-border/80"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2 text-xs">
                    <span className="font-mono text-secondary font-medium">{ev.category}</span>
                    <span className="flex items-center gap-1 text-muted-foreground">
                      <Clock className="size-3 text-secondary" />
                      <span>{ev.time}</span>
                    </span>
                  </div>

                  <h3 className="font-headline text-lg font-semibold text-foreground mb-2">
                    {ev.title}
                  </h3>

                  <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                    {ev.summary}
                  </p>

                  <div className="flex flex-wrap items-center gap-4 border-t border-border/40 pt-3 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1 text-foreground font-medium">
                      <Calendar className="size-3.5 text-secondary" />
                      <span>{ev.date}</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="size-3.5 text-secondary" />
                      <span>{ev.location}</span>
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: High Quality Public Assembly Photo Placeholder */}
          <div className="lg:col-span-5">
            <ImagePlaceholder
              aspectRatio="4/5"
              category="Civic Assembly"
              location="Mayang Imphal Central Hall"
              title="Constituent Town Hall: Candidate addressing packed ward assembly with interactive Q&A"
              hint="1200 × 1500 · 4:5 Documentary"
            />
            <div className="mt-4 border border-border bg-card p-4">
              <span className="text-xs font-semibold text-foreground block mb-1">
                Need an emergency grievance hearing?
              </span>
              <p className="text-xs text-muted-foreground leading-relaxed">
                If your family is affected by urgent water inundation or public utility breakdown, submit directly to our priority desk.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
