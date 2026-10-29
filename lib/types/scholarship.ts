export type ApplicationCycle = "FRESH" | "RENEWAL" | "FRESH_AND_RENEWAL"

export type ScholarshipStatus = "OPEN" | "UPCOMING" | "CLOSED" | "VERIFICATION_REQUIRED"

export type ScholarshipLevel = "HIGHER_SECONDARY" | "UNDERGRADUATE" | "POSTGRADUATE" | "RESEARCH_FELLOWSHIP"

export interface ScholarshipScheme {
  id: string
  slug: string
  name: string
  officialSponsor: string
  academicYear: string // e.g. "2026–27"
  applicationCycle: ApplicationCycle
  level: ScholarshipLevel
  levels?: ScholarshipLevel[]
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
