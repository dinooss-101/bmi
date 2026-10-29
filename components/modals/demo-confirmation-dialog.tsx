"use client"

import React from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Terminal, ShieldCheck } from "lucide-react"

interface DemoConfirmationDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  summaryData?: {
    category: string
    area: string
    submissionMode: string
  }
}

export function DemoConfirmationDialog({
  open,
  onOpenChange,
  summaryData,
}: DemoConfirmationDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md w-full p-6 sm:p-8 rounded-xl bg-white border border-outline-variant/30 shadow-md flex flex-col gap-4">
        <div className="w-12 h-12 rounded-full bg-blue-50 text-secondary flex items-center justify-center">
          <Terminal className="size-6" />
        </div>

        <DialogHeader className="text-left gap-1">
          <DialogTitle className="font-headline text-xl font-bold text-primary">
            Prototype Execution Completed
          </DialogTitle>
          <DialogDescription className="text-xs sm:text-sm text-on-surface-variant leading-relaxed pt-1">
            In alignment with our civic honesty pledge, <strong className="text-primary font-semibold">no simulated receipt number or false confirmation</strong> has been created. Your input was handled strictly inside browser memory because Phase 1 operates without remote databases.
          </DialogDescription>
        </DialogHeader>

        {summaryData && (
          <div className="rounded-lg bg-surface-container-low border border-outline-variant/30 p-3.5 text-xs text-on-surface-variant flex flex-col gap-1">
            <span className="font-semibold text-primary text-[11px]">
              Local session memory record:
            </span>
            <div>Category: <span className="font-semibold text-primary">{summaryData.category}</span></div>
            <div>Reference Area: <span className="font-semibold text-primary">{summaryData.area}</span></div>
            <div>Mode: <span className="font-semibold text-primary">{summaryData.submissionMode}</span></div>
          </div>
        )}

        <div className="flex items-center gap-2 text-[11px] text-on-surface-variant">
          <ShieldCheck className="size-4 text-emerald-600 shrink-0" />
          <span>DPDP Act 2025 aligned · Zero server transmission</span>
        </div>

        <DialogFooter className="pt-2 flex justify-end">
          <Button
            size="sm"
            onClick={() => onOpenChange(false)}
            className="bg-primary hover:bg-secondary text-white text-xs font-semibold active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary disabled:opacity-50"
          >
            Dismiss Notice
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
