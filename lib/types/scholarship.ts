export type ApplicationCycle = "FRESH" | "RENEWAL" | "FRESH_AND_RENEWAL"

export type ScholarshipStatus = "OPEN" | "UPCOMING" | "CLOSED" | "VERIFICATION_REQUIRED"

export interface ScholarshipScheme {
  id: string
  slug: string
  name: string
  officialSponsor: string
  academicYear: string // e.g. "2026–27"
  applicationCycle: ApplicationCycle
  level: "HIGHER_SECONDARY" | "UNDERGRADUATE" | "POSTGRADUATE" | "RESEARCH_FELLOWSHIP"
  eligibilitySummary: string
  keyExclusions?: string
  studentDeadline?: string // e.g. "2026-10-31"
  institutionVerificationDeadline?: string
  officialApplicationUrl: string
  lastVerifiedAt: string
  nextReviewDue: string
  currentStatus: ScholarshipStatus
  targetGroup: string
}
