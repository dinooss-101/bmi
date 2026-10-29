"use client"

import React from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface AuditLedgerDialogProps {
  children?: React.ReactElement
  open?: boolean
  onOpenChange?: (open: boolean) => void
}

export function AuditLedgerDialog({
  children,
  open,
  onOpenChange,
}: AuditLedgerDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      {children && <DialogTrigger render={children} />}
      <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto bg-white p-6 sm:p-8 rounded-none border border-outline-variant/40 shadow-none">
        <DialogHeader className="pb-3 border-b border-outline-variant/30 text-left">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-semibold text-secondary">
              Append-only public ledger
            </span>
            <Badge variant="outline" className="text-[11px] border-emerald-500/30 text-emerald-700 bg-emerald-50 rounded-none">
              SHA-256 Provenance
            </Badge>
          </div>
          <DialogTitle className="font-headline text-xl font-bold text-primary">
            Tamper-Evident Status Change Log
          </DialogTitle>
          <DialogDescription className="text-xs text-on-surface-variant">
            Chronological audit trail of verified municipal milestones and operational field conditions.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-3 py-4 text-xs">
          {/* Log Entry 1 */}
          <div className="p-4 rounded-none bg-surface-container-low border-l-4 border-emerald-600">
            <div className="flex items-center justify-between font-bold text-primary mb-1">
              <span>Class-III GIS Master Plan Formulation</span>
              <span className="text-on-surface-variant font-normal">2026-10-28 10:15 IST</span>
            </div>
            <p className="text-on-surface-variant">
              Stage verified: <strong className="text-primary font-semibold">Procurement / RFP</strong>. Cryptographic hash matched against Manipur Town Planning portal.
            </p>
            <span className="text-[11px] text-slate-500 font-mono mt-1 block">
              sha256: 4f8b9e87a2c091fbc5e1823a07d64380e5572c21903ba86b97a2f1…2a71c0
            </span>
          </div>

          {/* Log Entry 2 */}
          <div className="p-4 rounded-none bg-surface-container-low border-l-4 border-secondary">
            <div className="flex items-center justify-between font-bold text-primary mb-1">
              <span>Mayang Imphal Drainage Feasibility</span>
              <span className="text-on-surface-variant font-normal">2026-10-25 14:40 IST</span>
            </div>
            <p className="text-on-surface-variant">
              Operational Condition: <strong className="text-secondary font-semibold">Active</strong>. Drone elevation contour capture initiated along Ward 2 &amp; 3 culverts.
            </p>
            <span className="text-[11px] text-slate-500 mt-1 block">
              Editor: Technical Officer #MN-ENG-491 · Provenance Verified
            </span>
          </div>

          {/* Log Entry 3 */}
          <div className="p-4 rounded-none bg-surface-container-low border-l-4 border-amber-600">
            <div className="flex items-center justify-between font-bold text-primary mb-1">
              <span>Bazar Market Solar Streetlighting</span>
              <span className="text-on-surface-variant font-normal">2026-10-20 16:30 IST</span>
            </div>
            <p className="text-on-surface-variant">
              Operational Condition logged: <strong className="text-amber-800 font-semibold">Pending Review</strong> due to pre-bid technical clarification request.
            </p>
            <span className="text-[11px] text-slate-500 mt-1 block">
              Source: Municipal Tender Notice #MI-2026/18
            </span>
          </div>
        </div>

        <DialogFooter className="pt-2 border-t border-outline-variant/30 flex justify-end">
          <Button
            size="sm"
            variant="outline"
            onClick={() => onOpenChange?.(false)}
            className="text-xs font-semibold active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary disabled:opacity-50"
          >
            Close Ledger
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
