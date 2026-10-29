import React from "react"
import { Shield, FileText, Lock, Vote, Link as LinkIcon } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="bg-primary text-slate-300 border-t border-white/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-12 border-b border-white/10">
          {/* Col 1 */}
          <div>
            <div className="flex items-center gap-2 text-white font-headline text-lg font-bold mb-3">
              <Shield className="size-5 text-secondary-container" />
              <span>Responsible operator</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              BETTER MAYANG IMPHAL is an independent civic-tech initiative operated for public welfare in the Mayang Imphal Municipal Area (Manipur). Dedicated to verified data and youth STEM education.
            </p>
          </div>

          {/* Col 2 */}
          <div>
            <div className="flex items-center gap-2 text-white font-headline text-lg font-bold mb-3">
              <FileText className="size-5 text-secondary-container" />
              <span>Primary gazette sources</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Planning records link strictly to Manipur Town Planning Department notices, AMRUT 2.0 Class-III town RFPs, and National Scholarship Portals without partisan editorializing.
            </p>
          </div>

          {/* Col 3 */}
          <div>
            <div className="flex items-center gap-2 text-white font-headline text-lg font-bold mb-3">
              <Lock className="size-5 text-secondary-container" />
              <span>DPDP Act 2025 compliance</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Engineered under privacy-by-design principles. No intrusive trackers, no harvesting of Aadhaar or demographic identity documents, and transparent client-side preview execution.
            </p>
          </div>

          {/* Col 4 */}
          <div>
            <div className="flex items-center gap-2 text-white font-headline text-lg font-bold mb-3">
              <Vote className="size-5 text-secondary-container" />
              <span>Election compliance note</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              All prospective developmental aspirations comply with the Election Commission of India (ECI) media guidelines and statutory model codes. Independent public interest platform.
            </p>
          </div>
        </div>

        {/* Verified Statutory Links */}
        <div className="py-8 border-b border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <span className="text-xs font-semibold text-white block">
              Official government portals referenced
            </span>
            <span className="text-xs text-slate-400">
              Direct statutory gateways referenced in platform ledgers
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-white/10 hover:bg-white/15 active:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white text-slate-200 text-xs transition-colors"
              href="https://townplanning.mn.gov.in"
              rel="noopener noreferrer"
              target="_blank"
            >
              <LinkIcon className="size-3.5" />
              <span>Manipur Town Planning</span>
            </a>
            <a
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-white/10 hover:bg-white/15 active:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white text-slate-200 text-xs transition-colors"
              href="https://scholarships.gov.in"
              rel="noopener noreferrer"
              target="_blank"
            >
              <LinkIcon className="size-3.5" />
              <span>National Scholarship Portal (NSP)</span>
            </a>
            <a
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-white/10 hover:bg-white/15 active:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white text-slate-200 text-xs transition-colors"
              href="https://lgdirectory.gov.in"
              rel="noopener noreferrer"
              target="_blank"
            >
              <LinkIcon className="size-3.5" />
              <span>Local Government Directory (LGD)</span>
            </a>
          </div>
        </div>

        {/* Legal Bottom */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © 2026 BETTER MAYANG IMPHAL · Civic Information &amp; Opportunity Platform. Public Preview.
          </div>
          <div className="flex items-center gap-4">
            <span className="text-slate-400">Mayang Imphal, Manipur 795132</span>
            <a
              className="text-secondary-container hover:underline active:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              href="#hero"
            >
              Back to top
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
