export type ProjectStage =
  | "PROPOSED"
  | "UNDER_REVIEW"
  | "ADMINISTRATIVE_APPROVAL"
  | "FINANCIAL_SANCTION"
  | "TENDERING"
  | "IMPLEMENTATION"
  | "COMPLETED"
  | "CANCELLED"

export type OperationalCondition =
  | "NORMAL"
  | "DELAYED"
  | "ON_HOLD"
  | "UNDER_VERIFICATION"
  | "DISPUTED"

export interface DocumentSource {
  id: string
  title: string
  issuingBody: string
  documentNumber?: string
  publicationDate: string
  retrievalDate: string
  sourceUrl: string
  isPrimaryEvidence: boolean
}

export interface StatusHistoryEntry {
  stage: ProjectStage
  condition: OperationalCondition
  effectiveDate: string
  recordedTimestamp: string
  editorRole: string
  rationale: string
  sourceDocumentTitle?: string
}

export interface ResponsibleAuthority {
  name: string
  shortCode: string
  jurisdictionTier: "MUNICIPAL" | "STATE_DEPARTMENT" | "CONSTITUENCY_OFFICE" | "CENTRAL_GOVERNMENT"
  officialWebsite?: string
  rtiContact?: string
}

export interface ProjectRecord {
  id: string
  slug: string
  title: string
  recordType: "OFFICIAL_PROJECT" | "PROPOSED_INITIATIVE"
  category: "WATER_AND_DRAINAGE" | "ROAD_CONNECTIVITY" | "MUNICIPAL_SERVICES" | "EDUCATION_STEM" | "ENTERPRISE_LIVELIHOODS"
  locality: string
  wardReference?: string
  problemStatement: string
  responsibleAuthority: ResponsibleAuthority
  sources: DocumentSource[]
  currentStage: ProjectStage
  currentCondition: OperationalCondition
  stageVerificationDate: string
  targetCompletionDate?: string
  delayExplanation?: string
  budgetSanctionedLakhs?: number
  fundingScheme?: string
  statusHistory: StatusHistoryEntry[]
}
